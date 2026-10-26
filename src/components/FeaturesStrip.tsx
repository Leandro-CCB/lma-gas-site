import React from 'react';
import {
  ShoppingCart,
  Package,
  Truck,
  Users,
  Store,
  Bike,
  Wallet,
  BarChart3,
  CheckCircle2,
} from 'lucide-react';

export const FeaturesStrip: React.FC = () => {
  const items = [
    {
      icon: ShoppingCart,
      title: 'PDV Rápido (Balcão e Tele-Entrega)',
      desc: 'Registre vendas de P13, P20, P45 e água 20L em 3 cliques com baixa automática de estoque e lançamento imediato no caixa.',
      tag: 'Plano Básico & Pro',
    },
    {
      icon: Truck,
      title: 'Fila de Entregas + Rota no Waze',
      desc: 'Painel de despacho em tempo real (Pendente, Em Rota e Entregue) com botão direto para o Waze e aviso no WhatsApp do cliente.',
      tag: 'Plano Básico & Pro',
    },
    {
      icon: Users,
      title: 'Alerta de Clientes Inativos (+60 Dias)',
      desc: 'O sistema identifica automaticamente quais clientes não compram há mais de 60 dias para você reativar a venda pelo WhatsApp.',
      tag: 'Plano Básico & Pro',
    },
    {
      icon: Package,
      title: 'Estoque e Entrada de Caminhão',
      desc: 'Controle de botijões, galões e kits reguladores com alerta de estoque mínimo e registro de compras por fornecedor.',
      tag: 'Plano Básico & Pro',
    },
    {
      icon: Wallet,
      title: 'Caixa Diário & Contas a Pagar',
      desc: 'Entradas por PIX, Dinheiro, Cartão e Fiado, sangrias de despesa e baixa de boletos integrada ao saldo do dia.',
      tag: 'Plano Básico & Pro',
    },
    {
      icon: BarChart3,
      title: 'Relatórios Gerenciais em PDF',
      desc: 'Análise consolidada de faturamento, custo de reposição, lucro líquido e ranking de produtos pronta para exportar em PDF.',
      tag: 'Plano Básico & Pro',
    },
    {
      icon: Store,
      title: 'Cardápio Digital com Link Próprio',
      desc: 'Link exclusivo para o cliente pedir pelo celular sem baixar aplicativo. O pedido toca na tela e você aprova em 1 clique.',
      tag: 'Exclusivo Plano Pro',
      highlight: true,
    },
    {
      icon: Bike,
      title: 'App Exclusivo do Entregador',
      desc: 'Acesso restrito para cada motoboy ver apenas as entregas dele, abrir o endereço no Waze e concluir a entrega na rua.',
      tag: 'Exclusivo Plano Pro',
      highlight: true,
    },
  ];

  return (
    <section id="recursos" className="py-16 sm:py-20 bg-white border-y border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Tudo o que Sua Distribuidora Precisa
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0d1b2e] mt-3 tracking-tight">
            Módulos reais pensados para a rotina do depósito de gás
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed">
            Sem telas complicadas: sua portaria e seus entregadores aprendem a usar no primeiro dia.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`p-5 rounded-2xl border transition-all flex flex-col justify-between ${
                  item.highlight
                    ? 'bg-gradient-to-b from-emerald-50/70 to-white border-emerald-300 shadow-sm'
                    : 'bg-[#f8fafc] border-slate-200 hover:border-emerald-300 hover:bg-white'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`size-10 rounded-xl flex items-center justify-center shrink-0 border ${
                        item.highlight
                          ? 'bg-emerald-600 text-white border-emerald-600'
                          : 'bg-emerald-50 text-emerald-700 border-emerald-100'
                      }`}
                    >
                      <Icon className="size-5" />
                    </div>
                    <span
                      className={`text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full ${
                        item.highlight
                          ? 'bg-emerald-700 text-white'
                          : 'bg-slate-200/80 text-slate-700'
                      }`}
                    >
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="font-black text-sm text-[#0d1b2e]">{item.title}</h3>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">{item.desc}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/70 flex items-center gap-1.5 text-[11px] font-bold text-emerald-700">
                  <CheckCircle2 className="size-3.5 shrink-0" />
                  <span>Disponível no simulador acima</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
