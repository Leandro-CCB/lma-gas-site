import React from 'react';
import {
  Check,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Clock,
  CreditCard,
  Headphones,
  Plus,
  MessageSquare,
} from 'lucide-react';
import { PLANS, TRUST_POINTS, WHATSAPP_LINK } from '../data/content';

interface PricingSectionProps {
  onOpenTrial: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenTrial }) => {
  return (
    <section id="planos" className="py-16 sm:py-24 bg-[#f8fafc] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho Conforme Imagem de Referência */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Valores Transparentes
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0d1b2e] mt-3 tracking-tight">
            Planos simples e acessíveis
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Todos os planos incluem 7 dias de teste grátis, sem cartão de crédito e sem fidelidade.
          </p>
        </div>

        {/* Layout Inspirado na Referência: Benefícios & Contato + Os Dois Cartões de Planos */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          {/* Coluna da Esquerda: Condições Comerciais e Canal WhatsApp */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <h3 className="font-bold text-sm text-[#0d1b2e] mb-1">
                Garantia e Tranquilidade:
              </h3>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                <Clock className="size-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-xs text-[#0d1b2e]">7 dias de teste grátis</div>
                  <div className="text-[11px] text-slate-500">Teste o sistema sem compromisso na sua revenda</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                <CreditCard className="size-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-xs text-[#0d1b2e]">Sem cartão de crédito</div>
                  <div className="text-[11px] text-slate-500">Você só paga se quiser continuar</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                <ShieldCheck className="size-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-xs text-[#0d1b2e]">Sem fidelidade</div>
                  <div className="text-[11px] text-slate-500">Cancele ou altere seu plano quando desejar</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                <Headphones className="size-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-xs text-[#0d1b2e]">Suporte em português</div>
                  <div className="text-[11px] text-slate-500">Ajuda rápida sempre que precisar</div>
                </div>
              </div>
            </div>

            {/* Card de Atendimento WhatsApp */}
            <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-2xl space-y-2.5">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                <MessageSquare className="size-4 text-emerald-700" />
                <span>Falar com um especialista</span>
              </div>
              <p className="text-xs text-emerald-900 leading-relaxed">
                Tire suas dúvidas sobre a operação da sua revenda de gás pelo WhatsApp.
              </p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition-all"
              >
                Chamar no WhatsApp
                <ArrowRight className="size-3.5" />
              </a>
            </div>
          </div>

          {/* Coluna da Direita: Os 2 Planos Comerciais Oficiais */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
            {PLANS.map((plan) => {
              const isPro = plan.id === 'pro';

              return (
                <div
                  key={plan.id}
                  className={`rounded-2xl p-6 flex flex-col justify-between transition-all bg-white relative ${
                    isPro
                      ? 'border-2 border-emerald-500 shadow-md'
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
                    <h3 className="text-xl font-black text-[#0d1b2e]">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 min-h-[34px]">
                      {plan.subtitle}
                    </p>

                    {/* Preço em Destaque */}
                    <div className="mt-4 pb-4 border-b border-slate-200">
                      <div className="flex items-baseline gap-1">
                        <span className="text-sm font-bold text-slate-500">R$</span>
                        <span className="text-4xl sm:text-5xl font-black text-[#0d1b2e] tracking-tight">
                          {plan.price}
                        </span>
                        <span className="text-xs text-slate-500 font-semibold">/mês</span>
                      </div>
                      <div className="text-[11px] text-emerald-700 font-bold mt-1.5 flex items-center gap-1">
                        <Sparkles className="size-3 text-emerald-600" />
                        7 dias de teste grátis sem cartão
                      </div>
                    </div>

                    {/* Lista de Recursos */}
                    <div className="mt-5 space-y-2.5">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        {isPro ? 'Diferenciais exclusivos do Pro:' : 'O que está incluído no Básico:'}
                      </div>

                      {plan.features.map((feature, idx) => {
                        const isExclusivePro = isPro && idx > 0;

                        return (
                          <div
                            key={idx}
                            className={`flex items-start gap-2 text-xs ${
                              isExclusivePro
                                ? 'text-emerald-950 font-bold bg-emerald-50/80 p-2.5 rounded-lg border border-emerald-200'
                                : 'text-slate-700'
                            }`}
                          >
                            {isExclusivePro ? (
                              <Plus className="size-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            ) : (
                              <Check className="size-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            )}
                            <span>{feature}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Botão de Ação */}
                  <div className="mt-6 pt-3">
                    <button
                      onClick={onOpenTrial}
                      className={`w-full py-3.5 rounded-xl font-bold text-xs cursor-pointer transition-all flex items-center justify-center gap-2 ${
                        isPro
                          ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs'
                          : 'bg-slate-900 hover:bg-slate-800 text-white shadow-xs'
                      }`}
                    >
                      <Sparkles className="size-3.5 text-emerald-200" />
                      {plan.cta}
                      <ArrowRight className="size-3.5" />
                    </button>
                    <div className="text-center text-[10px] text-slate-400 mt-2">
                      Sem fidelidade • Cancele quando desejar
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};