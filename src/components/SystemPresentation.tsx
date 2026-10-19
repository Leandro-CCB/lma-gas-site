import React, { useState } from 'react';
import {
  CheckCircle2,
  ShoppingCart,
  Truck,
  Users,
  Wallet,
  Clock,
  MapPin,
  Sparkles,
  ArrowRight,
  Package,
} from 'lucide-react';

interface SystemPresentationProps {
  onOpenTrial: () => void;
}

export const SystemPresentation: React.FC<SystemPresentationProps> = ({ onOpenTrial }) => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'venda' | 'entregas' | 'clientes' | 'caixa'>('dashboard');

  return (
    <section id="demonstracao" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Interface do Sistema
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0d1b2e] mt-3 tracking-tight">
            Tudo o que sua revenda precisa em um só lugar.
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Um sistema simples e prático, desenvolvido para facilitar o dia a dia das revendas de gás e água.
          </p>
        </div>

        {/* 4 Blocos com Imagens Reais de Revenda de Gás */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* 1. Depósito de Gás */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs group hover:border-emerald-300 transition-all">
            <div className="aspect-[16/10] overflow-hidden bg-slate-100">
              <img
                src="/images/deposito-botijoes.jpg"
                alt="Depósito de botijões de gás organizado em gaiolas"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h4 className="font-bold text-sm text-[#0d1b2e]">Depósito de Botijões</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Controle o saldo de botijões cheios e vazios no estoque da sua revenda com alerta de nível mínimo.
              </p>
            </div>
          </div>

          {/* 2. Entregador de Gás com Botijão */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs group hover:border-emerald-300 transition-all">
            <div className="aspect-[16/10] overflow-hidden bg-slate-100">
              <img
                src="/images/entregador-botijao.jpg"
                alt="Entregador uniformizado carregando botijão de gás para entrega"
                className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h4 className="font-bold text-sm text-[#0d1b2e]">Entrega de Botijões</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Despache botijões com rapidez para os entregadores e acompanhe os status das entregas.
              </p>
            </div>
          </div>

          {/* 3. Fogão a Gás e Cozinha */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs group hover:border-emerald-300 transition-all">
            <div className="aspect-[16/10] overflow-hidden bg-slate-100">
              <img
                src="/images/fogao-cozinha.jpg"
                alt="Fogão a gás aceso com chama azul na cozinha do cliente"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h4 className="font-bold text-sm text-[#0d1b2e]">Gás Sempre Aceso</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Identifique clientes há mais de 60 dias sem comprar e ligue no momento exato antes de acabar o gás.
              </p>
            </div>
          </div>

          {/* 4. Carga e Distribuição de Gás */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs group hover:border-emerald-300 transition-all">
            <div className="aspect-[16/10] overflow-hidden bg-slate-100">
              <img
                src="/images/entrega-caminhao-gas.jpg"
                alt="Carga e transporte de botijões de gás para revenda"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h4 className="font-bold text-sm text-[#0d1b2e]">Carga &amp; Transporte</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Acompanhe as entradas de novas cargas de botijões e mantenha a operação rodando sem gargalos.
              </p>
            </div>
          </div>
        </div>

        {/* Telas Reais do Sistema em Abas Simples */}
        <div className="rounded-2xl border border-slate-300 bg-[#f8fafc] p-4 sm:p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
            <div>
              <h3 className="font-bold text-base text-[#0d1b2e]">Telas do LMA GÁS</h3>
              <p className="text-xs text-slate-500">Veja o visual das principais ferramentas do sistema</p>
            </div>

            {/* Abas */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              {[
                { id: 'dashboard', label: 'Dashboard' },
                { id: 'venda', label: 'Nova Venda' },
                { id: 'entregas', label: 'Entregas' },
                { id: 'clientes', label: 'Clientes (+60d)' },
                { id: 'caixa', label: 'Caixa' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-[#0d1b2e] text-white shadow-xs'
                      : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Área de Visualização da Tela */}
          <div className="pt-4">
            {/* 1. ABA DASHBOARD */}
            {activeTab === 'dashboard' && (
              <div className="space-y-4 animate-fade-in text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <div className="text-slate-500 font-medium">Vendas Hoje</div>
                    <div className="text-xl sm:text-2xl font-black text-[#0d1b2e] mt-1">R$ 1.840,00</div>
                    <div className="text-[11px] text-emerald-700 font-bold mt-0.5">16 pedidos concluídos</div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <div className="text-slate-500 font-medium">Saldo do Caixa</div>
                    <div className="text-xl sm:text-2xl font-black text-blue-700 mt-1">R$ 1.420,00</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">+R$ 1.840 entradas / -R$ 420 saídas</div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <div className="text-slate-500 font-medium">Contas a Pagar</div>
                    <div className="text-xl sm:text-2xl font-black text-emerald-700 mt-1">0 Vencidas</div>
                    <div className="text-[11px] text-emerald-700 font-bold mt-0.5">Tudo em dia</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="font-bold text-slate-800 text-xs mb-2">Estoque de Botijões por Tipo</div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    <div className="p-2 rounded bg-slate-50 border border-slate-200 flex justify-between items-center">
                      <span>Botijão P13</span>
                      <strong className="text-emerald-700">142 un</strong>
                    </div>
                    <div className="p-2 rounded bg-slate-50 border border-slate-200 flex justify-between items-center">
                      <span>Botijão P20</span>
                      <strong className="text-emerald-700">18 un</strong>
                    </div>
                    <div className="p-2 rounded bg-slate-50 border border-slate-200 flex justify-between items-center">
                      <span>Cilindro P45</span>
                      <strong className="text-amber-700">8 un</strong>
                    </div>
                    <div className="p-2 rounded bg-slate-50 border border-slate-200 flex justify-between items-center">
                      <span>Água 20L</span>
                      <strong className="text-blue-700">35 un</strong>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 2. ABA NOVA VENDA */}
            {activeTab === 'venda' && (
              <div className="space-y-3 animate-fade-in text-xs">
                <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-2">
                  <div className="flex gap-2">
                    <span className="px-3 py-1 rounded bg-slate-100 font-bold text-slate-700">Balcão</span>
                    <span className="px-3 py-1 rounded bg-emerald-600 font-bold text-white">Entrega (Delivery)</span>
                  </div>
                  <div className="pt-1 flex justify-between items-center text-slate-700">
                    <span>Cliente: <strong>Maria Aparecida Santos</strong></span>
                    <span>Tel: (11) 98765-4321</span>
                  </div>
                  <div className="text-slate-500 text-[11px]">
                    Endereço: Rua das Palmeiras, 142 - Jd. São Paulo
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white border border-slate-200 flex justify-between items-center">
                  <div>
                    <span className="font-bold text-slate-800">1x Botijão P13 (GLP)</span>
                    <div className="text-[10px] text-slate-500">Estoque atual: 142 un</div>
                  </div>
                  <span className="font-black text-emerald-700 text-sm">R$ 115,00</span>
                </div>

                <div className="p-3 rounded-xl bg-white border border-slate-200 flex justify-between items-center">
                  <span className="text-slate-600">Pagamento: <strong>Pix</strong> • Entregador: <strong>Carlos (Moto 01)</strong></span>
                  <button className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-bold text-xs">
                    Concluir Pedido
                  </button>
                </div>
              </div>
            )}

            {/* 3. ABA ENTREGAS */}
            {activeTab === 'entregas' && (
              <div className="space-y-3 animate-fade-in text-xs">
                <div className="flex gap-2">
                  <span className="px-3 py-1 rounded-full font-bold bg-amber-100 text-amber-800">
                    Pendentes (1)
                  </span>
                  <span className="px-3 py-1 rounded-full font-bold bg-blue-100 text-blue-800">
                    Em Rota (2)
                  </span>
                  <span className="px-3 py-1 rounded-full font-bold bg-emerald-100 text-emerald-800">
                    Entregues (13)
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-slate-800">#1084 • Carlos Alberto - Centro</span>
                    <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold text-[10px]">
                      Em Rota
                    </span>
                  </div>
                  <div className="text-slate-600 text-[11px]">
                    📍 Av. Tiradentes, 450 • 1x Botijão P13 • R$ 115,00 (Dinheiro)
                  </div>
                  <div className="flex justify-between items-center pt-1">
                    <span className="text-slate-500">Entregador: <strong>Fábio (Moto 02)</strong></span>
                    <span className="text-blue-600 font-bold cursor-pointer">
                      Abrir Rota no Waze / Maps
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* 4. ABA CLIENTES INATIVOS */}
            {activeTab === 'clientes' && (
              <div className="space-y-3 animate-fade-in text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-slate-500 font-semibold">Sem compra há:</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600">Todos</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-500 text-white font-bold">
                    +60 dias (14)
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 font-bold">
                    +90 dias (8)
                  </span>
                </div>

                <div className="bg-white rounded-xl border border-slate-200 divide-y divide-slate-100 overflow-hidden">
                  <div className="p-2.5 flex items-center justify-between">
                    <div>
                      <strong className="text-slate-800 block">Antônio Marcos Ferreira</strong>
                      <span className="text-slate-500 text-[11px]">(11) 98111-2233 • Centro</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="badge-red px-2 py-0.5 rounded font-bold text-[10px]">
                        64d sem comprar
                      </span>
                      <button className="px-2.5 py-1 rounded bg-emerald-600 text-white font-bold text-[10px]">
                        WhatsApp
                      </button>
                    </div>
                  </div>

                  <div className="p-2.5 flex items-center justify-between">
                    <div>
                      <strong className="text-slate-800 block">Padaria Pão de Mel</strong>
                      <span className="text-slate-500 text-[11px]">(11) 97222-3344 • Vila Nova</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="badge-red px-2 py-0.5 rounded font-bold text-[10px]">
                        72d sem comprar
                      </span>
                      <button className="px-2.5 py-1 rounded bg-emerald-600 text-white font-bold text-[10px]">
                        WhatsApp
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 5. ABA CAIXA */}
            {activeTab === 'caixa' && (
              <div className="space-y-3 animate-fade-in text-xs">
                <div className="grid grid-cols-3 gap-2">
                  <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200">
                    <span className="text-emerald-800 font-bold text-[10px]">Entradas</span>
                    <div className="text-base font-black text-emerald-700 mt-0.5">+ R$ 1.840,00</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-rose-50 border border-rose-200">
                    <span className="text-rose-800 font-bold text-[10px]">Saídas</span>
                    <div className="text-base font-black text-rose-700 mt-0.5">- R$ 420,00</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-blue-50 border border-blue-200">
                    <span className="text-blue-800 font-bold text-[10px]">Saldo Atual</span>
                    <div className="text-base font-black text-blue-700 mt-0.5">R$ 1.420,00</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white border border-slate-200">
                  <div className="font-bold text-slate-800">Fechamento Cego de Turno</div>
                  <p className="text-slate-500 text-[11px] mt-0.5">
                    O operador informa a contagem física do dinheiro, Pix e cartões no encerramento, e o sistema confere automaticamente.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};