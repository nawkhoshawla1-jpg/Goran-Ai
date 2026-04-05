import { Message } from './chat-container';
import { cn } from '@/lib/utils';
import { Bot, User } from 'lucide-react';

interface ChatBubbleProps {
  message: Message;
}

export function ChatBubble({ message }: ChatBubbleProps) {
  const isUser = message.role === 'user';

  return (
    <div
      className={cn(
        "flex w-full gap-3 animate-in fade-in slide-in-from-bottom-2 duration-300",
        isUser ? "flex-row" : "flex-row-reverse"
      )}
    >
      <div
        className={cn(
          "flex-1 flex flex-col gap-1",
          isUser ? "items-start" : "items-end"
        )}
      >
        <div
          className={cn(
            "max-w-[85%] px-4 py-3 shadow-sm",
            isUser
              ? "bg-primary text-primary-foreground rounded-2xl rounded-tr-none"
              : "bg-secondary text-foreground rounded-2xl rounded-tl-none"
          )}
        >
          <p className="text-sm leading-relaxed whitespace-pre-wrap text-right">
            {message.content}
          </p>
        </div>
        <span className="text-[10px] text-muted-foreground px-2">
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>

      <div
        className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center shrink-0 border",
          isUser ? "bg-primary/10 border-primary/20" : "bg-accent/10 border-accent/20"
        )}
      >
        {isUser ? (
          <User className="w-4 h-4 text-primary" />
        ) : (
          <Bot className="w-4 h-4 text-accent" />
        )}
      </div>
    </div>
  );
}
