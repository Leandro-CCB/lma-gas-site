import React, { useState } from 'react';
import { SCREENS } from '../data/content';
import {
  CheckCircle2,
  PhoneCall,
  MapPin,
  Clock,
  Sparkles,
  ArrowRight,
  Truck,
  ShoppingCart,
  Users,
  Wallet,
  AlertTriangle,
  Receipt,
  FileSpreadsheet,
} from 'lucide-react';

interface RealScreenshotsProps {
  onOpenTrial: () => void;
}

export const RealScreenshots: React.FC<RealScreenshotsProps> = ({ onOpenTrial }) => {
  const [selectedId, setSelectedId] = useState<string>('dashboard');

  const current = SCREENS.find((s) => s.id === selectedId) || SCREENS[0];

  return (
    <section id="telas" className="py-16 sm:py-24 bg-[#f8fafc] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Interface 100% Real do Sistema
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0d1b2e] mt-3 tracking-tight">
            Conheça as telas do <span className="text-emerald-600">LMA GÁS</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Veja exatamente como as páginas do sistema funcionam, com visual limpo, rápido e focado na operação de revenda.
          </p>
        </div>

        {/* Seletor de Telas */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 no-scrollbar">
          {SCREENS.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedId === item.id
                  ? 'bg-[#0d1b2e] text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-300'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Grid: Informações à Esquerda + Réplica Fiel à Direita */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Coluna 1: Informações da Tela (5 Colunas) */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                {current.tag}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#0d1b2e] mt-2">
                {current.title}
              </h3>
              <p className="text-sm font-bold text-emerald-700 mt-1">
                {current.subtitle}
              </p>
              <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                {current.description}
              </p>
            </div>

            <div className="space-y-2.5 pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Recursos desta tela no LMA Gás:
              </div>
              {current.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenTrial}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Sparkles className="size-4 text-emerald-200" />
                Testar o LMA GÁS por 7 Dias Grátis
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>

          {/* Coluna 2: Réplica Visual Exata da Tela (7 Colunas) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-300 bg-white shadow-lg overflow-hidden">
              {/* Barra superior estilo App LMA */}
              <div className="bg-[#101f34] text-white px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src="/logo-lma.png" alt="LMA" className="h-6 w-auto" />
                  <span className="font-black text-sm tracking-wide">
                    LMA<span className="text-emerald-400 ml-0.5">GÁS</span>
                  </span>
                  <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                    • {current.title}
                  </span>
                </div>
                <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/70 px-2 py-0.5 rounded border border-emerald-600/30">
                  Revenda em Operação
                </span>
              </div>

              {/* Corpo da Tela em Tema Claro */}
              <div className="p-4 sm:p-5 bg-[#f8fafc] min-h-[440px] text-xs select-none">
                {/* 1. TELA: DASHBOARD */}
                {current.id === 'dashboard' && (
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                      <div>
                        <div className="font-black text-sm text-[#0d1b2e]">Dashboard da Revenda</div>
                        <div className="text-[11px] text-slate-500">Resumo financeiro e operacional</div>
                      </div>
                      <span className="px-2.5 py-1 rounded bg-emerald-100 text-emerald-800 font-bold text-[11px]">
                        Segunda-feira, Hoje
                      </span>
                    </div>

                    {/* KPIs */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs">
                        <div className="text-slate-500 text-[10px]">Vendas Hoje</div>
                        <div className="text-lg font-black text-[#0d1b2e] mt-0.5">R$ 1.840,00</div>
                        <div className="text-[9px] text-emerald-700 font-bold">16 vendas</div>
                      </div>
                      <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs">
                        <div className="text-slate-500 text-[10px]">Saldo do Caixa</div>
                        <div className="text-lg font-black text-blue-700 mt-0.5">R$ 1.420,00</div>
                        <div className="text-[9px] text-slate-500">Entradas / Saídas</div>
                      </div>
                      <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs">
                        <div className="text-slate-500 text-[10px]">Contas a Pagar</div>
                        <div className="text-lg font-black text-emerald-700 mt-0.5">0 vencidas</div>
                        <div className="text-[9px] text-emerald-700">100% em dia</div>
                      </div>
                      <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs">
                        <div className="text-slate-500 text-[10px]">Ticket Médio</div>
                        <div className="text-lg font-black text-slate-800 mt-0.5">R$ 115,00</div>
                        <div className="text-[9px] text-slate-500">Por pedido</div>
                      </div>
                    </div>

                    {/* Gráfico 14 Dias */}
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-bold text-slate-800 text-[11px]">Receita dos Últimos 14 Dias</span>
                        <span className="text-[10px] text-emerald-700 font-bold">Média: R$ 1.650/dia</span>
                      </div>
                      <div className="h-24 flex items-end justify-between gap-1 pt-3">
                        {[
                          { v: 45, d: '06' }, { v: 60, d: '07' }, { v: 55, d: '08' }, { v: 75, d: '09' },
                          { v: 90, d: '10' }, { v: 95, d: '11' }, { v: 80, d: '12' }, { v: 85, d: '13' },
                          { v: 70, d: '14' }, { v: 88, d: '15' }, { v: 92, d: '16' }, { v: 100, d: '17' },
                          { v: 78, d: '18' }, { v: 85, d: '19' }
                        ].map((b, i) => (
                          <div key={i} className="flex-1 flex flex-col items-center gap-1">
                            <div
                              style={{ height: `${b.v}%` }}
                              className="w-full rounded-t bg-emerald-500 hover:bg-emerald-600 transition-colors"
                            />
                            <span className="text-[8px] text-slate-400">{b.d}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Estoque */}
                    <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
                      <div className="font-bold text-slate-800 text-[11px]">Estoque em Tempo Real</div>
                      <div className="grid grid-cols-2 gap-2 text-[11px]">
                        <div className="p-2 rounded bg-slate-50 border border-slate-200 flex justify-between items-center">
                          <div>
                            <span className="font-bold text-slate-800">Botijão P13</span>
                            <div className="text-[10px] text-slate-500">Mín: 20 un</div>
                          </div>
                          <span className="font-black text-emerald-700 text-sm">142 un</span>
                        </div>
                        <div className="p-2 rounded bg-slate-50 border border-slate-200 flex justify-between items-center">
                          <div>
                            <span className="font-bold text-slate-800">Cilindro P45</span>
                            <div className="text-[10px] text-amber-700">Mín: 5 un (Atenção)</div>
                          </div>
                          <span className="font-black text-amber-700 text-sm">8 un</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. TELA: NOVA VENDA */}
                {current.id === 'nova-venda' && (
                  <div className="space-y-3">
                    <div className="flex gap-2">
                      <button className="flex-1 py-1.5 rounded-lg bg-slate-100 text-slate-700 font-bold border border-slate-200">
                        Retirada no Balcão
                      </button>
                      <button className="flex-1 py-1.5 rounded-lg bg-emerald-600 text-white font-bold shadow-sm">
                        🛵 Para Entrega (Delivery)
                      </button>
                    </div>

                    <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-slate-800">Cliente: Carlos Alberto Souza</span>
                        <span className="text-emerald-700 font-bold">Tel: (11) 97654-3210</span>
                      </div>
                      <div className="text-slate-600 text-[11px]">
                        Endereço: Av. dos Expedicionários, 310 • Bairro: Centro
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-2">
                      <span className="font-bold text-slate-800">Selecione o Produto:</span>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-300">
                          <div className="font-bold text-slate-900">Botijão P13 (Ultragaz)</div>
                          <div className="text-[10px] text-emerald-800">Estoque: 142 un</div>
                          <div className="text-sm font-black text-emerald-700 mt-1">R$ 115,00</div>
                        </div>
                        <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                          <div className="font-bold text-slate-900">Água Mineral 20L</div>
                          <div className="text-[10px] text-slate-500">Estoque: 35 un</div>
                          <div className="text-sm font-black text-slate-700 mt-1">R$ 16,00</div>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-2">
                      <div className="font-bold text-slate-800">Forma de Pagamento:</div>
                      <div className="flex gap-1.5 flex-wrap">
                        <span className="px-3 py-1 rounded bg-emerald-100 text-emerald-800 font-bold">📱 Pix</span>
                        <span className="px-3 py-1 rounded bg-slate-100 text-slate-700">💵 Dinheiro</span>
                        <span className="px-3 py-1 rounded bg-slate-100 text-slate-700">💳 Débito</span>
                        <span className="px-3 py-1 rounded bg-slate-100 text-slate-700">💳 Crédito</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. TELA: ENTREGAS */}
                {current.id === 'entregas' && (
                  <div className="space-y-3">
                    <div className="flex gap-2 pb-2 border-b border-slate-200">
                      <span className="px-3 py-1 rounded-full font-bold bg-amber-100 text-amber-800">
                        🟡 Pendentes (2)
                      </span>
                      <span className="px-3 py-1 rounded-full font-bold bg-blue-100 text-blue-800">
                        🔵 Em Rota (2)
                      </span>
                      <span className="px-3 py-1 rounded-full font-bold bg-emerald-100 text-emerald-800">
                        🟢 Entregues (12)
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-2 shadow-xs">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-slate-900">#1082 • João Pedro Lima</span>
                        <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-bold text-[10px]">
                          Em Rota
                        </span>
                      </div>
                      <div className="text-slate-600 text-[11px]">
                        📍 Rua Sete de Setembro, 88 • Vila Ramos • Tel: (11) 98888-2222
                      </div>
                      <div className="flex justify-between items-center p-2 rounded bg-slate-50 border border-slate-200">
                        <span className="font-semibold text-slate-700">1x Botijão P13 • Pix</span>
                        <span className="font-black text-emerald-700">R$ 115,00</span>
                      </div>
                      <div className="flex justify-between items-center pt-1">
                        <span className="text-slate-500">Entregador: <strong>Fábio (Moto 02)</strong></span>
                        <button className="px-2.5 py-1 rounded bg-blue-600 text-white font-bold flex items-center gap-1">
                          <MapPin className="size-3" /> Abrir no Waze
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* 4. TELA: CLIENTES INATIVOS */}
                {current.id === 'clientes' && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                      <span className="font-bold text-slate-700">Sem compra há:</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600">Todos</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-500 text-white font-bold">
                        +60 dias (14)
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 font-bold">
                        +90 dias (8)
                      </span>
                    </div>

                    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                      <table className="w-full text-left">
                        <thead className="bg-slate-50 border-b border-slate-200 font-bold text-slate-600">
                          <tr>
                            <th className="p-2">Cliente</th>
                            <th className="p-2">Telefone</th>
                            <th className="p-2">Última Compra</th>
                            <th className="p-2 text-right">Contato</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          <tr>
                            <td className="p-2 font-bold text-slate-800">Benedita Aparecida</td>
                            <td className="p-2 text-slate-600">(11) 97111-0000</td>
                            <td className="p-2">
                              <span className="badge-red px-2 py-0.5 rounded font-bold text-[10px]">
                                🔴 68d atrás
                              </span>
                            </td>
                            <td className="p-2 text-right">
                              <button className="px-2 py-0.5 rounded bg-emerald-600 text-white font-bold text-[10px]">
                                WhatsApp
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td className="p-2 font-bold text-slate-800">Restaurante Sabor Mineiro</td>
                            <td className="p-2 text-slate-600">(11) 98222-1111</td>
                            <td className="p-2">
                              <span className="badge-red px-2 py-0.5 rounded font-bold text-[10px]">
                                🔴 61d atrás
                              </span>
                            </td>
                            <td className="p-2 text-right">
                              <button className="px-2 py-0.5 rounded bg-emerald-600 text-white font-bold text-[10px]">
                                WhatsApp
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* 5. TELA: CARDÁPIO DIGITAL */}
                {current.id === 'cardapio' && (
                  <div className="space-y-3">
                    <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex justify-between items-center">
                      <div>
                        <div className="font-bold text-emerald-900">Cardápio Digital da Revenda</div>
                        <div className="text-[10px] text-emerald-700">Link exclusivo: cardapio-gas.lmaapp.com.br</div>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-emerald-600 text-white font-bold text-[10px]">
                        0% Comissão
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-2">
                      <div className="font-bold text-slate-800">Pedidos Online Recebidos:</div>
                      <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex justify-between items-center">
                        <div>
                          <div className="font-bold text-slate-900">Novo Pedido #304 • Marcos V.</div>
                          <div className="text-[10px] text-slate-500">1x Botijão P13 • Entrega na Rua Goiás, 45</div>
                        </div>
                        <button className="px-3 py-1 rounded bg-emerald-600 text-white font-bold">
                          Aceitar Pedido
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* 6. TELA: CAIXA */}
                {current.id === 'caixa' && (
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-2">
                      <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200">
                        <div className="text-[10px] text-emerald-800 font-bold">Entradas</div>
                        <div className="text-base font-black text-emerald-700 mt-0.5">+ R$ 1.840,00</div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-rose-50 border border-rose-200">
                        <div className="text-[10px] text-rose-800 font-bold">Saídas</div>
                        <div className="text-base font-black text-rose-700 mt-0.5">- R$ 420,00</div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200">
                        <div className="text-[10px] text-blue-800 font-bold">Saldo Atual</div>
                        <div className="text-base font-black text-blue-700 mt-0.5">R$ 1.420,00</div>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-slate-800">Fechamento Cego de Turno</span>
                        <span className="text-[10px] text-slate-500">Auditoria automática</span>
                      </div>
                      <p className="text-slate-600 text-[11px]">
                        O operador digita a contagem física do caixa (dinheiro, Pix e comprovantes de cartão). O LMA Gás compara com o sistema e emite o relatório de fechamento.
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