import React from 'react';
import { DISTRIBUIDORAS } from '../data/content';
import { Flame } from 'lucide-react';

export const BrandsBar: React.FC = () => {
  return (
    <div className="border-y border-slate-800/80 bg-gas-900/60 py-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left shrink-0">
            <span className="text-[11px] font-bold uppercase tracking-wider text-flame-400 flex items-center justify-center md:justify-start gap-1">
              <Flame className="size-3.5" /> Compatibilidade Total
            </span>
            <h3 className="text-sm sm:text-base font-extrabold text-white mt-0.5">
              Feito sob medida para todas as distribuidoras do Brasil:
            </h3>
          </div>

          {/* Grid de Bandeiras */}
          <div className="flex items-center justify-center flex-wrap gap-2.5 sm:gap-3">
            {DISTRIBUIDORAS.map((dist, idx) => (
              <div
                key={idx}
                className="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 border shadow-sm transition-transform hover:scale-105"
                style={{
                  backgroundColor: 'rgba(15, 23, 42, 0.85)',
                  borderColor: dist.border,
                  color: dist.color,
                }}
              >
                <span
                  className="size-2 rounded-full"
                  style={{ backgroundColor: dist.color }}
                />
                <span className="text-white font-extrabold tracking-tight">
                  {dist.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};