import React from 'react';
import { ShoppingCart, Package, Truck, Users } from 'lucide-react';

export const FeaturesStrip: React.FC = () => {
  const items = [
    {
      icon: ShoppingCart,
      title: 'Vendas e Pedidos',
      desc: 'Registre e acompanhe todos os pedidos no balcão e delivery em segundos.',
    },
    {
      icon: Package,
      title: 'Estoque de Botijões',
      desc: 'Controle botijões cheios e vazios (P13, P20, P45) e galões de água com alerta de reposição.',
    },
    {
      icon: Truck,
      title: 'Painel de Entregas',
      desc: 'Acompanhe as entregas em tempo real e organize o despacho dos motoboys com rotas no Waze.',
    },
    {
      icon: Users,
      title: 'Gestão de Clientes',
      desc: 'Cadastro automático, histórico de compras e alerta de clientes sem pedir há mais de 60 dias.',
    },
  ];

  return (
    <section id="recursos" className="py-8 bg-[#f8fafc] border-y border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-emerald-300 transition-all flex items-start gap-3.5"
              >
                <div className="size-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-100">
                  <Icon className="size-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#0d1b2e]">{item.title}</h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
