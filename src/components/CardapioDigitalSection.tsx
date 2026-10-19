import React from 'react';
import {
  ShoppingCart,
  Percent,
  CheckCircle2,
  Volume2,
  Flame,
  ArrowRight,
  Sparkles,
  Smartphone,
  Share2,
  DollarSign,
  TrendingUp,
} from 'lucide-react';

interface CardapioDigitalSectionProps {
  onOpenTrial: () => void;
}

export const CardapioDigitalSection: React.FC<CardapioDigitalSectionProps> = ({ onOpenTrial }) => {
  return (
    <section id="cardapio" className="py-20 sm:py-28 relative bg-gas-950 overflow-hidden">
      {/* Glow de fundo */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Lado Esquerdo: Mockup do Cardápio no Celular do Cliente Final */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="w-[300px] sm:w-[320px] rounded-[40px] bg-white border-4 border-slate-300 p-3 shadow-2xl relative text-slate-900">
              {/* Dynamic Island */}
              <div className="w-20 h-4 bg-slate-900 rounded-full mx-auto mb-3" />

              {/* Conteúdo do Cardápio */}
              <div className="space-y-3 text-xs">
                {/* Header da Loja */}
                <div className="p-3 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🔥</span>
                    <div>
                      <div className="font-extrabold text-sm leading-tight">BERTONI GÁS EXPRESS</div>
                      <div className="text-[10px] text-amber-100">Distribuidora Autorizada Ultragaz</div>
                    </div>
                  </div>
                  <div className="mt-2 pt-2 border-t border-white/20 flex justify-between text-[10px]">
                    <span>⏱️ Entrega: 20-35 min</span>
                    <span>🛵 Frete Grátis</span>
                  </div>
                </div>

                {/* Banner de Promoção Combo */}
                <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-[11px] text-amber-900">Combo da Semana!</div>
                    <div className="text-[10px] text-amber-700">Gás P13 + Galão de Água 20L</div>
                  </div>
                  <span className="font-extrabold text-xs text-orange-600 bg-white px-2 py-1 rounded shadow-sm">
                    R$ 125,00
                  </span>
                </div>

                {/* Produto 1 */}
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🔥</span>
                    <div>
                      <div className="font-bold text-slate-900 text-xs">Botijão P13 (Troca)</div>
                      <div className="text-[10px] text-slate-500">Lacre oficial e peso conferido</div>
                      <div className="font-extrabold text-orange-600 text-xs mt-0.5">R$ 115,00</div>
                    </div>
                  </div>
                  <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs px-3 py-1.5 rounded-lg shadow-sm">
                    + Pedir
                  </button>
                </div>

                {/* Produto 2 */}
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">💧</span>
                    <div>
                      <div className="font-bold text-slate-900 text-xs">Galão Água Lindoya 20L</div>
                      <div className="text-[10px] text-slate-500">Galão retornável</div>
                      <div className="font-extrabold text-cyan-600 text-xs mt-0.5">R$ 16,00</div>
                    </div>
                  </div>
                  <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs px-3 py-1.5 rounded-lg shadow-sm">
                    + Pedir
                  </button>
                </div>

                {/* Rodapé do Carrinho */}
                <div className="pt-2">
                  <div className="w-full py-2.5 rounded-xl bg-green-600 text-white font-extrabold text-xs text-center flex items-center justify-center gap-1.5 shadow-md">
                    <span>📲 Concluir Pedido no WhatsApp</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lado Direito: Argumentação de Economia vs Apps Terceiros (Ordem 1 no mobile) */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                💰 Diga Adeus às Taxas do iFood e Zé Delivery
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
                Seu próprio <span className="text-gradient-flame">Cardápio Digital</span>, sem pagar 1 centavo de comissão!
              </h2>
              <p className="mt-4 text-base text-slate-300 leading-relaxed">
                Por que entregar de 15% a 25% de todo o seu esforço para aplicativos de delivery? Com o <strong>Cardápio Digital do LMA GÁS</strong>, a sua revenda tem um link próprio e profissional para divulgar no WhatsApp, Instagram e Google.
              </p>
            </div>

            {/* Comparativo de Economia Real */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-gas-900 to-gas-900 border border-emerald-500/30 space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-slate-300 border-b border-slate-800 pb-2">
                <span>Venda mensal de 800 botijões no delivery:</span>
                <span className="text-emerald-400 font-extrabold">Faturamento: R$ 92.000,00</span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="p-3 rounded-xl bg-rose-950/30 border border-rose-900/40">
                  <div className="font-bold text-rose-400">Em Apps Terceiros (15% a 25%):</div>
                  <div className="text-lg font-black text-rose-300 mt-1">- R$ 13.800,00</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Dinheiro perdido em taxas todo mês</div>
                </div>
                <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-900/40">
                  <div className="font-bold text-emerald-400">Com o LMA GÁS (Taxa 0%):</div>
                  <div className="text-lg font-black text-emerald-300 mt-1">R$ 0,00 de Taxa</div>
                  <div className="text-[10px] text-emerald-300 mt-0.5">Tudo que você vende fica no seu bolso</div>
                </div>
              </div>
            </div>

            {/* 3 Recursos Chave */}
            <div className="space-y-3 text-xs sm:text-sm text-slate-200">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Notificação Sonora no Computador:</strong> Quando o cliente envia o pedido pelo cardápio, toca um alerta sonoro alto no caixa para sua equipe não perder tempo.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Cores da Sua Bandeira:</strong> Ultragaz (laranja/azul), Liquigás (verde), Copagaz (roxo), Supergasbras (ciano) ou Multimarcas.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Zero Fricção para o Consumidor:</strong> Seu cliente não precisa baixar app da Play Store nem criar senhas complicadas. Pede em 3 cliques.
                </span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenTrial}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-sm shadow-glow-emerald cursor-pointer transition-all flex items-center gap-2"
              >
                <Sparkles className="size-4 text-amber-300" />
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