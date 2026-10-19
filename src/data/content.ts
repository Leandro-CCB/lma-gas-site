import type { ScreenDetail, PlanItem, FaqItem, TestimonialItem } from '../types';

export const HERO_DATA = {
  badge: "⚡ O ERP Especializado em Revendas de Gás e Água #1 no Brasil",
  headline: "Aumente o lucro da sua revenda, zere o extravio de vasilhames e automatize suas entregas.",
  subheadline: "O único sistema completo com PDV de 10 segundos, Cardápio Digital próprio sem taxas do iFood, Aplicativo do Entregador com mapas e inteligência que avisa quando o botijão do cliente está para acabar.",
  bulletPoints: [
    "Teste grátis por 7 dias sem cartão",
    "Compatível com todas as bandeiras",
    "App do entregador incluso",
    "Instalação e treino em 15 minutos",
  ],
  stats: [
    { value: "+35%", label: "Mais velocidade nas entregas", hint: "Despacho direto no celular do entregador" },
    { value: "R$ 0", label: "De taxa por pedido no Cardápio", hint: "Economia de até R$ 2.400/mês vs iFood/Zé" },
    { value: "0%", label: "De perda de vasilhames", hint: "Conferência rigorosa de carga e rua" },
    { value: "+22%", label: "Recompra recorrente", hint: "Lembrete automático quando o gás está acabando" },
  ]
};

export const DISTRIBUIDORAS = [
  { name: 'Ultragaz', color: '#ea580c', bg: '#fff7ed', border: '#fdba74' },
  { name: 'Liquigás', color: '#16a34a', bg: '#f0fdf4', border: '#86efac' },
  { name: 'Copagaz', color: '#7c3aed', bg: '#f5f3ff', border: '#c4b5fd' },
  { name: 'Supergasbras', color: '#0891b2', bg: '#ecfeff', border: '#67e8f9' },
  { name: 'Consigaz', color: '#db2777', bg: '#fdf2f8', border: '#f472b6' },
  { name: 'Nacional Gás', color: '#2563eb', bg: '#eff6ff', border: '#93c5fd' },
  { name: 'Fogás', color: '#ca8a04', bg: '#fefce8', border: '#fde047' },
  { name: 'Revendas Multimarcas', color: '#f97316', bg: '#fff7ed', border: '#fed7aa' },
];

export const PROBLEM_SOLUTION = [
  {
    problem: "Perda constante de botijões vazios na rua e entregadores que não prestam contas",
    solution: "Rastreabilidade de cada vasilhame: você sabe exatamente quantos botijões cheios e vazios estão na portaria e com cada entregador.",
  },
  {
    problem: "Clientes comprando do concorrente porque você esquece de quando eles precisam de gás",
    solution: "Inteligência de Recompra: o sistema prevê a data exata do fim do gás e gera a lista para você enviar mensagem no WhatsApp antes do concorrente.",
  },
  {
    problem: "Pagando 15% a 25% de comissões absurdas em apps como Zé Delivery e iFood",
    solution: "Cardápio Digital Próprio com o link da sua revenda: o cliente pede pelo celular ou WhatsApp e 100% do lucro fica no seu bolso.",
  },
  {
    problem: "Linhas telefônicas congestionadas e atendentes demorando 3 minutos para anotar um pedido",
    solution: "Frente de Caixa (PDV) ultra-rápido: busca cliente pelo telefone, preenche o endereço e despacha para o entregador em menos de 10 segundos.",
  },
  {
    problem: "Fechamento de caixa que nunca bate entre dinheiro, PIX, maquininha e fiado",
    solution: "Fechamento cego e conferência por turno: o entregador acerta o valor exato no app e o sistema audita todas as transações.",
  },
];

export const SCREENS_DATA: ScreenDetail[] = [
  {
    id: 'dashboard',
    tag: 'Visão Estratégica',
    title: 'Dashboard Executivo & DRE em Tempo Real',
    subtitle: 'Tudo o que acontece na sua revenda em uma única tela, de qualquer lugar do mundo.',
    description: 'Monitore suas vendas minuto a minuto, acompanhe a meta do mês, veja o ticket médio por canal (portaria vs entrega) e saiba o faturamento líquido sem esperar o final do mês.',
    highlights: [
      'Contador de botijões vendidos hoje (P13, P20, P45, Água 20L)',
      'Gráficos dinâmicos de faturamento dos últimos 14 dias',
      'Termômetro da meta mensal da revenda com projeção',
      'Alerta imediato de estoque crítico de vasilhames cheios',
    ],
    kpis: [
      { label: 'Vendas Hoje', value: '142 botijões', hint: '+18% vs ontem' },
      { label: 'Faturamento Dia', value: 'R$ 15.620,00', hint: 'Meta 92% atingida' },
      { label: 'Tempo Médio Entrega', value: '23 minutos', hint: '7 min mais rápido' },
      { label: 'Estoque Cheio P13', value: '380 un', hint: 'Nível seguro' },
    ]
  },
  {
    id: 'pdv',
    tag: 'Frente de Caixa',
    title: 'PDV & Televendas Ultra-Rápido (10 Segundos)',
    subtitle: 'Atenda o telefone e despache o botijão antes mesmo do cliente desligar a ligação.',
    description: 'Projetado especificamente para a agilidade que a revenda de gás exige. Basta digitar o número do telefone ou nome: o endereço completo, o tipo de botijão de preferência e o tempo desde a última compra aparecem na tela instantaneamente.',
    highlights: [
      'Identificação rápida com histórico completo de compras',
      'Cálculo automático de troco e formas de pagamento mistas',
      'Despacho com 1 clique para o entregador mais próximo',
      'Impressão automática em bobina térmica (58mm e 80mm)',
    ],
    kpis: [
      { label: 'Tempo de Atendimento', value: '8.4 seg', hint: 'Recorde de velocidade' },
      { label: 'Erros de Endereço', value: '0%', hint: 'Validado com histórico' },
      { label: 'Despacho Direto', value: '1 Toque', hint: 'Cai no app do motoboy' },
      { label: 'Troco Calculado', value: 'Automático', hint: 'Sem erro de troco' },
    ]
  },
  {
    id: 'entregador',
    tag: 'Mobilidade Total',
    title: 'Aplicativo do Entregador com Rotas e Mapas',
    subtitle: 'Seus entregadores recebem os pedidos na rua com rota otimizada e acerto de vasilhame.',
    description: 'Chega de papelzinho molhado e confusão de endereços. O entregador abre o LMA Gás no celular, vê os pedidos atribuídos a ele, clica em "Abrir Rota" no Waze ou Google Maps e confirma a entrega com um toque.',
    highlights: [
      'Roteirização com 1 clique no Google Maps e Waze',
      'Botão direto para falar no WhatsApp com o cliente avisando da chegada',
      'Recebimento via PIX com QR Code dinâmico na tela do celular',
      'Controle rigoroso: baixa obrigatória do vasilhame vazio recolhido',
    ],
    kpis: [
      { label: 'Economia de Combustível', value: '25%', hint: 'Rotas inteligentes' },
      { label: 'Entregas por Hora', value: '+40%', hint: 'Mais entregas por moto' },
      { label: 'Prestação de Contas', value: '5 minutos', hint: 'No fim do expediente' },
      { label: 'Ligação de Cliente', value: '-80%', hint: 'Cliente sabe onde está' },
    ]
  },
  {
    id: 'cardapio',
    tag: 'Venda Direta',
    title: 'Cardápio Digital Próprio (Zero Comissões)',
    subtitle: 'Seu cliente pede pelo WhatsApp em 3 toques e você não paga 1 centavo de comissão.',
    description: 'Transforme o WhatsApp da sua revenda em uma máquina de vendas. Seus clientes acessam um cardápio moderno com as cores da sua distribuidora, escolhem o botijão P13 ou água mineral, digitam o endereço e o pedido cai pronto na sua tela.',
    highlights: [
      'Link personalizado exclusivo (ex: suarevenda.lmaapp.com.br)',
      'Identidade visual oficial da sua bandeira (Ultragaz, Liquigás, etc.)',
      'Sem intermediários: 100% do lucro da venda é seu',
      'Alerta sonoro alto no caixa a cada novo pedido recebido',
    ],
    kpis: [
      { label: 'Taxa de Comissão', value: '0%', hint: 'Economia total' },
      { label: 'Conversão de Pedidos', value: '74%', hint: 'Processo ultra-simples' },
      { label: 'Pedidos Fora do Horário', value: 'Automático', hint: 'Agendamento fácil' },
      { label: 'Satisfação do Cliente', value: '4.9★', hint: 'Sem filas no telefone' },
    ]
  },
  {
    id: 'vasilhames',
    tag: 'Segurança Patrimonial',
    title: 'Controle de Vasilhames, Cargas e Comodatos',
    subtitle: 'Cada botijão vale mais de R$ 200,00. Pare de perder seu patrimônio na rua.',
    description: 'Módulo exclusivo para gestão de botijões cheios, vazios, em manutenção e em comodato com clientes comerciais (restaurantes, pizzarias, padarias). Saiba exatamente com quem está cada botijão da sua revenda.',
    highlights: [
      'Balanço diário de cheios e vazios da portaria vs rua',
      'Emissão oficial de Contrato de Comodato em PDF',
      'Conferência de carga no carregamento e descarregamento das motos',
      'Registro histórico de descarte e manutenção de vasilhames',
    ],
    kpis: [
      { label: 'Extravio de Vasilhames', value: '0 perdas', hint: 'Controle total da praça' },
      { label: 'Patrimônio Protegido', value: '+R$ 80.000', hint: 'Vasilhames rastreados' },
      { label: 'Contratos em Comodato', value: '100% PDF', hint: 'Validade jurídica' },
      { label: 'Conferência de Carga', value: '2 minutos', hint: 'Entrada e saída rápida' },
    ]
  },
  {
    id: 'crm',
    tag: 'Fidelização Ativa',
    title: 'CRM Inteligente: Aviso de Gás Acabando',
    subtitle: 'O sistema calcula quando o gás vai acabar e avisa para você vender antes do concorrente.',
    description: 'Uma família de 4 pessoas consome um botijão P13 a cada 40 a 50 dias. O LMA Gás calcula a média individual de cada cliente e gera uma lista diária dos clientes que estão no momento de comprar novamente.',
    highlights: [
      'Cálculo automático do ciclo médio de consumo por residência ou comércio',
      'Disparo de mensagem personalizada no WhatsApp com 1 clique',
      'Histórico de pedidos favoritos, observações de entrega e endereço',
      'Recuperação automática de clientes inativos há mais de 60 dias',
    ],
    kpis: [
      { label: 'Retenção de Clientes', value: '+28%', hint: 'Clientes não trocam de marca' },
      { label: 'Vendas Proativas', value: '35 botijões/dia', hint: 'Sem depender do telefone tocar' },
      { label: 'Resgate de Inativos', value: '19%', hint: 'Voltaram a comprar' },
      { label: 'Fidelidade da Carteira', value: 'Alta', hint: 'Atendimento humanizado' },
    ]
  }
];

export const PLANS_DATA: PlanItem[] = [
  {
    id: 'start',
    name: 'Plano Portaria & Caixa',
    description: 'Ideal para revendas que desejam organizar o balcão, caixa e controle de vasilhames.',
    priceMonthly: 119,
    priceQuarterly: 99,
    features: [
      'PDV & Televendas de alta velocidade',
      'Controle de Estoque (P13, P20, P45 e Água)',
      'Controle de Vasilhames Cheios e Vazios',
      'Fechamento de Caixa Cego por Turno',
      'Cadastro ilimitado de Clientes e Produtos',
      'Impressão térmica em 58mm e 80mm',
      'Suporte humanizado via WhatsApp',
    ],
    ctaLabel: 'Começar Teste de 7 Dias'
  },
  {
    id: 'pro',
    name: 'Plano Delivery Pro',
    badge: 'MAIS ESCOLHIDO',
    highlighted: true,
    description: 'A solução completa: PDV, App do Entregador com mapas e Cardápio Digital próprio sem taxas.',
    priceMonthly: 197,
    priceQuarterly: 169,
    features: [
      'Tudo do Plano Portaria & Caixa',
      '🚀 Aplicativo do Entregador com GPS / Waze',
      '🍕 Cardápio Digital Próprio com link exclusivo',
      '📱 Notificações sonoras no caixa em tempo real',
      '🧠 CRM com Alerta de Gás Acabando (Recompra)',
      '📄 Emissão de Contratos de Comodato em PDF',
      '🗺️ Roteirização inteligente e acerto de vasilhames',
      '💵 Recebimento com PIX QR Code pelo celular do motoboy',
      '📊 DRE e Relatórios Financeiros completos',
      '⚡ Suporte VIP prioritário no WhatsApp',
    ],
    ctaLabel: 'Testar Plano Pro Grátis'
  },
  {
    id: 'enterprise',
    name: 'Plano Multi-Depósitos & Redes',
    badge: 'GRANDES OPERAÇÕES',
    description: 'Para redes de revendas com múltiplos depósitos, frota pesada e gestão centralizada.',
    priceMonthly: 349,
    priceQuarterly: 299,
    features: [
      'Tudo do Plano Delivery Pro',
      '🏢 Gestão de Múltiplos Depósitos / Filiais',
      '🚛 Controle de Caminhões de Carga e Romaneios',
      '👥 Usuários e entregadores ilimitados',
      '🔐 Níveis de permissão avançados por função',
      '📈 DRE consolidado de toda a rede',
      '⚙️ Integração com APIs e banco Supabase dedicado',
      '🤝 Gerente de conta exclusivo e treinamento da equipe',
    ],
    ctaLabel: 'Falar com Consultor'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    name: 'Roberto Antônio Silva',
    role: 'Proprietário',
    company: 'Bertoni Comércio de Gás',
    city: 'Franco da Rocha - SP',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=160&auto=format&fit=crop&q=80',
    bottlesPerMonth: '4.800 botijões/mês',
    highlight: 'Zero perdas de vasilhames e fechamento de caixa em 5 minutos.',
    quote: 'Antes do LMA Gás a gente perdia botijão direto com entregador na rua e o acerto no final da tarde demorava mais de uma hora. Hoje o entregador já chega com os vasilhames contados no app e o caixa fecha no centavo. Mudou nossa rotina.'
  },
  {
    name: 'Marcos Vinícius Andrade',
    role: 'Gerente Geral',
    company: 'Revenda Aliança Gás & Água',
    city: 'Belo Horizonte - MG',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=160&auto=format&fit=crop&q=80',
    bottlesPerMonth: '2.900 botijões/mês',
    highlight: 'Economizamos R$ 2.100 por mês só deixando de pagar taxas de apps.',
    quote: 'Colocamos o link do Cardápio Digital do LMA Gás no WhatsApp da revenda e no perfil do Google. Mais de 40% dos clientes pedem direto por lá. Não pagamos mais comissão de aplicativo e o cliente adora a rapidez.'
  },
  {
    name: 'Cláudia Regina Mendes',
    role: 'Sócia-Diretora',
    company: 'Super Gás Express',
    city: 'Campinas - SP',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=160&auto=format&fit=crop&q=80',
    bottlesPerMonth: '3.400 botijões/mês',
    highlight: 'O lembrete de gás acabando aumentou nossas vendas em 25%.',
    quote: 'Essa função de prever quando o gás do cliente vai acabar é ouro puro! Toda manhã a equipe manda mensagem pelo WhatsApp para quem está no prazo de reposição. O cliente agradece a atenção e não compra do concorrente.'
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    category: 'Geral',
    q: 'Como funciona o teste gratuito de 7 dias?',
    a: 'Você clica no botão "Testar Grátis", cria sua conta em menos de 1 minuto e já tem acesso total e ilimitado a todas as ferramentas do LMA Gás: PDV, App do Entregador, Cardápio Digital e Estoque. Não pedimos cartão de crédito para testar.'
  },
  {
    category: 'Equipamentos',
    q: 'Preciso comprar computadores caros ou aparelhos novos?',
    a: 'Não! O LMA Gás é 100% em nuvem e leve. Funciona em qualquer computador simples com internet (Windows, Mac ou Linux), tablets e notebooks. O aplicativo do entregador roda direto no smartphone Android ou iPhone de qualquer motoboy.'
  },
  {
    category: 'Entregadores',
    q: 'Como os meus entregadores usam o aplicativo?',
    a: 'O entregador não precisa baixar nada da Play Store nem ocupar a memória do celular. Você envia um link pelo WhatsApp, ele clica e o aplicativo já abre com os pedidos atribuídos a ele, rotas no Waze e opção de recebimento no PIX.'
  },
  {
    category: 'Cardápio Digital',
    q: 'O cardápio digital realmente não cobra comissão por pedido?',
    a: 'Zero comissão! Diferente de iFood ou Zé Delivery que cobram de 15% a 25% de cada venda que você faz, no LMA Gás o cardápio é 100% seu. Você paga apenas a assinatura fixa mensal do sistema e vende quanto quiser.'
  },
  {
    category: 'Impressoras',
    q: 'Funciona com a minha impressora térmica de bobina?',
    a: 'Sim! É compatível com qualquer impressora térmica padrão de 58mm ou 80mm (Bematech, Epson, Elgin, Daruma, POS, Bluetooth ou USB). A comanda sai formatada com os dados do cliente, endereço e produtos para o entregador levar.'
  },
  {
    category: 'Segurança',
    q: 'Meus dados e clientes estão seguros?',
    a: 'Totalmente. O LMA Gás utiliza infraestrutura corporativa na nuvem com banco de dados PostgreSQL / Supabase, criptografia de ponta a ponta e backups automáticos diários. Ninguém tem acesso aos seus dados a não ser você.'
  },
  {
    category: 'Cancelamento',
    q: 'Existe contrato de fidelidade ou multa se eu quiser cancelar?',
    a: 'Nenhuma fidelidade e nenhuma multa! Você só continua utilizando se o LMA Gás estiver trazendo mais lucro e organização para a sua revenda. Pode pausar ou cancelar a qualquer momento sem pegadinhas.'
  }
];