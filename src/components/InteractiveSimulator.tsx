import React, { useState } from 'react';
import {
  Monitor,
  Flame,
  Truck,
  Users,
  Wallet,
  Clock,
  MapPin,
  Sparkles,
  ArrowRight,
  Package,
  Smartphone,
  Check,
  Navigation,
  MessageSquare,
  FileText,
  Plus,
  RefreshCw,
  Search,
  DollarSign,
  AlertCircle,
  CheckCircle2,
  Phone,
  RotateCcw,
  ShoppingBag,
  Layers,
  ArrowUpRight,
  ShieldCheck,
  Send,
  Eye,
  Store,
  ChevronRight
} from 'lucide-react';

interface InteractiveSimulatorProps {
  onOpenTrial: () => void;
}

// Modelos de dados para o simulador
interface Produto {
  id: string;
  nome: string;
  tipo: 'gas' | 'agua';
  preco: number;
  estoqueCheio: number;
  estoqueVazio: number;
  capacidadeKg?: number;
}

interface Pedido {
  id: number;
  cliente: string;
  telefone: string;
  endereco: string;
  bairro: string;
  tipo: 'delivery' | 'balcao';
  produtoNome: string;
  qtd: number;
  valorTotal: number;
  pagamento: string;
  entregador?: string;
  status: 'pendente' | 'em_rota' | 'entregue';
  hora: string;
}

interface ClienteInativo {
  id: number;
  nome: string;
  telefone: string;
  diasSemComprar: number;
  ultimoProduto: string;
  ultimaData: string;
}

const PRODUTOS_INICIAIS: Produto[] = [
  { id: 'p13', nome: 'Botijão P13 (GLP Residencial)', tipo: 'gas', preco: 115.0, estoqueCheio: 142, estoqueVazio: 68 },
  { id: 'p20', nome: 'Botijão P20 (Empilhadeira)', tipo: 'gas', preco: 210.0, estoqueCheio: 18, estoqueVazio: 9 },
  { id: 'p45', nome: 'Cilindro P45 (Comércio/Condomínio)', tipo: 'gas', preco: 480.0, estoqueCheio: 8, estoqueVazio: 5 },
  { id: 'agua20l', nome: 'Galão de Água 20L Mineral', tipo: 'agua', preco: 18.0, estoqueCheio: 35, estoqueVazio: 24 }
];

const PEDIDOS_INICIAIS: Pedido[] = [
  {
    id: 1084,
    cliente: 'Carlos Alberto Mendonça',
    telefone: '(11) 98234-5678',
    endereco: 'Av. Tiradentes, 450 - Centro',
    bairro: 'Centro',
    tipo: 'delivery',
    produtoNome: 'Botijão P13 (GLP Residencial)',
    qtd: 1,
    valorTotal: 115.0,
    pagamento: 'Dinheiro (Troco p/ 150)',
    entregador: 'Fábio (Moto 02)',
    status: 'em_rota',
    hora: '10:42'
  },
  {
    id: 1083,
    cliente: 'Maria Aparecida dos Santos',
    telefone: '(11) 98765-4321',
    endereco: 'Rua das Palmeiras, 142 - Apto 32',
    bairro: 'Jd. São Paulo',
    tipo: 'delivery',
    produtoNome: 'Botijão P13 (GLP Residencial)',
    qtd: 1,
    valorTotal: 115.0,
    pagamento: 'Pix',
    entregador: 'Carlos (Moto 01)',
    status: 'entregue',
    hora: '10:15'
  },
  {
    id: 1082,
    cliente: 'Padaria Pão de Mel',
    telefone: '(11) 97222-3344',
    endereco: 'Rua José Bonifácio, 88',
    bairro: 'Vila Nova',
    tipo: 'delivery',
    produtoNome: 'Cilindro P45 (Comércio/Condomínio)',
    qtd: 1,
    valorTotal: 480.0,
    pagamento: 'Cartão de Crédito',
    entregador: 'Fábio (Moto 02)',
    status: 'entregue',
    hora: '09:30'
  },
  {
    id: 1081,
    cliente: 'Roberto Lima (Retirada Balcão)',
    telefone: '(11) 99123-9988',
    endereco: 'Retirada na Portaria da Revenda',
    bairro: 'Portaria',
    tipo: 'balcao',
    produtoNome: 'Galão de Água 20L Mineral',
    qtd: 2,
    valorTotal: 36.0,
    pagamento: 'Dinheiro',
    status: 'entregue',
    hora: '08:50'
  }
];

const INATIVOS_INICIAIS: ClienteInativo[] = [
  { id: 1, nome: 'Antônio Marcos Ferreira', telefone: '5511981112233', diasSemComprar: 64, ultimoProduto: '1x P13', ultimaData: '14/08' },
  { id: 2, nome: 'Padaria Pão de Mel (Filial 2)', telefone: '5511972223344', diasSemComprar: 72, ultimoProduto: '2x P45', ultimaData: '08/08' },
  { id: 3, nome: 'Dona Helena Vasconcelos', telefone: '5511993445566', diasSemComprar: 61, ultimoProduto: '1x P13 + 1x Água', ultimaData: '17/08' },
  { id: 4, nome: 'Restaurante do Gordo', telefone: '5511988776655', diasSemComprar: 89, ultimoProduto: '2x P45', ultimaData: '21/07' },
  { id: 5, nome: 'Lúcia Helena Silveira', telefone: '5511971234455', diasSemComprar: 95, ultimoProduto: '1x P13', ultimaData: '15/07' }
];

export const InteractiveSimulator: React.FC<InteractiveSimulatorProps> = ({ onOpenTrial }) => {
  // Estado das Abas
  const [activeTab, setActiveTab] = useState<
    'dashboard' | 'venda' | 'entregas' | 'app_entregador' | 'inativos' | 'estoque' | 'caixa' | 'cardapio'
  >('dashboard');

  // Estado dinâmico do simulador
  const [produtos, setProdutos] = useState<Produto[]>(PRODUTOS_INICIAIS);
  const [pedidos, setPedidos] = useState<Pedido[]>(PEDIDOS_INICIAIS);
  const [vendasTotal, setVendasTotal] = useState(2415.0);
  const [saldoCaixa, setSaldoCaixa] = useState(1895.0);
  const [despesasTotal] = useState(520.0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Formulário de Nova Venda (PDV Express)
  const [tipoVenda, setTipoVenda] = useState<'delivery' | 'balcao'>('delivery');
  const [produtoSelId, setProdutoSelId] = useState<string>('p13');
  const [qtdVenda, setQtdVenda] = useState<number>(1);
  const [clienteNome, setClienteNome] = useState<string>('Juliana Moreira Costa');
  const [clienteTel, setClienteTel] = useState<string>('(11) 98455-1234');
  const [clienteEndereco, setClienteEndereco] = useState<string>('Rua das Acácias, 310');
  const [clienteBairro, setClienteBairro] = useState<string>('Jardim Alvorada');
  const [formaPagamento, setFormaPagamento] = useState<string>('Pix');
  const [trocoPara, setTrocoPara] = useState<string>('');
  const [entregadorSel, setEntregadorSel] = useState<string>('Carlos (Moto 01)');

  // Fechamento Cego de Caixa
  const [caixaContadoInput, setCaixaContadoInput] = useState<string>('');
  const [caixaResultado, setCaixaResultado] = useState<{
    conferido: boolean;
    diferenca: number;
    mensagem: string;
  } | null>(null);

  // Filtro de Inativos
  const [filtroInativos, setFiltroInativos] = useState<'todos' | '60' | '90'>('todos');

  // Função utilitária para exibir notificação rápida
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  // 1. AÇÃO: Lançar Nova Venda no PDV
  const handleConcluirVenda = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const prod = produtos.find((p) => p.id === produtoSelId) || produtos[0];
    const valorVenda = prod.preco * qtdVenda;
    const novoId = pedidos.length > 0 ? Math.max(...pedidos.map((p) => p.id)) + 1 : 1085;

    const novoPedido: Pedido = {
      id: novoId,
      cliente: clienteNome || 'Cliente Avulso',
      telefone: clienteTel || '(11) 99999-9999',
      endereco: tipoVenda === 'delivery' ? clienteEndereco || 'Endereço informado' : 'Retirada na Portaria',
      bairro: tipoVenda === 'delivery' ? clienteBairro || 'Bairro' : 'Balcão',
      tipo: tipoVenda,
      produtoNome: prod.nome,
      qtd: qtdVenda,
      valorTotal: valorVenda,
      pagamento: formaPagamento + (formaPagamento === 'Dinheiro' && trocoPara ? ` (Troco p/ ${trocoPara})` : ''),
      entregador: tipoVenda === 'delivery' ? entregadorSel : undefined,
      status: tipoVenda === 'delivery' ? 'em_rota' : 'entregue',
      hora: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    };

    // Atualiza estoque: diminui cheios, aumenta vazios
    setProdutos((prev) =>
      prev.map((p) => {
        if (p.id === prod.id) {
          return {
            ...p,
            estoqueCheio: Math.max(0, p.estoqueCheio - qtdVenda),
            estoqueVazio: p.estoqueVazio + qtdVenda
          };
        }
        return p;
      })
    );

    // Atualiza pedidos e financeiro
    setPedidos([novoPedido, ...pedidos]);
    setVendasTotal((prev) => prev + valorVenda);
    setSaldoCaixa((prev) => prev + valorVenda);

    showToast(
      `✓ Venda #${novoId} lançada com sucesso! ${
        tipoVenda === 'delivery' ? `Despachada para ${entregadorSel}.` : 'Finalizada na portaria.'
      } Estoque de ${prod.nome.split(' ')[0]} atualizado.`
    );

    // Alterna para visualização do resultado
    if (tipoVenda === 'delivery') {
      setActiveTab('entregas');
    } else {
      setActiveTab('dashboard');
    }
  };

  // 2. AÇÃO: Despachar ou Confirmar Entrega
  const handleAtualizarStatusPedido = (id: number, novoStatus: 'em_rota' | 'entregue') => {
    setPedidos((prev) =>
      prev.map((p) => {
        if (p.id === id) {
          return { ...p, status: novoStatus };
        }
        return p;
      })
    );
    showToast(
      novoStatus === 'entregue'
        ? `✓ Pedido #${id} marcado como Entregue! Recebimento confirmado em caixa.`
        : `✓ Pedido #${id} despachado em rota com sucesso!`
    );
  };

  // 3. AÇÃO: Receber Carga da Distribuidora (Entrada de Estoque)
  const handleReceberCarga = (prodId: string, qtd: number) => {
    setProdutos((prev) =>
      prev.map((p) => {
        if (p.id === prodId) {
          return {
            ...p,
            estoqueCheio: p.estoqueCheio + qtd,
            estoqueVazio: Math.max(0, p.estoqueVazio - qtd)
          };
        }
        return p;
      })
    );
    const prod = produtos.find((p) => p.id === prodId);
    showToast(`✓ Carga de +${qtd} unidades de ${prod?.nome.split(' ')[0]} registrada no depósito!`);
  };

  // 4. AÇÃO: Conferir Caixa Cego
  const handleConferirCaixa = (e: React.FormEvent) => {
    e.preventDefault();
    const contado = parseFloat(caixaContadoInput.replace(/\./g, '').replace(',', '.')) || 0;
    const diferenca = contado - saldoCaixa;

    if (Math.abs(diferenca) < 0.01) {
      setCaixaResultado({
        conferido: true,
        diferenca: 0,
        mensagem: '🎉 Caixa perfeito! A contagem física bateu 100% com o saldo do sistema.'
      });
    } else if (diferenca < 0) {
      setCaixaResultado({
        conferido: true,
        diferenca,
        mensagem: `⚠️ Atenção: Falta R$ ${Math.abs(diferenca).toFixed(2).replace('.', ',')} na contagem física em relação ao sistema.`
      });
    } else {
      setCaixaResultado({
        conferido: true,
        diferenca,
        mensagem: `ℹ️ Sobra de R$ ${diferenca.toFixed(2).replace('.', ',')} na contagem física em relação ao sistema.`
      });
    }
  };

  // 5. AÇÃO: Reiniciar Simulação
  const handleResetSimulador = () => {
    setProdutos(PRODUTOS_INICIAIS);
    setPedidos(PEDIDOS_INICIAIS);
    setVendasTotal(2415.0);
    setSaldoCaixa(1895.0);
    setCaixaResultado(null);
    setCaixaContadoInput('');
    setActiveTab('dashboard');
    showToast('🔄 Simulador reiniciado com os valores padrão da Revenda Modelo.');
  };

  // Cálculos dinâmicos
  const produtoAtual = produtos.find((p) => p.id === produtoSelId) || produtos[0];
  const totalSimuladoVenda = (produtoAtual.preco * qtdVenda).toFixed(2).replace('.', ',');
  const entregasEmRota = pedidos.filter((p) => p.status === 'em_rota');
  const entregasEntregues = pedidos.filter((p) => p.status === 'entregue');
  const inativosFiltrados = INATIVOS_INICIAIS.filter((item) => {
    if (filtroInativos === '60') return item.diasSemComprar >= 60 && item.diasSemComprar < 90;
    if (filtroInativos === '90') return item.diasSemComprar >= 90;
    return true;
  });

  return (
    <div className="w-full">
      {/* ── CARD PRINCIPAL DO SIMULADOR (AMPLIADO E TOTALMENTE INTERATIVO) ── */}
      <div className="rounded-2xl border-2 border-emerald-500/30 bg-white shadow-xl overflow-hidden transition-all">
        {/* Barra Superior estilo Aplicativo Desktop / Web Oficial */}
        <div className="bg-[#0d1b2e] text-white px-4 py-3 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-700">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5 shrink-0">
              <span className="size-3 rounded-full bg-rose-500/90 inline-block" />
              <span className="size-3 rounded-full bg-amber-500/90 inline-block" />
              <span className="size-3 rounded-full bg-emerald-500/90 inline-block" />
            </div>
            <div className="h-4 w-px bg-slate-700 hidden sm:block" />
            <div className="flex items-center gap-2">
              <div className="size-6 rounded-md bg-emerald-600 flex items-center justify-center font-bold text-xs text-white">
                <Flame className="size-3.5" />
              </div>
              <span className="font-bold text-sm tracking-tight">LMA GÁS v2.4</span>
              <span className="hidden md:inline-block text-[11px] text-slate-400 font-mono">
                — Revenda Central (Simulação Ativa)
              </span>
            </div>
          </div>

          {/* Status e Indicadores em Tempo Real na barra do sistema */}
          <div className="flex items-center gap-3 self-end sm:self-auto text-xs">
            <div className="flex items-center gap-1.5 bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 px-3 py-1 rounded-full text-[11px] font-bold">
              <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Simulador Operacional Ao Vivo</span>
            </div>
            <button
              onClick={handleResetSimulador}
              title="Restaurar dados iniciais do simulador"
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer flex items-center gap-1 text-[11px]"
            >
              <RotateCcw className="size-3.5" />
              <span className="hidden sm:inline">Reiniciar</span>
            </button>
          </div>
        </div>

        {/* Notificação Toast Flutuante de Ação Realizada */}
        {toastMessage && (
          <div className="bg-emerald-600 text-white px-4 py-2.5 text-xs font-bold flex items-center justify-between shadow-md transition-all animate-in fade-in slide-in-from-top-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-4 shrink-0" />
              <span>{toastMessage}</span>
            </div>
            <button
              onClick={() => setToastMessage(null)}
              className="text-white/80 hover:text-white text-xs underline cursor-pointer ml-3"
            >
              Fechar
            </button>
          </div>
        )}

        {/* ── BARRA RESUMO DAS MÉTRICAS DO DIA (REATIVAS ÀS AÇÕES) ── */}
        <div className="bg-[#f8fafc] border-b border-slate-200 px-4 py-3 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="bg-white p-2.5 sm:p-3 rounded-xl border border-slate-200 shadow-xs flex items-center gap-3">
              <div className="size-9 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                <DollarSign className="size-5" />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] text-slate-500 font-medium block">Vendas Hoje</span>
                <strong className="text-sm sm:text-base font-black text-[#0d1b2e] block truncate">
                  R$ {vendasTotal.toFixed(2).replace('.', ',')}
                </strong>
              </div>
            </div>

            <div className="bg-white p-2.5 sm:p-3 rounded-xl border border-slate-200 shadow-xs flex items-center gap-3">
              <div className="size-9 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                <Wallet className="size-5" />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] text-slate-500 font-medium block">Saldo Caixa</span>
                <strong className="text-sm sm:text-base font-black text-blue-700 block truncate">
                  R$ {saldoCaixa.toFixed(2).replace('.', ',')}
                </strong>
              </div>
            </div>

            <div className="bg-white p-2.5 sm:p-3 rounded-xl border border-slate-200 shadow-xs flex items-center gap-3">
              <div className="size-9 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                <Truck className="size-5" />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] text-slate-500 font-medium block">Entregas em Rota</span>
                <strong className="text-sm sm:text-base font-black text-amber-700 block">
                  {entregasEmRota.length} pedidos
                </strong>
              </div>
            </div>

            <div className="bg-white p-2.5 sm:p-3 rounded-xl border border-slate-200 shadow-xs flex items-center gap-3">
              <div className="size-9 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                <Package className="size-5" />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] text-slate-500 font-medium block">P13 Cheios (Estoque)</span>
                <strong className="text-sm sm:text-base font-black text-slate-800 block">
                  {produtos[0].estoqueCheio} un
                </strong>
              </div>
            </div>
          </div>
        </div>

        {/* ── BARRA DE ABAS COM TODAS AS FERRAMENTAS DO SISTEMA ── */}
        <div className="bg-slate-100/80 px-4 sm:px-6 pt-3 pb-0 border-b border-slate-200">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {[
              { id: 'dashboard', label: '📊 Dashboard', desc: 'Visão Geral' },
              { id: 'venda', label: '⚡ Lançar Venda (PDV)', desc: 'Faça um pedido real' },
              { id: 'entregas', label: '🚚 Entregas & Rotas', desc: 'Despacho & Waze' },
              { id: 'app_entregador', label: '📱 App do Entregador', desc: 'PWA Motoboy' },
              { id: 'inativos', label: '👥 Inativos (+60d)', desc: 'Reativação WhatsApp' },
              { id: 'estoque', label: '🛢️ Vasilhames & Estoque', desc: 'Cheios e Vazios' },
              { id: 'caixa', label: '🔒 Caixa Cego', desc: 'Fechamento de Turno' },
              { id: 'cardapio', label: '🛍️ Cardápio Online', desc: 'Loja do Cliente' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3.5 py-2.5 rounded-t-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer border-t-2 ${
                  activeTab === tab.id
                    ? 'bg-white text-emerald-800 border-emerald-600 shadow-xs'
                    : 'bg-transparent text-slate-600 hover:text-slate-900 border-transparent hover:bg-white/60'
                }`}
              >
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ── ÁREA DE TRABALHO DA ABA ATIVA (INTERAÇÕES REAIS) ── */}
        <div className="p-4 sm:p-6 bg-white min-h-[440px]">
          {/* ═══════════════ 1. ABA DASHBOARD ═══════════════ */}
          {activeTab === 'dashboard' && (
            <div className="space-y-5 animate-fade-in text-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-slate-100 gap-2">
                <div>
                  <h4 className="text-sm font-bold text-[#0d1b2e]">Painel Operacional do Dia</h4>
                  <p className="text-[11px] text-slate-500">
                    Visão consolidada em tempo real. Qualquer venda ou entrega lançada reflete aqui imediatamente.
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab('venda')}
                  className="px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-xs cursor-pointer self-start sm:self-auto"
                >
                  <Plus className="size-3.5" />
                  Lançar Nova Venda no PDV
                </button>
              </div>

              {/* Estoque em tempo real com botões de reposição */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex justify-between items-center mb-3">
                  <div>
                    <span className="font-bold text-slate-900 text-xs block">Estoque de Botijões &amp; Galões</span>
                    <span className="text-[10px] text-slate-500">Controle rigoroso de cheios e vazios no pátio</span>
                  </div>
                  <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold border border-emerald-200">
                    Sincronizado
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {produtos.map((prod) => (
                    <div key={prod.id} className="bg-white p-3 rounded-lg border border-slate-200 shadow-xs space-y-1.5">
                      <div className="flex justify-between items-start">
                        <strong className="text-slate-800 text-xs">{prod.nome.split(' (')[0]}</strong>
                        <span className="text-[10px] font-bold text-emerald-700">R$ {prod.preco.toFixed(2).replace('.', ',')}</span>
                      </div>
                      <div className="flex justify-between items-center text-[11px] pt-1 border-t border-slate-100">
                        <span className="text-slate-600">Cheios disponíveis:</span>
                        <strong className="text-emerald-700 font-black">{prod.estoqueCheio} un</strong>
                      </div>
                      <div className="flex justify-between items-center text-[11px]">
                        <span className="text-slate-500">Vazios no pátio:</span>
                        <span className="text-slate-600 font-semibold">{prod.estoqueVazio} un</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Últimos Pedidos do Dia */}
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-slate-900 text-xs">Últimos Pedidos Movimentados Hoje</span>
                  <button
                    onClick={() => setActiveTab('entregas')}
                    className="text-emerald-700 hover:text-emerald-800 font-bold text-xs flex items-center gap-1 cursor-pointer"
                  >
                    Ver todas as entregas <ChevronRight className="size-3.5" />
                  </button>
                </div>

                <div className="divide-y divide-slate-100 overflow-x-auto">
                  <table className="w-full text-left text-xs min-w-[550px]">
                    <thead>
                      <tr className="text-slate-400 font-medium text-[11px]">
                        <th className="pb-2">Pedido</th>
                        <th className="pb-2">Cliente</th>
                        <th className="pb-2">Produto</th>
                        <th className="pb-2">Valor</th>
                        <th className="pb-2">Pagamento</th>
                        <th className="pb-2">Status</th>
                        <th className="pb-2 text-right">Ação</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {pedidos.slice(0, 4).map((ped) => (
                        <tr key={ped.id} className="hover:bg-slate-50/80 transition-colors">
                          <td className="py-2.5 font-bold text-slate-700">#{ped.id}</td>
                          <td className="py-2.5 font-semibold text-slate-900">{ped.cliente}</td>
                          <td className="py-2.5 text-slate-600">{ped.qtd}x {ped.produtoNome.split(' ')[0]}</td>
                          <td className="py-2.5 font-bold text-emerald-700">R$ {ped.valorTotal.toFixed(2).replace('.', ',')}</td>
                          <td className="py-2.5 text-slate-500 text-[11px]">{ped.pagamento}</td>
                          <td className="py-2.5">
                            <span
                              className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                ped.status === 'entregue'
                                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                                  : ped.status === 'em_rota'
                                  ? 'bg-blue-50 text-blue-700 border border-blue-200'
                                  : 'bg-amber-50 text-amber-700 border border-amber-200'
                              }`}
                            >
                              {ped.status === 'entregue' ? 'Entregue' : ped.status === 'em_rota' ? 'Em Rota' : 'Pendente'}
                            </span>
                          </td>
                          <td className="py-2.5 text-right">
                            {ped.status === 'em_rota' && (
                              <button
                                onClick={() => handleAtualizarStatusPedido(ped.id, 'entregue')}
                                className="px-2 py-1 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[10px] cursor-pointer"
                              >
                                Baixar
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ═══════════════ 2. ABA NOVA VENDA (PDV EXPRESS REAL) ═══════════════ */}
          {activeTab === 'venda' && (
            <div className="space-y-4 animate-fade-in text-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-slate-100 gap-1">
                <div>
                  <h4 className="text-sm font-bold text-[#0d1b2e] flex items-center gap-1.5">
                    <Sparkles className="size-4 text-emerald-600" />
                    PDV Express — Lançamento Real de Venda
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    Preencha os campos abaixo e clique em "Concluir Venda" para ver a baixa de estoque e o despacho em tempo real.
                  </p>
                </div>
                <div className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 rounded-lg text-[11px] font-semibold self-start sm:self-auto">
                  ⚡ PDV Ágil em 10 segundos
                </div>
              </div>

              <form onSubmit={handleConcluirVenda} className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                {/* Coluna da Esquerda: Dados do Pedido */}
                <div className="lg:col-span-7 space-y-3.5">
                  {/* Tipo de Operação: Balcão vs Delivery */}
                  <div>
                    <label className="block text-slate-600 font-bold mb-1 text-[11px]">Tipo de Venda:</label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setTipoVenda('delivery')}
                        className={`py-2 px-3 rounded-lg font-bold text-xs flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                          tipoVenda === 'delivery'
                            ? 'bg-emerald-700 text-white border-emerald-700 shadow-xs'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        <Truck className="size-3.5" />
                        Entrega (Delivery)
                      </button>
                      <button
                        type="button"
                        onClick={() => setTipoVenda('balcao')}
                        className={`py-2 px-3 rounded-lg font-bold text-xs flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                          tipoVenda === 'balcao'
                            ? 'bg-emerald-700 text-white border-emerald-700 shadow-xs'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        <Store className="size-3.5" />
                        Balcão (Portaria)
                      </button>
                    </div>
                  </div>

                  {/* Seleção de Produto */}
                  <div>
                    <label className="block text-slate-600 font-bold mb-1 text-[11px]">Selecione o Produto:</label>
                    <div className="grid grid-cols-2 gap-2">
                      {produtos.map((p) => (
                        <div
                          key={p.id}
                          onClick={() => setProdutoSelId(p.id)}
                          className={`p-2.5 rounded-lg border cursor-pointer transition-all ${
                            produtoSelId === p.id
                              ? 'border-emerald-600 bg-emerald-50/70 shadow-xs ring-1 ring-emerald-600'
                              : 'border-slate-200 bg-white hover:bg-slate-50'
                          }`}
                        >
                          <div className="flex justify-between items-center font-bold text-slate-900 text-xs">
                            <span>{p.nome.split(' (')[0]}</span>
                            <span className="text-emerald-700">R$ {p.preco.toFixed(2).replace('.', ',')}</span>
                          </div>
                          <div className="text-[10px] text-slate-500 mt-0.5">Estoque: {p.estoqueCheio} un</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quantidade */}
                  <div className="flex items-center gap-3">
                    <span className="text-slate-600 font-bold text-[11px]">Quantidade:</span>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setQtdVenda(Math.max(1, qtdVenda - 1))}
                        className="size-7 rounded bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold flex items-center justify-center text-sm cursor-pointer"
                      >
                        -
                      </button>
                      <span className="w-8 text-center font-bold text-sm text-slate-900">{qtdVenda}</span>
                      <button
                        type="button"
                        onClick={() => setQtdVenda(qtdVenda + 1)}
                        className="size-7 rounded bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold flex items-center justify-center text-sm cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Dados do Cliente */}
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <div className="font-bold text-slate-700 text-[11px]">Dados do Cliente:</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <div>
                        <span className="text-[10px] text-slate-500 block">Nome do Cliente:</span>
                        <input
                          type="text"
                          value={clienteNome}
                          onChange={(e) => setClienteNome(e.target.value)}
                          className="w-full px-2.5 py-1.5 rounded bg-white border border-slate-200 text-xs text-slate-800 focus:outline-emerald-600 font-medium"
                          placeholder="Nome do cliente"
                        />
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-500 block">Telefone (WhatsApp):</span>
                        <input
                          type="text"
                          value={clienteTel}
                          onChange={(e) => setClienteTel(e.target.value)}
                          className="w-full px-2.5 py-1.5 rounded bg-white border border-slate-200 text-xs text-slate-800 focus:outline-emerald-600 font-medium"
                          placeholder="Telefone"
                        />
                      </div>
                    </div>

                    {tipoVenda === 'delivery' && (
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                        <div className="sm:col-span-2">
                          <span className="text-[10px] text-slate-500 block">Endereço de Entrega:</span>
                          <input
                            type="text"
                            value={clienteEndereco}
                            onChange={(e) => setClienteEndereco(e.target.value)}
                            className="w-full px-2.5 py-1.5 rounded bg-white border border-slate-200 text-xs text-slate-800 focus:outline-emerald-600 font-medium"
                            placeholder="Rua, número, apto"
                          />
                        </div>
                        <div>
                          <span className="text-[10px] text-slate-500 block">Bairro:</span>
                          <input
                            type="text"
                            value={clienteBairro}
                            onChange={(e) => setClienteBairro(e.target.value)}
                            className="w-full px-2.5 py-1.5 rounded bg-white border border-slate-200 text-xs text-slate-800 focus:outline-emerald-600 font-medium"
                            placeholder="Bairro"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Coluna da Direita: Pagamento e Finalização */}
                <div className="lg:col-span-5 space-y-3.5 flex flex-col justify-between">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                    <span className="font-bold text-slate-800 text-xs block">Forma de Pagamento:</span>
                    <div className="grid grid-cols-2 gap-1.5">
                      {['Pix', 'Dinheiro', 'Cartão Crédito', 'Cartão Débito'].map((forma) => (
                        <button
                          key={forma}
                          type="button"
                          onClick={() => setFormaPagamento(forma)}
                          className={`py-1.5 px-2 rounded-lg text-xs font-semibold border text-center transition-all cursor-pointer ${
                            formaPagamento === forma
                              ? 'bg-emerald-700 text-white border-emerald-700 shadow-xs'
                              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          {forma}
                        </button>
                      ))}
                    </div>

                    {formaPagamento === 'Dinheiro' && (
                      <div className="pt-2">
                        <span className="text-[10px] text-slate-500 block">Precisa de troco para quanto?</span>
                        <input
                          type="text"
                          value={trocoPara}
                          onChange={(e) => setTrocoPara(e.target.value)}
                          placeholder="Ex: 150,00"
                          className="w-full px-2.5 py-1.5 rounded bg-white border border-slate-200 text-xs text-slate-800 font-medium mt-0.5"
                        />
                      </div>
                    )}

                    {tipoVenda === 'delivery' && (
                      <div className="pt-2 border-t border-slate-200">
                        <span className="text-[10px] text-slate-500 block mb-1">Entregador Responsável:</span>
                        <select
                          value={entregadorSel}
                          onChange={(e) => setEntregadorSel(e.target.value)}
                          className="w-full px-2.5 py-1.5 rounded bg-white border border-slate-200 text-xs font-semibold text-slate-800"
                        >
                          <option value="Carlos (Moto 01)">Carlos (Moto 01) • 1 entrega ativa</option>
                          <option value="Fábio (Moto 02)">Fábio (Moto 02) • 2 entregas ativas</option>
                        </select>
                      </div>
                    )}

                    {/* Resumo Financeiro da Venda */}
                    <div className="pt-3 border-t border-slate-200 space-y-1">
                      <div className="flex justify-between text-slate-600 text-xs">
                        <span>Subtotal ({qtdVenda} un):</span>
                        <span>R$ {totalSimuladoVenda}</span>
                      </div>
                      <div className="flex justify-between text-slate-600 text-xs">
                        <span>Taxa de Entrega:</span>
                        <span className="text-emerald-700 font-bold">Grátis</span>
                      </div>
                      <div className="flex justify-between items-center text-slate-900 font-bold text-sm pt-1 border-t border-slate-200">
                        <span>Total a Receber:</span>
                        <span className="text-emerald-700 text-lg font-black">R$ {totalSimuladoVenda}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md cursor-pointer transition-all"
                  >
                    <Check className="size-4 stroke-[3]" />
                    Concluir Venda e Despachar
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* ═══════════════ 3. ABA ENTREGAS & ROTAS ═══════════════ */}
          {activeTab === 'entregas' && (
            <div className="space-y-4 animate-fade-in text-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-slate-100 gap-2">
                <div>
                  <h4 className="text-sm font-bold text-[#0d1b2e]">Despacho e Roteirização de Entregas</h4>
                  <p className="text-[11px] text-slate-500">
                    Acompanhe os pedidos em rota, abra as rotas no Waze/Google Maps e baixe as entregas concluídas.
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-blue-100 text-blue-800 font-bold text-[11px] flex items-center gap-1">
                    <Truck className="size-3" /> Em Rota ({entregasEmRota.length})
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[11px] flex items-center gap-1">
                    <Check className="size-3" /> Entregues ({entregasEntregues.length})
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {pedidos.map((ped) => (
                  <div
                    key={ped.id}
                    className={`p-4 rounded-xl border shadow-xs transition-all space-y-2.5 ${
                      ped.status === 'em_rota'
                        ? 'border-blue-300 bg-blue-50/20'
                        : 'border-slate-200 bg-white'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2">
                          <strong className="text-slate-900 text-sm">Pedido #{ped.id}</strong>
                          <span className="text-[10px] text-slate-500 font-mono">({ped.hora})</span>
                        </div>
                        <span className="font-semibold text-slate-800 block mt-0.5">{ped.cliente}</span>
                      </div>
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                          ped.status === 'entregue'
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-blue-100 text-blue-800 animate-pulse'
                        }`}
                      >
                        {ped.status === 'entregue' ? '✓ Entregue' : '🛵 Em Rota'}
                      </span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 space-y-1 text-[11px]">
                      <div className="flex items-center gap-1.5 text-slate-700">
                        <MapPin className="size-3.5 text-slate-400 shrink-0" />
                        <span className="truncate">{ped.endereco}</span>
                      </div>
                      <div className="flex justify-between items-center text-slate-600 pt-0.5">
                        <span>Produto: <strong>{ped.qtd}x {ped.produtoNome.split(' ')[0]}</strong></span>
                        <span className="font-bold text-emerald-700">R$ {ped.valorTotal.toFixed(2).replace('.', ',')}</span>
                      </div>
                      <div className="text-slate-500 text-[10px]">
                        Pagamento: <strong>{ped.pagamento}</strong> • Entregador: <strong>{ped.entregador || 'Portaria'}</strong>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-1 gap-2">
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ped.endereco)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-600 hover:text-blue-800 font-bold text-[11px] flex items-center gap-1 hover:underline"
                      >
                        <Navigation className="size-3.5" />
                        Abrir Waze / Maps
                      </a>

                      {ped.status === 'em_rota' ? (
                        <button
                          onClick={() => handleAtualizarStatusPedido(ped.id, 'entregue')}
                          className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1 shadow-xs cursor-pointer"
                        >
                          <Check className="size-3 stroke-[3]" />
                          Confirmar Entrega
                        </button>
                      ) : (
                        <span className="text-[11px] text-emerald-700 font-bold flex items-center gap-1">
                          <CheckCircle2 className="size-3.5" /> Finalizado
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ═══════════════ 4. ABA APP DO ENTREGADOR (PWA SMARTPHONE) ═══════════════ */}
          {activeTab === 'app_entregador' && (
            <div className="space-y-4 animate-fade-in text-xs">
              <div className="bg-emerald-50 border border-emerald-200 p-3.5 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <Smartphone className="size-5 text-emerald-700 shrink-0" />
                  <div>
                    <strong className="text-emerald-900 block text-xs">Aplicativo do Entregador (Exclusivo Plano Pro)</strong>
                    <span className="text-emerald-700 text-[11px]">
                      O motoqueiro acessa direto pelo navegador do celular sem instalar nada pesado da Play Store.
                    </span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded bg-emerald-600 text-white font-bold text-[10px] self-start sm:self-auto">
                  Moto 01 · Conectado
                </span>
              </div>

              {/* Smartphone Mockup */}
              <div className="max-w-sm mx-auto bg-slate-900 p-3 rounded-[32px] shadow-2xl border-4 border-slate-800">
                <div className="bg-white rounded-[24px] p-4 text-slate-800 space-y-3 min-h-[360px] flex flex-col justify-between">
                  <div>
                    {/* Header do App Mobile */}
                    <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <div className="size-6 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-[10px]">
                          C
                        </div>
                        <span className="font-bold text-xs">Carlos (Moto 01)</span>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                        Em Rota
                      </span>
                    </div>

                    {/* Pedido ativo no celular do entregador */}
                    {entregasEmRota.length > 0 ? (
                      <div className="mt-3 space-y-2.5">
                        <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                            Entrega Atual #{entregasEmRota[0].id}
                          </span>
                          <strong className="text-sm font-bold text-slate-900 block">
                            {entregasEmRota[0].cliente}
                          </strong>
                          <div className="text-slate-600 text-[11px] flex items-start gap-1">
                            <MapPin className="size-3.5 text-slate-400 shrink-0 mt-0.5" />
                            <span>{entregasEmRota[0].endereco}</span>
                          </div>
                          <div className="text-slate-500 text-[10px] pt-1 border-t border-slate-200">
                            Cobrar: <strong className="text-emerald-700 text-xs">R$ {entregasEmRota[0].valorTotal.toFixed(2).replace('.', ',')}</strong> ({entregasEmRota[0].pagamento})
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <a
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(entregasEmRota[0].endereco)}`}
                            target="_blank"
                            rel="noreferrer"
                            className="py-2 px-2.5 rounded-lg bg-blue-600 text-white font-bold text-[11px] flex items-center justify-center gap-1.5 shadow-xs"
                          >
                            <Navigation className="size-3.5" />
                            Waze / Rota
                          </a>
                          <button
                            onClick={() => handleAtualizarStatusPedido(entregasEmRota[0].id, 'entregue')}
                            className="py-2 px-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
                          >
                            <Check className="size-3.5 stroke-[3]" />
                            Baixar Pedido
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="mt-8 text-center py-8 text-slate-400 space-y-2">
                        <CheckCircle2 className="size-8 text-emerald-600 mx-auto" />
                        <p className="font-bold text-xs text-slate-700">Todas as entregas foram concluídas!</p>
                        <p className="text-[10px]">Vá para a aba "Lançar Venda" para criar um novo pedido para o entregador.</p>
                      </div>
                    )}
                  </div>

                  <div className="pt-2 border-t border-slate-100 text-center text-[10px] text-slate-400">
                    Sincronização instantânea com o caixa central da revenda
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ═══════════════ 5. ABA CLIENTES INATIVOS (+60 DIAS) ═══════════════ */}
          {activeTab === 'inativos' && (
            <div className="space-y-4 animate-fade-in text-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-slate-100 gap-2">
                <div>
                  <h4 className="text-sm font-bold text-[#0d1b2e] flex items-center gap-1.5">
                    <Users className="size-4 text-emerald-600" />
                    Radar de Clientes Inativos (+60 Dias sem Pedir)
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    O sistema identifica automaticamente clientes que costumavam pedir gás e pararam. Recupere com 1 clique no WhatsApp.
                  </p>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="text-[11px] text-slate-500 font-semibold">Período:</span>
                  <button
                    onClick={() => setFiltroInativos('todos')}
                    className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      filtroInativos === 'todos'
                        ? 'bg-emerald-700 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    Todos ({INATIVOS_INICIAIS.length})
                  </button>
                  <button
                    onClick={() => setFiltroInativos('60')}
                    className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      filtroInativos === '60'
                        ? 'bg-amber-600 text-white'
                        : 'bg-amber-50 text-amber-700 hover:bg-amber-100'
                    }`}
                  >
                    +60 dias
                  </button>
                  <button
                    onClick={() => setFiltroInativos('90')}
                    className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      filtroInativos === '90'
                        ? 'bg-rose-600 text-white'
                        : 'bg-rose-50 text-rose-700 hover:bg-rose-100'
                    }`}
                  >
                    +90 dias (Crítico)
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 divide-y divide-slate-100 overflow-hidden shadow-xs">
                {inativosFiltrados.map((item) => (
                  <div key={item.id} className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50/70 transition-colors">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <strong className="text-slate-900 text-sm">{item.nome}</strong>
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            item.diasSemComprar >= 90
                              ? 'bg-rose-50 text-rose-700 border border-rose-200'
                              : 'bg-amber-50 text-amber-700 border border-amber-200'
                          }`}
                        >
                          {item.diasSemComprar} dias sem pedir
                        </span>
                      </div>
                      <p className="text-slate-500 text-[11px]">
                        Última compra: <strong>{item.ultimoProduto}</strong> em {item.ultimaData} • Tel: {item.telefone}
                      </p>
                    </div>

                    <a
                      href={`https://wa.me/${item.telefone}?text=${encodeURIComponent(
                        `Olá ${item.nome.split(' ')[0]}! Tudo bem? Aqui é da Revenda Central de Gás. Notamos que faz um tempo desde o seu último pedido de gás conosco. Estamos com entregas rápidas hoje e preparamos uma condição especial para você! Precisa que enviemos um botijão hoje?`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs cursor-pointer transition-colors self-start sm:self-auto"
                    >
                      <MessageSquare className="size-3.5" />
                      Reativar no WhatsApp
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ═══════════════ 6. ABA ESTOQUE & VASILHAMES ═══════════════ */}
          {activeTab === 'estoque' && (
            <div className="space-y-4 animate-fade-in text-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-slate-100 gap-2">
                <div>
                  <h4 className="text-sm font-bold text-[#0d1b2e] flex items-center gap-1.5">
                    <Package className="size-4 text-emerald-600" />
                    Controle de Vasilhames &amp; Reposição de Carga
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    Simule a entrada de caminhão da distribuidora e veja o saldo de botijões cheios e vazios se ajustar.
                  </p>
                </div>
                <div className="text-[11px] text-slate-600 font-semibold bg-slate-100 px-3 py-1 rounded-lg">
                  Total de Vasilhames no Pátio: <strong>{produtos.reduce((acc, p) => acc + p.estoqueCheio + p.estoqueVazio, 0)} unidades</strong>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {produtos.map((p) => (
                  <div key={p.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3">
                    <div className="flex justify-between items-center">
                      <strong className="text-sm font-bold text-slate-900">{p.nome}</strong>
                      <span className="text-xs font-bold text-emerald-700">R$ {p.preco.toFixed(2).replace('.', ',')}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-center">
                        <span className="text-[10px] font-bold text-emerald-800 uppercase block">Cheios Prontos</span>
                        <strong className="text-lg font-black text-emerald-700">{p.estoqueCheio} un</strong>
                      </div>
                      <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-200 text-center">
                        <span className="text-[10px] font-bold text-amber-800 uppercase block">Vazios no Pátio</span>
                        <strong className="text-lg font-black text-amber-700">{p.estoqueVazio} un</strong>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-1">
                      <button
                        onClick={() => handleReceberCarga(p.id, 20)}
                        className="flex-1 py-1.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 font-bold text-[11px] flex items-center justify-center gap-1 shadow-2xs cursor-pointer"
                      >
                        <Plus className="size-3" />
                        +20 Cheios (Carga)
                      </button>
                      <button
                        onClick={() => handleReceberCarga(p.id, 50)}
                        className="flex-1 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-[11px] flex items-center justify-center gap-1 shadow-2xs cursor-pointer"
                      >
                        <Plus className="size-3" />
                        +50 Cheios
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ═══════════════ 7. ABA FECHAMENTO DE CAIXA CEGO ═══════════════ */}
          {activeTab === 'caixa' && (
            <div className="space-y-4 animate-fade-in text-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-slate-100 gap-2">
                <div>
                  <h4 className="text-sm font-bold text-[#0d1b2e] flex items-center gap-1.5">
                    <Wallet className="size-4 text-emerald-600" />
                    Fechamento de Caixa Cego à Prova de Desvios
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    O operador informa a contagem física real na gaveta sem saber o saldo do sistema. O sistema compara e aponta a diferença.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                {/* Lado Esquerdo: Formulário de Contagem Física */}
                <div className="lg:col-span-6 p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-3">
                  <strong className="text-xs font-bold text-slate-900 block">
                    1. Encerramento de Turno do Operador
                  </strong>
                  <p className="text-[11px] text-slate-500">
                    Digite um valor para simular a contagem física das notas e moedas na gaveta:
                  </p>

                  <form onSubmit={handleConferirCaixa} className="space-y-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        Valor Total Contado na Gaveta (R$):
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={caixaContadoInput}
                          onChange={(e) => setCaixaContadoInput(e.target.value)}
                          placeholder={`Ex: ${saldoCaixa.toFixed(2).replace('.', ',')}`}
                          className="flex-1 px-3 py-2 rounded-lg bg-white border border-slate-300 font-bold text-slate-900 text-sm focus:outline-emerald-600"
                        />
                        <button
                          type="submit"
                          className="px-4 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-xs cursor-pointer"
                        >
                          Conferir
                        </button>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-1 text-[11px]">
                      <button
                        type="button"
                        onClick={() => setCaixaContadoInput(saldoCaixa.toFixed(2).replace('.', ','))}
                        className="text-emerald-700 font-semibold hover:underline cursor-pointer"
                      >
                        [ Preencher valor exato R$ {saldoCaixa.toFixed(2).replace('.', ',')} ]
                      </button>
                      <button
                        type="button"
                        onClick={() => setCaixaContadoInput((saldoCaixa - 20).toFixed(2).replace('.', ','))}
                        className="text-rose-600 font-semibold hover:underline cursor-pointer"
                      >
                        [ Simular quebra de R$ 20,00 ]
                      </button>
                    </div>
                  </form>

                  {/* Resultado da Conferência */}
                  {caixaResultado && (
                    <div
                      className={`p-3.5 rounded-xl border mt-3 transition-all ${
                        caixaResultado.diferenca === 0
                          ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                          : 'bg-rose-50 border-rose-300 text-rose-900'
                      }`}
                    >
                      <strong className="block text-xs font-bold mb-1">Resultado da Conferência Cega:</strong>
                      <p className="text-xs font-medium leading-relaxed">{caixaResultado.mensagem}</p>
                      <div className="mt-2 pt-2 border-t border-black/10 flex justify-between text-[11px]">
                        <span>Saldo Registrado pelo LMA Gás:</span>
                        <strong>R$ {saldoCaixa.toFixed(2).replace('.', ',')}</strong>
                      </div>
                    </div>
                  )}
                </div>

                {/* Lado Direito: Resumo Financeiro */}
                <div className="lg:col-span-6 p-4 rounded-xl border border-slate-200 bg-white space-y-3">
                  <strong className="text-xs font-bold text-slate-900 block">
                    2. Auditoria e Histórico Financeiro
                  </strong>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-2.5 rounded-lg bg-emerald-50/60 border border-emerald-100">
                      <span className="text-slate-600">Total de Entradas (Vendas):</span>
                      <strong className="text-emerald-700 font-bold">+ R$ {vendasTotal.toFixed(2).replace('.', ',')}</strong>
                    </div>
                    <div className="flex justify-between items-center p-2.5 rounded-lg bg-rose-50/60 border border-rose-100">
                      <span className="text-slate-600">Total de Saídas / Despesas:</span>
                      <strong className="text-rose-700 font-bold">- R$ {despesasTotal.toFixed(2).replace('.', ',')}</strong>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-xl bg-blue-50 border border-blue-200 text-sm">
                      <span className="font-bold text-blue-900">Saldo Líquido em Caixa:</span>
                      <strong className="font-black text-blue-800 text-base">R$ {saldoCaixa.toFixed(2).replace('.', ',')}</strong>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-500 pt-1 leading-relaxed">
                    Com o Caixa Cego, seus funcionários não conseguem maquiar fechamentos. Se faltar dinheiro, o sistema gera o alerta de quebra no relatório do proprietário.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* ═══════════════ 8. ABA CARDÁPIO DIGITAL DO CLIENTE ═══════════════ */}
          {activeTab === 'cardapio' && (
            <div className="space-y-4 animate-fade-in text-xs">
              <div className="bg-blue-50 border border-blue-200 p-3.5 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <strong className="text-blue-900 block text-xs">Cardápio Digital Próprio (Exclusivo Plano Pro)</strong>
                  <span className="text-blue-700 text-[11px]">
                    Link direto: <strong>suarevenda.lmaapp.com.br</strong> • 0% de comissões de marketplace (como iFood ou Zé Delivery).
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded bg-blue-600 text-white font-bold text-[10px] self-start sm:self-auto">
                  Loja Virtual Ativa
                </span>
              </div>

              <div className="max-w-md mx-auto p-4 rounded-2xl border border-slate-200 bg-white shadow-md space-y-3.5">
                <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                  <div className="size-11 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-lg">
                    🔥
                  </div>
                  <div>
                    <h5 className="font-black text-sm text-[#0d1b2e]">Revenda Central Gás &amp; Água</h5>
                    <p className="text-[10px] text-slate-500">Entregas em 30 a 45 minutos • Franco da Rocha - SP</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex justify-between items-center">
                    <div>
                      <strong className="text-xs text-slate-900 block">Botijão P13 (GLP Residencial)</strong>
                      <span className="text-[10px] text-slate-500">Entrega rápida na sua casa</span>
                      <div className="text-emerald-700 font-black text-sm mt-0.5">R$ 115,00</div>
                    </div>
                    <button
                      onClick={() => {
                        setProdutoSelId('p13');
                        setQtdVenda(1);
                        setClienteNome('Cliente da Loja Online');
                        setActiveTab('venda');
                        showToast('✓ Pedido da loja online carregado no PDV para finalização!');
                      }}
                      className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs cursor-pointer shadow-xs"
                    >
                      Pedir Agora
                    </button>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex justify-between items-center">
                    <div>
                      <strong className="text-xs text-slate-900 block">Galão de Água Mineral 20L</strong>
                      <span className="text-[10px] text-slate-500">Água certificada lacrada</span>
                      <div className="text-blue-700 font-black text-sm mt-0.5">R$ 18,00</div>
                    </div>
                    <button
                      onClick={() => {
                        setProdutoSelId('agua20l');
                        setQtdVenda(2);
                        setClienteNome('Cliente da Loja Online');
                        setActiveTab('venda');
                        showToast('✓ Pedido de 2x Água 20L carregado no PDV!');
                      }}
                      className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs cursor-pointer shadow-xs"
                    >
                      Pedir Agora
                    </button>
                  </div>
                </div>

                <div className="text-center text-[11px] text-slate-500 pt-1">
                  💡 Quando o cliente pede pelo link, o pedido toca uma notificação sonora na revenda e entra direto no painel de entregas.
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ── RODAPÉ DE CONVERSÃO DO SIMULADOR ── */}
        <div className="bg-[#f8fafc] border-t border-slate-200 px-4 py-3.5 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="size-5 text-emerald-600 shrink-0" />
            <div className="text-xs">
              <span className="font-bold text-slate-800 block">
                Gostou da agilidade do LMA GÁS na prática?
              </span>
              <span className="text-slate-500 text-[11px]">
                Teste todas essas ferramentas na sua própria revenda durante 7 dias sem compromisso.
              </span>
            </div>
          </div>

          <button
            onClick={onOpenTrial}
            className="px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm cursor-pointer transition-all shrink-0"
          >
            <Sparkles className="size-3.5 text-emerald-200" />
            Começar Teste Grátis de 7 Dias
            <ArrowRight className="size-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
