"use client";

import { useState, FormEvent, KeyboardEvent } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export function ChatInput({ onSend, disabled }: ChatInputProps) {
  const [value, setValue] = useState('');

  const handleSubmit = (e?: FormEvent) => {
    e?.preventDefault();
    if (value.trim() && !disabled) {
      onSend(value);
      setValue('');
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      handleSubmit();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 max-w-3xl mx-auto w-full">
      <div className="relative flex-1">
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="نامەیەک بنووسە..."
          className="pr-4 pl-4 py-6 bg-secondary border-none focus-visible:ring-1 focus-visible:ring-primary rounded-2xl text-right placeholder:text-muted-foreground/50"
          disabled={disabled}
          dir="rtl"
        />
      </div>
      <Button
        type="submit"
        size="icon"
        disabled={!value.trim() || disabled}
        className="h-[52px] w-[52px] rounded-2xl bg-primary hover:bg-primary/90 transition-all active:scale-95 shrink-0"
      >
        <Send className="w-5 h-5 -rotate-90" />
      </Button>
    </form>
  );
}
