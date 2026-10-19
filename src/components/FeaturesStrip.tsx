import React from 'react';
import { ShoppingCart, Truck, Package, Users } from 'lucide-react';
import { CORE_FEATURES } from '../data/content';

export const FeaturesStrip: React.FC = () => {
  const icons: Record<string, React.ElementType> = {
    ShoppingCart,
    Truck,
    Package,
    Users
  };

  return (
    <div id="recursos" className="border-y border-slate-200 bg-[#f8fafc] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_FEATURES.map((item, idx) => {
            const IconComponent = icons[item.iconName] || ShoppingCart;
            return (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-start gap-3.5 transition-all hover:border-emerald-300 hover:shadow-sm"
              >
                <div className="size-11 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 font-bold border border-emerald-100">
                  <IconComponent className="size-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#0d1b2e]">{item.title}</h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};