"use client";

import { useState, useRef, useEffect } from 'react';
import { sendKurdishMessageAndReceiveResponse } from '@/ai/flows/send-kurdish-message-and-receive-response-flow';
import { ChatBubble } from './chat-bubble';
import { ChatInput } from './chat-input';
import { EmptyChat } from './empty-chat';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Progress } from '@/components/ui/progress';

export type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
};

export function ChatContainer() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollRef.current) {
      const scrollContainer = scrollRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: Math.random().toString(36).substring(7),
      role: 'user',
      content,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await sendKurdishMessageAndReceiveResponse({ kurdishMessage: content });
      
      const aiMessage: Message = {
        id: Math.random().toString(36).substring(7),
        role: 'assistant',
        content: response.aiResponse,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: Math.random().toString(36).substring(7),
        role: 'assistant',
        content: "ببورە، هەڵەیەک ڕوویدا لە پەیوەندی کردن بە سێرڤەر. تکایە دووبارە هەوڵ بدەرەوە.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col relative overflow-hidden">
      <ScrollArea className="flex-1 px-4 py-6" ref={scrollRef}>
        {messages.length === 0 ? (
          <EmptyChat />
        ) : (
          <div className="space-y-6 max-w-3xl mx-auto">
            {messages.map((message) => (
              <ChatBubble key={message.id} message={message} />
            ))}
          </div>
        )}
      </ScrollArea>
      
      <div className="absolute bottom-0 left-0 right-0 h-1 z-20 pointer-events-none">
        {isLoading && (
          <Progress value={undefined} className="h-full rounded-none bg-transparent" />
        )}
      </div>

      <div className="p-4 bg-background/80 backdrop-blur-sm">
        <ChatInput onSend={handleSendMessage} disabled={isLoading} />
      </div>
    </div>
  );
}
