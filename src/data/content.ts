export const WHATSAPP_NUMBER = "5511945440640";
export const WHATSAPP_DISPLAY = "(11) 94544-0640";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20LMA%20G%C3%A1s%20para%20minha%20revenda.`;

export const DISTRIBUIDORAS = [
  { name: 'Ultragaz', color: '#0284c7', bg: '#f0f9ff', border: '#bae6fd' },
  { name: 'Liquigás', color: '#16a34a', bg: '#f0fdf4', border: '#bbf7d0' },
  { name: 'Copagaz', color: '#dc2626', bg: '#fef2f2', border: '#fecaca' },
  { name: 'Supergasbras', color: '#ea580c', bg: '#fff7ed', border: '#ffedd5' },
  { name: 'Consigaz', color: '#2563eb', bg: '#eff6ff', border: '#bfdbfe' },
  { name: 'Nacional Gás', color: '#ca8a04', bg: '#fefce8', border: '#fef08a' },
  { name: 'Fogás', color: '#9333ea', bg: '#faf5ff', border: '#e9d5ff' },
  { name: 'Multimarcas', color: '#475569', bg: '#f8fafc', border: '#e2e8f0' },
];

export const HERO_DATA = {
  badge: "Sistema para Revenda de Gás",
  title: "Sua revenda de gás mais organizada, do pedido à entrega.",
  description: "Controle vendas, entregas, estoque e clientes em um só lugar. Simples de usar, direto ao ponto.",
  ctaPrimary: "Testar 7 Dias Grátis",
  ctaSecondary: "Ver Demonstração",
  benefits: [
    "Sem cartão de crédito",
    "Sem fidelidade",
    "Suporte em português"
  ]
};

export const CORE_FEATURES = [
  {
    icon: "ShoppingCart",
    title: "Vendas e Pedidos",
    description: "Registre vendas no balcão e delivery com rapidez."
  },
  {
    icon: "Package",
    title: "Estoque",
    description: "Controle botijões cheios e vazios sem perder a conta."
  },
  {
    icon: "Truck",
    title: "Entregas",
    description: "Acompanhe seus entregadores e agilize as rotas."
  },
  {
    icon: "Users",
    title: "Clientes",
    description: "Histórico completo e alerta de clientes sem pedir há mais de 60 dias."
  }
];

export const SYSTEM_BENEFITS = [
  {
    title: "Funciona no computador e celular",
    desc: "Acesse sua revenda de qualquer lugar, sem precisar instalar nada."
  },
  {
    title: "Frente de Caixa (PDV de 10 segundos)",
    desc: "Cadastre vendas de balcão e delivery rapidamente e imprima comandas térmicas."
  },
  {
    title: "Painel de Entregas com Waze e Maps",
    desc: "Acompanhe pedidos em tempo real (Pendentes, Em Rota, Entregues) com rotas no celular."
  },
  {
    title: "Clientes Inativos (+60 e +90 dias)",
    desc: "Descubra quais clientes sumiram e envie mensagem no WhatsApp com 1 clique para não perder vendas."
  },
  {
    title: "Estoque de Botijões Cheios e Vazios",
    desc: "Saldo em tempo real de P13, P20, P45 e Água 20L com alerta de reposição de carga."
  },
  {
    title: "Fechamento Cego de Caixa por Turno",
    desc: "Conferência cega de dinheiro, Pix e cartões no encerramento de turno, eliminando divergências."
  }
];

export const PLANS = [
  {
    id: "basico",
    name: "Plano Básico",
    subtitle: "Ideal para revendas que buscam controle total de vendas, caixa e estoque.",
    price: "49,99",
    currency: "R$",
    period: "/mês",
    highlighted: false,
    savingsNote: "7 dias grátis • Sem cartão de crédito",
    features: [
      { text: "Gestão completa de vendas (balcão e entrega)", highlight: false },
      { text: "Cadastro de clientes e histórico de compras", highlight: false },
      { text: "Alerta de clientes inativos (+60 e +90 dias sem comprar)", highlight: true },
      { text: "Controle de estoque de botijões (cheios e vazios)", highlight: false },
      { text: "Fechamento cego de caixa por turno", highlight: true },
      { text: "Relatórios de vendas e faturamento", highlight: false },
      { text: "Acesso no computador e no celular", highlight: false },
      { text: "Suporte dedicado pelo WhatsApp", highlight: false }
    ],
    cta: "Testar 7 Dias Grátis"
  },
  {
    id: "pro",
    name: "Plano Pro",
    badge: "MAIS ESCOLHIDO",
    subtitle: "Tudo do Plano Básico + Cardápio Digital próprio e Aplicativo do Entregador.",
    price: "99,99",
    currency: "R$",
    period: "/mês",
    highlighted: true,
    savingsNote: "7 dias grátis • Sem fidelidade",
    features: [
      { text: "Tudo incluído no Plano Básico", highlight: false },
      { text: "Cardápio Digital próprio (pedidos online sem taxas)", highlight: true },
      { text: "Aplicativo do Entregador (rotas no Waze/Maps e baixa pelo celular)", highlight: true }
    ],
    cta: "Testar 7 Dias Grátis"
  }
];

export const TRUST_POINTS = [
  {
    title: "7 dias de teste grátis",
    desc: "Teste o sistema sem compromisso na sua revenda."
  },
  {
    title: "Sem cartão de crédito",
    desc: "Você só paga se quiser continuar após os 7 dias."
  },
  {
    title: "Sem fidelidade",
    desc: "Cancele ou altere seu plano quando desejar."
  },
  {
    title: "Suporte em português",
    desc: "Ajuda rápida sempre que precisar direto pelo WhatsApp."
  }
];

export const FAQS = [
  {
    q: "Qual a diferença exata entre o Plano Básico e o Plano Pro?",
    a: "O Plano Básico (R$ 49,99/mês) inclui toda a gestão essencial: vendas, clientes, alerta de inativos (+60d), estoque de botijões cheios/vazios, fechamento de caixa e relatórios. O Plano Pro (R$ 99,99/mês) inclui tudo isso e difere exclusivamente por adicionar o Cardápio Digital próprio (pedidos online sem taxas) e o Aplicativo do Entregador (rotas no Waze/Maps e baixa de pedidos no celular)."
  },
  {
    q: "Como funciona o teste gratuito de 7 dias?",
    a: "Você preenche os dados da sua revenda e recebe acesso imediato a todas as funcionalidades do sistema para testar por 7 dias. Não pedimos cartão de crédito."
  },
  {
    q: "Como o alerta de clientes inativos me ajuda a vender mais?",
    a: "O sistema filtra automaticamente os clientes cadastrados que estão sem comprar gás há mais de 60 ou 90 dias. Com um clique você abre o WhatsApp com mensagem pronta para reativar o cliente antes que ele compre do concorrente."
  },
  {
    q: "Como o entregador usa o aplicativo no celular?",
    a: "O entregador acessa pelo próprio navegador do smartphone (Android ou iPhone) usando um código de 6 dígitos gerado pela revenda. Ele visualiza o endereço, abre a rota com 1 toque no Waze ou Google Maps e dá baixa na entrega na hora."
  },
  {
    q: "O cardápio digital cobra alguma comissão por pedido?",
    a: "Zero comissões. Ao contrário de marketplaces que cobram comissões altas por venda, o Cardápio Digital do LMA Gás é 100% da sua revenda. Todo o valor das vendas fica com você."
  },
  {
    q: "O sistema funciona em computador fraco ou apenas no celular?",
    a: "Funciona perfeitamente em qualquer computador, notebook, tablet ou smartphone com internet, sem travamentos e sem precisar instalar nada."
  }
];
