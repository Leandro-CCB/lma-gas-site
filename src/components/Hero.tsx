import React from 'react';
import { ArrowRight, CheckCircle2, Play, Sparkles, Package, Zap, Users } from 'lucide-react';
import { HERO_DATA } from '../data/content';

interface HeroProps {
  onOpenTrial: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTrial }) => {
  const scrollToDemo = () => {
    document.getElementById('demonstracao')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative pt-10 pb-16 sm:pt-14 sm:pb-20 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Lado Esquerdo: Conteúdo Comercial Objetivo */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Tag / Badge Oficial */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold tracking-wide uppercase">
              <Sparkles className="size-3.5 text-emerald-600" />
              <span>{HERO_DATA.badge}</span>
            </div>

            {/* Headline em 3 Linhas Conforme Referência */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0d1b2e] tracking-tight leading-[1.15]">
              Sua revenda de gás <br />
              <span className="text-emerald-700">mais organizada,</span> <br />
              do pedido à entrega.
            </h1>

            {/* Subtítulo Claro e Direto */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl font-normal leading-relaxed">
              {HERO_DATA.description}
            </p>

            {/* Botões de Ação */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={onOpenTrial}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md transition-all cursor-pointer group"
              >
                <span>{HERO_DATA.ctaPrimary}</span>
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={scrollToDemo}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-bold text-sm shadow-xs transition-all cursor-pointer"
              >
                <Play className="size-4 text-emerald-700 fill-emerald-700" />
                <span>{HERO_DATA.ctaSecondary}</span>
              </button>
            </div>

            {/* 3 Selos de Confiança */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-600 font-semibold border-t border-slate-100">
              {HERO_DATA.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Lado Direito: Ilustração de Entregador Deixando o Gás para a Dona de Casa */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Moldura da Ilustração com Fundo Suave */}
              <div className="relative rounded-3xl bg-gradient-to-b from-emerald-50/60 via-slate-50 to-white p-4 border border-slate-200/80 shadow-md overflow-hidden">
                <img
                  src="/images/hero-entrega.svg"
                  alt="Entregador uniformizado deixando o botijão de gás para a cliente na porta"
                  className="w-full h-auto object-contain max-h-[380px] drop-shadow-sm"
                />

                {/* Badges Flutuantes Conforme Referência */}
                <div className="mt-3 grid grid-cols-3 gap-2 pt-2 border-t border-slate-200/60">
                  <div className="bg-white p-2 rounded-xl border border-slate-200 text-center shadow-xs">
                    <Package className="size-4 text-emerald-600 mx-auto mb-1" />
                    <span className="block text-[11px] font-bold text-[#0d1b2e]">Mais Controle</span>
                    <span className="block text-[9px] text-slate-500">Estoque em dia</span>
                  </div>

                  <div className="bg-white p-2 rounded-xl border border-slate-200 text-center shadow-xs">
                    <Zap className="size-4 text-blue-600 mx-auto mb-1" />
                    <span className="block text-[11px] font-bold text-[#0d1b2e]">Mais Agilidade</span>
                    <span className="block text-[9px] text-slate-500">Rotas rápidas</span>
                  </div>

                  <div className="bg-white p-2 rounded-xl border border-slate-200 text-center shadow-xs">
                    <Users className="size-4 text-emerald-600 mx-auto mb-1" />
                    <span className="block text-[11px] font-bold text-[#0d1b2e]">Clientes Fiéis</span>
                    <span className="block text-[9px] text-slate-500">Sem atrasos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};