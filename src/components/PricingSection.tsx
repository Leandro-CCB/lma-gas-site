import React from 'react';
import {
  Check,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Clock,
  CreditCard,
  Headphones,
  MessageSquare,
} from 'lucide-react';
import { PLANS, WHATSAPP_LINK, WHATSAPP_DISPLAY } from '../data/content';

interface PricingProps {
  onOpenTrial: () => void;
}

export const PricingSection: React.FC<PricingProps> = ({ onOpenTrial }) => {
  return (
    <section id="planos" className="py-16 sm:py-24 bg-[#f8fafc] border-t border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção de Planos Conforme Referência */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Valores Claros e Sem Surpresas
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0d1b2e] mt-3 tracking-tight">
            Planos simples e acessíveis
          </h2>
          <p className="mt-2.5 text-base text-slate-600 leading-relaxed font-normal">
            Todos os planos incluem 7 dias de teste grátis, sem cartão de crédito e sem fidelidade.
          </p>
        </div>

        {/* Grid Principal: Garantias/Contato na Esquerda + Os 2 Planos na Direita */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          {/* Lado Esquerdo: 3 Selos de Confiança + Card Convidativo de WhatsApp */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3.5">
              <h3 className="font-bold text-sm text-[#0d1b2e] flex items-center gap-2">
                <ShieldCheck className="size-4 text-emerald-700" />
                Garantia e Segurança
              </h3>

              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-2.5">
                  <div className="size-7 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-100">
                    <Clock className="size-3.5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900">7 dias de teste grátis</strong>
                    <span className="text-slate-500">Teste o sistema completo na sua revenda sem compromisso.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="size-7 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 border border-blue-100">
                    <CreditCard className="size-3.5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900">Sem cartão de crédito</strong>
                    <span className="text-slate-500">Você só paga após os 7 dias se desejar continuar.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="size-7 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-100">
                    <Headphones className="size-3.5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900">Suporte em português</strong>
                    <span className="text-slate-500">Ajuda rápida e direta pelo WhatsApp para sua equipe.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card de Falar com Especialista / WhatsApp */}
            <div className="bg-emerald-800 text-white p-5 rounded-2xl shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-emerald-200 text-xs font-bold uppercase tracking-wider">
                <MessageSquare className="size-4" />
                <span>Atendimento Humano</span>
              </div>
              <h4 className="font-bold text-sm text-white leading-snug">
                Falar com um especialista
              </h4>
              <p className="text-xs text-emerald-100 leading-relaxed">
                Tem dúvidas sobre como o LMA GÁS funciona na sua distribuidora? Chame nossa equipe no WhatsApp.
              </p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-white text-emerald-900 hover:bg-emerald-50 font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer"
              >
                <span>Falar no WhatsApp: {WHATSAPP_DISPLAY}</span>
                <ArrowRight className="size-3.5" />
              </a>
            </div>
          </div>

          {/* Lado Direito: Os 2 Planos Públicos (Básico R$ 49,99 e Pro R$ 99,99) */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {PLANS.map((plan: any) => {
              const isHighlight = Boolean(plan.highlighted || plan.highlight);
              return (
                <div
                  key={plan.id}
                  className={`relative bg-white rounded-2xl transition-all duration-300 flex flex-col justify-between p-6 ${
                    isHighlight
                      ? 'border-2 border-emerald-600 shadow-md ring-4 ring-emerald-600/10'
                      : 'border border-slate-200 shadow-xs hover:border-slate-300'
                  }`}
                >
                  {/* Badge Destaque Mais Escolhido */}
                  {isHighlight && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-700 text-white text-[10px] font-black uppercase tracking-wider py-1 px-3.5 rounded-full shadow-sm flex items-center gap-1">
                      <Sparkles className="size-3 text-emerald-200" />
                      <span>{plan.badge || 'Mais Escolhido'}</span>
                    </div>
                  )}

                  <div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-black text-[#0d1b2e] tracking-tight">{plan.name}</h3>
                        <p className="text-xs text-slate-500 mt-1 min-h-[32px] leading-relaxed">
                          {plan.subtitle || plan.description}
                        </p>
                      </div>
                    </div>

                    {/* Preço Mensal */}
                    <div className="my-5 pb-5 border-b border-slate-100">
                      <div className="flex items-baseline gap-1">
                        <span className="text-xs font-bold text-slate-500">{plan.currency || 'R$'}</span>
                        <span className="text-3xl sm:text-4xl font-black text-[#0d1b2e] tracking-tight">
                          {plan.price}
                        </span>
                        <span className="text-xs font-semibold text-slate-500">{plan.period || '/mês'}</span>
                      </div>
                      <span className="text-[11px] text-emerald-700 font-semibold block mt-1">
                        {plan.savingsNote || '7 dias grátis • Sem cartão de crédito'}
                      </span>
                    </div>

                    {/* Lista de Recursos com Itens Visíveis e Ícones Verdes */}
                    <div className="space-y-2.5 mb-6">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                        {plan.id === 'pro' ? 'Diferenciais Exclusivos do Pro:' : 'O que está incluído no plano:'}
                      </span>
                      {plan.features.map((feature: any, fIdx: number) => {
                        const itemText = typeof feature === 'string' ? feature : feature.text;
                        const isItemHighlighted = typeof feature === 'string'
                          ? (plan.id === 'pro' && fIdx > 0)
                          : Boolean(feature.highlight);

                        return (
                          <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                            <div
                              className={`size-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                                isItemHighlighted
                                  ? 'bg-emerald-600 text-white'
                                  : 'bg-emerald-100 text-emerald-700'
                              }`}
                            >
                              <Check className="size-2.5 stroke-[3]" />
                            </div>
                            <span className={isItemHighlighted ? 'font-bold text-[#0d1b2e]' : 'font-normal'}>
                              {itemText}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Botão de Testar Grátis */}
                  <div className="pt-2">
                    <button
                      onClick={onOpenTrial}
                      className={`w-full py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer ${
                        isHighlight
                          ? 'bg-emerald-700 hover:bg-emerald-800 text-white shadow-emerald-700/20'
                          : 'bg-slate-900 hover:bg-slate-800 text-white'
                      }`}
                    >
                      <span>{plan.cta || 'Testar 7 Dias Grátis'}</span>
                      <ArrowRight className="size-3.5" />
                    </button>
                    <p className="text-[10px] text-slate-400 text-center mt-2">
                      Ativação imediata em 2 minutos • Sem fidelidade
                    </p>
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
