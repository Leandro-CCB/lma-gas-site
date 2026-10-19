import React from 'react';
import { XCircle, CheckCircle2, AlertTriangle, ArrowRight, TrendingUp, Sparkles } from 'lucide-react';
import { PROBLEM_SOLUTION } from '../data/content';

interface ProblemSolutionProps {
  onOpenTrial: () => void;
}

export const ProblemSolution: React.FC<ProblemSolutionProps> = ({ onOpenTrial }) => {
  return (
    <section className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-flame-400 bg-flame-500/10 px-3 py-1 rounded-full border border-flame-500/20">
            A Realidade do Revendedor
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
            Como o LMA GÁS faz toda a diferença no dia a dia da sua revenda:
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300">
            Administrar revenda de gás no caderninho ou em sistemas genéricos que não entendem de vasilhame é garantia de perder dinheiro todos os meses.
          </p>
        </div>

        {/* Comparativo Lado a Lado */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {/* Card Vermelho: Sem o LMA Gás */}
          <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-rose-950/40 via-gas-950 to-gas-950 border border-rose-500/30 shadow-xl relative flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 pb-6 border-b border-rose-900/40">
                <div className="size-12 rounded-2xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400">
                  <AlertTriangle className="size-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-400">
                    O Pesadelo da Revenda
                  </span>
                  <h3 className="text-xl font-extrabold text-white">
                    Sem o LMA GÁS
                  </h3>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {PROBLEM_SOLUTION.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                    <XCircle className="size-5 text-rose-400 shrink-0 mt-0.5" />
                    <span>{item.problem}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 p-4 rounded-2xl bg-rose-950/30 border border-rose-900/50 text-xs text-rose-200">
              <strong>Resultado:</strong> Estresse diário, prejuízo invisível com vasilhames que nunca voltam e dinheiro escorrendo pelo ralo em comissões de terceiros.
            </div>
          </div>

          {/* Card Verde/Cyan: Com o LMA Gás */}
          <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-emerald-950/40 via-gas-900 to-gas-950 border border-emerald-500/40 shadow-glow-emerald relative flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-emerald-900/40">
                <div className="flex items-center gap-3">
                  <div className="size-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                    <Sparkles className="size-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                      Operação Profissional &amp; Lucrativa
                    </span>
                    <h3 className="text-xl font-extrabold text-white">
                      Com o LMA GÁS
                    </h3>
                  </div>
                </div>
                <span className="bg-emerald-500/20 text-emerald-300 text-xs font-bold px-2.5 py-1 rounded-full border border-emerald-500/30 hidden sm:inline-block">
                  Controle 100%
                </span>
              </div>

              <div className="mt-6 space-y-4">
                {PROBLEM_SOLUTION.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-100 font-medium">
                    <CheckCircle2 className="size-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item.solution}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 p-4 rounded-2xl bg-emerald-950/40 border border-emerald-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-emerald-200">
                <strong>Resultado:</strong> Entregas rápidas, clientes fidelizados, zero botijões perdidos e caixa fechado sem dor de cabeça.
              </div>
              <button
                onClick={onOpenTrial}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md whitespace-nowrap cursor-pointer transition-colors"
              >
                Mudar Minha Revenda Agora
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};