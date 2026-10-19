import React, { useState } from 'react';
import { Calculator, Sparkles, TrendingUp, DollarSign, ShieldAlert, ArrowRight } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenTrial: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenTrial }) => {
  const [botijoesMes, setBotijoesMes] = useState<number>(1200);

  // Cálculos baseados em médias reais de revendas brasileiras:
  // Preço médio do botijão P13: R$ 115,00
  // Margem de perda de vasilhames sem sistema: ~1.2% do giro anual
  // % de vendas que passam para o cardápio digital próprio: ~30%
  // Taxa média de apps de terceiros: 16%
  // Vendas extras via CRM/aviso de reposição: ~6% de aumento de giro
  const precoMedioBotijao = 115;
  const faturamentoMes = botijoesMes * precoMedioBotijao;

  // Economia em taxas de apps (30% dos pedidos que seriam taxados em 16%)
  const economiaTaxasMes = botijoesMes * 0.3 * precoMedioBotijao * 0.16;

  // Economia em vasilhames não extraviados (cada vasilhame R$ 200,00)
  const vasilhamesSalvosMes = Math.max(1, Math.round(botijoesMes * 0.006));
  const economiaVasilhamesMes = vasilhamesSalvosMes * 200;

  // Vendas extras com o lembrete de recompra no WhatsApp (lucro bruto de ~R$ 30 por botijão)
  const botijoesExtrasMes = Math.round(botijoesMes * 0.07);
  const lucroExtraMes = botijoesExtrasMes * 30;

  // Benefício financeiro total por mês e por ano
  const beneficioTotalMes = economiaTaxasMes + economiaVasilhamesMes + lucroExtraMes;
  const beneficioTotalAno = beneficioTotalMes * 12;

  const fmt = (v: number) =>
    new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(v);

  return (
    <section id="simulador" className="py-20 sm:py-28 relative bg-gas-900/60 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            📊 Simulador de Retorno sobre Investimento (ROI)
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
            Quanto a sua revenda vai economizar e lucrar a mais com o <span className="text-gradient-flame">LMA GÁS</span>?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300">
            Arraste a barra para selecionar a quantidade aproximada de botijões que você vende por mês e veja a simulação em tempo real.
          </p>
        </div>

        {/* Container do Simulador */}
        <div className="max-w-4xl mx-auto rounded-3xl p-6 sm:p-10 bg-gas-950 border border-slate-800 shadow-2xl relative">
          {/* Slider Interativo */}
          <div className="space-y-4 pb-8 border-b border-slate-800">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <label htmlFor="range-botijoes" className="text-sm sm:text-base font-bold text-slate-200">
                Volume de botijões vendidos por mês:
              </label>
              <div className="text-2xl sm:text-3xl font-black text-flame-400 font-mono">
                {botijoesMes.toLocaleString('pt-BR')} <span className="text-sm font-semibold text-slate-400">botijões/mês</span>
              </div>
            </div>

            <input
              id="range-botijoes"
              type="range"
              min="300"
              max="10000"
              step="100"
              value={botijoesMes}
              onChange={(e) => setBotijoesMes(Number(e.target.value))}
              className="w-full h-3 bg-gas-800 rounded-lg appearance-none cursor-pointer accent-flame-500 focus:outline-none"
            />

            <div className="flex justify-between text-xs text-slate-500 font-mono">
              <span>300 (Pequena revenda)</span>
              <span>2.500 (Médio porte)</span>
              <span>10.000+ (Grande distribuidor)</span>
            </div>
          </div>

          {/* 3 Blocos de Ganho Mensal */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
            <div className="p-4 rounded-2xl bg-gas-900 border border-slate-800">
              <div className="text-xs text-slate-400 font-medium">Economia em Taxas de Apps:</div>
              <div className="text-xl font-extrabold text-emerald-400 mt-1 font-mono">
                {fmt(economiaTaxasMes)}/mês
              </div>
              <p className="text-[11px] text-slate-400 mt-1">
                Zero comissão no seu próprio Cardápio Digital.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-gas-900 border border-slate-800">
              <div className="text-xs text-slate-400 font-medium">Vasilhames Salvos na Rua:</div>
              <div className="text-xl font-extrabold text-cyan-400 mt-1 font-mono">
                ~{vasilhamesSalvosMes} un ({fmt(economiaVasilhamesMes)}/mês)
              </div>
              <p className="text-[11px] text-slate-400 mt-1">
                Com o acerto obrigatório no App do Entregador.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-gas-900 border border-slate-800">
              <div className="text-xs text-slate-400 font-medium">Vendas Extras (Aviso de Reposição):</div>
              <div className="text-xl font-extrabold text-amber-400 mt-1 font-mono">
                +{botijoesExtrasMes} botijões ({fmt(lucroExtraMes)}/mês)
              </div>
              <p className="text-[11px] text-slate-400 mt-1">
                Clientes que não compram do concorrente.
              </p>
            </div>
          </div>

          {/* Destaque do Lucro Total Estimado */}
          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-flame-950/60 via-gas-900 to-emerald-950/60 border border-flame-500/40 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Impacto Financeiro Líquido Estimado:
              </span>
              <div className="text-2xl sm:text-4xl font-black text-white mt-1">
                <span className="text-gradient-flame">{fmt(beneficioTotalAno)}</span>{' '}
                <span className="text-sm font-normal text-slate-400">a mais por ano</span>
              </div>
              <div className="text-xs text-emerald-400 font-semibold mt-1">
                Aproximadamente {fmt(beneficioTotalMes)} a mais no caixa da sua revenda todo mês!
              </div>
            </div>

            <button
              onClick={onOpenTrial}
              className="w-full md:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-flame-600 to-amber-600 hover:from-flame-500 hover:to-amber-500 text-white font-extrabold text-sm shadow-glow-orange cursor-pointer transition-all whitespace-nowrap flex items-center justify-center gap-2"
            >
              <Sparkles className="size-4 text-amber-300" />
              QUERO ESSE RESULTADO NA MINHA REVENDA
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};