import React from 'react';
import {
  Truck,
  Navigation,
  MapPin,
  CheckCircle,
  Phone,
  QrCode,
  ShieldCheck,
  Zap,
  ArrowRight,
  Sparkles,
  Smartphone,
  Banknote,
  RotateCcw,
} from 'lucide-react';

interface EntregadorAppSectionProps {
  onOpenTrial: () => void;
}

export const EntregadorAppSection: React.FC<EntregadorAppSectionProps> = ({ onOpenTrial }) => {
  return (
    <section id="entregador" className="py-20 sm:py-28 relative bg-gas-900/40 border-t border-slate-800/80 overflow-hidden">
      {/* Glow de fundo */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Lado Esquerdo: Argumentos Fortes de Venda do App do Entregador */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                🛵 O Fim do Papel Molhado e da Confusão
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
                A grande vantagem do <span className="text-gradient-blueflame">Aplicativo do Entregador</span>
              </h2>
              <p className="mt-4 text-base text-slate-300 leading-relaxed">
                Quantas vezes seu motoboy errou o endereço, esqueceu de cobrar o PIX ou voltou para a revenda sem o botijão vazio do cliente? Com o <strong>App do Entregador LMA Gás</strong>, toda a entrega acontece direto no smartphone dele de forma rápida e segura.
              </p>
            </div>

            {/* Grid de 4 Vantagens Matadoras */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="glass-card p-4 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-all">
                <div className="size-10 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3">
                  <Navigation className="size-5" />
                </div>
                <h4 className="text-sm font-bold text-white">
                  Roteirização Waze &amp; Google Maps
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  1 clique e o trajeto mais rápido se abre no GPS do celular, economizando combustível e tempo de entrega.
                </p>
              </div>

              <div className="glass-card p-4 rounded-2xl border border-slate-800 hover:border-emerald-500/40 transition-all">
                <div className="size-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-3">
                  <QrCode className="size-5" />
                </div>
                <h4 className="text-sm font-bold text-white">
                  PIX Dinâmico na Tela
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  O entregador gera o QR Code na hora na tela do celular. O cliente escaneia e o dinheiro cai direto na conta da revenda.
                </p>
              </div>

              <div className="glass-card p-4 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-all">
                <div className="size-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400 mb-3">
                  <RotateCcw className="size-5" />
                </div>
                <h4 className="text-sm font-bold text-white">
                  Acerto Obrigatório de Vasilhame
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  Para concluir a entrega, o sistema exige confirmar se o vazio foi recebido. Nunca mais um entregador vai esquecer o botijão na casa do cliente.
                </p>
              </div>

              <div className="glass-card p-4 rounded-2xl border border-slate-800 hover:border-purple-500/40 transition-all">
                <div className="size-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 mb-3">
                  <Banknote className="size-5" />
                </div>
                <h4 className="text-sm font-bold text-white">
                  Comissão Automática por Botijão
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  O motoboy acompanha o total de botijões entregues no dia e a comissão acumulada, gerando transparência e motivação na equipe.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-800/40 flex items-center gap-3">
              <Smartphone className="size-6 text-cyan-400 shrink-0" />
              <div className="text-xs text-cyan-200">
                <strong>Sem necessidade de instalar app pesado:</strong> O sistema funciona como um Web App (PWA) leve, abrindo em segundos em qualquer Android ou iPhone sem ocupar memória.
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenTrial}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-extrabold text-sm shadow-glow-blue cursor-pointer transition-all flex items-center gap-2"
              >
                <Sparkles className="size-4 text-cyan-200" />
                Quero o App do Entregador na Minha Revenda
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>

          {/* Lado Direito: Mockup Realista de Smartphone Moderno */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-[300px] sm:w-[320px] rounded-[40px] bg-slate-900 border-4 border-slate-700 p-3 shadow-2xl relative">
              {/* Entalhe do Celular (Dynamic Island) */}
              <div className="w-24 h-4 bg-slate-800 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="size-2 rounded-full bg-slate-950 inline-block" />
              </div>

              {/* Tela do Aplicativo LMA Gás Entregador */}
              <div className="bg-gas-950 rounded-[30px] p-3.5 space-y-3 text-xs text-white overflow-hidden border border-slate-800 select-none">
                {/* Header do App Mobile */}
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="text-base">🛵</span>
                    <div>
                      <div className="font-extrabold text-xs text-white">Carlos Moto 01</div>
                      <div className="text-[9px] text-emerald-400 font-bold">Online • 4 Botijões Cheios</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded-full">
                    2 Pendentes
                  </span>
                </div>

                {/* Pedido 1: Em Rota Ativo */}
                <div className="p-3 rounded-2xl bg-gas-900 border border-cyan-500/50 space-y-2 shadow-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-extrabold text-xs text-white">#1084 • Maria Aparecida</span>
                    <span className="text-[9px] font-extrabold text-cyan-300 bg-cyan-500/20 px-2 py-0.5 rounded">
                      EM ROTA
                    </span>
                  </div>

                  <div className="text-[11px] text-slate-300">
                    📍 Rua das Palmeiras, 142 - Apto 32B
                    <div className="text-[9px] text-slate-400 mt-0.5">Ref: Próximo à padaria, portão branco</div>
                  </div>

                  <div className="p-2 rounded-lg bg-gas-950 border border-slate-800 flex justify-between items-center text-[11px]">
                    <span className="font-bold text-white">1x P13 Ultragaz + 1x Água 20L</span>
                    <span className="font-extrabold text-emerald-400">R$ 131,00</span>
                  </div>

                  <div className="grid grid-cols-2 gap-1.5 pt-1">
                    <a
                      href="https://waze.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-[11px] flex items-center justify-center gap-1 shadow-sm"
                    >
                      <Navigation className="size-3" /> Waze GPS
                    </a>
                    <button className="py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] flex items-center justify-center gap-1 shadow-sm">
                      <CheckCircle className="size-3" /> Concluir
                    </button>
                  </div>
                </div>

                {/* Pedido 2: Próxima Parada */}
                <div className="p-2.5 rounded-xl bg-gas-900/60 border border-slate-800 space-y-1 text-[10px]">
                  <div className="flex justify-between text-slate-300">
                    <span className="font-bold">#1085 • Pizzaria Bella Napoli</span>
                    <span className="text-amber-400">Próxima</span>
                  </div>
                  <div className="text-slate-400">Av. Liberdade, 780 • 2x P45 Comercial</div>
                </div>

                {/* Resumo do Dia do Entregador */}
                <div className="p-2.5 rounded-xl bg-gas-900 border border-slate-800 flex justify-between items-center text-[10px]">
                  <div>
                    <span className="text-slate-400">Entregas de hoje:</span>
                    <span className="font-bold text-white ml-1">16 botijões</span>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-400">Sua comissão:</span>
                    <span className="font-bold text-emerald-400 ml-1">R$ 80,00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};