import React from 'react';
import {
  Truck,
  Navigation,
  MapPin,
  CheckCircle,
  Smartphone,
  Sparkles,
  ArrowRight,
  RotateCw,
  Coins,
} from 'lucide-react';
import { ENTREGADOR_FEATURES } from '../data/content';

interface EntregadorAppSectionProps {
  onOpenTrial: () => void;
}

export const EntregadorAppSection: React.FC<EntregadorAppSectionProps> = ({ onOpenTrial }) => {
  return (
    <section id="entregador" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Lado Esquerdo: Argumentação do Aplicativo do Entregador */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Operação Ágil na Rua
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0d1b2e] mt-3 tracking-tight">
                A vantagem do <span className="text-blue-600">Aplicativo do Entregador</span>
              </h2>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                Chega de comanda de papel molhada e entregador perdido na rua. O motoboy visualiza os pedidos no próprio celular, traça a rota no GPS com 1 toque e confirma as entregas na hora.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              {ENTREGADOR_FEATURES.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <h4 className="font-bold text-sm text-[#0d1b2e] flex items-center gap-1.5">
                    <CheckCircle className="size-4 text-emerald-600 shrink-0" />
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 text-xs text-blue-900 flex items-center gap-3">
              <Smartphone className="size-6 text-blue-600 shrink-0" />
              <div>
                <strong>Web App leve e instantâneo:</strong> O entregador não precisa baixar nada da Play Store nem ocupar a memória do celular. O acesso é feito com código rápido pelo navegador.
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenTrial}
                className="px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-sm transition-all cursor-pointer flex items-center gap-2"
              >
                <Sparkles className="size-4 text-blue-200" />
                Quero o App do Entregador na Minha Revenda
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>

          {/* Lado Direito: Mockup Realista do Smartphone do Entregador */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-[300px] sm:w-[320px] rounded-[36px] bg-[#0d1b2e] p-3 shadow-2xl text-slate-800 border-4 border-slate-700">
              {/* Dynamic Island */}
              <div className="w-20 h-4 bg-slate-900 rounded-full mx-auto mb-3" />

              {/* Tela do Aplicativo do Entregador */}
              <div className="bg-[#f8fafc] rounded-[24px] p-3.5 space-y-3 text-xs overflow-hidden select-none border border-slate-200">
                {/* Header do App Mobile */}
                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <div className="size-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                      <Truck className="size-4" />
                    </div>
                    <div>
                      <div className="font-black text-xs text-slate-900">Carlos Moto 01</div>
                      <div className="text-[10px] text-emerald-600 font-bold">Online • 4 em Carga</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    2 Entregas
                  </span>
                </div>

                {/* Abas Mobile */}
                <div className="flex gap-1 bg-slate-200/70 p-1 rounded-lg text-center text-[10px] font-bold">
                  <span className="flex-1 py-1 rounded bg-white text-slate-900 shadow-xs">
                    Pendentes (1)
                  </span>
                  <span className="flex-1 py-1 text-slate-600">
                    Em Rota (1)
                  </span>
                  <span className="flex-1 py-1 text-slate-600">
                    Entregues (12)
                  </span>
                </div>

                {/* Card de Entrega Ativa */}
                <div className="p-3 rounded-xl bg-white border border-blue-300 shadow-sm space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-black text-xs text-slate-900">#1082 • Maria Aparecida</span>
                    <span className="text-[9px] font-bold text-blue-700 bg-blue-100 px-1.5 py-0.2 rounded">
                      EM ROTA
                    </span>
                  </div>

                  <div className="text-[11px] text-slate-600">
                    📍 Rua das Palmeiras, 142 - Jd. São Paulo
                    <div className="text-[10px] text-slate-500 mt-0.5">Ref: Próximo à padaria</div>
                  </div>

                  <div className="flex justify-between items-center p-2 rounded bg-slate-50 border border-slate-200 text-[11px]">
                    <span className="font-semibold text-slate-800">1x Botijão P13 Ultragaz</span>
                    <span className="font-black text-emerald-700">R$ 115,00 (Pix)</span>
                  </div>

                  <div className="grid grid-cols-2 gap-1.5 pt-1">
                    <button className="py-1.5 rounded-lg bg-blue-600 text-white font-bold text-[10px] flex items-center justify-center gap-1 shadow-xs">
                      <Navigation className="size-3" /> Waze / Maps
                    </button>
                    <button className="py-1.5 rounded-lg bg-emerald-600 text-white font-bold text-[10px] flex items-center justify-center gap-1 shadow-xs">
                      <CheckCircle className="size-3" /> Concluir
                    </button>
                  </div>
                </div>

                {/* Resumo de Comissão do Entregador */}
                <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 flex justify-between items-center text-[10px]">
                  <span className="font-bold text-emerald-900">Entregas hoje: 13 botijões</span>
                  <span className="font-black text-emerald-700 text-xs">Comissão: R$ 65,00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};