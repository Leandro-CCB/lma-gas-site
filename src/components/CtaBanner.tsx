import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Flame, PhoneCall } from 'lucide-react';

interface CtaBannerProps {
  onOpenTrial: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenTrial }) => {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-gas-950 via-gas-900 to-gas-950">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-gradient-to-r from-flame-600/20 via-amber-600/20 to-cyan-600/20 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gas-900/90 border border-flame-500/30 text-flame-300 text-xs font-semibold mb-6 shadow-glow-orange">
          <Flame className="size-3.5 fill-amber-400 text-amber-400" />
          <span>7 Dias Grátis • Sem Compromisso</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          Pronto para modernizar sua revenda e{' '}
          <span className="text-gradient-flame">aumentar seu lucro hoje</span>?
        </h2>

        <p className="mt-5 text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Junte-se a centenas de revendedores em todo o Brasil que eliminaram o extravio de vasilhames, aceleraram entregas e pararam de pagar comissões absurdas.
        </p>

        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenTrial}
            className="w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 rounded-2xl bg-gradient-to-r from-flame-600 via-flame-500 to-amber-500 hover:from-flame-500 hover:to-amber-400 text-white font-black text-sm sm:text-base shadow-glow-orange cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3"
          >
            <Sparkles className="size-5 text-amber-200" />
            CRIAR CONTA &amp; TESTAR 7 DIAS GRÁTIS
            <ArrowRight className="size-5" />
          </button>

          <a
            href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20come%C3%A7ar%20o%20teste%20gr%C3%A1tis%20do%20LMA%20G%C3%A1s%20agora."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-4 sm:py-5 rounded-2xl border border-slate-700 hover:border-emerald-500 bg-gas-900/90 text-slate-200 hover:text-emerald-300 font-bold text-sm sm:text-base transition-colors flex items-center justify-center gap-2"
          >
            <PhoneCall className="size-4 text-emerald-400" />
            Falar com Especialista no WhatsApp
          </a>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="size-4 text-emerald-400" /> Sem cartão de crédito
          </span>
          <span>•</span>
          <span>Ativação em 15 minutos</span>
          <span>•</span>
          <span>Suporte humanizado em tempo real</span>
        </div>
      </div>
    </section>
  );
};