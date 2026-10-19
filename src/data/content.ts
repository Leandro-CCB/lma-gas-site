export const WHATSAPP_NUMBER = "5511945440640";
export const WHATSAPP_DISPLAY = "(11) 94544-0640";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20sistema%20LMA%20G%C3%A1s.`;

export const HERO_DATA = {
  badge: "Sistema para Revendas de Gás",
  headline: "Sua revenda de gás mais organizada, do pedido à entrega.",
  description: "Controle vendas, entregas, estoque e clientes em um só lugar. Simples de usar, direto ao ponto.",
  benefits: [
    "Sem cartão de crédito",
    "Sem fidelidade",
    "Suporte em português"
  ]
};

export const CORE_FEATURES = [
  {
    iconName: "ShoppingCart",
    title: "Vendas e Pedidos",
    description: "Registre pedidos e acompanhe as vendas no balcão e delivery."
  },
  {
    iconName: "Truck",
    title: "Entregas",
    description: "Acompanhe as entregas e organize a operação dos entregadores."
  },
  {
    iconName: "Package",
    title: "Estoque",
    description: "Controle botijões cheios e vazios, água e outros produtos."
  },
  {
    iconName: "Users",
    title: "Clientes",
    description: "Organize o cadastro, histórico de compras e clientes inativos."
  }
];

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

export const PLANS = [
  {
    id: "basico",
    name: "Plano Básico",
    description: "Gestão completa para a operação diária da sua revenda de gás.",
    price: "49,99",
    highlighted: false,
    features: [
      "Gestão de vendas e pedidos (balcão e entrega)",
      "Cadastro e busca rápida de clientes",
      "Alerta de clientes inativos (+60 e +90 dias sem comprar)",
      "Controle de estoque de botijões (cheios e vazios)",
      "Fechamento cego de caixa por turno",
      "Relatórios de movimentação e vendas",
      "Acesso seguro pelo computador e celular",
      "Suporte por WhatsApp"
    ],
    cta: "Testar 7 Dias Grátis"
  },
  {
    id: "pro",
    name: "Plano Pro",
    badge: "MAIS ESCOLHIDO",
    description: "Tudo do Plano Básico + Cardápio Digital e Aplicativo do Entregador.",
    price: "99,99",
    highlighted: true,
    features: [
      "Tudo incluído no Plano Básico",
      "Cardápio Digital próprio (pedidos online sem taxas)",
      "Aplicativo do Entregador (rotas no Waze/Maps e baixa de pedidos no celular)"
    ],
    cta: "Testar 7 Dias Grátis"
  }
];

export const TRUST_POINTS = [
  {
    title: "7 Dias de Teste Grátis",
    desc: "Acesso total aos recursos para testar na rotina real da sua revenda."
  },
  {
    title: "Sem Cartão de Crédito",
    desc: "Cadastre-se e comece a usar imediatamente sem informar dados de pagamento."
  },
  {
    title: "Sem Fidelidade",
    desc: "Assinatura mensal flexível. Cancele ou altere seu plano quando desejar."
  },
  {
    title: "Suporte em Português",
    desc: "Atendimento direto pelo WhatsApp com quem entende da operação de revenda."
  }
];

export const FAQS = [
  {
    q: "Qual a diferença entre o Plano Básico e o Plano Pro?",
    a: "O Plano Básico (R$ 49,99/mês) conta com a gestão completa da revenda: vendas, clientes, alerta de clientes inativos, estoque de botijões, caixa e relatórios. O Plano Pro (R$ 99,99/mês) inclui tudo isso e adiciona exclusivamente o Cardápio Digital próprio (para pedidos online sem taxas) e o Aplicativo do Entregador (com rotas no Waze/Maps e baixa de pedidos no celular)."
  },
  {
    q: "Como funciona o teste gratuito de 7 dias?",
    a: "Você preenche os dados da sua revenda e recebe acesso imediato a todas as funcionalidades do sistema para testar por 7 dias. Não é necessário cartão de crédito."
  },
  {
    q: "O que é o alerta de clientes inativos?",
    a: "É uma ferramenta que filtra automaticamente os clientes cadastrados que estão sem realizar compras há mais de 60 ou 90 dias, permitindo que você envie uma mensagem rápida no WhatsApp para reconquistá-los."
  },
  {
    q: "Como os entregadores usam o aplicativo no Plano Pro?",
    a: "O aplicativo do entregador funciona diretamente no navegador do celular (Android e iOS). Basta acessar o link e digitar o código de 6 dígitos gerado no painel da revenda para ver os pedidos e abrir as rotas no Waze ou Google Maps."
  },
  {
    q: "O cardápio digital do Plano Pro cobra comissão por pedido?",
    a: "Não. O cardápio digital é próprio da sua revenda e não cobra nenhuma porcentagem sobre suas vendas. Todo o valor do pedido vai direto para você."
  },
  {
    q: "O sistema funciona em qualquer computador?",
    a: "Sim. O LMA Gás é 100% em nuvem e funciona em computadores, notebooks, tablets e celulares com acesso à internet, sem necessidade de instalações pesadas."
  }
];
