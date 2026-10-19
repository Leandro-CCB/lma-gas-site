import React, { useState } from 'react';
import { PLANS_DATA } from '../data/content';
import { Check, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface PricingSectionProps {
  onOpenTrial: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenTrial }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly'>('monthly');

  return (
    <section id="planos" className="py-20 sm:py-28 relative bg-gas-950 overflow-hidden">
      {/* Glow de fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-flame-500/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-flame-400 bg-flame-500/10 px-3 py-1 rounded-full border border-flame-500/20">
            Planos Transparentes &amp; Sem Surpresas
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
            Escolha o plano ideal para a sua revenda
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300">
            Todos os planos incluem <strong>7 dias de teste gratuito</strong>, suporte humanizado via WhatsApp e sem qualquer contrato de fidelidade.
          </p>

          {/* Toggle Mensal / Trimestral */}
          <div className="mt-8 inline-flex items-center p-1 rounded-2xl bg-gas-900 border border-slate-800">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                billingCycle === 'monthly'
                  ? 'bg-gas-800 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setBillingCycle('quarterly')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                billingCycle === 'quarterly'
                  ? 'bg-gradient-to-r from-flame-600 to-amber-600 text-white shadow-glow-orange'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Trimestral
              <span className="bg-emerald-400 text-slate-950 text-[10px] font-black px-1.5 py-0.2 rounded-full uppercase">
                -15% OFF
              </span>
            </button>
          </div>
        </div>

        {/* Grid de Planos */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PLANS_DATA.map((plan) => {
            const price = billingCycle === 'monthly' ? plan.priceMonthly : plan.priceQuarterly;
            const isHighlighted = plan.highlighted;

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  isHighlighted
                    ? 'bg-gradient-to-b from-gas-900 via-gas-900 to-gas-950 border-2 border-flame-500 shadow-glow-orange scale-102 lg:-translate-y-2'
                    : 'glass-card border border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Badge de Destaque */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-flame-600 to-amber-600 text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-extrabold text-white">{plan.name}</h3>
                  <p className="text-xs text-slate-400 mt-2 min-h-[36px]">{plan.description}</p>

                  {/* Preço */}
                  <div className="mt-6 pb-6 border-b border-slate-800">
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm font-bold text-slate-400">R$</span>
                      <span className="text-4xl sm:text-5xl font-black text-white font-mono">
                        {price}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">/mês</span>
                    </div>
                    <div className="text-[11px] text-emerald-400 font-semibold mt-1">
                      7 dias de teste grátis • Sem compromisso
                    </div>
                  </div>

                  {/* Lista de Recursos */}
                  <div className="mt-6 space-y-3">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      O que está incluído:
                    </div>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <Check className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Botão de Ação */}
                <div className="mt-8 pt-4">
                  <button
                    onClick={onOpenTrial}
                    className={`w-full py-4 rounded-xl font-extrabold text-xs sm:text-sm cursor-pointer transition-all flex items-center justify-center gap-2 ${
                      isHighlighted
                        ? 'bg-gradient-to-r from-flame-600 to-amber-600 hover:from-flame-500 hover:to-amber-500 text-white shadow-glow-orange'
                        : 'bg-gas-800 hover:bg-gas-700 text-white border border-slate-700'
                    }`}
                  >
                    <Sparkles className="size-4 text-amber-300" />
                    {plan.ctaLabel}
                    <ArrowRight className="size-4" />
                  </button>
                  <div className="text-center text-[10px] text-slate-500 mt-2">
                    Cancele quando quiser • Ativação imediata
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};