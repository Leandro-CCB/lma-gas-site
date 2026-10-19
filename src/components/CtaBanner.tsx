import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, PhoneCall } from 'lucide-react';

interface CtaBannerProps {
  onOpenTrial: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenTrial }) => {
  return (
    <section className="py-16 sm:py-20 bg-[#101f34] text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-400 text-xs font-semibold mb-5">
          <Sparkles className="size-3.5 text-emerald-300" />
          <span>7 Dias de Teste Gratuito Sem Cartão</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          Modernize sua revenda de gás com o{' '}
          <span className="text-emerald-400">LMA GÁS</span>
        </h2>

        <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Atenda pedidos em segundos, acompanhe seus motoboys pelo GPS, receba pedidos online sem taxas e resgate clientes inativos pelo WhatsApp.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenTrial}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white font-black text-sm sm:text-base shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2.5"
          >
            <Sparkles className="size-5 text-emerald-200" />
            CRIAR CONTA &amp; TESTAR 7 DIAS GRÁTIS
            <ArrowRight className="size-5" />
          </button>

          <a
            href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20come%C3%A7ar%20o%20teste%20gr%C3%A1tis%20do%20LMA%20G%C3%A1s%20agora."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-4 rounded-xl border border-slate-600 hover:border-slate-400 bg-white/5 hover:bg-white/10 text-slate-200 font-bold text-sm sm:text-base transition-colors flex items-center justify-center gap-2"
          >
            <PhoneCall className="size-4 text-emerald-400" />
            Falar com Especialista
          </a>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
          <span className="flex items-center gap-1">
            <ShieldCheck className="size-4 text-emerald-400" /> Sem taxa de adesão
          </span>
          <span>•</span>
          <span>Sem cartão de crédito</span>
          <span>•</span>
          <span>Suporte dedicado</span>
        </div>
      </div>
    </section>
  );
};