import React, { useState } from 'react';
import { PLANS } from '../data/content';
import { Check, Sparkles, ArrowRight } from 'lucide-react';

interface PricingSectionProps {
  onOpenTrial: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenTrial }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly'>('monthly');

  return (
    <section id="planos" className="py-16 sm:py-24 bg-[#f8fafc] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Valores Acessíveis &amp; Transparentes
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0d1b2e] mt-3 tracking-tight">
            Escolha o plano ideal para a sua revenda
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Todos os planos incluem <strong>7 dias de teste grátis</strong>, sem cartão de crédito e sem fidelidade.
          </p>

          {/* Toggle Mensal / Trimestral */}
          <div className="mt-7 inline-flex items-center p-1 rounded-2xl bg-white border border-slate-300 shadow-xs">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                billingCycle === 'monthly'
                  ? 'bg-[#0d1b2e] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setBillingCycle('quarterly')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                billingCycle === 'quarterly'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Trimestral
              <span className="bg-emerald-100 text-emerald-900 text-[10px] font-black px-1.5 py-0.2 rounded-full uppercase">
                -15%
              </span>
            </button>
          </div>
        </div>

        {/* Grid de Planos */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PLANS.map((plan) => {
            const price = billingCycle === 'monthly' ? plan.priceMonthly : plan.priceQuarterly;
            const isHighlighted = plan.highlighted;

            return (
              <div
                key={plan.id}
                className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all relative ${
                  isHighlighted
                    ? 'bg-white border-2 border-emerald-500 shadow-lg scale-102 lg:-translate-y-2'
                    : 'bg-white border border-slate-300 shadow-xs hover:border-slate-400'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-emerald-600 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-[#0d1b2e]">{plan.name}</h3>
                  <p className="text-xs text-slate-500 mt-1 min-h-[36px]">{plan.desc}</p>

                  <div className="mt-5 pb-5 border-b border-slate-200">
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm font-bold text-slate-500">R$</span>
                      <span className="text-4xl sm:text-5xl font-black text-[#0d1b2e]">
                        {price}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">/mês</span>
                    </div>
                    <div className="text-[11px] text-emerald-700 font-bold mt-1">
                      7 dias grátis para testar na sua revenda
                    </div>
                  </div>

                  <div className="mt-5 space-y-2.5">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-600">
                      O que está incluído:
                    </div>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-2">
                  <button
                    onClick={onOpenTrial}
                    className={`w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm cursor-pointer transition-all flex items-center justify-center gap-2 ${
                      isHighlighted
                        ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300'
                    }`}
                  >
                    <Sparkles className="size-4 text-emerald-200" />
                    Começar 7 Dias Grátis
                    <ArrowRight className="size-4" />
                  </button>
                  <div className="text-center text-[11px] text-slate-400 mt-2">
                    Sem fidelidade • Cancele quando quiser
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