import React from 'react';
import {
  Zap,
  Package,
  Truck,
  ShoppingCart,
  Users,
  Receipt,
  FileText,
  Cloud,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

export const FeaturesGrid: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'PDV & Televendas em 10 Segundos',
      desc: 'Localização instantânea de cliente por telefone, preenchimento automático do endereço, histórico do último botijão e cálculo de troco.',
      color: 'text-flame-400',
      border: 'hover:border-flame-500/40',
    },
    {
      icon: Truck,
      title: 'Aplicativo do Entregador com GPS',
      desc: 'Rotas automáticas no Waze e Google Maps, WhatsApp direto com o cliente, recebimento por PIX QR Code e baixa de vasilhames na hora.',
      color: 'text-cyan-400',
      border: 'hover:border-cyan-500/40',
    },
    {
      icon: ShoppingCart,
      title: 'Cardápio Digital com Link Próprio',
      desc: 'Seu cliente pede em 3 cliques pelo WhatsApp sem pagar 15% a 25% de taxas para o iFood ou Zé Delivery. Todo o lucro fica com você.',
      color: 'text-emerald-400',
      border: 'hover:border-emerald-500/40',
    },
    {
      icon: Package,
      title: 'Controle Rigoroso de Vasilhames',
      desc: 'Saldo em tempo real de botijões cheios vs vazios na portaria e em trânsito com cada entregador. Zero perdas de patrimônio.',
      color: 'text-amber-400',
      border: 'hover:border-amber-500/40',
    },
    {
      icon: Users,
      title: 'CRM Inteligente: Alerta de Recompra',
      desc: 'O sistema calcula o tempo médio que cada família leva para secar o botijão e avisa para você mandar mensagem antes da concorrência.',
      color: 'text-purple-400',
      border: 'hover:border-purple-500/40',
    },
    {
      icon: Receipt,
      title: 'Fechamento Cego de Caixa & DRE',
      desc: 'Conferência detalhada de dinheiro, PIX, cartões de crédito/débito e fiados por turno. Demonstrativo de resultados e lucratividade.',
      color: 'text-blue-400',
      border: 'hover:border-blue-500/40',
    },
    {
      icon: FileText,
      title: 'Contratos Oficiais de Comodato em PDF',
      desc: 'Emissão com 1 clique de contratos jurídicos com cláusulas de zelo, multa e foro para cessão de cilindros P45 e vasilhames para restaurantes.',
      color: 'text-rose-400',
      border: 'hover:border-rose-500/40',
    },
    {
      icon: Cloud,
      title: '100% em Nuvem & Sem Instalação',
      desc: 'Acesse de qualquer computador, notebook, tablet ou celular. Seus dados ficam salvos em servidores seguros com backup diário automático.',
      color: 'text-teal-400',
      border: 'hover:border-teal-500/40',
    },
  ];

  return (
    <section className="py-20 sm:py-28 relative bg-gas-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-flame-400 bg-flame-500/10 px-3 py-1 rounded-full border border-flame-500/20">
            Tudo Incluído em uma Única Assinatura
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
            As funcionalidades que transformam sua revenda em uma máquina de vendas
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300">
            Chega de usar três ou quatro programas diferentes. O LMA Gás resolve do atendimento telefônico até a prestação de contas na rua.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className={`glass-card p-6 rounded-2xl border border-slate-800 ${feat.border} transition-all duration-300 group hover:-translate-y-1`}
              >
                <div className={`size-12 rounded-xl bg-gas-900 border border-slate-700/80 flex items-center justify-center ${feat.color} mb-4 shadow-sm group-hover:scale-110 transition-transform`}>
                  <Icon className="size-6" />
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-flame-300 transition-colors">
                  {feat.title}
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};