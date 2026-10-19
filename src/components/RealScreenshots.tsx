import React, { useState } from 'react';
import { SCREENS_DATA } from '../data/content';
import type { ScreenDetail } from '../types';
import {
  CheckCircle2,
  Maximize2,
  Flame,
  Zap,
  Truck,
  ShoppingCart,
  Package,
  Users,
  ArrowRight,
  Sparkles,
  PhoneCall,
  MapPin,
  Clock,
  Printer,
  ShieldCheck,
  FileText
} from 'lucide-react';

interface RealScreenshotsProps {
  onOpenTrial: () => void;
}

export const RealScreenshots: React.FC<RealScreenshotsProps> = ({ onOpenTrial }) => {
  const [selectedScreenId, setSelectedScreenId] = useState<string>('dashboard');
  const [modalOpen, setModalOpen] = useState(false);

  const currentScreen = SCREENS_DATA.find((s) => s.id === selectedScreenId) || SCREENS_DATA[0];

  return (
    <section id="telas" className="py-20 sm:py-28 bg-gas-950 relative overflow-hidden">
      {/* Luz decorativa */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
            📸 Transparência Total
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
            Conheça as telas reais do <span className="text-gradient-flame">LMA GÁS</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300">
            Veja exatamente como é a interface limpa, intuitiva e moderna que vai acelerar sua equipe de vendas e eliminar a confusão da sua revenda.
          </p>
        </div>

        {/* Barra de Seleção de Telas */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 no-scrollbar">
          {SCREENS_DATA.map((screen) => {
            const isSelected = screen.id === selectedScreenId;
            return (
              <button
                key={screen.id}
                onClick={() => setSelectedScreenId(screen.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-gradient-to-r from-flame-600 to-amber-600 text-white shadow-glow-orange scale-102'
                    : 'bg-gas-900 border border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-gas-800/80'
                }`}
              >
                <span>{screen.title.split(' ')[0]}</span>
                <span>{screen.title.split(' ').slice(1, 3).join(' ')}</span>
              </button>
            );
          })}
        </div>

        {/* Bloco Central: Apresentação da Tela Selecionada */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Lado Esquerdo: Descrição e Vantagens da Tela (5 Colunas) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-flame-400">
                {currentScreen.tag}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                {currentScreen.title}
              </h3>
              <p className="text-sm font-semibold text-cyan-300 mt-2">
                {currentScreen.subtitle}
              </p>
              <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                {currentScreen.description}
              </p>
            </div>

            {/* Destaques da Tela */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                O que você faz nesta tela:
              </div>
              {currentScreen.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            {/* Mini KPIs da Tela */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {currentScreen.kpis.map((kpi, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-gas-900 border border-slate-800">
                  <div className="text-[11px] text-slate-400">{kpi.label}</div>
                  <div className="text-base sm:text-lg font-extrabold text-white mt-0.5">
                    {kpi.value}
                  </div>
                  <div className="text-[10px] text-emerald-400">{kpi.hint}</div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenTrial}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-flame-600 to-amber-600 hover:from-flame-500 hover:to-amber-500 text-white font-bold text-sm shadow-glow-orange cursor-pointer transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="size-4 text-amber-300" />
                Testar Esta Tela na Minha Revenda
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>

          {/* Lado Direito: O PRINT REAL DA TELA (7 Colunas) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl sm:rounded-3xl p-1 bg-gradient-to-br from-slate-700/60 via-slate-800/40 to-gas-900 border border-slate-700 shadow-2xl relative group">
              {/* Moldura da Janela */}
              <div className="bg-gas-900 rounded-t-xl sm:rounded-t-2xl px-4 py-3 flex items-center justify-between border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="size-3 rounded-full bg-rose-500 inline-block" />
                  <span className="size-3 rounded-full bg-amber-500 inline-block" />
                  <span className="size-3 rounded-full bg-emerald-500 inline-block" />
                  <span className="ml-3 text-xs font-mono text-slate-400">
                    🐴 LMA GÁS • {currentScreen.title}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setModalOpen(true)}
                    className="text-xs text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer bg-slate-800/60 px-2.5 py-1 rounded hover:bg-slate-700 transition-colors"
                  >
                    <Maximize2 className="size-3" />
                    Expandir Print
                  </button>
                </div>
              </div>

              {/* Renderização Fiel da Tela Real em SVG / HTML Interativo */}
              <div className="bg-gas-950 p-4 sm:p-5 rounded-b-xl sm:rounded-b-2xl overflow-hidden min-h-[440px] select-none">
                {/* 1. PRINT: DASHBOARD */}
                {currentScreen.id === 'dashboard' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between bg-gas-900 p-3 rounded-xl border border-slate-800">
                      <div className="flex items-center gap-2.5">
                        <div className="size-9 rounded-lg bg-flame-600/30 flex items-center justify-center text-flame-400 font-bold">
                          🔥
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">REVENDA CENTRAL • BERTONI GÁS</div>
                          <div className="text-[10px] text-slate-400">Terminal Principal • Operação Aberta às 07:00</div>
                        </div>
                      </div>
                      <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                        Caixa do Dia: R$ 15.620,00
                      </span>
                    </div>

                    <div className="grid grid-cols-4 gap-2 text-center">
                      <div className="p-2.5 rounded-lg bg-gas-900 border border-slate-800">
                        <div className="text-[10px] text-slate-400">P13 Residencial</div>
                        <div className="text-base font-extrabold text-white">118 un</div>
                      </div>
                      <div className="p-2.5 rounded-lg bg-gas-900 border border-slate-800">
                        <div className="text-[10px] text-slate-400">P45 Comercial</div>
                        <div className="text-base font-extrabold text-cyan-400">14 un</div>
                      </div>
                      <div className="p-2.5 rounded-lg bg-gas-900 border border-slate-800">
                        <div className="text-[10px] text-slate-400">Água 20L</div>
                        <div className="text-base font-extrabold text-blue-400">46 un</div>
                      </div>
                      <div className="p-2.5 rounded-lg bg-gas-900 border border-slate-800">
                        <div className="text-[10px] text-slate-400">Vazios Coletados</div>
                        <div className="text-base font-extrabold text-emerald-400">142 un</div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-gas-900 border border-slate-800">
                      <div className="flex justify-between items-center text-xs mb-2">
                        <span className="font-bold text-white">Meta Mensal (3.500 Botijões)</span>
                        <span className="text-emerald-400 font-bold">2.840 vendidos (81%)</span>
                      </div>
                      <div className="w-full h-3 rounded-full bg-gas-950 overflow-hidden p-0.5 border border-slate-800">
                        <div className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-flame-500 to-emerald-400 w-[81%]" />
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-gas-900 border border-slate-800 space-y-2 text-xs">
                      <div className="font-bold text-slate-300">Últimas Vendas no Caixa</div>
                      <div className="flex justify-between p-2 rounded bg-gas-950 border border-slate-800/80">
                        <span>#1084 • Maria Aparecida (Jd. São Paulo)</span>
                        <span className="text-emerald-400 font-bold">R$ 131,00 • PIX</span>
                      </div>
                      <div className="flex justify-between p-2 rounded bg-gas-950 border border-slate-800/80">
                        <span>#1083 • Padaria Estrela (Centro)</span>
                        <span className="text-cyan-400 font-bold">R$ 890,00 • Boleto</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. PRINT: PDV */}
                {currentScreen.id === 'pdv' && (
                  <div className="space-y-3 text-xs">
                    <div className="p-3 rounded-xl bg-gas-900 border border-cyan-500/40 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <PhoneCall className="size-4 text-cyan-400" />
                        <div>
                          <div className="font-bold text-white text-sm">Cliente Identificado: João Pedro Oliveira</div>
                          <div className="text-[10px] text-slate-400">Tel: (11) 97123-4567 • Histórico: 18 pedidos</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded">
                        Gás acaba a cada 43 dias (Hoje: dia 41)
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-gas-900 border border-slate-800">
                      <div className="font-semibold text-slate-300 mb-1">Endereço de Entrega:</div>
                      <div className="text-slate-100 font-bold">
                        Rua Marechal Deodoro, 405 • Casa dos Fundos • Vila Ramos - Franco da Rocha
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-gas-900 border border-slate-800 space-y-2">
                      <div className="font-semibold text-slate-300">Carrinho Rápido</div>
                      <div className="flex justify-between items-center p-2 rounded bg-gas-950 border border-slate-800">
                        <div className="flex items-center gap-2 font-bold text-white">
                          <span>🔥</span>
                          <span>1x Botijão P13 Ultragaz (Troca)</span>
                        </div>
                        <span className="text-emerald-400 font-bold text-sm">R$ 115,00</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-gas-900 border border-slate-800 flex justify-between items-center">
                      <div>
                        <div className="text-[10px] text-slate-400">Entregador Responsável:</div>
                        <div className="font-bold text-cyan-400">Leandro Moto 02 (Disponível)</div>
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] text-slate-400">Forma de Pagamento:</div>
                        <div className="font-bold text-emerald-400">Cartão de Crédito na Entrega</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. PRINT: ENTREGADOR */}
                {currentScreen.id === 'entregador' && (
                  <div className="space-y-3 text-xs">
                    <div className="p-3 rounded-xl bg-gas-900 border border-cyan-500/30 flex justify-between items-center">
                      <div>
                        <div className="font-bold text-white text-sm">🚚 Monitor de Rotas em Campo</div>
                        <div className="text-[10px] text-slate-400">Sincronizado via GPS em tempo real</div>
                      </div>
                      <span className="text-[10px] font-bold text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded">
                        4 Entregadores Ativos
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div className="p-3 rounded-xl bg-gas-900 border border-flame-500/40 flex justify-between items-center">
                        <div>
                          <div className="font-bold text-white">Carlos Moto 01 (Carga: 6 P13 Cheios)</div>
                          <div className="text-[11px] text-slate-300">Entrega atual: Rua São Sebastião, 99 (Jd. Progresso)</div>
                          <div className="text-[10px] text-flame-400 font-semibold mt-0.5">Tempo em rota: 14 minutos</div>
                        </div>
                        <div className="flex flex-col gap-1 text-right">
                          <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
                            2 Vazios Recolhidos
                          </span>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-gas-900 border border-emerald-500/40 flex justify-between items-center">
                        <div>
                          <div className="font-bold text-white">Leandro Moto 02 (Carga: 4 P13 Cheios)</div>
                          <div className="text-[11px] text-slate-300">Entrega concluída: Rua das Palmeiras, 142</div>
                          <div className="text-[10px] text-emerald-400 font-semibold mt-0.5">Pagamento confirmado via PIX R$ 131,00</div>
                        </div>
                        <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                          Entregue
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 4. PRINT: CARDÁPIO DIGITAL */}
                {currentScreen.id === 'cardapio' && (
                  <div className="space-y-3 text-xs">
                    <div className="p-3 rounded-xl bg-white text-slate-900 flex justify-between items-center">
                      <div>
                        <div className="font-black text-orange-600 text-sm">🔥 BERTONI GÁS • CARDÁPIO OFICIAL</div>
                        <div className="text-[10px] text-slate-500">Pague na entrega com Dinheiro, Cartão ou PIX</div>
                      </div>
                      <span className="text-[10px] font-bold text-white bg-green-600 px-2 py-0.5 rounded">
                        Aberto Agora
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-gas-900 border border-slate-800 space-y-2">
                      <div className="font-bold text-slate-200">Produtos no Cardápio da Sua Revenda:</div>
                      <div className="flex justify-between p-2 rounded bg-gas-950 border border-slate-800 items-center">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">🔥</span>
                          <div>
                            <div className="font-bold text-white">Botijão P13 Ultragaz</div>
                            <div className="text-[10px] text-slate-400">Entrega rápida em 25 minutos</div>
                          </div>
                        </div>
                        <span className="font-bold text-emerald-400 text-sm">R$ 115,00</span>
                      </div>
                      <div className="flex justify-between p-2 rounded bg-gas-950 border border-slate-800 items-center">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">💧</span>
                          <div>
                            <div className="font-bold text-white">Galão de Água Lindoya 20L</div>
                            <div className="text-[10px] text-slate-400">Retornável - lacre original</div>
                          </div>
                        </div>
                        <span className="font-bold text-cyan-400 text-sm">R$ 16,00</span>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-[11px] flex items-center justify-between">
                      <span>✓ Pedido enviado direto para o WhatsApp da revenda com endereço formatado!</span>
                      <span className="font-bold">Zero Comissão</span>
                    </div>
                  </div>
                )}

                {/* 5. PRINT: VASILHAMES */}
                {currentScreen.id === 'vasilhames' && (
                  <div className="space-y-3 text-xs">
                    <div className="p-3 rounded-xl bg-gas-900 border border-purple-500/40 flex justify-between items-center">
                      <div>
                        <div className="font-bold text-white text-sm">🛡️ Auditoria de Vasilhames &amp; Carga</div>
                        <div className="text-[10px] text-slate-400">Conferência diária de entrada e saída de botijões</div>
                      </div>
                      <span className="text-[10px] font-bold text-purple-300 bg-purple-500/20 px-2 py-0.5 rounded">
                        100% Batido
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-gas-900 border border-slate-800 space-y-2">
                      <div className="font-semibold text-slate-300">Contratos de Comodato Ativos (Restaurantes &amp; Padarias)</div>
                      <div className="flex justify-between p-2 rounded bg-gas-950 border border-slate-800 items-center">
                        <div>
                          <div className="font-bold text-white">CMD-1001 • Pizzaria Bella Vista (CNPJ: 12.345.../0001)</div>
                          <div className="text-[10px] text-slate-400">4x Cilindros P45 em comodato • Valor de garantia: R$ 2.400,00</div>
                        </div>
                        <button className="px-2.5 py-1 rounded bg-purple-600/30 text-purple-300 border border-purple-500/40 font-bold text-[10px] flex items-center gap-1">
                          <FileText className="size-3" /> PDF
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* 6. PRINT: CRM */}
                {currentScreen.id === 'crm' && (
                  <div className="space-y-3 text-xs">
                    <div className="p-3 rounded-xl bg-gas-900 border border-amber-500/40 flex justify-between items-center">
                      <div>
                        <div className="font-bold text-white text-sm">🧠 Alerta de Gás Acabando (Hoje)</div>
                        <div className="text-[10px] text-slate-400">Clientes com probabilidade de 95% de recompra nas próximas 48h</div>
                      </div>
                      <span className="text-[10px] font-bold text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded">
                        18 Clientes Prontos
                      </span>
                    </div>

                    <div className="space-y-2">
                      {[
                        { nome: 'Ana Paula Ferreira', dias: 44, media: 45, tel: '(11) 98888-1111' },
                        { nome: 'Restaurante Sabor Mineiro', dias: 19, media: 20, tel: '(11) 97777-2222' },
                        { nome: 'Carlos Eduardo Souza', dias: 41, media: 42, tel: '(11) 96666-3333' },
                      ].map((c, i) => (
                        <div key={i} className="flex justify-between items-center p-2.5 rounded-lg bg-gas-900 border border-slate-800">
                          <div>
                            <div className="font-bold text-white">{c.nome}</div>
                            <div className="text-[10px] text-slate-400">Consumo médio: {c.media} dias • Última compra: há {c.dias} dias</div>
                          </div>
                          <button className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[10px] flex items-center gap-1 cursor-pointer">
                            <span>📲</span> Chamar no WhatsApp
                          </button>
                        </div>
                      ))}
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