import React from 'react';
import { ArrowRight, CheckCircle2, Play, Sparkles, Star } from 'lucide-react';
import { HERO_DATA } from '../data/content';

interface HeroProps {
  onOpenTrial: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTrial }) => {
  return (
    <section id="inicio" className="pt-8 pb-16 sm:pt-14 sm:pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Lado Esquerdo: Conteúdo Principal */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Texto de identificação */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-semibold">
              <span className="size-2 rounded-full bg-emerald-500" />
              <span>{HERO_DATA.badge}</span>
            </div>

            {/* Título Principal */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black text-[#0d1b2e] tracking-tight leading-[1.15]">
              Sua revenda de gás <br className="hidden sm:inline" />
              <span className="text-emerald-600">mais organizada,</span> <br className="hidden sm:inline" />
              do pedido à entrega.
            </h1>

            {/* Descrição Direta ao Ponto */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl">
              {HERO_DATA.description}
            </p>

            {/* Botões de Ação */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={onOpenTrial}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-extrabold text-sm sm:text-base shadow-sm hover:shadow transition-all cursor-pointer"
              >
                <span>Testar grátis por 7 dias</span>
                <ArrowRight className="size-4" />
              </button>

              <a
                href="#demonstracao"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-700 font-bold text-sm sm:text-base transition-colors"
              >
                <Play className="size-4 text-slate-500 fill-slate-500" />
                <span>Ver demonstração</span>
              </a>
            </div>

            {/* Três Benefícios em Destaque */}
            <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm font-medium text-slate-600">
              {HERO_DATA.benefits.map((item, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Lado Direito: Ilustração Animada do Entregador deixando o Gás para a Dona de Casa */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-lg">
              {/* Moldura da Ilustração com Cantos Arredondados e Sombra */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-gradient-to-b from-sky-50 to-amber-50 aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src="/images/hero-entrega-anime.svg"
                  alt="Entregador uniformizado deixando o botijão de gás para a dona de casa"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Pill Flutuante Superior */}
              <div className="absolute -top-4 -right-2 sm:-right-4 bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-lg flex items-center gap-2.5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-3.5 fill-amber-400" />
                  ))}
                </div>
                <div className="text-xs font-bold text-slate-800">
                  +500 <span className="font-normal text-slate-500">revendas organizadas</span>
                </div>
              </div>

              {/* Card Flutuante Inferior */}
              <div className="absolute -bottom-4 -left-3 sm:-left-6 bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200 shadow-lg flex items-center gap-3">
                <div className="size-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  ✓
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Do pedido à entrega</div>
                  <div className="text-[11px] text-slate-500">Agilidade no balcão e no motoboy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};