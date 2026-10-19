import React from 'react';
import { Clock, PhoneCall, AlertTriangle, CheckCircle2, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';

interface ClientesInativosSectionProps {
  onOpenTrial: () => void;
}

export const ClientesInativosSection: React.FC<ClientesInativosSectionProps> = ({ onOpenTrial }) => {
  return (
    <section id="inativos" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Lado Esquerdo: Descrição da Funcionalidade Real */}
          <div className="lg:col-span-7 space-y-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 flex items-center gap-1.5 w-fit">
                <AlertTriangle className="size-3.5 text-amber-600" />
                Resgate de Carteira de Clientes
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0d1b2e] mt-3 tracking-tight">
                Alerta de clientes sem comprar há <span className="text-amber-600">+60 e +90 dias</span>
              </h2>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                Quando um cliente passa de 60 dias sem pedir gás, a chance de ele ter comprado do concorrente é enorme. O <strong>LMA GÁS</strong> identifica automaticamente esses clientes inativos para você entrar em contato antes de perdê-los de vez.
              </p>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-700">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <Clock className="size-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900">Filtro em 1 Clique no Painel:</strong>
                  <p className="text-slate-600 text-xs mt-0.5">
                    Basta clicar em <code>+60 dias</code> ou <code>+90 dias</code> na aba Clientes para ver a listagem completa de quem não compra há mais de 2 ou 3 meses.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <MessageSquare className="size-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900">Contato Direto pelo WhatsApp:</strong>
                  <p className="text-slate-600 text-xs mt-0.5">
                    Cada cliente da lista possui um botão de atalho para abrir o WhatsApp diretamente no seu celular ou computador, facilitando uma mensagem cordial de reconquista.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <CheckCircle2 className="size-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900">Histórico de Pedidos e Bairro:</strong>
                  <p className="text-slate-600 text-xs mt-0.5">
                    Veja qual produto o cliente costumava comprar (P13, água mineral, etc.) e o endereço cadastrado para oferecer um atendimento personalizado.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenTrial}
                className="px-7 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-sm transition-all cursor-pointer flex items-center gap-2"
              >
                <Sparkles className="size-4 text-amber-200" />
                Recuperar Meus Clientes Inativos
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>

          {/* Lado Direito: Réplica da Tabela de Clientes do LMA Gás */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-300 bg-white shadow-lg overflow-hidden">
              <div className="bg-[#101f34] text-white px-4 py-3 flex items-center justify-between">
                <span className="font-bold text-xs">Módulo Clientes • LMA GÁS</span>
                <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold text-[10px]">
                  Filtro Ativo: +60 dias
                </span>
              </div>

              <div className="p-4 bg-[#f8fafc] space-y-3 text-xs">
                {/* Botões do Filtro */}
                <div className="flex gap-1.5 flex-wrap">
                  <span className="px-3 py-1 rounded-full bg-slate-200 text-slate-700 font-medium">
                    Todos
                  </span>
                  <span className="px-3 py-1 rounded-full bg-amber-500 text-white font-bold shadow-xs">
                    +60 dias (14)
                  </span>
                  <span className="px-3 py-1 rounded-full bg-rose-100 text-rose-800 font-bold border border-rose-200">
                    +90 dias (8)
                  </span>
                </div>

                {/* Lista de Clientes */}
                <div className="bg-white rounded-xl border border-slate-200 divide-y divide-slate-100 overflow-hidden shadow-xs">
                  <div className="p-3 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-slate-900">Marcos Antônio Silva</div>
                      <div className="text-[11px] text-slate-500">Jd. Bandeirantes • (11) 98765-1111</div>
                      <div className="mt-1">
                        <span className="px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 font-bold text-[10px]">
                          🔴 65d sem comprar
                        </span>
                      </div>
                    </div>
                    <button className="px-2.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] flex items-center gap-1 shadow-xs">
                      <PhoneCall className="size-3" /> Chamar
                    </button>
                  </div>

                  <div className="p-3 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-slate-900">Restaurante Fogão de Minas</div>
                      <div className="text-[11px] text-slate-500">Centro • (11) 99888-2222</div>
                      <div className="mt-1">
                        <span className="px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 font-bold text-[10px]">
                          🔴 78d sem comprar
                        </span>
                      </div>
                    </div>
                    <button className="px-2.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] flex items-center gap-1 shadow-xs">
                      <PhoneCall className="size-3" /> Chamar
                    </button>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-[11px] font-medium">
                  💡 Revendas que mandam mensagem para clientes inativos recuperam em média 18% da carteira no mesmo mês!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};