import React from 'react';
import { DISTRIBUIDORAS } from '../data/content';
import { Flame } from 'lucide-react';

export const BrandsBar: React.FC = () => {
  return (
    <div className="border-y border-slate-200 bg-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="text-center md:text-left shrink-0">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 flex items-center justify-center md:justify-start gap-1">
              <Flame className="size-3.5 fill-emerald-600 text-emerald-600" /> Compatibilidade Total
            </span>
            <h3 className="text-sm sm:text-base font-extrabold text-[#0d1b2e] mt-0.5">
              Homologado para revendas de todas as distribuidoras:
            </h3>
          </div>

          <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-2.5">
            {DISTRIBUIDORAS.map((dist, idx) => (
              <div
                key={idx}
                className="px-3.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-2 border shadow-xs transition-transform hover:scale-105"
                style={{
                  backgroundColor: dist.bg,
                  borderColor: dist.border,
                  color: dist.color,
                }}
              >
                <span
                  className="size-2 rounded-full"
                  style={{ backgroundColor: dist.color }}
                />
                <span className="font-extrabold tracking-tight">
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