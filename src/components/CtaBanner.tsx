import React from 'react';
import { Sparkles, ArrowRight, MessageSquare, ShieldCheck } from 'lucide-react';
import { WHATSAPP_LINK } from '../data/content';

interface CtaBannerProps {
  onOpenTrial: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenTrial }) => {
  return (
    <section id="contato" className="py-16 sm:py-20 bg-[#0d1b2e] text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-400 text-xs font-semibold mb-4">
          <Sparkles className="size-3.5 text-emerald-300" />
          <span>7 Dias de Teste Gratuito</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
          Pronto para organizar sua revenda de gás?
        </h2>

        <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
          Experimente o LMA Gás por 7 dias na prática da sua revenda. Sem cartão de crédito e com ativação rápida.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <button
            onClick={onOpenTrial}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white font-extrabold text-sm sm:text-base shadow-sm transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <Sparkles className="size-4 text-emerald-200" />
            Testar 7 Dias Grátis
            <ArrowRight className="size-4" />
          </button>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-4 rounded-xl border border-slate-600 hover:border-slate-400 bg-white/5 hover:bg-white/10 text-slate-200 font-bold text-sm sm:text-base transition-colors flex items-center justify-center gap-2"
          >
            <MessageSquare className="size-4 text-emerald-400" />
            Falar no WhatsApp
          </a>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
          <span className="flex items-center gap-1">
            <ShieldCheck className="size-4 text-emerald-400" /> Sem cartão de crédito
          </span>
          <span>•</span>
          <span>Sem fidelidade</span>
          <span>•</span>
          <span>Suporte em português</span>
        </div>
      </div>
    </section>
  );
};