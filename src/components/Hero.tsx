import React, { useState } from 'react';
import { HERO_DATA } from '../data/content';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  ChevronRight,
  TrendingUp,
  Truck,
  ShoppingCart,
  Users,
  Wallet,
  Clock,
  MapPin,
  Flame,
  AlertTriangle,
} from 'lucide-react';

interface HeroProps {
  onOpenTrial: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTrial }) => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'venda' | 'entregas' | 'clientes'>('dashboard');

  return (
    <section className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 overflow-hidden bg-[#f8fafc]">
      {/* Luzes de Fundo Suaves em Tema Claro */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-emerald-100/50 via-blue-50/40 to-transparent blur-[90px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge Oficial */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-300 text-slate-700 text-xs sm:text-sm font-semibold shadow-soft mb-6">
            <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-emerald-700 font-bold">{HERO_DATA.badge}</span>
          </div>

          {/* Título Principal */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0d1b2e] tracking-tight leading-[1.15]">
            O sistema definitivo para{' '}
            <span className="text-emerald-600">organizar, vender e entregar</span>{' '}
            gás e água mineral.
          </h1>

          {/* Subtítulo */}
          <p className="mt-5 text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-3xl">
            {HERO_DATA.subheadline}
          </p>

          {/* Bullets de Benefícios */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm font-semibold text-slate-700">
            {HERO_DATA.bulletPoints.map((item, idx) => (
              <span key={idx} className="flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                {item}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <button
              onClick={onOpenTrial}
              className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-black text-sm sm:text-base shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <Sparkles className="size-5 text-emerald-200" />
              TESTAR 7 DIAS GRÁTIS
              <ArrowRight className="size-5" />
            </button>

            <a
              href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20ver%20uma%20demonstra%C3%A7%C3%A3o%20do%20LMA%20G%C3%A1s%20para%20minha%20revenda."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-slate-300 hover:border-emerald-600 bg-white hover:bg-slate-50 text-slate-700 hover:text-emerald-700 font-bold text-sm sm:text-base transition-all shadow-sm"
            >
              <PhoneCall className="size-4 text-emerald-600" />
              Falar com Consultor no WhatsApp
            </a>

            <a
              href="#telas"
              className="flex items-center justify-center gap-2 px-5 py-4 rounded-xl text-slate-600 hover:text-[#0d1b2e] font-semibold text-sm sm:text-base hover:bg-slate-200/50 transition-colors"
            >
              Ver Telas Oficiais
              <ChevronRight className="size-4" />
            </a>
          </div>
        </div>

        {/* ── SHOWCASE INTERATIVO EM TEMA CLARO ── */}
        <div className="mt-14 sm:mt-18">
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Demonstração ao Vivo
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0d1b2e] mt-2">
              Navegue pelas telas do LMA GÁS
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Clique nas abas para visualizar a interface real utilizada pelas revendas no dia a dia.
            </p>
          </div>

          {/* Abas de Navegação */}
          <div className="flex items-center justify-center gap-2 flex-wrap mb-4">
            {[
              { id: 'dashboard', label: '📊 Início / Dashboard' },
              { id: 'venda', label: '⚡ Nova Venda (PDV)' },
              { id: 'entregas', label: '🛵 Painel de Entregas' },
              { id: 'clientes', label: '⚠️ Clientes (+60d sem comprar)' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#0d1b2e] text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Janela de Demonstração em Tema Claro */}
          <div className="rounded-2xl sm:rounded-3xl border border-slate-300 bg-white shadow-xl overflow-hidden">
            {/* Topbar da Janela estilo navegador */}
            <div className="bg-[#f1f5f9] px-4 py-3 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="size-3 rounded-full bg-rose-400 inline-block" />
                <span className="size-3 rounded-full bg-amber-400 inline-block" />
                <span className="size-3 rounded-full bg-emerald-400 inline-block" />
                <span className="ml-3 text-xs font-mono text-slate-500 hidden sm:inline">
                  https://gas.lmaapp.com.br/{activeTab === 'dashboard' ? '' : activeTab}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-100/70 px-2.5 py-0.5 rounded-full">
                  <span className="size-1.5 rounded-full bg-emerald-600 animate-pulse" />
                  Sistema Conectado
                </span>
              </div>
            </div>

            {/* Conteúdo Real da Tela */}
            <div className="p-4 sm:p-6 bg-[#f8fafc] min-h-[360px]">
              {/* 1. ABA DASHBOARD */}
              {activeTab === 'dashboard' && (
                <div className="space-y-4 animate-fade-in text-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-200 gap-2">
                    <div>
                      <div className="text-base sm:text-lg font-black text-[#0d1b2e]">
                        Olá, Administrador!
                      </div>
                      <div className="text-slate-500 text-xs">
                        Segunda-feira • Resumo em tempo real da revenda
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold">
                        16 Vendas Hoje
                      </span>
                      <span className="px-3 py-1 rounded-lg bg-blue-50 border border-blue-200 text-blue-800 font-bold">
                        Caixa: R$ 1.840,00
                      </span>
                    </div>
                  </div>

                  {/* 3 KPIs Principais do LMA Gás */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                      <div className="flex items-center justify-between text-slate-500 font-medium">
                        <span>Vendas Hoje</span>
                        <ShoppingCart className="size-4 text-emerald-600" />
                      </div>
                      <div className="text-2xl font-black text-[#0d1b2e] mt-1">R$ 1.840,00</div>
                      <div className="text-[11px] text-emerald-600 font-bold mt-0.5">16 pedidos concluídos</div>
                    </div>

                    <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                      <div className="flex items-center justify-between text-slate-500 font-medium">
                        <span>Saldo do Caixa</span>
                        <Wallet className="size-4 text-blue-600" />
                      </div>
                      <div className="text-2xl font-black text-[#0d1b2e] mt-1">R$ 1.420,00</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">+R$ 1.840 entradas / -R$ 420 saídas</div>
                    </div>

                    <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                      <div className="flex items-center justify-between text-slate-500 font-medium">
                        <span>Contas a Pagar</span>
                        <AlertTriangle className="size-4 text-emerald-600" />
                      </div>
                      <div className="text-2xl font-black text-emerald-600 mt-1">0 Vencidas</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">Tudo em dia nesta semana</div>
                    </div>
                  </div>

                  {/* Estoque de Botijões por Produto */}
                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                    <div className="font-bold text-slate-800 mb-2">Estoque de Produtos / Botijões</div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                        <div className="flex justify-between font-bold text-slate-800">
                          <span>Botijão P13</span>
                          <span className="text-emerald-700 bg-emerald-100 px-1.5 py-0.2 rounded text-[10px]">OK</span>
                        </div>
                        <div className="text-lg font-black text-[#0d1b2e] mt-0.5">142 un</div>
                        <div className="text-[10px] text-slate-500">Mínimo: 20 un</div>
                      </div>

                      <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                        <div className="flex justify-between font-bold text-slate-800">
                          <span>Botijão P20</span>
                          <span className="text-emerald-700 bg-emerald-100 px-1.5 py-0.2 rounded text-[10px]">OK</span>
                        </div>
                        <div className="text-lg font-black text-[#0d1b2e] mt-0.5">18 un</div>
                        <div className="text-[10px] text-slate-500">Mínimo: 5 un</div>
                      </div>

                      <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                        <div className="flex justify-between font-bold text-slate-800">
                          <span>Cilindro P45</span>
                          <span className="text-amber-800 bg-amber-100 px-1.5 py-0.2 rounded text-[10px]">Atenção</span>
                        </div>
                        <div className="text-lg font-black text-[#0d1b2e] mt-0.5">8 un</div>
                        <div className="text-[10px] text-slate-500">Mínimo: 5 un</div>
                      </div>

                      <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                        <div className="flex justify-between font-bold text-slate-800">
                          <span>Água Mineral 20L</span>
                          <span className="text-blue-800 bg-blue-100 px-1.5 py-0.2 rounded text-[10px]">OK</span>
                        </div>
                        <div className="text-lg font-black text-[#0d1b2e] mt-0.5">35 un</div>
                        <div className="text-[10px] text-slate-500">Mínimo: 10 un</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 2. ABA NOVA VENDA (PDV) */}
              {activeTab === 'venda' && (
                <div className="space-y-4 animate-fade-in text-xs">
                  <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                    <span className="font-bold text-sm text-[#0d1b2e]">Nova Venda • Balcão ou Delivery</span>
                    <span className="text-slate-500">Pedido rápido</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="md:col-span-2 space-y-3">
                      {/* Alternador Balcão / Entrega */}
                      <div className="p-2.5 rounded-xl bg-white border border-slate-200 flex gap-2">
                        <button className="flex-1 py-1.5 rounded-lg bg-slate-100 text-slate-600 font-bold">
                          Retirada no Balcão
                        </button>
                        <button className="flex-1 py-1.5 rounded-lg bg-emerald-600 text-white font-bold shadow-sm flex items-center justify-center gap-1.5">
                          <Truck className="size-3.5" /> Para Entrega (Delivery)
                        </button>
                      </div>

                      {/* Cliente e Endereço */}
                      <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1.5">
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-slate-800">Cliente: Maria Aparecida Santos</span>
                          <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold text-[10px]">
                            Telefone: (11) 98765-4321
                          </span>
                        </div>
                        <div className="text-slate-600 text-[11px]">
                          Endereço: Rua das Palmeiras, 142 • Bairro: Jd. São Paulo
                        </div>
                      </div>

                      {/* Seleção do Produto */}
                      <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-2">
                        <span className="font-bold text-slate-800">Produtos no Pedido:</span>
                        <div className="flex justify-between items-center p-2 rounded-lg bg-slate-50 border border-slate-200">
                          <div>
                            <span className="font-bold text-slate-800">1x Botijão P13 (Ultragaz)</span>
                            <div className="text-[10px] text-slate-500">Estoque atual: 142 un</div>
                          </div>
                          <span className="font-black text-emerald-700 text-sm">R$ 115,00</span>
                        </div>
                      </div>
                    </div>

                    {/* Resumo da Venda */}
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex flex-col justify-between">
                      <div className="space-y-2.5">
                        <span className="font-bold text-slate-800">Forma de Pagamento</span>
                        <div className="grid grid-cols-2 gap-1.5 text-[11px]">
                          <div className="p-1.5 rounded bg-emerald-50 border border-emerald-300 text-center font-bold text-emerald-800">
                            📱 Pix
                          </div>
                          <div className="p-1.5 rounded bg-slate-50 border border-slate-200 text-center text-slate-600">
                            💵 Dinheiro
                          </div>
                          <div className="p-1.5 rounded bg-slate-50 border border-slate-200 text-center text-slate-600">
                            💳 Débito
                          </div>
                          <div className="p-1.5 rounded bg-slate-50 border border-slate-200 text-center text-slate-600">
                            💳 Crédito
                          </div>
                        </div>

                        <div className="pt-2">
                          <span className="text-slate-500">Entregador:</span>
                          <div className="font-bold text-slate-800">Carlos - Moto 01</div>
                        </div>

                        <div className="pt-2 border-t border-slate-200 flex justify-between items-center">
                          <span className="font-bold text-slate-700">Total:</span>
                          <span className="text-xl font-black text-emerald-600">R$ 115,00</span>
                        </div>
                      </div>

                      <button
                        onClick={onOpenTrial}
                        className="w-full mt-4 py-2.5 rounded-lg bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-colors shadow-sm"
                      >
                        Concluir Venda &amp; Despachar
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* 3. ABA ENTREGAS */}
              {activeTab === 'entregas' && (
                <div className="space-y-4 animate-fade-in text-xs">
                  {/* Abas oficiais do app */}
                  <div className="flex gap-2 pb-2 border-b border-slate-200">
                    <span className="px-3 py-1 rounded-full font-bold bg-amber-100 text-amber-800">
                      🟡 Pendentes (2)
                    </span>
                    <span className="px-3 py-1 rounded-full font-bold bg-blue-100 text-blue-800">
                      🔵 Em Rota (1)
                    </span>
                    <span className="px-3 py-1 rounded-full font-bold bg-emerald-100 text-emerald-800">
                      🟢 Entregues (13)
                    </span>
                  </div>

                  {/* Cartão de Entrega */}
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-sm text-[#0d1b2e]">
                        Maria Aparecida Santos • Tel: (11) 98765-4321
                      </span>
                      <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold border border-blue-200">
                        Em Rota
                      </span>
                    </div>

                    <div className="text-slate-600">
                      📍 Rua das Palmeiras, 142 - Jd. São Paulo • Ref: Portão branco
                    </div>

                    <div className="flex justify-between items-center p-2 rounded bg-slate-50 border border-slate-200">
                      <span className="font-semibold text-slate-700">1x Botijão P13 (Ultragaz) • Pix</span>
                      <span className="font-black text-emerald-600 text-sm">R$ 115,00</span>
                    </div>

                    <div className="flex justify-between items-center pt-1">
                      <span className="text-slate-500">Entregador: <strong>Carlos (Moto 01)</strong> • Saiu às 11:24</span>
                      <div className="flex gap-2">
                        <button className="px-3 py-1 rounded bg-blue-600 text-white font-bold text-xs flex items-center gap-1 shadow-sm">
                          <MapPin className="size-3" /> Abrir Rota no GPS
                        </button>
                        <button className="px-3 py-1 rounded bg-emerald-600 text-white font-bold text-xs">
                          Confirmar Entrega
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 4. ABA CLIENTES INATIVOS */}
              {activeTab === 'clientes' && (
                <div className="space-y-4 animate-fade-in text-xs">
                  {/* Filtro do App */}
                  <div className="flex items-center gap-2 pb-2 border-b border-slate-200 flex-wrap">
                    <span className="text-slate-500 font-semibold flex items-center gap-1">
                      <Clock className="size-3.5 text-amber-600" /> Sem compra há:
                    </span>
                    <button className="px-3 py-1 rounded-full font-bold bg-slate-100 text-slate-700 border border-slate-300">
                      Todos
                    </button>
                    <button className="px-3 py-1 rounded-full font-bold bg-amber-500 text-white shadow-sm">
                      +60 dias (14 clientes)
                    </button>
                    <button className="px-3 py-1 rounded-full font-bold bg-rose-100 text-rose-800 border border-rose-300">
                      +90 dias (8 clientes)
                    </button>
                  </div>

                  {/* Tabela do App */}
                  <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                    <table className="w-full text-left">
                      <thead className="bg-slate-50 text-slate-600 font-bold border-b border-slate-200">
                        <tr>
                          <th className="p-2.5">Cliente</th>
                          <th className="p-2.5">Telefone</th>
                          <th className="p-2.5">Bairro</th>
                          <th className="p-2.5">Última Compra</th>
                          <th className="p-2.5 text-right">Ação</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr>
                          <td className="p-2.5 font-bold text-slate-800">Antônio Marcos Ferreira</td>
                          <td className="p-2.5 text-slate-600">(11) 98111-2233</td>
                          <td className="p-2.5 text-slate-600">Centro</td>
                          <td className="p-2.5">
                            <span className="badge-red px-2 py-0.5 rounded-full font-bold text-[10px]">
                              🔴 64d atrás
                            </span>
                          </td>
                          <td className="p-2.5 text-right">
                            <button className="px-2.5 py-1 rounded bg-emerald-600 text-white font-bold text-[10px]">
                              Chamar no WhatsApp
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-bold text-slate-800">Padaria Pão de Mel</td>
                          <td className="p-2.5 text-slate-600">(11) 97222-3344</td>
                          <td className="p-2.5 text-slate-600">Vila Nova</td>
                          <td className="p-2.5">
                            <span className="badge-red px-2 py-0.5 rounded-full font-bold text-[10px]">
                              🔴 72d atrás
                            </span>
                          </td>
                          <td className="p-2.5 text-right">
                            <button className="px-2.5 py-1 rounded bg-emerald-600 text-white font-bold text-[10px]">
                              Chamar no WhatsApp
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};