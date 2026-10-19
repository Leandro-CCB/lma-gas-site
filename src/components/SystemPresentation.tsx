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
  Smartphone,
  Monitor,
  Flame,
  Check,
  Navigation,
  MessageSquare,
  FileText,
} from 'lucide-react';
import { SYSTEM_BENEFITS } from '../data/content';

interface SystemPresentationProps {
  onOpenTrial: () => void;
}

export const SystemPresentation: React.FC<SystemPresentationProps> = ({ onOpenTrial }) => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'venda' | 'entregas' | 'app_entregador' | 'inativos' | 'cardapio' | 'caixa'>('dashboard');

  return (
    <section id="demonstracao" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Interface e Recursos Reais
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0d1b2e] mt-3 tracking-tight">
            Tudo o que sua revenda precisa em um só lugar.
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Um sistema completo, fácil de usar e desenvolvido especialmente para a realidade das revendas de gás e água mineral.
          </p>
        </div>

        {/* ── 4 CARDS EM ANIMAÇÃO COLORIDA NA ORDEM SOLICITADA ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* 1. ESTOQUE DE GÁS */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs group hover:border-emerald-300 transition-all">
            <div className="aspect-[16/10] overflow-hidden bg-slate-50">
              <img
                src="/images/estoque-gas-anime.svg"
                alt="Estoque de gás organizado com botijões em gaiolas"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                1. Depósito
              </span>
              <h4 className="font-bold text-sm text-[#0d1b2e] mt-1.5">Estoque de Gás</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Controle o saldo de botijões cheios e vazios da sua revenda em tempo real, com alerta de reposição de carga.
              </p>
            </div>
          </div>

          {/* 2. ENTREGADOR UNIFORMIZADO COM BOTIJÃO NOS OMBROS */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs group hover:border-emerald-300 transition-all">
            <div className="aspect-[16/10] overflow-hidden bg-slate-50">
              <img
                src="/images/entregador-ombros-anime.svg"
                alt="Entregador uniformizado carregando botijão de gás nos ombros"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <span className="text-[10px] font-black uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                2. Entrega Rápida
              </span>
              <h4 className="font-bold text-sm text-[#0d1b2e] mt-1.5">Entregador com Botijão</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Despache botijões com rapidez para os entregadores e acompanhe as rotas no Waze e Maps pelo celular.
              </p>
            </div>
          </div>

          {/* 3. ATENDENTE LIGANDO PARA O CLIENTE */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs group hover:border-emerald-300 transition-all">
            <div className="aspect-[16/10] overflow-hidden bg-slate-50">
              <img
                src="/images/atendente-cliente-anime.svg"
                alt="Atendente de revenda ligando para o cliente para reativar pedido de gás"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <span className="text-[10px] font-black uppercase tracking-wider text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                3. Clientes (+60d)
              </span>
              <h4 className="font-bold text-sm text-[#0d1b2e] mt-1.5">Atendente Ligando</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Identifique clientes que estão há mais de 60 dias sem comprar e ligue no momento exato antes de acabar o gás.
              </p>
            </div>
          </div>

          {/* 4. CONTROLE DE CONTAS A PAGAR E FLUXO DE CAIXA */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs group hover:border-emerald-300 transition-all">
            <div className="aspect-[16/10] overflow-hidden bg-slate-50">
              <img
                src="/images/fluxo-caixa-anime.svg"
                alt="Controle financeiro de contas a pagar e fluxo de caixa da revenda de gás"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                4. Financeiro
              </span>
              <h4 className="font-bold text-sm text-[#0d1b2e] mt-1.5">Contas e Fluxo de Caixa</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Controle entradas, saídas, fechamento cego de turno e garanta que nenhuma conta fique vencida.
              </p>
            </div>
          </div>
        </div>

        {/* ── SEÇÃO DIVIDIDA: O QUE ELE FAZ PELA REVENDA vs PRINTS REAIS DO PROGRAMA ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Lado Esquerdo: O Que o Sistema Faz Pela Sua Revenda */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#f8fafc] p-6 rounded-2xl border border-slate-200 space-y-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                  Benefícios Práticos
                </span>
                <h3 className="text-xl font-bold text-[#0d1b2e] mt-2">
                  Como o LMA GÁS transforma a sua rotina:
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Desenvolvido para eliminar o papel, as anotações perdidas e os erros de caixa.
                </p>
              </div>

              <div className="space-y-3.5 pt-2">
                {SYSTEM_BENEFITS.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="size-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                      <Check className="size-3 stroke-[3]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-[#0d1b2e]">{item.title}</h4>
                      <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-200">
                <button
                  onClick={onOpenTrial}
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs cursor-pointer transition-all"
                >
                  <Sparkles className="size-3.5 text-emerald-200" />
                  Testar Na Minha Revenda (7 Dias Grátis)
                  <ArrowRight className="size-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Lado Direito: Telas Reais do Aplicativo em Abas Interativas */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-300 bg-[#f8fafc] p-4 sm:p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
                <div>
                  <h3 className="font-bold text-base text-[#0d1b2e] flex items-center gap-2">
                    <Monitor className="size-4 text-emerald-600" />
                    Telas Oficiais do LMA GÁS
                  </h3>
                  <p className="text-xs text-slate-500">Clique nas abas para navegar pelas ferramentas reais do sistema</p>
                </div>

                {/* Abas com os Módulos do Sistema */}
                <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
                  {[
                    { id: 'dashboard', label: 'Dashboard' },
                    { id: 'venda', label: 'Nova Venda' },
                    { id: 'entregas', label: 'Entregas' },
                    { id: 'app_entregador', label: 'App Entregador' },
                    { id: 'inativos', label: 'Inativos (+60d)' },
                    { id: 'cardapio', label: 'Cardápio Online' },
                    { id: 'caixa', label: 'Caixa Cego' },
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

              {/* Área de Visualização Fiel da Interface */}
              <div className="pt-4">
                {/* 1. ABA DASHBOARD */}
                {activeTab === 'dashboard' && (
                  <div className="space-y-4 animate-fade-in text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                        <div className="text-slate-500 font-medium">Vendas Hoje</div>
                        <div className="text-xl sm:text-2xl font-black text-[#0d1b2e] mt-1">R$ 2.415,00</div>
                        <div className="text-[11px] text-emerald-700 font-bold mt-0.5">21 botijões entregues</div>
                      </div>

                      <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                        <div className="text-slate-500 font-medium">Saldo do Caixa</div>
                        <div className="text-xl sm:text-2xl font-black text-blue-700 mt-1">R$ 1.895,00</div>
                        <div className="text-[11px] text-slate-500 mt-0.5">+R$ 2.415 entradas / -R$ 520 saídas</div>
                      </div>

                      <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                        <div className="text-slate-500 font-medium">Contas a Pagar</div>
                        <div className="text-xl sm:text-2xl font-black text-emerald-700 mt-1">0 Vencidas</div>
                        <div className="text-[11px] text-emerald-700 font-bold mt-0.5">Tudo em dia</div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-bold text-slate-800 text-xs">Estoque de Botijões por Tipo</span>
                        <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold border border-emerald-200">
                          Atualização em Tempo Real
                        </span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        <div className="p-2.5 rounded bg-slate-50 border border-slate-200 flex justify-between items-center">
                          <div>
                            <span className="block font-semibold">Botijão P13</span>
                            <span className="text-[10px] text-slate-500">Mínimo: 30</span>
                          </div>
                          <strong className="text-emerald-700 text-sm">142 un</strong>
                        </div>
                        <div className="p-2.5 rounded bg-slate-50 border border-slate-200 flex justify-between items-center">
                          <div>
                            <span className="block font-semibold">Botijão P20</span>
                            <span className="text-[10px] text-slate-500">Mínimo: 5</span>
                          </div>
                          <strong className="text-emerald-700 text-sm">18 un</strong>
                        </div>
                        <div className="p-2.5 rounded bg-slate-50 border border-slate-200 flex justify-between items-center">
                          <div>
                            <span className="block font-semibold">Cilindro P45</span>
                            <span className="text-[10px] text-slate-500">Mínimo: 4</span>
                          </div>
                          <strong className="text-amber-700 text-sm">8 un</strong>
                        </div>
                        <div className="p-2.5 rounded bg-slate-50 border border-slate-200 flex justify-between items-center">
                          <div>
                            <span className="block font-semibold">Água 20L</span>
                            <span className="text-[10px] text-slate-500">Mínimo: 15</span>
                          </div>
                          <strong className="text-blue-700 text-sm">35 un</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. ABA NOVA VENDA (PDV EXPRESS) */}
                {activeTab === 'venda' && (
                  <div className="space-y-3 animate-fade-in text-xs">
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-2.5">
                      <div className="flex gap-2">
                        <span className="px-3 py-1 rounded-lg bg-slate-100 font-bold text-slate-700">Balcão (Portaria)</span>
                        <span className="px-3 py-1 rounded-lg bg-emerald-600 font-bold text-white shadow-xs">Entrega (Delivery)</span>
                      </div>
                      <div className="pt-1 flex flex-col sm:flex-row sm:items-center justify-between text-slate-700 gap-1">
                        <span>Cliente: <strong>Maria Aparecida Santos</strong></span>
                        <span className="text-emerald-700 font-semibold">Telefone: (11) 98765-4321</span>
                      </div>
                      <div className="text-slate-500 text-[11px] bg-slate-50 p-2 rounded border border-slate-200 flex items-center gap-1.5">
                        <MapPin className="size-3.5 text-slate-400 shrink-0" />
                        <span>Rua das Palmeiras, 142 - Apto 32 • Jd. São Paulo</span>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex justify-between items-center">
                      <div className="flex items-center gap-2.5">
                        <div className="size-9 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                          <Flame className="size-4" />
                        </div>
                        <div>
                          <span className="font-bold text-slate-800">1x Botijão P13 (GLP)</span>
                          <div className="text-[10px] text-slate-500">Estoque atual disponível: 142 unidades</div>
                        </div>
                      </div>
                      <span className="font-black text-emerald-700 text-base">R$ 115,00</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="text-slate-600">
                        Forma de Pagamento: <strong>Pix</strong> • Entregador: <strong>Carlos (Moto 01)</strong>
                      </div>
                      <div className="flex gap-2">
                        <button className="px-3 py-2 rounded-lg border border-slate-300 text-slate-700 font-bold text-xs flex items-center gap-1">
                          <FileText className="size-3.5" />
                          Imprimir Comanda
                        </button>
                        <button className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs">
                          Concluir Venda
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. ABA ENTREGAS */}
                {activeTab === 'entregas' && (
                  <div className="space-y-3 animate-fade-in text-xs">
                    <div className="flex gap-2 pb-1">
                      <span className="px-3 py-1 rounded-full font-bold bg-amber-100 text-amber-800 flex items-center gap-1">
                        <Clock className="size-3" /> Pendentes (1)
                      </span>
                      <span className="px-3 py-1 rounded-full font-bold bg-blue-100 text-blue-800 flex items-center gap-1">
                        <Truck className="size-3" /> Em Rota (2)
                      </span>
                      <span className="px-3 py-1 rounded-full font-bold bg-emerald-100 text-emerald-800 flex items-center gap-1">
                        <Check className="size-3" /> Entregues Hoje (19)
                      </span>
                    </div>

                    <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2.5">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-slate-800 text-sm">#1084 • Carlos Alberto (Centro)</span>
                        <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 font-bold text-[10px] border border-blue-200">
                          Em Rota • Saiu há 8 min
                        </span>
                      </div>
                      <div className="text-slate-600 text-xs flex items-center gap-1.5">
                        <MapPin className="size-3.5 text-slate-400 shrink-0" />
                        <span>Av. Tiradentes, 450 • 1x Botijão P13 • R$ 115,00 (Dinheiro / Troco p/ 150)</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-2 border-t border-slate-100 gap-2">
                        <span className="text-slate-500">Entregador Responsável: <strong>Fábio (Moto 02)</strong></span>
                        <span className="text-blue-600 font-bold hover:underline cursor-pointer flex items-center gap-1">
                          <Navigation className="size-3.5" /> Abrir no Waze / Google Maps
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 4. ABA APP DO ENTREGADOR (PWA MOBILE) */}
                {activeTab === 'app_entregador' && (
                  <div className="space-y-3 animate-fade-in text-xs">
                    <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-xl flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Smartphone className="size-4 text-emerald-700 shrink-0" />
                        <span className="text-emerald-900 font-medium">
                          Visão no celular do motoboy • Código de acesso: <strong>#849201</strong>
                        </span>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-emerald-600 text-white font-bold text-[10px]">
                        Conectado
                      </span>
                    </div>

                    <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-3">
                      <div className="flex justify-between items-center">
                        <div>
                          <strong className="text-slate-900 text-sm block">Entrega Atual • Pedido #1084</strong>
                          <span className="text-slate-500 text-[11px]">Cliente: Carlos Alberto</span>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-700 font-bold text-[10px] border border-amber-200">
                          A caminho
                        </span>
                      </div>

                      <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200 space-y-1">
                        <div className="font-semibold text-slate-800">Endereço: Av. Tiradentes, 450 - Centro</div>
                        <div className="text-slate-500 text-[11px]">Produto: 1x Botijão P13 • Cobrar: R$ 115,00 (Dinheiro)</div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 pt-1">
                        <button className="py-2.5 rounded-lg bg-blue-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs">
                          <Navigation className="size-3.5" />
                          Navegar no Waze
                        </button>
                        <button className="py-2.5 rounded-lg bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs">
                          <Check className="size-3.5 stroke-[3]" />
                          Confirmar Entrega
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* 5. ABA CLIENTES INATIVOS (+60 DIAS) */}
                {activeTab === 'inativos' && (
                  <div className="space-y-3 animate-fade-in text-xs">
                    <div className="flex items-center gap-2">
                      <span className="text-slate-500 font-semibold">Filtrar sem compra há:</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600">Todos</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-500 text-white font-bold">
                        +60 dias (14)
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 font-bold">
                        +90 dias (8)
                      </span>
                    </div>

                    <div className="bg-white rounded-xl border border-slate-200 divide-y divide-slate-100 overflow-hidden">
                      <div className="p-3 flex items-center justify-between">
                        <div>
                          <strong className="text-slate-800 text-sm block">Antônio Marcos Ferreira</strong>
                          <span className="text-slate-500 text-[11px]">(11) 98111-2233 • Último pedido: 1x P13 em 14/08</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded bg-rose-50 text-rose-700 font-bold text-[10px] border border-rose-200">
                            64 dias sem pedir
                          </span>
                          <button className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1 cursor-pointer">
                            <MessageSquare className="size-3.5" />
                            WhatsApp
                          </button>
                        </div>
                      </div>

                      <div className="p-3 flex items-center justify-between">
                        <div>
                          <strong className="text-slate-800 text-sm block">Padaria Pão de Mel</strong>
                          <span className="text-slate-500 text-[11px]">(11) 97222-3344 • Último pedido: 2x P45 em 08/08</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded bg-rose-50 text-rose-700 font-bold text-[10px] border border-rose-200">
                            72 dias sem pedir
                          </span>
                          <button className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1 cursor-pointer">
                            <MessageSquare className="size-3.5" />
                            WhatsApp
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 6. ABA CARDÁPIO DIGITAL */}
                {activeTab === 'cardapio' && (
                  <div className="space-y-3 animate-fade-in text-xs">
                    <div className="bg-blue-50 border border-blue-200 p-3 rounded-xl flex items-center justify-between">
                      <div className="text-blue-900 font-medium">
                        Link próprio da sua revenda: <strong>suarevenda.lmaapp.com.br</strong> (0% de taxas de comissão)
                      </div>
                      <span className="px-2 py-0.5 rounded bg-blue-600 text-white font-bold text-[10px]">
                        Online
                      </span>
                    </div>

                    <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-3">
                      <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                        <div className="size-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                          🔥
                        </div>
                        <div>
                          <strong className="text-slate-900 text-sm block">Revenda Central Gás &amp; Água</strong>
                          <span className="text-slate-500 text-[11px]">Entregas em 30 a 45 minutos • Franco da Rocha - SP</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex justify-between items-center">
                          <div>
                            <span className="font-bold text-slate-800">Botijão P13 (GLP)</span>
                            <div className="text-[10px] text-slate-500">Entrega rápida na sua residência</div>
                          </div>
                          <span className="font-black text-emerald-700 text-sm">R$ 115,00</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex justify-between items-center">
                          <div>
                            <span className="font-bold text-slate-800">Galão de Água Mineral 20L</span>
                            <div className="text-[10px] text-slate-500">Água pura e certificada</div>
                          </div>
                          <span className="font-black text-blue-700 text-sm">R$ 18,00</span>
                        </div>
                      </div>

                      <div className="text-center text-[11px] text-slate-500 pt-1">
                        O cliente seleciona os itens, digita o endereço e o pedido entra direto no painel da revenda!
                      </div>
                    </div>
                  </div>
                )}

                {/* 7. ABA CAIXA CEGO */}
                {activeTab === 'caixa' && (
                  <div className="space-y-3 animate-fade-in text-xs">
                    <div className="grid grid-cols-3 gap-2">
                      <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200">
                        <span className="text-emerald-800 font-bold text-[10px]">Entradas Hoje</span>
                        <div className="text-base font-black text-emerald-700 mt-0.5">+ R$ 2.415,00</div>
                      </div>
                      <div className="p-3 rounded-lg bg-rose-50 border border-rose-200">
                        <span className="text-rose-800 font-bold text-[10px]">Saídas / Despesas</span>
                        <div className="text-base font-black text-rose-700 mt-0.5">- R$ 520,00</div>
                      </div>
                      <div className="p-3 rounded-lg bg-blue-50 border border-blue-200">
                        <span className="text-blue-800 font-bold text-[10px]">Saldo Líquido</span>
                        <div className="text-base font-black text-blue-700 mt-0.5">R$ 1.895,00</div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-1.5">
                      <div className="font-bold text-slate-800">Fechamento Cego de Turno</div>
                      <p className="text-slate-500 text-[11px] leading-relaxed">
                        No encerramento de turno, o operador informa a contagem física do dinheiro em caixa e comprovantes sem ver o valor do sistema. O LMA Gás compara os valores e aponta eventuais quebras de caixa instantaneamente.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};