import React from 'react';
import { XCircle, CheckCircle2, AlertTriangle, Sparkles, ArrowRight } from 'lucide-react';

interface ProblemSolutionProps {
  onOpenTrial: () => void;
}

export const ProblemSolution: React.FC<ProblemSolutionProps> = ({ onOpenTrial }) => {
  const problems = [
    {
      problem: "Anotações em papéis ou cadernos que se perdem na correria do balcão",
      solution: "Frente de Caixa (PDV) digital rápido para registrar vendas de balcão e entregas em poucos segundos.",
    },
    {
      problem: "Clientes antigos que somem e passam a comprar do concorrente sem você notar",
      solution: "Alerta de Clientes Inativos: filtro de clientes sem comprar há mais de 60 e 90 dias com botão direto para WhatsApp.",
    },
    {
      problem: "Pagando de 15% a 25% de comissão por botijão vendido em aplicativos de terceiros",
      solution: "Cardápio Digital próprio com o seu link: o cliente pede online e 100% do dinheiro fica na sua revenda.",
    },
    {
      problem: "Entregadores demorando para achar endereços e ligando toda hora para o depósito",
      solution: "Aplicativo do Entregador com botão de rota que abre o trajeto direto no Waze ou Google Maps.",
    },
    {
      problem: "Dúvidas no fechamento de caixa entre dinheiro, Pix, cartões de crédito, débito e fiado",
      solution: "Fechamento Cego de Turno que audita automaticamente as vendas e aponta sobra ou falta de centavos.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            A Realidade da Revenda
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0d1b2e] mt-3 tracking-tight">
            A diferença entre operar no improviso e ter o <span className="text-emerald-600">LMA GÁS</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Veja como o sistema substitui cadernos e planilhas por um fluxo de vendas ágil e organizado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {/* Card Vermelho: Sem o LMA Gás */}
          <div className="rounded-2xl p-6 sm:p-8 bg-[#fff8f8] border border-rose-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 pb-5 border-b border-rose-100">
                <div className="size-11 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold">
                  <AlertTriangle className="size-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
                    Sem o Sistema
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">
                    O Dia a Dia no Improviso
                  </h3>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {problems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <XCircle className="size-4.5 text-rose-500 shrink-0 mt-0.5" />
                    <span>{item.problem}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 p-3.5 rounded-xl bg-rose-100/60 text-xs text-rose-900 font-medium">
              ⚠️ Perda de tempo no atendimento, desorganização no caixa e clientes sumindo sem contato.
            </div>
          </div>

          {/* Card Verde: Com o LMA Gás */}
          <div className="rounded-2xl p-6 sm:p-8 bg-[#f6fcf8] border border-emerald-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 pb-5 border-b border-emerald-100">
                <div className="size-11 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  <Sparkles className="size-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                    Com o LMA GÁS
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">
                    Revenda Ágil e Organizada
                  </h3>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {problems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-800 font-medium">
                    <CheckCircle2 className="size-4.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item.solution}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 p-3.5 rounded-xl bg-emerald-100/70 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-emerald-900 font-medium">
              <span>✅ Atendimento em segundos, rotas no celular do motoboy e caixa 100% conferido.</span>
              <button
                onClick={onOpenTrial}
                className="w-full sm:w-auto px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold whitespace-nowrap transition-colors cursor-pointer"
              >
                Testar na Prática
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};