import React from 'react';
import { Check, Sparkles, ArrowRight, ShieldCheck, Clock, CreditCard, Headphones, Plus } from 'lucide-react';
import { PLANS, TRUST_POINTS } from '../data/content';

interface PricingSectionProps {
  onOpenTrial: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenTrial }) => {
  return (
    <section id="planos" className="py-16 sm:py-24 bg-[#f8fafc] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção de Preços */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Planos Transparentes
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0d1b2e] mt-3 tracking-tight">
            Escolha o plano ideal para a sua revenda
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Simples e direto: o <strong>Plano Pro</strong> difere do <strong>Plano Básico</strong> por incluir o <strong>Cardápio Digital</strong> (pedidos online) e o <strong>Aplicativo do Entregador</strong>.
          </p>
        </div>

        {/* Grid de Exclusivamente DOIS PLANOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          {PLANS.map((plan) => {
            const isPro = plan.id === 'pro';

            return (
              <div
                key={plan.id}
                className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all bg-white relative ${
                  isPro
                    ? 'border-2 border-emerald-500 shadow-lg'
                    : 'border border-slate-300 shadow-xs hover:border-slate-400'
                }`}
              >
                {/* Badge discreto para o Plano Pro */}
                {plan.badge && (
                  <div className="absolute -top-3 left-6">
                    <span className="bg-emerald-600 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#0d1b2e]">
                    {plan.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 min-h-[36px]">
                    {plan.description}
                  </p>

                  {/* Preço em Destaque Oficial */}
                  <div className="mt-6 pb-6 border-b border-slate-200">
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm font-bold text-slate-500">R$</span>
                      <span className="text-4xl sm:text-5xl font-black text-[#0d1b2e] tracking-tight">
                        {plan.price}
                      </span>
                      <span className="text-xs text-slate-500 font-semibold">/mês</span>
                    </div>
                    <div className="text-[11px] text-emerald-700 font-bold mt-1.5 flex items-center gap-1">
                      <Sparkles className="size-3 text-emerald-600" />
                      7 dias de teste grátis na sua revenda
                    </div>
                  </div>

                  {/* Lista de Recursos */}
                  <div className="mt-6 space-y-3">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      {isPro ? 'Recursos exclusivos do Pro:' : 'O que está incluído no Básico:'}
                    </div>

                    {plan.features.map((feature, idx) => {
                      const isExclusivePro = isPro && idx > 0;

                      return (
                        <div
                          key={idx}
                          className={`flex items-start gap-2.5 text-xs sm:text-sm ${
                            isExclusivePro
                              ? 'text-emerald-950 font-semibold bg-emerald-50/70 p-2.5 rounded-lg border border-emerald-200/80'
                              : 'text-slate-700'
                          }`}
                        >
                          {isExclusivePro ? (
                            <Plus className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                          ) : (
                            <Check className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                          )}
                          <span>{feature}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Botão de Ação */}
                <div className="mt-8 pt-4">
                  <button
                    onClick={onOpenTrial}
                    className={`w-full py-4 rounded-xl font-bold text-xs sm:text-sm cursor-pointer transition-all flex items-center justify-center gap-2 ${
                      isPro
                        ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm'
                        : 'bg-slate-900 hover:bg-slate-800 text-white shadow-xs'
                    }`}
                  >
                    <Sparkles className="size-4 text-emerald-200" />
                    {plan.cta}
                    <ArrowRight className="size-4" />
                  </button>
                  <div className="text-center text-[11px] text-slate-400 mt-2">
                    Sem fidelidade • Cancele quando desejar
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── SEÇÃO DE CONFIANÇA ── */}
        <div className="mt-16 pt-12 border-t border-slate-200 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-base font-bold text-[#0d1b2e]">
              Condições comerciais transparentes
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Tudo o que você precisa saber antes de começar o seu teste
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-white border border-slate-200 text-center space-y-1">
              <Clock className="size-5 text-emerald-600 mx-auto" />
              <div className="font-bold text-xs text-[#0d1b2e]">7 Dias Grátis</div>
              <div className="text-[11px] text-slate-500">Acesso completo para testar</div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 text-center space-y-1">
              <CreditCard className="size-5 text-emerald-600 mx-auto" />
              <div className="font-bold text-xs text-[#0d1b2e]">Sem Cartão</div>
              <div className="text-[11px] text-slate-500">Não pede dados de pagamento</div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 text-center space-y-1">
              <ShieldCheck className="size-5 text-emerald-600 mx-auto" />
              <div className="font-bold text-xs text-[#0d1b2e]">Sem Fidelidade</div>
              <div className="text-[11px] text-slate-500">Cancele quando quiser</div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 text-center space-y-1">
              <Headphones className="size-5 text-emerald-600 mx-auto" />
              <div className="font-bold text-xs text-[#0d1b2e]">Suporte em Português</div>
              <div className="text-[11px] text-slate-500">Atendimento pelo WhatsApp</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};