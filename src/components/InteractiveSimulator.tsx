import React, { useState, useMemo } from 'react';
import confetti from 'canvas-confetti';
import {
  LayoutDashboard,
  ShoppingCart,
  History,
  Users,
  Package,
  Truck,
  ShoppingBag,
  FileWarning,
  Wallet,
  BarChart3,
  Globe,
  Plus,
  Minus,
  Trash2,
  CheckCircle2,
  Clock,
  Navigation,
  MessageCircle,
  Search,
  AlertTriangle,
  Flame,
  Sparkles,
  ArrowRight,
  RotateCcw,
  Store,
  Send,
  Bell,
  Phone,
  MapPin,
  DollarSign,
  TrendingUp,
  Printer,
  Check,
  ShieldCheck,
  ExternalLink,
  Calendar,
  ArrowUpRight,
  Receipt,
  CreditCard,
  Bike,
  UserCheck,
  Eye,
} from 'lucide-react';

interface SimulatorProps {
  onOpenTrial: () => void;
}

type ModuleId =
  | 'dashboard'
  | 'nova-venda'
  | 'entregas'
  | 'pedidos-online'
  | 'cardapio-cliente'
  | 'app-entregador'
  | 'clientes'
  | 'produtos'
  | 'historico'
  | 'caixa'
  | 'contas'
  | 'compras'
  | 'relatorios';

interface ProductItem {
  id: string;
  name: string;
  brand: string;
  category: 'gas' | 'agua' | 'acessorio';
  price: number;
  cost: number;
  stock: number;
  minStock: number;
  unit: string;
}

interface ClientItem {
  id: string;
  name: string;
  phone: string;
  address: string;
  neighborhood: string;
  lastOrderDaysAgo: number;
  totalOrders: number;
}

interface OrderCartItem {
  productId: string;
  name: string;
  brand: string;
  qty: number;
  price: number;
}

interface SaleOrder {
  id: string;
  number: number;
  time: string;
  date: string;
  clientId: string;
  clientName: string;
  clientPhone: string;
  address: string;
  neighborhood: string;
  items: OrderCartItem[];
  discount: number;
  total: number;
  payment: 'PIX' | 'Dinheiro' | 'Cartão' | 'Fiado';
  type: 'Portaria' | 'Entrega' | 'Online';
  deliveryStatus?: 'pendente' | 'a_caminho' | 'entregue';
  driverName?: string;
  paid: boolean;
}

interface OnlineOrder {
  id: string;
  code: string;
  time: string;
  clientName: string;
  clientPhone: string;
  address: string;
  neighborhood: string;
  items: OrderCartItem[];
  total: number;
  payment: 'PIX' | 'Dinheiro' | 'Cartão';
  notes?: string;
  status: 'aguardando' | 'aprovado' | 'recusado';
}

interface CashEntry {
  id: string;
  time: string;
  type: 'entrada' | 'saida';
  category: string;
  description: string;
  payment: string;
  amount: number;
}

interface BillPayable {
  id: string;
  description: string;
  category: string;
  dueDate: string;
  amount: number;
  status: 'pendente' | 'vencida' | 'paga';
}

interface PurchaseEntry {
  id: string;
  date: string;
  supplier: string;
  productId: string;
  productName: string;
  qty: number;
  unitCost: number;
  total: number;
}

const INITIAL_PRODUCTS: ProductItem[] = [
  { id: 'p1', name: 'Gás P13 (13kg)', brand: 'Ultragaz', category: 'gas', price: 115, cost: 82, stock: 48, minStock: 15, unit: 'un' },
  { id: 'p2', name: 'Gás P13 (13kg)', brand: 'Liquigás', category: 'gas', price: 112, cost: 80, stock: 34, minStock: 15, unit: 'un' },
  { id: 'p3', name: 'Gás P20 Cilindro', brand: 'Ultragaz', category: 'gas', price: 185, cost: 138, stock: 9, minStock: 10, unit: 'un' },
  { id: 'p4', name: 'Gás P45 Industrial', brand: 'Ultragaz', category: 'gas', price: 420, cost: 325, stock: 12, minStock: 6, unit: 'un' },
  { id: 'p5', name: 'Água Mineral 20L', brand: 'Crystal', category: 'agua', price: 16, cost: 7.5, stock: 64, minStock: 20, unit: 'galão' },
  { id: 'p6', name: 'Kit Regulador + Mangueira INMETRO', brand: 'Aliança', category: 'acessorio', price: 65, cost: 34, stock: 18, minStock: 8, unit: 'kit' },
];

const INITIAL_CLIENTS: ClientItem[] = [
  { id: 'c1', name: 'Maria Aparecida Silva', phone: '(11) 98765-4321', address: 'Rua das Palmeiras, 240', neighborhood: 'Centro', lastOrderDaysAgo: 0, totalOrders: 14 },
  { id: 'c2', name: 'Padaria Pão Dourado', phone: '(11) 99123-8877', address: 'Av. Brasil, 1120', neighborhood: 'Jardim América', lastOrderDaysAgo: 0, totalOrders: 32 },
  { id: 'c3', name: 'Carlos Eduardo Mendes', phone: '(11) 97654-1122', address: 'Rua São Bento, 85 - Ap 12', neighborhood: 'Vila Nova', lastOrderDaysAgo: 12, totalOrders: 6 },
  { id: 'c4', name: 'Dona Helena Oliveira', phone: '(11) 98441-9900', address: 'Rua Tiradentes, 412', neighborhood: 'Santa Cruz', lastOrderDaysAgo: 68, totalOrders: 9 },
  { id: 'c5', name: 'Restaurante Sabor Caseiro', phone: '(11) 99332-5544', address: 'Rua XV de Novembro, 610', neighborhood: 'Centro', lastOrderDaysAgo: 74, totalOrders: 21 },
  { id: 'c6', name: 'João Batista Ferreira', phone: '(11) 98211-3300', address: 'Rua Castro Alves, 99', neighborhood: 'Bela Vista', lastOrderDaysAgo: 63, totalOrders: 5 },
];

const INITIAL_SALES: SaleOrder[] = [
  {
    id: 'v104',
    number: 104,
    time: '14:25',
    date: 'Hoje',
    clientId: 'c1',
    clientName: 'Maria Aparecida Silva',
    clientPhone: '(11) 98765-4321',
    address: 'Rua das Palmeiras, 240',
    neighborhood: 'Centro',
    items: [
      { productId: 'p1', name: 'Gás P13 (13kg)', brand: 'Ultragaz', qty: 1, price: 115 },
      { productId: 'p5', name: 'Água Mineral 20L', brand: 'Crystal', qty: 2, price: 16 },
    ],
    discount: 0,
    total: 147,
    payment: 'PIX',
    type: 'Entrega',
    deliveryStatus: 'pendente',
    driverName: 'Carlos (Moto 01)',
    paid: true,
  },
  {
    id: 'v103',
    number: 103,
    time: '13:50',
    date: 'Hoje',
    clientId: 'c2',
    clientName: 'Padaria Pão Dourado',
    clientPhone: '(11) 99123-8877',
    address: 'Av. Brasil, 1120',
    neighborhood: 'Jardim América',
    items: [{ productId: 'p4', name: 'Gás P45 Industrial', brand: 'Ultragaz', qty: 2, price: 420 }],
    discount: 20,
    total: 820,
    payment: 'Cartão',
    type: 'Entrega',
    deliveryStatus: 'a_caminho',
    driverName: 'Marcos (Fiorino 02)',
    paid: true,
  },
  {
    id: 'v102',
    number: 102,
    time: '11:15',
    date: 'Hoje',
    clientId: 'c3',
    clientName: 'Carlos Eduardo Mendes',
    clientPhone: '(11) 97654-1122',
    address: 'Retirada na Portaria',
    neighborhood: 'Balcão',
    items: [{ productId: 'p2', name: 'Gás P13 (13kg)', brand: 'Liquigás', qty: 1, price: 112 }],
    discount: 0,
    total: 112,
    payment: 'Dinheiro',
    type: 'Portaria',
    paid: true,
  },
  {
    id: 'v101',
    number: 101,
    time: '09:40',
    date: 'Hoje',
    clientId: 'c5',
    clientName: 'Restaurante Sabor Caseiro',
    clientPhone: '(11) 99332-5544',
    address: 'Rua XV de Novembro, 610',
    neighborhood: 'Centro',
    items: [
      { productId: 'p1', name: 'Gás P13 (13kg)', brand: 'Ultragaz', qty: 2, price: 115 },
      { productId: 'p5', name: 'Água Mineral 20L', brand: 'Crystal', qty: 3, price: 16 },
    ],
    discount: 0,
    total: 278,
    payment: 'Fiado',
    type: 'Entrega',
    deliveryStatus: 'entregue',
    driverName: 'Carlos (Moto 01)',
    paid: false,
  },
];

const INITIAL_ONLINE_ORDERS: OnlineOrder[] = [
  {
    id: 'on1',
    code: '#WEB-892',
    time: 'Agora mesmo',
    clientName: 'Fernanda Costa',
    clientPhone: '(11) 98812-3040',
    address: 'Rua Marechal Deodoro, 510',
    neighborhood: 'Jardim Europa',
    items: [
      { productId: 'p1', name: 'Gás P13 (13kg)', brand: 'Ultragaz', qty: 1, price: 115 },
      { productId: 'p5', name: 'Água Mineral 20L', brand: 'Crystal', qty: 1, price: 16 },
    ],
    total: 131,
    payment: 'PIX',
    notes: 'Tocar interfone 24. Preciso de nota.',
    status: 'aguardando',
  },
  {
    id: 'on2',
    code: '#WEB-891',
    time: 'Há 6 min',
    clientName: 'Ricardo Gomes',
    clientPhone: '(11) 99710-2211',
    address: 'Av. Paulista, 320 - Casa B',
    neighborhood: 'Bela Vista',
    items: [{ productId: 'p2', name: 'Gás P13 (13kg)', brand: 'Liquigás', qty: 1, price: 112 }],
    total: 112,
    payment: 'Cartão',
    notes: 'Levar maquininha.',
    status: 'aguardando',
  },
];

const INITIAL_CASH: CashEntry[] = [
  { id: 'cx1', time: '14:25', type: 'entrada', category: 'Venda #104', description: 'Maria Aparecida Silva (1x P13 + 2x Água)', payment: 'PIX', amount: 147 },
  { id: 'cx2', time: '13:50', type: 'entrada', category: 'Venda #103', description: 'Padaria Pão Dourado (2x P45)', payment: 'Cartão', amount: 820 },
  { id: 'cx3', time: '12:10', type: 'saida', category: 'Combustível', description: 'Abastecimento Moto 01 (Carlos)', payment: 'PIX', amount: 45 },
  { id: 'cx4', time: '11:15', type: 'entrada', category: 'Venda #102', description: 'Carlos Eduardo Mendes (1x P13 Portaria)', payment: 'Dinheiro', amount: 112 },
];

const INITIAL_BILLS: BillPayable[] = [
  { id: 'ct1', description: 'Boleto Lote Ultragaz (50x P13)', category: 'Fornecedor de Gás', dueDate: 'Hoje', amount: 4100, status: 'pendente' },
  { id: 'ct2', description: 'Energia Elétrica do Depósito', category: 'Infraestrutura', dueDate: 'Ontem', amount: 285, status: 'vencida' },
  { id: 'ct3', description: 'Internet Fibra + Telefone Fixo', category: 'Comunicação', dueDate: '10/05', amount: 139.9, status: 'paga' },
];

const INITIAL_PURCHASES: PurchaseEntry[] = [
  { id: 'cp1', date: 'Hoje · 08:30', supplier: 'Caminhão Cia Ultragaz', productId: 'p1', productName: 'Gás P13 (13kg) Ultragaz', qty: 30, unitCost: 82, total: 2460 },
  { id: 'cp2', date: 'Ontem · 15:20', supplier: 'Distribuidora Crystal', productId: 'p5', productName: 'Água Mineral 20L Crystal', qty: 40, unitCost: 7.5, total: 300 },
];

export const InteractiveSimulator: React.FC<SimulatorProps> = ({ onOpenTrial }) => {
  const [activeModule, setActiveModule] = useState<ModuleId>('dashboard');
  const [products, setProducts] = useState<ProductItem[]>(INITIAL_PRODUCTS);
  const [clients, setClients] = useState<ClientItem[]>(INITIAL_CLIENTS);
  const [sales, setSales] = useState<SaleOrder[]>(INITIAL_SALES);
  const [onlineOrders, setOnlineOrders] = useState<OnlineOrder[]>(INITIAL_ONLINE_ORDERS);
  const [cashEntries, setCashEntries] = useState<CashEntry[]>(INITIAL_CASH);
  const [bills, setBills] = useState<BillPayable[]>(INITIAL_BILLS);
  const [purchases, setPurchases] = useState<PurchaseEntry[]>(INITIAL_PURCHASES);
  const [toast, setToast] = useState<string | null>(null);

  // Estado PDV (Nova Venda)
  const [selectedClientId, setSelectedClientId] = useState<string>('c1');
  const [saleType, setSaleType] = useState<'Entrega' | 'Portaria'>('Entrega');
  const [paymentMethod, setPaymentMethod] = useState<'PIX' | 'Dinheiro' | 'Cartão' | 'Fiado'>('PIX');
  const [driverName, setDriverName] = useState<string>('Carlos (Moto 01)');
  const [discount, setDiscount] = useState<number>(0);
  const [cart, setCart] = useState<OrderCartItem[]>([
    { productId: 'p1', name: 'Gás P13 (13kg)', brand: 'Ultragaz', qty: 1, price: 115 },
  ]);

  // Estado Cardápio Digital (Visão do Cliente no Celular)
  const [menuCart, setMenuCart] = useState<Record<string, number>>({ p1: 1, p5: 1 });
  const [menuClientName, setMenuClientName] = useState('Juliana Martins');
  const [menuClientPhone, setMenuClientPhone] = useState('(11) 99412-7788');
  const [menuAddress, setMenuAddress] = useState('Rua das Acácias, 145');
  const [menuNeighborhood, setMenuNeighborhood] = useState('Jardim Paulista');
  const [menuPayment, setMenuPayment] = useState<'PIX' | 'Cartão' | 'Dinheiro'>('PIX');

  // Estado Clientes
  const [clientFilter, setClientFilter] = useState<'todos' | 'inativos'>('todos');
  const [clientSearch, setClientSearch] = useState('');
  const [newClientName, setNewClientName] = useState('');
  const [newClientPhone, setNewClientPhone] = useState('');
  const [newClientAddress, setNewClientAddress] = useState('');

  // Estado Caixa
  const [cashDesc, setCashDesc] = useState('');
  const [cashVal, setCashVal] = useState('');
  const [cashType, setCashType] = useState<'entrada' | 'saida'>('saida');

  // Estado Compras
  const [purchaseProductId, setPurchaseProductId] = useState('p1');
  const [purchaseQty, setPurchaseQty] = useState(20);
  const [purchaseCost, setPurchaseCost] = useState(82);
  const [purchaseSupplier, setPurchaseSupplier] = useState('Cia Ultragaz');

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 4200);
  };

  const resetDemo = () => {
    setProducts(INITIAL_PRODUCTS);
    setClients(INITIAL_CLIENTS);
    setSales(INITIAL_SALES);
    setOnlineOrders(INITIAL_ONLINE_ORDERS);
    setCashEntries(INITIAL_CASH);
    setBills(INITIAL_BILLS);
    setPurchases(INITIAL_PURCHASES);
    setCart([{ productId: 'p1', name: 'Gás P13 (13kg)', brand: 'Ultragaz', qty: 1, price: 115 }]);
    showToast('Ambiente de demonstração restaurado para os dados originais!');
  };

  // Cálculos em tempo real (exatamente como no LMA Gás de produção)
  const kpis = useMemo(() => {
    const vendasHoje = sales.reduce((acc, s) => acc + s.total, 0);
    const entradas = cashEntries.filter((c) => c.type === 'entrada').reduce((a, b) => a + b.amount, 0);
    const saidas = cashEntries.filter((c) => c.type === 'saida').reduce((a, b) => a + b.amount, 0);
    const saldoCaixa = entradas - saidas;
    const entregasPendentes = sales.filter((s) => s.type !== 'Portaria' && s.deliveryStatus === 'pendente').length;
    const entregasRota = sales.filter((s) => s.type !== 'Portaria' && s.deliveryStatus === 'a_caminho').length;
    const entregasConcluidas = sales.filter((s) => s.type !== 'Portaria' && s.deliveryStatus === 'entregue').length;
    const inativos60d = clients.filter((c) => c.lastOrderDaysAgo >= 60).length;
    const estoqueBaixo = products.filter((p) => p.stock <= p.minStock);
    const onlineAguardando = onlineOrders.filter((o) => o.status === 'aguardando').length;
    const contasVencidas = bills.filter((b) => b.status === 'vencida').length;

    return {
      vendasHoje,
      numVendas: sales.length,
      ticketMedio: sales.length ? vendasHoje / sales.length : 0,
      entradas,
      saidas,
      saldoCaixa,
      entregasPendentes,
      entregasRota,
      entregasConcluidas,
      inativos60d,
      estoqueBaixo,
      onlineAguardando,
      contasVencidas,
    };
  }, [sales, cashEntries, clients, products, onlineOrders, bills]);

  // Ações Reais do PDV (Nova Venda)
  const addToCart = (product: ProductItem) => {
    setCart((prev) => {
      const exists = prev.find((i) => i.productId === product.id);
      if (exists) {
        return prev.map((i) => (i.productId === product.id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { productId: product.id, name: product.name, brand: product.brand, qty: 1, price: product.price }];
    });
  };

  const changeCartQty = (productId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((i) => (i.productId === productId ? { ...i, qty: Math.max(0, i.qty + delta) } : i))
        .filter((i) => i.qty > 0)
    );
  };

  const subtotalCart = cart.reduce((acc, i) => acc + i.qty * i.price, 0);
  const totalCart = Math.max(0, subtotalCart - discount);

  const finalizeSale = () => {
    if (cart.length === 0) {
      showToast('Adicione pelo menos 1 produto ao pedido.');
      return;
    }
    const client = clients.find((c) => c.id === selectedClientId) || clients[0];
    const now = new Date();
    const timeStr = now.toTimeString().slice(0, 5);
    const nextNum = (sales[0]?.number || 104) + 1;

    const newSale: SaleOrder = {
      id: `v${nextNum}`,
      number: nextNum,
      time: timeStr,
      date: 'Hoje',
      clientId: client.id,
      clientName: client.name,
      clientPhone: client.phone,
      address: saleType === 'Portaria' ? 'Retirada na Portaria' : client.address,
      neighborhood: saleType === 'Portaria' ? 'Balcão' : client.neighborhood,
      items: [...cart],
      discount,
      total: totalCart,
      payment: paymentMethod,
      type: saleType,
      deliveryStatus: saleType === 'Entrega' ? 'pendente' : undefined,
      driverName: saleType === 'Entrega' ? driverName : undefined,
      paid: paymentMethod !== 'Fiado',
    };

    // 1. Registra a venda
    setSales((prev) => [newSale, ...prev]);

    // 2. Baixa estoque automaticamente
    setProducts((prev) =>
      prev.map((p) => {
        const sold = cart.find((c) => c.productId === p.id);
        return sold ? { ...p, stock: Math.max(0, p.stock - sold.qty) } : p;
      })
    );

    // 3. Lança no Caixa se não for Fiado
    if (paymentMethod !== 'Fiado') {
      setCashEntries((prev) => [
        {
          id: `cx-${Date.now()}`,
          time: timeStr,
          type: 'entrada',
          category: `Venda #${nextNum}`,
          description: `${client.name} (${cart.map((c) => `${c.qty}x ${c.name}`).join(', ')})`,
          payment: paymentMethod,
          amount: totalCart,
        },
        ...prev,
      ]);
    }

    // 4. Atualiza última compra do cliente
    setClients((prev) =>
      prev.map((c) => (c.id === client.id ? { ...c, lastOrderDaysAgo: 0, totalOrders: c.totalOrders + 1 } : c))
    );

    setDiscount(0);
    confetti({ particleCount: 55, spread: 60, origin: { y: 0.7 } });
    showToast(
      saleType === 'Entrega'
        ? `Venda #${nextNum} (${fmtBRL(totalCart)}) registrada! Enviada para a fila de Entregas e Caixa atualizado.`
        : `Venda de Portaria #${nextNum} (${fmtBRL(totalCart)}) concluída! Estoque e Caixa atualizados.`
    );
  };

  // Ações de Entrega (Kanban & App do Entregador)
  const advanceDelivery = (saleId: string, nextStatus: 'a_caminho' | 'entregue') => {
    setSales((prev) =>
      prev.map((s) => (s.id === saleId ? { ...s, deliveryStatus: nextStatus } : s))
    );
    if (nextStatus === 'a_caminho') {
      showToast('Pedido despachado! Status atualizado para "Em Rota" no App do Entregador.');
    } else {
      confetti({ particleCount: 40, spread: 50, origin: { y: 0.75 } });
      showToast('Entrega concluída com sucesso pelo entregador!');
    }
  };

  // Ações de Pedidos Online & Cardápio Digital
  const approveOnlineOrder = (order: OnlineOrder) => {
    const now = new Date();
    const timeStr = now.toTimeString().slice(0, 5);
    const nextNum = (sales[0]?.number || 104) + 1;

    const newSale: SaleOrder = {
      id: `v${nextNum}`,
      number: nextNum,
      time: timeStr,
      date: 'Hoje',
      clientId: 'online',
      clientName: order.clientName,
      clientPhone: order.clientPhone,
      address: order.address,
      neighborhood: order.neighborhood,
      items: order.items,
      discount: 0,
      total: order.total,
      payment: order.payment,
      type: 'Online',
      deliveryStatus: 'pendente',
      driverName: 'Carlos (Moto 01)',
      paid: true,
    };

    setOnlineOrders((prev) => prev.map((o) => (o.id === order.id ? { ...o, status: 'aprovado' } : o)));
    setSales((prev) => [newSale, ...prev]);
    setProducts((prev) =>
      prev.map((p) => {
        const item = order.items.find((i) => i.productId === p.id);
        return item ? { ...p, stock: Math.max(0, p.stock - item.qty) } : p;
      })
    );
    setCashEntries((prev) => [
      {
        id: `cx-on-${Date.now()}`,
        time: timeStr,
        type: 'entrada',
        category: `Pedido Online ${order.code}`,
        description: `${order.clientName} (Cardápio Digital)`,
        payment: order.payment,
        amount: order.total,
      },
      ...prev,
    ]);

    confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
    showToast(`Pedido ${order.code} aprovado! Já entrou na fila de Entregas, baixou estoque e lançou no Caixa.`);
  };

  const sendCustomerMenuOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const items: OrderCartItem[] = Object.entries(menuCart)
      .filter(([, q]) => q > 0)
      .map(([pid, q]) => {
        const prod = products.find((p) => p.id === pid)!;
        return { productId: pid, name: prod.name, brand: prod.brand, qty: q, price: prod.price };
      });

    if (items.length === 0) {
      showToast('Selecione pelo menos 1 item no Cardápio Digital.');
      return;
    }

    const total = items.reduce((a, b) => a + b.qty * b.price, 0);
    const code = `#WEB-${Math.floor(900 + Math.random() * 90)}`;
    const newOnline: OnlineOrder = {
      id: `on-${Date.now()}`,
      code,
      time: 'Agora mesmo',
      clientName: menuClientName,
      clientPhone: menuClientPhone,
      address: menuAddress,
      neighborhood: menuNeighborhood,
      items,
      total,
      payment: menuPayment,
      notes: 'Pedido enviado pelo Cardápio Digital na demonstração.',
      status: 'aguardando',
    };

    setOnlineOrders((prev) => [newOnline, ...prev]);
    confetti({ particleCount: 60, spread: 70, origin: { y: 0.7 } });
    showToast(`Pedido ${code} enviado pelo cliente! Veja o alerta piscando na aba "Pedidos Online".`);
    setActiveModule('pedidos-online');
  };

  // Ações de Clientes
  const handleAddClient = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newClientName.trim()) return;
    const created: ClientItem = {
      id: `c-${Date.now()}`,
      name: newClientName.trim(),
      phone: newClientPhone.trim() || '(11) 99999-0000',
      address: newClientAddress.trim() || 'Rua Principal, 100',
      neighborhood: 'Centro',
      lastOrderDaysAgo: 0,
      totalOrders: 1,
    };
    setClients((prev) => [created, ...prev]);
    setNewClientName('');
    setNewClientPhone('');
    setNewClientAddress('');
    showToast(`Cliente "${created.name}" cadastrado com sucesso!`);
  };

  // Ações de Caixa
  const handleAddCash = (e: React.FormEvent) => {
    e.preventDefault();
    const val = Number(cashVal);
    if (!cashDesc.trim() || !val || val <= 0) return;
    const now = new Date().toTimeString().slice(0, 5);
    setCashEntries((prev) => [
      {
        id: `cx-${Date.now()}`,
        time: now,
        type: cashType,
        category: cashType === 'entrada' ? 'Suprimento / Entrada' : 'Despesa Operacional',
        description: cashDesc.trim(),
        payment: 'Dinheiro / PIX',
        amount: val,
      },
      ...prev,
    ]);
    setCashDesc('');
    setCashVal('');
    showToast(`Lançamento de ${cashType === 'entrada' ? 'Entrada' : 'Saída'} (${fmtBRL(val)}) registrado no Caixa!`);
  };

  // Ações de Contas a Pagar
  const payBill = (bill: BillPayable) => {
    if (bill.status === 'paga') return;
    const now = new Date().toTimeString().slice(0, 5);
    setBills((prev) => prev.map((b) => (b.id === bill.id ? { ...b, status: 'paga' } : b)));
    setCashEntries((prev) => [
      {
        id: `cx-bill-${Date.now()}`,
        time: now,
        type: 'saida',
        category: 'Conta Paga',
        description: bill.description,
        payment: 'PIX / Boleto',
        amount: bill.amount,
      },
      ...prev,
    ]);
    showToast(`Conta "${bill.description}" baixada como PAGA e debitada automaticamente do Caixa!`);
  };

  // Ações de Compras (Entrada de Nota / Caminhão da Cia)
  const handleAddPurchase = (e: React.FormEvent) => {
    e.preventDefault();
    const prod = products.find((p) => p.id === purchaseProductId);
    if (!prod || purchaseQty <= 0) return;
    const total = purchaseQty * purchaseCost;
    const now = new Date().toTimeString().slice(0, 5);

    setPurchases((prev) => [
      {
        id: `cp-${Date.now()}`,
        date: `Hoje · ${now}`,
        supplier: purchaseSupplier,
        productId: prod.id,
        productName: `${prod.name} ${prod.brand}`,
        qty: purchaseQty,
        unitCost: purchaseCost,
        total,
      },
      ...prev,
    ]);

    setProducts((prev) =>
      prev.map((p) => (p.id === prod.id ? { ...p, stock: p.stock + purchaseQty, cost: purchaseCost } : p))
    );

    setCashEntries((prev) => [
      {
        id: `cx-cp-${Date.now()}`,
        time: now,
        type: 'saida',
        category: 'Compra de Estoque',
        description: `${purchaseQty}x ${prod.name} (${purchaseSupplier})`,
        payment: 'PIX / Boleto',
        amount: total,
      },
      ...prev,
    ]);

    showToast(`Compra registrada! +${purchaseQty} un somadas ao estoque de ${prod.name} e saída lançada no Caixa.`);
  };

  const fmtBRL = (v: number) =>
    v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  const RULER_TABS: {
    id: ModuleId;
    label: string;
    shortLabel: string;
    icon: React.FC<{ className?: string }>;
    badge?: number | string;
    isPro?: boolean;
  }[] = [
    { id: 'dashboard', label: 'Dashboard', shortLabel: 'Dashboard', icon: LayoutDashboard },
    { id: 'nova-venda', label: 'Nova Venda (PDV)', shortLabel: 'Nova Venda', icon: ShoppingCart },
    { id: 'entregas', label: 'Fila de Entregas', shortLabel: 'Entregas', icon: Truck, badge: kpis.entregasPendentes + kpis.entregasRota },
    { id: 'pedidos-online', label: 'Pedidos Online', shortLabel: 'Pedidos Web', icon: Globe, badge: kpis.onlineAguardando, isPro: true },
    { id: 'cardapio-cliente', label: 'Cardápio Digital (Cliente)', shortLabel: 'Cardápio Digital', icon: Store, isPro: true },
    { id: 'app-entregador', label: 'App do Entregador', shortLabel: 'App Entregador', icon: Bike, isPro: true },
    { id: 'clientes', label: 'Clientes & Inativos +60d', shortLabel: 'Clientes', icon: Users, badge: kpis.inativos60d },
    { id: 'produtos', label: 'Produtos / Estoque', shortLabel: 'Estoque', icon: Package },
    { id: 'caixa', label: 'Caixa / Financeiro', shortLabel: 'Caixa', icon: Wallet },
    { id: 'contas', label: 'Contas a Pagar', shortLabel: 'Contas', icon: FileWarning, badge: kpis.contasVencidas || undefined },
    { id: 'compras', label: 'Compras (Entrada)', shortLabel: 'Compras', icon: ShoppingBag },
    { id: 'historico', label: 'Histórico de Vendas', shortLabel: 'Histórico', icon: History },
    { id: 'relatorios', label: 'Relatórios & DRE', shortLabel: 'Relatórios', icon: BarChart3 },
  ];

  return (
    <div className="w-full">
      <div>
        {/* Barra de Régua de Módulos (Ruler Style: todas as abas visíveis, contraste forte na aba ativa) */}
        <div className="mb-4">
          <div className="bg-[#0a1524]/95 border border-slate-700/80 rounded-2xl p-3 sm:p-4 shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="size-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs sm:text-sm font-extrabold text-white tracking-tight">
                  AMBIENTE REAL INTERATIVO DO LMA GÁS — CLIQUE NAS ABAS E TESTE CADA FUNÇÃO:
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={resetDemo}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <RotateCcw className="size-3.5 text-emerald-400" />
                  <span>Reiniciar Dados do Teste</span>
                </button>
              </div>
            </div>

            {/* Régua com todas as abas sempre visíveis e nítidas */}
            <div className="flex flex-wrap gap-1.5">
              {RULER_TABS.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeModule === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveModule(tab.id)}
                    className={`px-3 py-2 rounded-xl text-xs font-extrabold flex items-center gap-1.5 transition-all cursor-pointer border ${
                      isActive
                        ? 'bg-emerald-500 text-[#06131f] border-emerald-300 shadow-lg shadow-emerald-500/30 ring-2 ring-emerald-300/60 scale-[1.02]'
                        : 'bg-[#13243a] text-slate-100 border-slate-700 hover:bg-[#1b3250] hover:border-slate-500'
                    }`}
                  >
                    <Icon className={`size-3.5 shrink-0 ${isActive ? 'text-[#06131f]' : 'text-emerald-400'}`} />
                    <span>{tab.shortLabel}</span>
                    {tab.isPro && (
                      <span
                        className={`text-[9px] px-1.5 py-0.5 rounded font-black uppercase ${
                          isActive ? 'bg-[#06131f] text-emerald-300' : 'bg-amber-500/20 text-amber-300 border border-amber-400/30'
                        }`}
                      >
                        PRO
                      </span>
                    )}
                    {tab.badge !== undefined && Number(tab.badge) > 0 && (
                      <span
                        className={`text-[10px] px-1.5 py-0.2 rounded-full font-black ${
                          isActive ? 'bg-[#06131f] text-white' : 'bg-red-500 text-white'
                        }`}
                      >
                        {tab.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Toast de confirmação das ações reais */}
        {toast && (
          <div className="mb-4 p-3.5 rounded-xl bg-emerald-600 text-white font-bold text-xs sm:text-sm shadow-xl flex items-center justify-between gap-3 animate-fade-in border border-emerald-400">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="size-5 shrink-0 text-emerald-200" />
              <span>{toast}</span>
            </div>
            <button onClick={() => setToast(null)} className="text-xs underline opacity-90 hover:opacity-100 cursor-pointer">
              Fechar
            </button>
          </div>
        )}

        {/* JANELA OFICIAL DO SISTEMA LMA GÁS (AppShell idêntico ao sistema em produção) */}
        <div className="rounded-2xl border-2 border-slate-800/80 shadow-2xl overflow-hidden bg-[#eef1f6] flex flex-col lg:flex-row min-h-[680px]">
          {/* SIDEBAR OFICIAL DO LMA GÁS (Sem rolagem visível, todas as opções legíveis) */}
          <aside className="hidden lg:flex lg:w-60 bg-gradient-to-b from-[#101f34] to-[#0d1b2e] text-white flex-col justify-between p-3.5 shrink-0 select-none">
            <div>
              {/* Brand header */}
              <div className="flex items-center gap-2.5 px-2 py-2.5 border-b border-white/10 mb-3">
                <img
                  src="/logo-lma.png"
                  alt="LMA Gás"
                  className="h-9 w-auto object-contain drop-shadow-[0_0_10px_rgba(16,185,129,0.45)]"
                />
                <div>
                  <div className="text-base font-black tracking-tight text-white leading-none">
                    LMA<span className="text-emerald-400">-GÁS</span>
                  </div>
                  <div className="text-[10px] text-emerald-300 font-semibold mt-0.5">
                    Depósito Central • PRO
                  </div>
                </div>
              </div>

              {/* Lista de navegação lateral */}
              <div className="space-y-1">
                {RULER_TABS.map((item) => {
                  const Icon = item.icon;
                  const active = activeModule === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveModule(item.id)}
                      className={`w-full px-3 py-2 rounded-xl text-xs font-bold flex items-center justify-between transition-all cursor-pointer ${
                        active
                          ? 'bg-emerald-500 text-[#06131f] shadow-md shadow-emerald-500/20 font-extrabold'
                          : 'text-slate-200 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <span className="flex items-center gap-2.5 truncate">
                        <Icon className={`size-4 shrink-0 ${active ? 'text-[#06131f]' : 'text-emerald-400'}`} />
                        <span className="truncate">{item.label}</span>
                      </span>
                      {item.badge !== undefined && Number(item.badge) > 0 && (
                        <span
                          className={`text-[10px] px-1.5 py-0.5 rounded-full font-black ${
                            active ? 'bg-[#06131f] text-emerald-300' : 'bg-red-500 text-white'
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Rodapé da Sidebar */}
            <div className="pt-3 border-t border-white/10 space-y-2">
              <div className="px-2.5 py-2 rounded-xl bg-white/5 border border-white/10 text-[11px] text-slate-300">
                <div className="font-extrabold text-white flex items-center justify-between">
                  <span>Status do Sistema</span>
                  <span className="text-emerald-400">● Online</span>
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">
                  Sincronizado em tempo real
                </div>
              </div>
              <button
                onClick={onOpenTrial}
                className="w-full py-2.5 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#06131f] font-black text-xs flex items-center justify-center gap-1.5 shadow-md transition-all cursor-pointer"
              >
                <Sparkles className="size-3.5" />
                <span>Criar Minha Conta Real</span>
              </button>
            </div>
          </aside>

          {/* CONTEÚDO PRINCIPAL DO SISTEMA */}
          <div className="flex-1 flex flex-col min-w-0 bg-[#eef1f6]">
            {/* TOPBAR OFICIAL DO LMA GÁS */}
            <header className="h-14 bg-white border-b border-slate-200 px-4 sm:px-6 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-extrabold uppercase tracking-wider">
                  Módulo Ativo
                </span>
                <h2 className="text-sm sm:text-base font-black text-[#0d1b2e] truncate">
                  {RULER_TABS.find((t) => t.id === activeModule)?.label}
                </h2>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                <button
                  onClick={() => setActiveModule('pedidos-online')}
                  className="relative px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-900 text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-colors"
                  title="Ver Pedidos do Cardápio Digital"
                >
                  <Bell className="size-3.5 text-amber-600" />
                  <span className="hidden sm:inline">Pedidos Online</span>
                  {kpis.onlineAguardando > 0 && (
                    <span className="px-1.5 py-0.2 rounded-full bg-red-600 text-white text-[10px] font-black">
                      {kpis.onlineAguardando}
                    </span>
                  )}
                </button>

                <button
                  onClick={() => setActiveModule('nova-venda')}
                  className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-colors shadow-xs"
                >
                  <Plus className="size-3.5" />
                  <span>Nova Venda</span>
                </button>
              </div>
            </header>

            {/* ÁREA DE PÁGINA INTERATIVA */}
            <div className="p-4 sm:p-6 flex-1 overflow-y-auto space-y-5">
              {/* =========================================================
                  1. DASHBOARD OFICIAL
                 ========================================================= */}
              {activeModule === 'dashboard' && (
                <div className="space-y-5 animate-fade-in">
                  {/* Banner de Alerta de Estoque Baixo (igual ao Dashboard.jsx real) */}
                  {kpis.estoqueBaixo.length > 0 && (
                    <div
                      onClick={() => setActiveModule('produtos')}
                      className="p-3.5 rounded-xl bg-amber-50 border border-amber-300 flex items-center justify-between gap-3 cursor-pointer hover:bg-amber-100/70 transition-colors"
                    >
                      <div className="flex items-center gap-2.5 text-xs sm:text-sm text-amber-950">
                        <AlertTriangle className="size-5 text-amber-600 shrink-0" />
                        <div>
                          <strong>
                            {kpis.estoqueBaixo.length} produto(s) com estoque abaixo do mínimo:{' '}
                          </strong>
                          <span>
                            {kpis.estoqueBaixo.map((p) => `${p.name} (${p.stock} un)`).join(', ')} • clique para repor
                          </span>
                        </div>
                      </div>
                      <ArrowUpRight className="size-4 text-amber-700 shrink-0" />
                    </div>
                  )}

                  {/* 5 KPI Cards do LMA Gás */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
                    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                      <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
                        <span>Vendas Hoje</span>
                        <div className="size-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                          <ShoppingCart className="size-4" />
                        </div>
                      </div>
                      <div className="text-xl sm:text-2xl font-black text-[#0d1b2e] mt-2">
                        {fmtBRL(kpis.vendasHoje)}
                      </div>
                      <div className="text-[11px] text-slate-500 mt-1">
                        {kpis.numVendas} vendas • Ticket {fmtBRL(kpis.ticketMedio)}
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                      <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
                        <span>Saldo do Dia (Caixa)</span>
                        <div className="size-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                          <Wallet className="size-4" />
                        </div>
                      </div>
                      <div className="text-xl sm:text-2xl font-black text-emerald-700 mt-2">
                        {fmtBRL(kpis.saldoCaixa)}
                      </div>
                      <div className="text-[11px] text-slate-500 mt-1">
                        Entradas ({fmtBRL(kpis.entradas)}) - Saídas ({fmtBRL(kpis.saidas)})
                      </div>
                    </div>

                    <div
                      onClick={() => setActiveModule('entregas')}
                      className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs cursor-pointer hover:border-emerald-400 transition-colors"
                    >
                      <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
                        <span>Fila de Entregas</span>
                        <div className="size-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                          <Truck className="size-4" />
                        </div>
                      </div>
                      <div className="text-xl sm:text-2xl font-black text-[#0d1b2e] mt-2">
                        {kpis.entregasPendentes + kpis.entregasRota} ativas
                      </div>
                      <div className="text-[11px] text-emerald-700 font-semibold mt-1">
                        {kpis.entregasPendentes} pendente(s) • {kpis.entregasRota} em rota
                      </div>
                    </div>

                    <div
                      onClick={() => {
                        setClientFilter('inativos');
                        setActiveModule('clientes');
                      }}
                      className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs cursor-pointer hover:border-red-300 transition-colors"
                    >
                      <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
                        <span>Inativos +60 Dias</span>
                        <div className="size-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center">
                          <Users className="size-4" />
                        </div>
                      </div>
                      <div className="text-xl sm:text-2xl font-black text-red-600 mt-2">
                        {kpis.inativos60d} clientes
                      </div>
                      <div className="text-[11px] text-slate-500 mt-1">
                        Clique para reativar via WhatsApp
                      </div>
                    </div>

                    <div
                      onClick={() => setActiveModule('pedidos-online')}
                      className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs cursor-pointer hover:border-emerald-400 transition-colors"
                    >
                      <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
                        <span>Cardápio Digital</span>
                        <div className="size-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                          <Globe className="size-4" />
                        </div>
                      </div>
                      <div className="text-xl sm:text-2xl font-black text-[#0d1b2e] mt-2">
                        {kpis.onlineAguardando} novo(s)
                      </div>
                      <div className="text-[11px] text-amber-700 font-semibold mt-1">
                        Aguardando aprovação em 1 clique
                      </div>
                    </div>
                  </div>

                  {/* Linha Central: Receita + Resumo de Pagamentos */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                    <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="font-bold text-sm text-[#0d1b2e]">Últimas Vendas Lançadas</h3>
                          <p className="text-xs text-slate-500">
                            Lance uma venda na aba "Nova Venda" e veja atualizar aqui na hora
                          </p>
                        </div>
                        <button
                          onClick={() => setActiveModule('nova-venda')}
                          className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 cursor-pointer"
                        >
                          <span>+ Lançar Venda</span>
                        </button>
                      </div>

                      <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse text-xs">
                          <thead>
                            <tr className="border-b border-slate-200 text-slate-400 uppercase text-[10px] font-extrabold">
                              <th className="py-2 pr-2">Pedido</th>
                              <th className="py-2 px-2">Cliente</th>
                              <th className="py-2 px-2">Itens</th>
                              <th className="py-2 px-2">Canal</th>
                              <th className="py-2 px-2">Pagto</th>
                              <th className="py-2 pl-2 text-right">Total</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100">
                            {sales.slice(0, 6).map((s) => (
                              <tr key={s.id} className="hover:bg-slate-50">
                                <td className="py-2.5 pr-2 font-bold text-slate-700">
                                  #{s.number} <span className="text-slate-400 font-normal">({s.time})</span>
                                </td>
                                <td className="py-2.5 px-2 font-semibold text-[#0d1b2e]">{s.clientName}</td>
                                <td className="py-2.5 px-2 text-slate-600">
                                  {s.items.map((i) => `${i.qty}x ${i.name}`).join(', ')}
                                </td>
                                <td className="py-2.5 px-2">
                                  <span
                                    className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                      s.type === 'Online'
                                        ? 'bg-purple-100 text-purple-800'
                                        : s.type === 'Entrega'
                                        ? 'bg-blue-100 text-blue-800'
                                        : 'bg-slate-100 text-slate-700'
                                    }`}
                                  >
                                    {s.type}
                                  </span>
                                </td>
                                <td className="py-2.5 px-2">
                                  <span
                                    className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                      s.payment === 'PIX'
                                        ? 'bg-emerald-100 text-emerald-800'
                                        : s.payment === 'Fiado'
                                        ? 'bg-amber-100 text-amber-800'
                                        : 'bg-slate-100 text-slate-700'
                                    }`}
                                  >
                                    {s.payment}
                                  </span>
                                </td>
                                <td className="py-2.5 pl-2 text-right font-extrabold text-[#0d1b2e]">
                                  {fmtBRL(s.total)}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Estoque Rápido + Atalhos */}
                    <div className="lg:col-span-5 bg-white rounded-xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-bold text-sm text-[#0d1b2e] flex items-center gap-1.5">
                            <Flame className="size-4 text-amber-500" />
                            <span>Posição de Estoque em Tempo Real</span>
                          </h3>
                          <button
                            onClick={() => setActiveModule('produtos')}
                            className="text-xs font-bold text-emerald-700 hover:underline cursor-pointer"
                          >
                            Gerenciar
                          </button>
                        </div>

                        <div className="space-y-2.5">
                          {products.map((p) => {
                            const low = p.stock <= p.minStock;
                            const pct = Math.min(100, Math.round((p.stock / 70) * 100));
                            return (
                              <div key={p.id} className="space-y-1">
                                <div className="flex items-center justify-between text-xs">
                                  <span className="font-semibold text-slate-800">
                                    {p.name} <span className="text-slate-400">({p.brand})</span>
                                  </span>
                                  <span className={`font-extrabold ${low ? 'text-red-600' : 'text-emerald-700'}`}>
                                    {p.stock} {p.unit} {low && '⚠️'}
                                  </span>
                                </div>
                                <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                                  <div
                                    className={`h-full rounded-full transition-all ${
                                      low ? 'bg-red-500' : 'bg-emerald-500'
                                    }`}
                                    style={{ width: `${pct}%` }}
                                  />
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
                        <button
                          onClick={() => setActiveModule('cardapio-cliente')}
                          className="py-2 px-3 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-900 font-bold text-xs flex items-center justify-center gap-1.5 border border-emerald-200 cursor-pointer"
                        >
                          <Store className="size-3.5 text-emerald-700" />
                          <span>Simular Cardápio Web</span>
                        </button>
                        <button
                          onClick={() => setActiveModule('app-entregador')}
                          className="py-2 px-3 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-900 font-bold text-xs flex items-center justify-center gap-1.5 border border-blue-200 cursor-pointer"
                        >
                          <Bike className="size-3.5 text-blue-700" />
                          <span>Ver App Entregador</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* =========================================================
                  2. NOVA VENDA (PDV BALCÃO / TELEFONE / WHATSAPP)
                 ========================================================= */}
              {activeModule === 'nova-venda' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 animate-fade-in">
                  {/* Coluna Esquerda: Seleção de Cliente, Canal e Catálogo de Produtos */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-sm text-[#0d1b2e]">1. Dados do Cliente e Modalidade</h3>
                        <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                          PDV Rápido
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">
                            Cliente Cadastrado
                          </label>
                          <select
                            value={selectedClientId}
                            onChange={(e) => setSelectedClientId(e.target.value)}
                            className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-300 text-xs font-semibold text-slate-900"
                          >
                            {clients.map((c) => (
                              <option key={c.id} value={c.id}>
                                {c.name} — {c.neighborhood}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">
                            Modalidade da Venda
                          </label>
                          <div className="grid grid-cols-2 gap-2">
                            <button
                              type="button"
                              onClick={() => setSaleType('Entrega')}
                              className={`py-2 px-3 rounded-lg text-xs font-bold border flex items-center justify-center gap-1.5 cursor-pointer ${
                                saleType === 'Entrega'
                                  ? 'bg-emerald-600 text-white border-emerald-600'
                                  : 'bg-slate-50 text-slate-700 border-slate-300'
                              }`}
                            >
                              <Truck className="size-3.5" />
                              <span>Tele-Entrega</span>
                            </button>
                            <button
                              type="button"
                              onClick={() => setSaleType('Portaria')}
                              className={`py-2 px-3 rounded-lg text-xs font-bold border flex items-center justify-center gap-1.5 cursor-pointer ${
                                saleType === 'Portaria'
                                  ? 'bg-emerald-600 text-white border-emerald-600'
                                  : 'bg-slate-50 text-slate-700 border-slate-300'
                              }`}
                            >
                              <Store className="size-3.5" />
                              <span>Portaria / Balcão</span>
                            </button>
                          </div>
                        </div>
                      </div>

                      {saleType === 'Entrega' && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                          <div className="text-xs bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                            <span className="text-slate-400 block text-[10px] font-bold uppercase">
                              Endereço de Entrega:
                            </span>
                            <strong className="text-slate-800">
                              {clients.find((c) => c.id === selectedClientId)?.address} •{' '}
                              {clients.find((c) => c.id === selectedClientId)?.neighborhood}
                            </strong>
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">
                              Designar Entregador:
                            </label>
                            <select
                              value={driverName}
                              onChange={(e) => setDriverName(e.target.value)}
                              className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-300 text-xs font-semibold text-slate-900"
                            >
                              <option value="Carlos (Moto 01)">Carlos (Moto 01)</option>
                              <option value="Marcos (Fiorino 02)">Marcos (Fiorino 02)</option>
                              <option value="André (Moto 03)">André (Moto 03)</option>
                            </select>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Grade de Produtos para Adicionar em 1 Clique */}
                    <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs">
                      <h3 className="font-bold text-sm text-[#0d1b2e] mb-3">
                        2. Clique nos Produtos para Adicionar ao Pedido
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {products.map((p) => (
                          <button
                            key={p.id}
                            type="button"
                            onClick={() => addToCart(p)}
                            className="p-3 rounded-xl border border-slate-200 hover:border-emerald-500 bg-slate-50/70 hover:bg-emerald-50/40 text-left flex items-center justify-between transition-all cursor-pointer group"
                          >
                            <div>
                              <div className="font-bold text-xs text-[#0d1b2e] group-hover:text-emerald-800">
                                {p.name}
                              </div>
                              <div className="text-[11px] text-slate-500">
                                {p.brand} • Estoque: <strong>{p.stock}</strong>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="font-black text-xs text-emerald-700">{fmtBRL(p.price)}</div>
                              <span className="inline-flex items-center gap-0.5 text-[10px] font-bold text-emerald-600">
                                <Plus className="size-3" /> Adicionar
                              </span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Coluna Direita: Cupom / Carrinho e Fechamento */}
                  <div className="lg:col-span-5 bg-white rounded-xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                        <h3 className="font-black text-sm text-[#0d1b2e] flex items-center gap-2">
                          <Receipt className="size-4 text-emerald-600" />
                          <span>Resumo do Pedido</span>
                        </h3>
                        <span className="text-xs font-bold text-slate-500">{cart.length} item(ns)</span>
                      </div>

                      {cart.length === 0 ? (
                        <div className="py-10 text-center text-xs text-slate-400">
                          Nenhum produto selecionado. Clique nos produtos ao lado.
                        </div>
                      ) : (
                        <div className="divide-y divide-slate-100 my-3">
                          {cart.map((item) => (
                            <div key={item.productId} className="py-2.5 flex items-center justify-between gap-2 text-xs">
                              <div>
                                <div className="font-bold text-[#0d1b2e]">{item.name}</div>
                                <div className="text-[11px] text-slate-500">
                                  {item.brand} • {fmtBRL(item.price)} un
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <button
                                  type="button"
                                  onClick={() => changeCartQty(item.productId, -1)}
                                  className="size-6 rounded bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 cursor-pointer"
                                >
                                  <Minus className="size-3" />
                                </button>
                                <span className="font-black w-5 text-center">{item.qty}</span>
                                <button
                                  type="button"
                                  onClick={() => changeCartQty(item.productId, 1)}
                                  className="size-6 rounded bg-emerald-100 hover:bg-emerald-200 flex items-center justify-center text-emerald-800 cursor-pointer"
                                >
                                  <Plus className="size-3" />
                                </button>
                                <span className="font-extrabold text-[#0d1b2e] w-16 text-right">
                                  {fmtBRL(item.qty * item.price)}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Forma de Pagamento e Desconto */}
                      <div className="space-y-3 pt-3 border-t border-slate-200">
                        <div>
                          <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1.5">
                            Forma de Pagamento
                          </label>
                          <div className="grid grid-cols-4 gap-1.5">
                            {(['PIX', 'Dinheiro', 'Cartão', 'Fiado'] as const).map((m) => (
                              <button
                                key={m}
                                type="button"
                                onClick={() => setPaymentMethod(m)}
                                className={`py-2 rounded-lg text-xs font-bold border cursor-pointer transition-all ${
                                  paymentMethod === m
                                    ? 'bg-[#0d1b2e] text-white border-[#0d1b2e]'
                                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                                }`}
                              >
                                {m}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-xs">
                          <span className="text-slate-600 font-semibold">Desconto (R$):</span>
                          <input
                            type="number"
                            min={0}
                            value={discount}
                            onChange={(e) => setDiscount(Math.max(0, Number(e.target.value)))}
                            className="w-24 px-2.5 py-1.5 rounded-lg border border-slate-300 text-right font-bold"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-200 mt-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase text-slate-500">Total a Receber</span>
                        <span className="text-2xl font-black text-emerald-700">{fmtBRL(totalCart)}</span>
                      </div>

                      <button
                        type="button"
                        onClick={finalizeSale}
                        className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs sm:text-sm shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2 cursor-pointer transition-all"
                      >
                        <CheckCircle2 className="size-4" />
                        <span>Finalizar Venda (Baixar Estoque + Lançar Caixa)</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* =========================================================
                  3. FILA DE ENTREGAS (DESPACHO + WAZE + WHATSAPP)
                 ========================================================= */}
              {activeModule === 'entregas' && (
                <div className="space-y-4 animate-fade-in">
                  <div className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <h3 className="font-black text-sm text-[#0d1b2e]">
                        Painel de Despacho e Acompanhamento de Entregas
                      </h3>
                      <p className="text-xs text-slate-500">
                        Despache para o entregador, envie aviso no WhatsApp do cliente ou abra o endereço direto no Waze.
                      </p>
                    </div>
                    <button
                      onClick={() => setActiveModule('app-entregador')}
                      className="px-3.5 py-2 rounded-xl bg-[#0d1b2e] text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer self-start sm:self-auto"
                    >
                      <Bike className="size-3.5 text-emerald-400" />
                      <span>Abrir Visão do Celular do Entregador</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {/* Coluna 1: Pendentes */}
                    <div className="bg-slate-100/90 p-3.5 rounded-xl border border-slate-200/80 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-extrabold uppercase tracking-wider text-amber-800 flex items-center gap-1.5">
                          <Clock className="size-3.5 text-amber-600" />
                          Aguardando Saída
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-amber-200 text-amber-900 text-xs font-black">
                          {kpis.entregasPendentes}
                        </span>
                      </div>

                      {sales
                        .filter((s) => s.type !== 'Portaria' && s.deliveryStatus === 'pendente')
                        .map((s) => (
                          <div key={s.id} className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs space-y-2.5">
                            <div className="flex items-center justify-between text-xs">
                              <span className="font-black text-[#0d1b2e]">Pedido #{s.number}</span>
                              <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                                {s.time}
                              </span>
                            </div>
                            <div className="text-xs">
                              <div className="font-bold text-slate-900">{s.clientName}</div>
                              <div className="text-slate-500 flex items-center gap-1 mt-0.5">
                                <MapPin className="size-3 text-slate-400 shrink-0" />
                                <span>
                                  {s.address} — {s.neighborhood}
                                </span>
                              </div>
                            </div>
                            <div className="text-[11px] bg-slate-50 p-2 rounded-lg text-slate-700 font-medium">
                              {s.items.map((i) => `${i.qty}x ${i.name}`).join(', ')} •{' '}
                              <strong>
                                {fmtBRL(s.total)} ({s.payment})
                              </strong>
                            </div>
                            <div className="text-[11px] text-slate-500">
                              Entregador: <strong className="text-slate-800">{s.driverName || 'Carlos (Moto 01)'}</strong>
                            </div>
                            <button
                              onClick={() => advanceDelivery(s.id, 'a_caminho')}
                              className="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer"
                            >
                              <Truck className="size-3.5" />
                              <span>Despachar para Rota</span>
                            </button>
                          </div>
                        ))}
                    </div>

                    {/* Coluna 2: Em Rota (A Caminho) */}
                    <div className="bg-slate-100/90 p-3.5 rounded-xl border border-slate-200/80 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-extrabold uppercase tracking-wider text-blue-800 flex items-center gap-1.5">
                          <Navigation className="size-3.5 text-blue-600" />
                          Em Rota de Entrega
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-blue-200 text-blue-900 text-xs font-black">
                          {kpis.entregasRota}
                        </span>
                      </div>

                      {sales
                        .filter((s) => s.type !== 'Portaria' && s.deliveryStatus === 'a_caminho')
                        .map((s) => (
                          <div key={s.id} className="bg-white p-3.5 rounded-xl border-2 border-blue-400 shadow-xs space-y-2.5">
                            <div className="flex items-center justify-between text-xs">
                              <span className="font-black text-[#0d1b2e]">Pedido #{s.number}</span>
                              <span className="text-[10px] font-extrabold uppercase bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                                Motoboy a Caminho
                              </span>
                            </div>
                            <div className="text-xs">
                              <div className="font-bold text-slate-900">{s.clientName}</div>
                              <div className="text-slate-500">{s.address}</div>
                            </div>
                            <div className="text-[11px] bg-blue-50/60 p-2 rounded-lg text-slate-800">
                              {s.items.map((i) => `${i.qty}x ${i.name}`).join(', ')} •{' '}
                              <strong>{fmtBRL(s.total)}</strong>
                            </div>
                            <div className="grid grid-cols-2 gap-1.5">
                              <a
                                href={`https://waze.com/ul?q=${encodeURIComponent(s.address)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="py-1.5 px-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-[11px] flex items-center justify-center gap-1"
                              >
                                <Navigation className="size-3 text-blue-600" />
                                <span>Abrir Waze</span>
                              </a>
                              <button
                                onClick={() =>
                                  showToast(`Aviso enviado no WhatsApp de ${s.clientName}: "Seu gás já saiu para entrega!"`)
                                }
                                className="py-1.5 px-2 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-[11px] flex items-center justify-center gap-1 cursor-pointer"
                              >
                                <MessageCircle className="size-3 text-emerald-600" />
                                <span>Avisar Cliente</span>
                              </button>
                            </div>
                            <button
                              onClick={() => advanceDelivery(s.id, 'entregue')}
                              className="w-full py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer"
                            >
                              <CheckCircle2 className="size-3.5" />
                              <span>Confirmar Entrega Concluída</span>
                            </button>
                          </div>
                        ))}
                    </div>

                    {/* Coluna 3: Entregues */}
                    <div className="bg-slate-100/90 p-3.5 rounded-xl border border-slate-200/80 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                          <CheckCircle2 className="size-3.5 text-emerald-600" />
                          Concluídas Hoje
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-emerald-200 text-emerald-900 text-xs font-black">
                          {kpis.entregasConcluidas}
                        </span>
                      </div>

                      {sales
                        .filter((s) => s.type !== 'Portaria' && s.deliveryStatus === 'entregue')
                        .map((s) => (
                          <div key={s.id} className="bg-white/90 p-3.5 rounded-xl border border-slate-200 space-y-1.5 opacity-90">
                            <div className="flex items-center justify-between text-xs">
                              <span className="font-bold text-slate-800">Pedido #{s.number}</span>
                              <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                                ✓ Entregue
                              </span>
                            </div>
                            <div className="text-xs font-semibold text-slate-900">{s.clientName}</div>
                            <div className="text-[11px] text-slate-500">
                              {s.items.map((i) => `${i.qty}x ${i.name}`).join(', ')} •{' '}
                              <strong>{fmtBRL(s.total)}</strong>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              )}

              {/* =========================================================
                  4. PEDIDOS ONLINE (APROVAÇÃO DO CARDÁPIO DIGITAL EM 1 CLIQUE)
                 ========================================================= */}
              {activeModule === 'pedidos-online' && (
                <div className="space-y-4 animate-fade-in">
                  <div className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900 text-[10px] font-black uppercase">
                          Recurso Plano Pro
                        </span>
                        <h3 className="font-black text-sm text-[#0d1b2e]">
                          Central de Pedidos Online (Recebidos do Link do Cliente)
                        </h3>
                      </div>
                      <p className="text-xs text-slate-500 mt-1">
                        Quando o cliente pede pelo link da sua distribuidora, o alerta toca aqui. Aprove em 1 clique!
                      </p>
                    </div>
                    <button
                      onClick={() => setActiveModule('cardapio-cliente')}
                      className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer self-start sm:self-auto"
                    >
                      <Store className="size-3.5" />
                      <span>Simular Pedido no Cardápio do Cliente</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {onlineOrders.map((order) => (
                      <div
                        key={order.id}
                        className={`bg-white p-5 rounded-xl border-2 shadow-xs space-y-3 ${
                          order.status === 'aguardando' ? 'border-amber-400' : 'border-slate-200 opacity-85'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="font-black text-sm text-[#0d1b2e]">{order.code}</span>
                            <span className="text-xs text-slate-400">• {order.time}</span>
                          </div>
                          <span
                            className={`px-2.5 py-0.5 rounded-full text-[11px] font-extrabold uppercase ${
                              order.status === 'aguardando'
                                ? 'bg-amber-100 text-amber-800'
                                : 'bg-emerald-100 text-emerald-800'
                            }`}
                          >
                            {order.status === 'aguardando' ? '● Aguardando Aprovação' : '✓ Aprovado e em Entrega'}
                          </span>
                        </div>

                        <div className="text-xs space-y-1">
                          <div className="font-bold text-slate-900 text-sm">{order.clientName}</div>
                          <div className="text-slate-600 flex items-center gap-1.5">
                            <Phone className="size-3.5 text-emerald-600" />
                            <span>{order.clientPhone}</span>
                          </div>
                          <div className="text-slate-600 flex items-center gap-1.5">
                            <MapPin className="size-3.5 text-blue-600" />
                            <span>
                              {order.address} — {order.neighborhood}
                            </span>
                          </div>
                        </div>

                        <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs space-y-1">
                          {order.items.map((i, idx) => (
                            <div key={idx} className="flex justify-between font-semibold text-slate-800">
                              <span>
                                {i.qty}x {i.name} ({i.brand})
                              </span>
                              <span>{fmtBRL(i.qty * i.price)}</span>
                            </div>
                          ))}
                          {order.notes && (
                            <div className="pt-1.5 mt-1.5 border-t border-slate-200 text-[11px] text-amber-800">
                              <strong>Obs:</strong> {order.notes}
                            </div>
                          )}
                        </div>

                        <div className="flex items-center justify-between pt-1">
                          <div>
                            <span className="text-[11px] text-slate-400 block">Pagamento na Entrega:</span>
                            <span className="text-sm font-black text-[#0d1b2e]">
                              {fmtBRL(order.total)} ({order.payment})
                            </span>
                          </div>

                          {order.status === 'aguardando' ? (
                            <button
                              onClick={() => approveOnlineOrder(order)}
                              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm cursor-pointer"
                            >
                              <Check className="size-4" />
                              <span>Aprovar e Enviar p/ Entrega</span>
                            </button>
                          ) : (
                            <button
                              onClick={() => setActiveModule('entregas')}
                              className="px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs cursor-pointer"
                            >
                              Ver na Fila de Entregas →
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* =========================================================
                  5. CARDÁPIO DIGITAL (VISÃO DO CLIENTE NO CELULAR)
                 ========================================================= */}
              {activeModule === 'cardapio-cliente' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start animate-fade-in">
                  <div className="lg:col-span-5 space-y-4">
                    <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-3">
                      <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-[11px] font-extrabold uppercase">
                        Link Exclusivo da Sua Revenda (Plano Pro)
                      </span>
                      <h3 className="text-lg font-black text-[#0d1b2e]">
                        Seu cliente pede pelo celular sem precisar baixar aplicativo
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Você recebe um link próprio (ex: <strong>gas.lmaapp.com.br/p/sua-revenda</strong>) para colocar na bio do Instagram e na resposta automática do WhatsApp.
                      </p>
                      <ul className="space-y-2 text-xs text-slate-700 pt-1">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                          <span>Mostra apenas os produtos que você tem em estoque</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                          <span>Preenche endereço e forma de pagamento (PIX, Cartão ou Dinheiro)</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                          <span>Cai direto na aba "Pedidos Online" com alerta sonoro</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Mockup Interativo do Celular do Cliente */}
                  <div className="lg:col-span-7">
                    <div className="max-w-md mx-auto bg-white rounded-3xl border-4 border-[#0d1b2e] shadow-xl overflow-hidden">
                      <div className="bg-[#0d1b2e] text-white p-4 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <img src="/logo-lma.png" alt="Logo" className="h-8 w-auto" />
                          <div>
                            <div className="font-black text-sm">Depósito Central Gás & Água</div>
                            <div className="text-[11px] text-emerald-400 font-semibold">
                              ● Aberto Agora • Entrega Rápida (25-40 min)
                            </div>
                          </div>
                        </div>
                      </div>

                      <form onSubmit={sendCustomerMenuOrder} className="p-4 space-y-4">
                        <div className="space-y-2">
                          <div className="text-xs font-extrabold uppercase text-slate-500">
                            Escolha seus produtos:
                          </div>
                          {products.slice(0, 4).map((p) => {
                            const q = menuCart[p.id] || 0;
                            return (
                              <div
                                key={p.id}
                                className="p-3 rounded-xl border border-slate-200 flex items-center justify-between gap-2"
                              >
                                <div>
                                  <div className="font-bold text-xs text-[#0d1b2e]">{p.name}</div>
                                  <div className="text-[11px] text-slate-500">
                                    {p.brand} • <strong className="text-emerald-700">{fmtBRL(p.price)}</strong>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2">
                                  <button
                                    type="button"
                                    onClick={() =>
                                      setMenuCart((prev) => ({ ...prev, [p.id]: Math.max(0, (prev[p.id] || 0) - 1) }))
                                    }
                                    className="size-7 rounded-lg bg-slate-100 flex items-center justify-center font-bold cursor-pointer"
                                  >
                                    -
                                  </button>
                                  <span className="font-black text-xs w-4 text-center">{q}</span>
                                  <button
                                    type="button"
                                    onClick={() =>
                                      setMenuCart((prev) => ({ ...prev, [p.id]: (prev[p.id] || 0) + 1 }))
                                    }
                                    className="size-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold cursor-pointer"
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        <div className="grid grid-cols-2 gap-2.5 text-xs">
                          <div>
                            <label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">
                              Seu Nome
                            </label>
                            <input
                              type="text"
                              required
                              value={menuClientName}
                              onChange={(e) => setMenuClientName(e.target.value)}
                              className="w-full px-2.5 py-2 rounded-lg border border-slate-300"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">
                              WhatsApp
                            </label>
                            <input
                              type="text"
                              required
                              value={menuClientPhone}
                              onChange={(e) => setMenuClientPhone(e.target.value)}
                              className="w-full px-2.5 py-2 rounded-lg border border-slate-300"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-2 text-xs">
                          <div className="col-span-2">
                            <label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">
                              Endereço com Número
                            </label>
                            <input
                              type="text"
                              required
                              value={menuAddress}
                              onChange={(e) => setMenuAddress(e.target.value)}
                              className="w-full px-2.5 py-2 rounded-lg border border-slate-300"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">
                              Pagamento
                            </label>
                            <select
                              value={menuPayment}
                              onChange={(e) => setMenuPayment(e.target.value as any)}
                              className="w-full px-2 py-2 rounded-lg border border-slate-300 font-semibold"
                            >
                              <option value="PIX">PIX</option>
                              <option value="Cartão">Cartão</option>
                              <option value="Dinheiro">Dinheiro</option>
                            </select>
                          </div>
                        </div>

                        <button
                          type="submit"
                          className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs flex items-center justify-center gap-2 shadow-md cursor-pointer"
                        >
                          <Send className="size-3.5" />
                          <span>Enviar Pedido Agora para a Revenda</span>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              )}

              {/* =========================================================
                  6. APP DO ENTREGADOR (VISÃO EXCLUSIVA DO MOTOBOY)
                 ========================================================= */}
              {activeModule === 'app-entregador' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start animate-fade-in">
                  <div className="lg:col-span-5 bg-white p-5 rounded-xl border border-slate-200 space-y-3">
                    <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200 text-[11px] font-extrabold uppercase">
                      Módulo Exclusivo do Motoboy (Plano Pro)
                    </span>
                    <h3 className="text-lg font-black text-[#0d1b2e]">
                      O entregador vê apenas as entregas dele, sem acesso ao seu financeiro
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Cada entregador tem seu próprio login restrito: ele recebe os pedidos despachados, abre a rota no Waze em 1 toque e dá baixa na entrega direto da rua.
                    </p>
                  </div>

                  <div className="lg:col-span-7">
                    <div className="max-w-md mx-auto bg-[#0d1b2e] text-white rounded-3xl border-4 border-slate-800 shadow-xl p-4 space-y-3">
                      <div className="flex items-center justify-between border-b border-white/10 pb-3">
                        <div className="flex items-center gap-2">
                          <div className="size-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black">
                            <Bike className="size-5" />
                          </div>
                          <div>
                            <div className="text-xs font-black">Entregador: Carlos (Moto 01)</div>
                            <div className="text-[11px] text-emerald-400">● Em serviço • Sincronizado</div>
                          </div>
                        </div>
                        <span className="px-2.5 py-1 rounded-full bg-white/10 text-xs font-bold">
                          {kpis.entregasPendentes + kpis.entregasRota} na fila
                        </span>
                      </div>

                      {sales
                        .filter((s) => s.type !== 'Portaria' && s.deliveryStatus !== 'entregue')
                        .map((s) => (
                          <div key={s.id} className="bg-[#162942] border border-white/10 rounded-2xl p-3.5 space-y-2.5">
                            <div className="flex items-center justify-between text-xs">
                              <span className="font-black text-emerald-400">Pedido #{s.number}</span>
                              <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] font-bold uppercase">
                                {s.deliveryStatus === 'pendente' ? 'Aguardando Saída' : 'Em Rota'}
                              </span>
                            </div>
                            <div>
                              <div className="font-bold text-sm">{s.clientName}</div>
                              <div className="text-xs text-slate-300 mt-0.5">
                                {s.address} — {s.neighborhood}
                              </div>
                            </div>
                            <div className="text-xs bg-black/25 p-2.5 rounded-xl flex items-center justify-between">
                              <span>{s.items.map((i) => `${i.qty}x ${i.name}`).join(', ')}</span>
                              <strong className="text-emerald-300">
                                {fmtBRL(s.total)} ({s.payment})
                              </strong>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                              <a
                                href={`https://waze.com/ul?q=${encodeURIComponent(s.address)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="py-2 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-bold flex items-center justify-center gap-1.5"
                              >
                                <Navigation className="size-3.5 text-blue-400" />
                                <span>Navegar Waze</span>
                              </a>
                              {s.deliveryStatus === 'pendente' ? (
                                <button
                                  onClick={() => advanceDelivery(s.id, 'a_caminho')}
                                  className="py-2 rounded-xl bg-blue-500 hover:bg-blue-600 text-white text-xs font-black cursor-pointer"
                                >
                                  Iniciar Entrega
                                </button>
                              ) : (
                                <button
                                  onClick={() => advanceDelivery(s.id, 'entregue')}
                                  className="py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-[#06131f] text-xs font-black cursor-pointer"
                                >
                                  ✓ Marcar Entregue
                                </button>
                              )}
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              )}

              {/* =========================================================
                  7. CLIENTES & ALERTA DE INATIVOS +60 DIAS
                 ========================================================= */}
              {activeModule === 'clientes' && (
                <div className="space-y-4 animate-fade-in">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                    {/* Lista + Filtro de Inativos +60d */}
                    <div className="lg:col-span-8 bg-white rounded-xl border border-slate-200 p-4 shadow-xs space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setClientFilter('todos')}
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer ${
                              clientFilter === 'todos'
                                ? 'bg-[#0d1b2e] text-white'
                                : 'bg-slate-100 text-slate-700'
                            }`}
                          >
                            Todos ({clients.length})
                          </button>
                          <button
                            onClick={() => setClientFilter('inativos')}
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 cursor-pointer ${
                              clientFilter === 'inativos'
                                ? 'bg-red-600 text-white'
                                : 'bg-red-50 text-red-700 border border-red-200'
                            }`}
                          >
                            <AlertTriangle className="size-3.5" />
                            <span>Inativos +60 Dias ({kpis.inativos60d})</span>
                          </button>
                        </div>

                        <div className="relative">
                          <Search className="size-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            value={clientSearch}
                            onChange={(e) => setClientSearch(e.target.value)}
                            placeholder="Buscar nome ou endereço..."
                            className="pl-8 pr-3 py-1.5 rounded-lg border border-slate-300 text-xs"
                          />
                        </div>
                      </div>

                      <div className="divide-y divide-slate-100">
                        {clients
                          .filter((c) => (clientFilter === 'inativos' ? c.lastOrderDaysAgo >= 60 : true))
                          .filter(
                            (c) =>
                              c.name.toLowerCase().includes(clientSearch.toLowerCase()) ||
                              c.address.toLowerCase().includes(clientSearch.toLowerCase())
                          )
                          .map((c) => {
                            const inactive = c.lastOrderDaysAgo >= 60;
                            return (
                              <div key={c.id} className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                <div>
                                  <div className="flex items-center gap-2">
                                    <span className="font-bold text-xs text-[#0d1b2e]">{c.name}</span>
                                    <span
                                      className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                        inactive ? 'bg-red-100 text-red-800' : 'bg-emerald-100 text-emerald-800'
                                      }`}
                                    >
                                      {c.lastOrderDaysAgo === 0
                                        ? 'Comprou hoje'
                                        : `Último pedido há ${c.lastOrderDaysAgo} dias`}
                                    </span>
                                  </div>
                                  <div className="text-[11px] text-slate-500 mt-0.5">
                                    {c.phone} • {c.address} ({c.neighborhood}) • {c.totalOrders} compras
                                  </div>
                                </div>

                                <div className="flex items-center gap-2">
                                  {inactive && (
                                    <button
                                      onClick={() =>
                                        showToast(
                                          `Mensagem de reativação pronta para enviar no WhatsApp de ${c.name}!`
                                        )
                                      }
                                      className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1 cursor-pointer"
                                    >
                                      <MessageCircle className="size-3.5" />
                                      <span>Reativar no WhatsApp</span>
                                    </button>
                                  )}
                                  <button
                                    onClick={() => {
                                      setSelectedClientId(c.id);
                                      setActiveModule('nova-venda');
                                    }}
                                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs cursor-pointer"
                                  >
                                    Lançar Venda
                                  </button>
                                </div>
                              </div>
                            );
                          })}
                      </div>
                    </div>

                    {/* Cadastro Rápido de Cliente */}
                    <div className="lg:col-span-4 bg-white rounded-xl border border-slate-200 p-4 shadow-xs">
                      <h3 className="font-bold text-sm text-[#0d1b2e] mb-3">Novo Cliente</h3>
                      <form onSubmit={handleAddClient} className="space-y-3 text-xs">
                        <div>
                          <label className="block font-bold text-slate-600 mb-1">Nome Completo *</label>
                          <input
                            type="text"
                            required
                            value={newClientName}
                            onChange={(e) => setNewClientName(e.target.value)}
                            placeholder="Ex: Ana Paula Souza"
                            className="w-full px-3 py-2 rounded-lg border border-slate-300"
                          />
                        </div>
                        <div>
                          <label className="block font-bold text-slate-600 mb-1">WhatsApp</label>
                          <input
                            type="text"
                            value={newClientPhone}
                            onChange={(e) => setNewClientPhone(e.target.value)}
                            placeholder="(11) 99999-9999"
                            className="w-full px-3 py-2 rounded-lg border border-slate-300"
                          />
                        </div>
                        <div>
                          <label className="block font-bold text-slate-600 mb-1">Endereço de Entrega</label>
                          <input
                            type="text"
                            value={newClientAddress}
                            onChange={(e) => setNewClientAddress(e.target.value)}
                            placeholder="Rua, Número e Bairro"
                            className="w-full px-3 py-2 rounded-lg border border-slate-300"
                          />
                        </div>
                        <button
                          type="submit"
                          className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold cursor-pointer"
                        >
                          + Cadastrar Cliente
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              )}

              {/* =========================================================
                  8. PRODUTOS & ESTOQUE DE BOTIJÕES E ÁGUA
                 ========================================================= */}
              {activeModule === 'produtos' && (
                <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-4 animate-fade-in">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="font-black text-sm text-[#0d1b2e]">
                        Controle de Produtos, Preços, Custos e Estoque Mínimo
                      </h3>
                      <p className="text-xs text-slate-500">
                        Ajuste o estoque diretamente nos botões + / - ou lance uma entrada na aba "Compras".
                      </p>
                    </div>
                    <button
                      onClick={() => setActiveModule('compras')}
                      className="px-3.5 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold cursor-pointer self-start sm:self-auto"
                    >
                      + Registrar Entrada de Caminhão / Compra
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                    {products.map((p) => {
                      const low = p.stock <= p.minStock;
                      const margin = p.price - p.cost;
                      return (
                        <div
                          key={p.id}
                          className={`p-4 rounded-xl border space-y-3 ${
                            low ? 'border-red-300 bg-red-50/30' : 'border-slate-200 bg-slate-50/50'
                          }`}
                        >
                          <div className="flex items-start justify-between">
                            <div>
                              <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-slate-200 text-slate-700">
                                {p.brand}
                              </span>
                              <h4 className="font-black text-sm text-[#0d1b2e] mt-1">{p.name}</h4>
                            </div>
                            <div className="text-right">
                              <div className="text-sm font-black text-emerald-700">{fmtBRL(p.price)}</div>
                              <div className="text-[10px] text-slate-500">
                                Custo: {fmtBRL(p.cost)} (Lucro {fmtBRL(margin)})
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center justify-between pt-2 border-t border-slate-200/80">
                            <div>
                              <span className="text-[11px] text-slate-500 block">Saldo em Estoque:</span>
                              <span className={`text-base font-black ${low ? 'text-red-600' : 'text-[#0d1b2e]'}`}>
                                {p.stock} {p.unit} {low && ' (Abaixo do mín.)'}
                              </span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <button
                                onClick={() =>
                                  setProducts((prev) =>
                                    prev.map((x) => (x.id === p.id ? { ...x, stock: Math.max(0, x.stock - 1) } : x))
                                  )
                                }
                                className="size-8 rounded-lg bg-white border border-slate-300 hover:bg-slate-100 font-black cursor-pointer"
                              >
                                -
                              </button>
                              <button
                                onClick={() =>
                                  setProducts((prev) =>
                                    prev.map((x) => (x.id === p.id ? { ...x, stock: x.stock + 5 } : x))
                                  )
                                }
                                className="px-2.5 h-8 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold cursor-pointer"
                              >
                                +5
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* =========================================================
                  9. CAIXA / FINANCEIRO DO DIA
                 ========================================================= */}
              {activeModule === 'caixa' && (
                <div className="space-y-4 animate-fade-in">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                    <div className="bg-white p-4 rounded-xl border border-slate-200">
                      <span className="text-xs font-semibold text-slate-500">Entradas do Dia</span>
                      <div className="text-xl font-black text-emerald-600 mt-1">{fmtBRL(kpis.entradas)}</div>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-slate-200">
                      <span className="text-xs font-semibold text-slate-500">Saídas / Despesas</span>
                      <div className="text-xl font-black text-red-600 mt-1">{fmtBRL(kpis.saidas)}</div>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-slate-200">
                      <span className="text-xs font-semibold text-slate-500">Saldo Líquido em Caixa</span>
                      <div className="text-xl font-black text-[#0d1b2e] mt-1">{fmtBRL(kpis.saldoCaixa)}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                    <div className="lg:col-span-8 bg-white rounded-xl border border-slate-200 p-4 space-y-3">
                      <h3 className="font-bold text-sm text-[#0d1b2e]">Movimentações do Caixa Hoje</h3>
                      <div className="divide-y divide-slate-100 text-xs">
                        {cashEntries.map((c) => (
                          <div key={c.id} className="py-2.5 flex items-center justify-between gap-2">
                            <div>
                              <div className="font-bold text-slate-900">
                                {c.category} — <span className="font-normal text-slate-600">{c.description}</span>
                              </div>
                              <div className="text-[11px] text-slate-400">
                                {c.time} • {c.payment}
                              </div>
                            </div>
                            <span
                              className={`font-black ${
                                c.type === 'entrada' ? 'text-emerald-600' : 'text-red-600'
                              }`}
                            >
                              {c.type === 'entrada' ? '+' : '-'} {fmtBRL(c.amount)}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="lg:col-span-4 bg-white rounded-xl border border-slate-200 p-4">
                      <h3 className="font-bold text-sm text-[#0d1b2e] mb-3">Lançar Entrada / Sangria</h3>
                      <form onSubmit={handleAddCash} className="space-y-3 text-xs">
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            type="button"
                            onClick={() => setCashType('saida')}
                            className={`py-2 rounded-lg font-bold border cursor-pointer ${
                              cashType === 'saida'
                                ? 'bg-red-600 text-white border-red-600'
                                : 'bg-slate-50 text-slate-700 border-slate-300'
                            }`}
                          >
                            Saída / Despesa
                          </button>
                          <button
                            type="button"
                            onClick={() => setCashType('entrada')}
                            className={`py-2 rounded-lg font-bold border cursor-pointer ${
                              cashType === 'entrada'
                                ? 'bg-emerald-600 text-white border-emerald-600'
                                : 'bg-slate-50 text-slate-700 border-slate-300'
                            }`}
                          >
                            Entrada / Suprimento
                          </button>
                        </div>
                        <div>
                          <label className="block font-bold text-slate-600 mb-1">Descrição *</label>
                          <input
                            type="text"
                            required
                            value={cashDesc}
                            onChange={(e) => setCashDesc(e.target.value)}
                            placeholder="Ex: Gasolina Moto 02 / Troco"
                            className="w-full px-3 py-2 rounded-lg border border-slate-300"
                          />
                        </div>
                        <div>
                          <label className="block font-bold text-slate-600 mb-1">Valor (R$) *</label>
                          <input
                            type="number"
                            required
                            min={1}
                            step="0.01"
                            value={cashVal}
                            onChange={(e) => setCashVal(e.target.value)}
                            placeholder="50.00"
                            className="w-full px-3 py-2 rounded-lg border border-slate-300"
                          />
                        </div>
                        <button
                          type="submit"
                          className="w-full py-2.5 rounded-xl bg-[#0d1b2e] text-white font-bold cursor-pointer"
                        >
                          Registrar no Caixa
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              )}

              {/* =========================================================
                  10. CONTAS A PAGAR
                 ========================================================= */}
              {activeModule === 'contas' && (
                <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-4 animate-fade-in">
                  <div>
                    <h3 className="font-black text-sm text-[#0d1b2e]">
                      Contas a Pagar e Vencimentos da Distribuidora
                    </h3>
                    <p className="text-xs text-slate-500">
                      Ao dar baixa numa conta, o valor já é lançado automaticamente nas saídas do Caixa.
                    </p>
                  </div>

                  <div className="divide-y divide-slate-100 text-xs">
                    {bills.map((b) => (
                      <div key={b.id} className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-slate-900">{b.description}</span>
                            <span
                              className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                                b.status === 'paga'
                                  ? 'bg-emerald-100 text-emerald-800'
                                  : b.status === 'vencida'
                                  ? 'bg-red-100 text-red-800'
                                  : 'bg-amber-100 text-amber-800'
                              }`}
                            >
                              {b.status}
                            </span>
                          </div>
                          <div className="text-[11px] text-slate-500 mt-0.5">
                            Categoria: {b.category} • Vencimento: <strong>{b.dueDate}</strong>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <span className="font-black text-sm text-[#0d1b2e]">{fmtBRL(b.amount)}</span>
                          {b.status !== 'paga' && (
                            <button
                              onClick={() => payBill(b)}
                              className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold cursor-pointer"
                            >
                              Dar Baixa (Pagar)
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* =========================================================
                  11. COMPRAS (REPOSIÇÃO DE ESTOQUE)
                 ========================================================= */}
              {activeModule === 'compras' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 animate-fade-in">
                  <div className="lg:col-span-5 bg-white rounded-xl border border-slate-200 p-4">
                    <h3 className="font-black text-sm text-[#0d1b2e] mb-3">
                      Registrar Entrada de Mercadoria (Cia)
                    </h3>
                    <form onSubmit={handleAddPurchase} className="space-y-3 text-xs">
                      <div>
                        <label className="block font-bold text-slate-600 mb-1">Produto</label>
                        <select
                          value={purchaseProductId}
                          onChange={(e) => {
                            const pid = e.target.value;
                            setPurchaseProductId(pid);
                            const found = products.find((p) => p.id === pid);
                            if (found) setPurchaseCost(found.cost);
                          }}
                          className="w-full px-3 py-2 rounded-lg border border-slate-300 font-semibold"
                        >
                          {products.map((p) => (
                            <option key={p.id} value={p.id}>
                              {p.name} ({p.brand}) — Estoque atual: {p.stock}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block font-bold text-slate-600 mb-1">Quantidade</label>
                          <input
                            type="number"
                            min={1}
                            value={purchaseQty}
                            onChange={(e) => setPurchaseQty(Number(e.target.value))}
                            className="w-full px-3 py-2 rounded-lg border border-slate-300"
                          />
                        </div>
                        <div>
                          <label className="block font-bold text-slate-600 mb-1">Custo Unitário (R$)</label>
                          <input
                            type="number"
                            step="0.01"
                            value={purchaseCost}
                            onChange={(e) => setPurchaseCost(Number(e.target.value))}
                            className="w-full px-3 py-2 rounded-lg border border-slate-300"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block font-bold text-slate-600 mb-1">Fornecedor / Caminhão</label>
                        <input
                          type="text"
                          value={purchaseSupplier}
                          onChange={(e) => setPurchaseSupplier(e.target.value)}
                          className="w-full px-3 py-2 rounded-lg border border-slate-300"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold cursor-pointer"
                      >
                        Confirmar Entrada (+Somar ao Estoque)
                      </button>
                    </form>
                  </div>

                  <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 p-4 space-y-3">
                    <h3 className="font-bold text-sm text-[#0d1b2e]">Histórico de Entradas de Estoque</h3>
                    <div className="divide-y divide-slate-100 text-xs">
                      {purchases.map((cp) => (
                        <div key={cp.id} className="py-2.5 flex items-center justify-between">
                          <div>
                            <div className="font-bold text-slate-900">
                              {cp.qty}x {cp.productName}
                            </div>
                            <div className="text-[11px] text-slate-500">
                              {cp.date} • {cp.supplier} • Custo un: {fmtBRL(cp.unitCost)}
                            </div>
                          </div>
                          <span className="font-black text-[#0d1b2e]">{fmtBRL(cp.total)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* =========================================================
                  12. HISTÓRICO DE VENDAS
                 ========================================================= */}
              {activeModule === 'historico' && (
                <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-4 animate-fade-in">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-black text-sm text-[#0d1b2e]">
                        Histórico Completo de Vendas e Fiados
                      </h3>
                      <p className="text-xs text-slate-500">
                        Consulte pedidos por data, forma de pagamento, canal (Portaria, Entrega ou Online) e status.
                      </p>
                    </div>
                    <span className="text-xs font-extrabold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                      Total: {fmtBRL(kpis.vendasHoje)}
                    </span>
                  </div>

                  <div className="divide-y divide-slate-100 text-xs">
                    {sales.map((s) => (
                      <div key={s.id} className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <div className="font-bold text-[#0d1b2e]">
                            Pedido #{s.number} — {s.clientName}{' '}
                            <span className="text-slate-400 font-normal">({s.time})</span>
                          </div>
                          <div className="text-[11px] text-slate-500">
                            {s.items.map((i) => `${i.qty}x ${i.name}`).join(', ')} • {s.type} • {s.address}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-full bg-slate-100 font-bold text-slate-700">
                            {s.payment}
                          </span>
                          <span className="font-black text-sm text-[#0d1b2e]">{fmtBRL(s.total)}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* =========================================================
                  13. RELATÓRIOS & INTELIGÊNCIA COMERCIAL (DRE + PDF)
                 ========================================================= */}
              {activeModule === 'relatorios' && (
                <div className="space-y-4 animate-fade-in">
                  <div className="bg-gradient-to-r from-[#0d1b2e] to-[#162d4c] text-white p-5 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-300">
                        Módulo de Inteligência Comercial
                      </span>
                      <h3 className="text-base sm:text-lg font-black mt-0.5">
                        Relatórios & Performance Financeira Consolidada
                      </h3>
                      <p className="text-xs text-slate-300">
                        Faturamento bruto, custos de reposição, despesas e lucro líquido real da revenda.
                      </p>
                    </div>
                    <button
                      onClick={() =>
                        showToast('Relatório Gerencial em PDF preparado para impressão limpa (sem campos formais desnecessários).')
                      }
                      className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#06131f] font-black text-xs flex items-center gap-1.5 cursor-pointer self-start sm:self-auto"
                    >
                      <Printer className="size-4" />
                      <span>Exportar / Imprimir PDF</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-3.5">
                    <div className="bg-white p-4 rounded-xl border border-slate-200">
                      <span className="text-xs text-slate-500 font-semibold">Receita Bruta (Hoje)</span>
                      <div className="text-xl font-black text-emerald-700 mt-1">{fmtBRL(kpis.vendasHoje)}</div>
                      <span className="text-[11px] text-slate-400">{kpis.numVendas} pedidos</span>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-slate-200">
                      <span className="text-xs text-slate-500 font-semibold">Ticket Médio</span>
                      <div className="text-xl font-black text-[#0d1b2e] mt-1">{fmtBRL(kpis.ticketMedio)}</div>
                      <span className="text-[11px] text-slate-400">Por venda realizada</span>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-slate-200">
                      <span className="text-xs text-slate-500 font-semibold">Saídas / Despesas</span>
                      <div className="text-xl font-black text-amber-600 mt-1">{fmtBRL(kpis.saidas)}</div>
                      <span className="text-[11px] text-slate-400">Operacional do dia</span>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-slate-200">
                      <span className="text-xs text-slate-500 font-semibold">Resultado de Caixa</span>
                      <div className="text-xl font-black text-blue-700 mt-1">{fmtBRL(kpis.saldoCaixa)}</div>
                      <span className="text-[11px] text-emerald-700 font-bold">Lucro positivo</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* BARRA INFERIOR DE CONVERSÃO DIRETA DENTRO DO SIMULADOR */}
            <div className="bg-white border-t border-slate-200 px-4 sm:px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <ShieldCheck className="size-4 text-emerald-600 shrink-0" />
                <span>
                  Gostou de testar o <strong>LMA Gás</strong>? Crie sua conta oficial agora e use tudo isso na sua distribuidora por <strong>7 dias grátis</strong>.
                </span>
              </div>
              <button
                onClick={onOpenTrial}
                className="w-full sm:w-auto px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs flex items-center justify-center gap-1.5 shadow-sm cursor-pointer shrink-0"
              >
                <Sparkles className="size-3.5" />
                <span>Liberar Meus 7 Dias Grátis no Sistema Real</span>
                <ArrowRight className="size-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
