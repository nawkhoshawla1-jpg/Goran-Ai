import { ChatContainer } from '@/components/chat-container';
import { Bot, Terminal as TerminalIcon } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Home() {
  return (
    <main className="flex flex-col h-screen max-w-4xl mx-auto overflow-hidden">
      <header className="flex items-center justify-between p-4 border-b bg-background/50 backdrop-blur-md sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
            <Bot className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="font-headline font-bold text-xl tracking-tight">Goran AI</h1>
            <p className="text-[10px] text-muted-foreground uppercase tracking-wider">زیرەکی دەستکردی کوردی</p>
          </div>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <button className="p-2 rounded-lg hover:bg-secondary transition-colors" title="فەرمانەکانی تێرمیناڵ">
              <TerminalIcon className="w-5 h-5 text-muted-foreground" />
            </button>
          </DialogTrigger>
          <DialogContent className="bg-slate-950 text-slate-50 border-slate-800">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <TerminalIcon className="w-5 h-5" />
                فەرمانەکانی پڕۆژە
              </DialogTitle>
              <DialogDescription className="text-slate-400">
                فرمانەکانی گەشەپێدان لە تێرمیناڵدا
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 font-mono text-xs">
              <div className="bg-black p-3 rounded-md border border-slate-800">
                <p className="text-green-400"># کارپێکردنی ئەپەکە بۆ گەشەپێدان</p>
                <p>npm run dev</p>
              </div>
              <div className="bg-black p-3 rounded-md border border-slate-800">
                <p className="text-green-400"># کارپێکردنی Genkit UI</p>
                <p>npm run genkit:dev</p>
              </div>
              <div className="bg-black p-3 rounded-md border border-slate-800">
                <p className="text-green-400"># دروستکردنی فایلی کۆتایی (Build)</p>
                <p>npm run build</p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </header>

      <ChatContainer />

      <footer className="p-3 text-center border-t bg-background/30">
        <p className="text-[10px] text-muted-foreground">
          Powered by Gemini AI • Goran AI v1.0
        </p>
      </footer>
    </main>
  );
}