import React from 'react';
import { TESTIMONIALS_DATA } from '../data/content';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 relative bg-gas-900/40 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Quem Usa Recomenda
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
            Revendedores que transformaram suas operações com o <span className="text-gradient-flame">LMA GÁS</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300">
            Depoimentos reais de quem está na linha de frente do comércio de gás e água em diferentes cidades do Brasil.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS_DATA.map((item, idx) => (
            <div
              key={idx}
              className="glass-card p-6 sm:p-7 rounded-3xl border border-slate-800 hover:border-flame-500/30 transition-all flex flex-col justify-between relative group"
            >
              <div>
                {/* 5 Estrelas */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-4 fill-amber-400" />
                  ))}
                </div>

                {/* Destaque do Depoimento */}
                <div className="text-sm font-bold text-flame-300 mb-3">
                  "{item.highlight}"
                </div>

                {/* Texto da Citação */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Autor */}
              <div className="mt-6 pt-5 border-t border-slate-800 flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="size-11 rounded-full object-cover border border-slate-700"
                />
                <div>
                  <div className="font-extrabold text-sm text-white">{item.name}</div>
                  <div className="text-[11px] text-slate-400">{item.role} • {item.company}</div>
                  <div className="text-[10px] text-emerald-400 font-semibold">{item.city} • {item.bottlesPerMonth}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};