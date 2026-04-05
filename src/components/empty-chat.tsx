import { Bot } from 'lucide-react';

export function EmptyChat() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center space-y-6 animate-in fade-in zoom-in duration-500">
      <div className="relative">
        <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
        <div className="relative w-24 h-24 rounded-3xl bg-secondary flex items-center justify-center border-2 border-primary/20">
          <Bot className="w-12 h-12 text-primary" />
        </div>
      </div>
      <div className="space-y-2">
        <h2 className="text-3xl font-bold font-headline tracking-tight">چۆن دەتوانم یارمەتیت بدەم؟</h2>
        <p className="text-muted-foreground max-w-sm mx-auto">
          من Goran AI ـم، وەڵامی پرسیارەکانت دەدەمەوە بە زمانی کوردی.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-3 w-full max-w-xs">
        <div className="p-3 bg-secondary/50 rounded-xl border border-border text-sm text-muted-foreground hover:bg-secondary transition-colors cursor-pointer">
          "سڵاو، دەتوانیت شیعرێکم بۆ بنووسیت؟"
        </div>
        <div className="p-3 bg-secondary/50 rounded-xl border border-border text-sm text-muted-foreground hover:bg-secondary transition-colors cursor-pointer">
          "ئەمڕۆ کەشوهەوا چۆنە؟"
        </div>
      </div>
    </div>
  );
}
