import React from 'react';
import {
  Check,
  Sparkles,
  Monitor,
  Flame,
  Truck,
  Users,
  Wallet,
  Package,
  Smartphone,
  Store,
  ArrowRight
} from 'lucide-react';
import { SYSTEM_BENEFITS } from '../data/content';
import { InteractiveSimulator } from './InteractiveSimulator';

interface SystemPresentationProps {
  onOpenTrial: () => void;
}

export const SystemPresentation: React.FC<SystemPresentationProps> = ({ onOpenTrial }) => {
  return (
    <section id="demonstracao" className="py-14 sm:py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* ── 1. BANNER OFICIAL DO SISTEMA COMPLETO PARA REVENDA DE GÁS ── */}
        <div>
          {/* Exibição em telas desktop e tablets: Banner Completo em Alta Definição */}
          <div className="hidden sm:block">
            <img
              src="/images/banner-sistema-completo-gas.jpg"
              alt="Sistema Completo para Revenda de Gás - Mais controle, agilidade e lucro para o seu negócio"
              className="w-full h-auto rounded-2xl shadow-sm border border-slate-200"
              loading="eager"
            />
          </div>

          {/* Exibição em dispositivos móveis: Cards Individuais da Própria Imagem perfeitamente legíveis */}
          <div className="sm:hidden space-y-4">
            <div className="text-center px-1 mb-3">
              <span className="text-[10px] font-black uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                Sistema Completo para Revenda de Gás
              </span>
              <h2 className="text-lg font-black text-[#0d1b2e] mt-2 leading-tight">
                Mais controle, agilidade e lucro para o seu negócio
              </h2>
              <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                Do pedido à entrega, tudo em um só lugar. Gerencie sua revenda de gás com tecnologia, segurança e praticidade.
              </p>
            </div>
            <div className="space-y-3">
              <img
                src="/images/card-banner-1.jpg"
                alt="1. Depósito - Controle total do estoque"
                className="w-full h-auto rounded-xl shadow-xs border border-slate-200"
              />
              <img
                src="/images/card-banner-2.jpg"
                alt="2. Entrega Ágil - Entregas mais rápidas e organizadas"
                className="w-full h-auto rounded-xl shadow-xs border border-slate-200"
              />
              <img
                src="/images/card-banner-3.jpg"
                alt="3. Clientes Inativos (+60D) - Reative seus clientes e aumente suas vendas"
                className="w-full h-auto rounded-xl shadow-xs border border-slate-200"
              />
              <img
                src="/images/card-banner-4.jpg"
                alt="4. Financeiro - Contas e fluxo de caixa"
                className="w-full h-auto rounded-xl shadow-xs border border-slate-200"
              />
            </div>
          </div>
        </div>

        {/* ── 2. CABEÇALHO DO SIMULADOR E BENEFÍCIOS PRÁTICOS ── */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            <Sparkles className="size-3.5 text-emerald-600" />
            Simulador Interativo do Sistema
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-[#0d1b2e] tracking-tight">
            Experimente o LMA GÁS funcionando na prática
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Navegue pelas abas abaixo, faça lançamentos de vendas no PDV, despache entregadores, controle o estoque de botijões e teste o fechamento de caixa cego. Tudo funciona em tempo real.
          </p>
        </div>

        {/* ── 3. RESUMO DOS BENEFÍCIOS OPERACIONAIS EM GRID MODERNO ── */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {[
            {
              icon: <Flame className="size-4 text-emerald-700" />,
              title: "PDV em 10s",
              desc: "Balcão e entrega ágeis"
            },
            {
              icon: <Truck className="size-4 text-blue-700" />,
              title: "Rotas Waze/Maps",
              desc: "Despacho para motoboys"
            },
            {
              icon: <Package className="size-4 text-amber-700" />,
              title: "Estoque Pátio",
              desc: "Cheios e vazios em dia"
            },
            {
              icon: <Users className="size-4 text-purple-700" />,
              title: "Inativos (+60d)",
              desc: "Resgate via WhatsApp"
            },
            {
              icon: <Wallet className="size-4 text-emerald-700" />,
              title: "Caixa Cego",
              desc: "Fechamento sem desvios"
            },
            {
              icon: <Store className="size-4 text-blue-700" />,
              title: "Cardápio Próprio",
              desc: "0% de comissões online"
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between hover:bg-white hover:shadow-xs transition-all"
            >
              <div className="flex items-center gap-2 mb-1.5">
                <div className="size-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-2xs">
                  {item.icon}
                </div>
                <strong className="text-xs font-bold text-slate-900">{item.title}</strong>
              </div>
              <p className="text-[11px] text-slate-500 leading-tight">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* ── 4. SIMULADOR REAL DO SISTEMA (AMPLIADO E TOTALMENTE INTERATIVO) ── */}
        <div className="w-full">
          <InteractiveSimulator onOpenTrial={onOpenTrial} />
        </div>
      </div>
    </section>
  );
};
