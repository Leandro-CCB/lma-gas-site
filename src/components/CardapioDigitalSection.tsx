import React from 'react';
import {
  ShoppingCart,
  Percent,
  CheckCircle2,
  Volume2,
  Sparkles,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { CARDAPIO_FEATURES } from '../data/content';

interface CardapioDigitalSectionProps {
  onOpenTrial: () => void;
}

export const CardapioDigitalSection: React.FC<CardapioDigitalSectionProps> = ({ onOpenTrial }) => {
  return (
    <section id="cardapio" className="py-16 sm:py-24 bg-[#f8fafc] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Lado Esquerdo: Mockup Mobile do Cardápio para o Cliente */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="w-[300px] sm:w-[320px] rounded-[36px] bg-[#0d1b2e] p-3 shadow-2xl border-4 border-slate-700">
              <div className="w-20 h-4 bg-slate-900 rounded-full mx-auto mb-3" />

              {/* Cardápio do Cliente */}
              <div className="bg-white rounded-[24px] p-3.5 space-y-3 text-xs text-slate-800 border border-slate-200 select-none">
                {/* Header da Loja */}
                <div className="p-3 rounded-xl bg-orange-500 text-white shadow-xs">
                  <div className="font-black text-sm">REVENDA CENTRAL GÁS</div>
                  <div className="text-[10px] text-orange-100">Distribuidora Autorizada • Entrega Rápida</div>
                  <div className="mt-2 pt-2 border-t border-white/20 flex justify-between text-[10px]">
                    <span>⏱️ 20 a 35 min</span>
                    <span>🛵 Entrega Grátis</span>
                  </div>
                </div>

                {/* Produtos no Cardápio */}
                <div className="space-y-2">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex justify-between items-center">
                    <div>
                      <div className="font-bold text-slate-900">Botijão P13 (Troca)</div>
                      <div className="text-[10px] text-slate-500">Lacre oficial e peso conferido</div>
                      <div className="text-xs font-black text-orange-600 mt-0.5">R$ 115,00</div>
                    </div>
                    <button className="px-3 py-1.5 rounded-lg bg-orange-600 text-white font-bold text-xs shadow-xs">
                      Pedir
                    </button>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex justify-between items-center">
                    <div>
                      <div className="font-bold text-slate-900">Água Mineral 20L</div>
                      <div className="text-[10px] text-slate-500">Galão retornável</div>
                      <div className="text-xs font-black text-blue-600 mt-0.5">R$ 16,00</div>
                    </div>
                    <button className="px-3 py-1.5 rounded-lg bg-blue-600 text-white font-bold text-xs shadow-xs">
                      Pedir
                    </button>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] text-center font-bold">
                  ✓ O pedido cai com alerta sonoro no computador da revenda!
                </div>
              </div>
            </div>
          </div>

          {/* Lado Direito: Argumentação de Venda sem Taxas */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                0% de Taxa por Pedido
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0d1b2e] mt-3 tracking-tight">
                Seu próprio <span className="text-emerald-600">Cardápio Digital</span>, sem intermediários
              </h2>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                Por que pagar porcentagens pesadas para aplicativos de terceiros sobre cada botijão que você vende? Com o Cardápio Digital do LMA Gás, você divulga seu próprio link e 100% do lucro fica no caixa da sua empresa.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CARDAPIO_FEATURES.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-1.5">
                  <h4 className="font-bold text-sm text-[#0d1b2e] flex items-center gap-1.5">
                    <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenTrial}
                className="px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm transition-all cursor-pointer flex items-center gap-2"
              >
                <Sparkles className="size-4 text-emerald-200" />
                Quero o Cardápio Digital na Minha Revenda
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};