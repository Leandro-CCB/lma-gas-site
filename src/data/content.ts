export const WHATSAPP_NUMBER = "5511945440640";
export const WHATSAPP_DISPLAY = "(11) 94544-0640";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20sistema%20LMA%20G%C3%A1s.`;

export const HERO_DATA = {
  badge: "Sistema para Revendas de Gás",
  headline: "Sua revenda de gás mais organizada, do pedido à entrega.",
  description: "Controle seus pedidos, clientes, estoque e entregas em um só sistema. Simples, prático e feito para o dia a dia da sua revenda.",
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
    description: "Registre pedidos no balcão ou entrega em poucos cliques com cálculo automático."
  },
  {
    iconName: "Truck",
    title: "Entregas",
    description: "Acompanhe entregas em tempo real, organize entregadores e reduza atrasos."
  },
  {
    iconName: "Package",
    title: "Estoque",
    description: "Controle de botijões cheios e vazios (P13, P20, P45) e galões de água com alerta de mínimo."
  },
  {
    iconName: "Users",
    title: "Clientes",
    description: "Cadastro rápido, histórico de compras e alerta de clientes sem comprar há mais de 60 dias."
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

export const SYSTEM_BENEFITS = [
  {
    title: "Funciona no computador e no celular",
    desc: "100% em nuvem. Acesse do computador da loja, tablet ou smartphone sem precisar instalar nada."
  },
  {
    title: "Frente de Caixa (PDV rápido de 10 segundos)",
    desc: "Venda no balcão ou delivery, identificação de cliente por telefone, formas de pagamento e impressão térmica."
  },
  {
    title: "Organiza pedidos, entregas e estoque",
    desc: "Painel visual de entregas com status: Pendentes, Em Rota e Entregues, sem fichas de papel perdidas."
  },
  {
    title: "Alerta de clientes sem comprar há +60 dias",
    desc: "Filtro automático de clientes inativos para você mandar mensagem no WhatsApp antes que comprem de outro."
  },
  {
    title: "Controle rígido de botijões cheios e vazios",
    desc: "Saiba exatamente quantos vasilhames você tem no depósito e quando precisa pedir nova carga de gás."
  },
  {
    title: "Fechamento cego de caixa por turno",
    desc: "Conferência cega de dinheiro, Pix e cartões no encerramento de turno, eliminando divergências."
  }
];

export const PLANS = [
  {
    id: "basico",
    name: "Plano Básico",
    subtitle: "Ideal para pequenas revendas que querem organizar sua operação.",
    price: "49,99",
    highlighted: false,
    features: [
      "Gestão de vendas e pedidos (balcão e entrega)",
      "Cadastro e busca rápida de clientes",
      "Alerta de clientes inativos (+60 e +90 dias)",
      "Controle de estoque de botijões (cheios e vazios)",
      "Fechamento cego de caixa por turno",
      "Relatórios simples e objetivos",
      "Acesso no computador e celular",
      "Suporte por WhatsApp"
    ],
    cta: "Testar 7 Dias Grátis"
  },
  {
    id: "pro",
    name: "Plano Pro",
    badge: "MAIS ESCOLHIDO",
    subtitle: "Mais recursos e controle para uma operação mais eficiente.",
    price: "99,99",
    highlighted: true,
    features: [
      "Tudo incluído no Plano Básico",
      "Cardápio Digital próprio (pedidos online sem taxas)",
      "Aplicativo do Entregador (rotas no Waze/Maps e baixa pelo celular)"
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
    a: "Zero comissões. Ao contrário do iFood ou outros marketplaces que cobram de 12% a 27%, o Cardápio Digital do LMA Gás é 100% da sua revenda. Todo o valor das vendas fica com você."
  },
  {
    q: "O sistema funciona em computador fraco ou apenas no celular?",
    a: "Funciona perfeitamente em qualquer computador, notebook, tablet ou smartphone com internet, sem travamentos e sem precisar instalar nada."
  }
];
