export interface ScreenItem {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
}

export const HERO_DATA = {
  badge: "Sistema Completo de Gestão em Nuvem",
  headline: "O software definitivo para organizar, vender e entregar gás e água mineral.",
  subheadline: "PDV rápido para balcão e delivery, aplicativo móvel com rotas para os entregadores, cardápio digital próprio sem pagar taxas de comissão e alerta de clientes sem comprar há mais de 60 dias.",
  bulletPoints: [
    "Teste grátis por 7 dias sem cartão",
    "Cardápio digital próprio sem taxa",
    "App do entregador com GPS (Waze/Maps)",
    "Funciona em qualquer PC, tablet ou celular",
  ],
};

export const DISTRIBUIDORAS = [
  { name: 'Ultragaz', color: '#ea580c', bg: '#fff7ed', border: '#fdba74' },
  { name: 'Liquigás', color: '#16a34a', bg: '#f0fdf4', border: '#86efac' },
  { name: 'Copagaz', color: '#7c3aed', bg: '#f5f3ff', border: '#c4b5fd' },
  { name: 'Supergasbras', color: '#0891b2', bg: '#ecfeff', border: '#67e8f9' },
  { name: 'Consigaz', color: '#db2777', bg: '#fdf2f8', border: '#f472b6' },
  { name: 'Nacional Gás', color: '#2563eb', bg: '#eff6ff', border: '#93c5fd' },
  { name: 'Fogás', color: '#ca8a04', bg: '#fefce8', border: '#fde047' },
  { name: 'Revendas Multimarcas', color: '#059669', bg: '#ecfdf5', border: '#a7f3d0' },
];

export const SCREENS: ScreenItem[] = [
  {
    id: 'dashboard',
    tag: 'Visão Geral',
    title: 'Dashboard em Tempo Real',
    subtitle: 'Faturamento diário, estoque e vendas dos últimos 14 dias em uma só tela.',
    description: 'Acompanhe as vendas do dia, entradas e saídas do caixa, contas a pagar vencidas, nível do estoque de cada botijão com alerta de reposição e gráfico de receita diária dos últimos 14 dias.',
    features: [
      'Cards de Vendas Hoje, Saldo do Caixa e Contas Vencidas',
      'Gráfico de receita diária dos últimos 14 dias',
      'Estoque de botijões (P13, P20, P45, Água 20L) com alerta de estoque mínimo',
      'Tabela com as últimas vendas realizadas no balcão e delivery',
      'Ranking dos produtos mais vendidos nos últimos 30 dias',
    ],
  },
  {
    id: 'nova-venda',
    tag: 'Frente de Caixa (PDV)',
    title: 'Nova Venda (Balcão e Entrega)',
    subtitle: 'Lançamento ágil de vendas em poucos cliques para não perder tempo no telefone.',
    description: 'Desenvolvido para atender clientes com máxima velocidade. Selecione entre Retirada no Balcão ou Para Entrega, escolha o cliente da base ou cadastre na hora, adicione os produtos e defina a forma de pagamento.',
    features: [
      'Alternador rápido: Balcão ou Para Entrega',
      'Busca rápida de cliente cadastrado ou cadastro inline de novo cliente',
      'Produtos em cards com saldo de estoque atual e alertas',
      'Formas de pagamento com botões: Dinheiro, Pix, Débito, Crédito, QR Code e Fiado',
      'Atribuição da venda para o entregador da equipe',
      'Impressão de comprovante térmico para entrega',
    ],
  },
  {
    id: 'entregas',
    tag: 'Operação de Rua',
    title: 'Painel de Entregas & Rastreio',
    subtitle: 'Organize suas saídas com status em tempo real e rotas no GPS.',
    description: 'Acompanhe todas as entregas do dia divididas em abas: Pendentes, Em Rota e Entregues. Cada cartão traz o nome do cliente, telefone, endereço com bairro, produtos do pedido, valor total e entregador.',
    features: [
      'Abas organizadas: Pendentes, Em Rota e Entregues',
      'Botão "Abrir Rota" integrado diretamente com Waze e Google Maps',
      'Avanço de status com um clique (Despachar para rota / Concluir entrega)',
      'Horários registrados: horário de criação, saída e entrega concluída',
      'Gestão de entregadores com código de ativação individual',
    ],
  },
  {
    id: 'clientes',
    tag: 'Resgate de Clientes',
    title: 'Clientes & Alerta de Inativos (+60 e +90 dias)',
    subtitle: 'Saiba quais clientes pararam de comprar e chame no WhatsApp antes da concorrência.',
    description: 'O LMA Gás categoriza sua carteira de clientes com base na data da última compra. Com os filtros rápidos de +60 dias e +90 dias sem comprar, você identifica os clientes que estão sumidos e entra em contato direto pelo WhatsApp.',
    features: [
      'Filtro rápido: Todos os clientes, +60 dias sem comprar e +90 dias sem comprar',
      'Badges coloridos de tempo desde a última compra (verde até 30d, amarelo até 60d, vermelho +60d)',
      'Link direto para abrir o WhatsApp do cliente com um clique',
      'Histórico completo de pedidos e endereço cadastrado',
      'Busca instantânea por nome, telefone, bairro ou endereço',
    ],
  },
  {
    id: 'cardapio',
    tag: 'Venda Online',
    title: 'Cardápio Digital sem Taxas',
    subtitle: 'Seu próprio link de pedidos online sem pagar comissão para o iFood ou Zé Delivery.',
    description: 'Tenha uma página online profissional com o nome e as cores da sua revenda para divulgar no WhatsApp e no Google. O cliente escolhe o botijão ou água, informa o endereço e o pedido cai na sua tela de Pedidos Online com alerta sonoro.',
    features: [
      'Link próprio e exclusivo para sua revenda divulgar',
      'Zero comissão sobre vendas (100% do valor do pedido fica com você)',
      'Visual adaptado com a logomarca da sua distribuidora (Ultragaz, Liquigás, etc.)',
      'Notificação sonora no computador a cada novo pedido recebido',
      'O cliente pede pelo celular ou computador sem precisar instalar nada',
    ],
  },
  {
    id: 'caixa',
    tag: 'Financeiro',
    title: 'Caixa & Fechamento Cego',
    subtitle: 'Controle rigoroso de entradas, saídas, sangrias e conferência de turno.',
    description: 'Registre todas as movimentações financeiras da revenda. No final do expediente, realize o Fechamento de Caixa Cego: o operador informa os valores em dinheiro, Pix e cartões, e o sistema confere automaticamente.',
    features: [
      'Lançamento de suprimentos e sangrias no caixa',
      'Fechamento Cego de Turno com conferência de sobra/falta por forma de pagamento',
      'Filtro de extrato por período (data inicial e final)',
      'Contas a pagar com controle de vencimentos',
      'Exportação de extratos e comprovantes',
    ],
  },
];

export const ENTREGADOR_FEATURES = [
  {
    title: 'Sem instalar app pesado na Play Store',
    desc: 'O entregador acessa um link leve pelo navegador do celular e ativa com o código fornecido pelo administrador da revenda.',
  },
  {
    title: 'Roteirização com Waze e Google Maps',
    desc: 'Basta clicar no botão de rota do pedido para abrir o melhor caminho no GPS, economizando tempo e gasolina da moto.',
  },
  {
    title: 'Atualização de status em um toque',
    desc: 'O entregador marca quando saiu para a entrega e confirma quando concluiu, atualizando o painel da revenda em tempo real.',
  },
  {
    title: 'Relatório do dia e comissão',
    desc: 'O entregador visualiza quantas entregas realizou no dia e o valor total acumulado de comissão.',
  },
];

export const CARDAPIO_FEATURES = [
  {
    title: 'Zero taxas de intermediação',
    desc: 'Diferente dos aplicativos de entrega que cobram de 15% a 25% de comissão por botijão vendido, no LMA Gás você não paga taxa por pedido.',
  },
  {
    title: 'Pedido direto com som no computador',
    desc: 'Assim que o cliente confirma o pedido pelo cardápio, toca um sinal sonoro no caixa para o atendente despachar na hora.',
  },
  {
    title: 'Compatível com WhatsApp e Google Meu Negócio',
    desc: 'Coloque o link do seu cardápio no recado automático do WhatsApp da revenda e no perfil do Google para receber pedidos 24h.',
  },
  {
    title: 'Design adaptado para a sua bandeira',
    desc: 'Seu cardápio exibe as cores e identidade visual da distribuidora autorizada que você representa.',
  },
];

export const PLANS = [
  {
    id: 'starter',
    name: 'Plano Básico',
    desc: 'Para pequenas revendas que precisam organizar caixa, vendas de balcão e estoque.',
    priceMonthly: 97,
    priceQuarterly: 85,
    features: [
      'Frente de Caixa (PDV) rápido',
      'Controle de Estoque com alerta de mínimo',
      'Cadastro de Clientes e Histórico',
      'Fechamento de Caixa e Movimentações',
      'Impressão térmica de comprovantes',
      'Suporte via WhatsApp',
    ],
  },
  {
    id: 'pro',
    name: 'Plano Profissional',
    badge: 'MAIS ESCOLHIDO',
    highlighted: true,
    desc: 'A solução completa com gestão de entregas, app do motoboy e cardápio digital próprio.',
    priceMonthly: 167,
    priceQuarterly: 147,
    features: [
      'Tudo do Plano Básico',
      '🛵 Aplicativo do Entregador com rotas no Waze/Maps',
      '🍕 Cardápio Digital próprio sem comissão por pedido',
      '📱 Alerta sonoro no computador para novos pedidos online',
      '⚠️ Filtro de Clientes Inativos (+60 e +90 dias sem comprar)',
      '📊 Relatórios gerenciais e exportação para Excel',
      '👥 Entregadores e usuários ilimitados',
      '⚡ Suporte prioritário via WhatsApp',
    ],
  },
  {
    id: 'multi',
    name: 'Plano Multi-Empresas',
    desc: 'Para proprietários com múltiplos depósitos de gás e filiais.',
    priceMonthly: 280,
    priceQuarterly: 245,
    features: [
      'Tudo do Plano Profissional',
      'Gestão de múltiplos depósitos e filiais no mesmo acesso',
      'Transferência de estoque entre unidades',
      'Relatórios consolidados de faturamento',
      'Acompanhamento gerencial centralizado',
      'Treinamento individual da equipe',
    ],
  },
];

export const FAQS = [
  {
    q: 'Como funciona o teste grátis de 7 dias?',
    a: 'Você preenche o formulário de cadastro, cria sua conta e tem 7 dias para testar todas as funcionalidades do sistema na sua revenda, sem precisar cadastrar cartão de crédito.',
  },
  {
    q: 'O que é o alerta de clientes inativos?',
    a: 'O LMA Gás analisa o histórico de compras e disponibiliza filtros rápidos de clientes que não compram há mais de 60 dias ou mais de 90 dias. Você clica em um botão e já abre o WhatsApp do cliente para fazer o contato e reconquistar a venda.',
  },
  {
    q: 'Como os entregadores acessam o aplicativo?',
    a: 'O aplicativo do entregador é um Web App (PWA). Você cadastra o entregador no painel, gera um código de ativação de 6 dígitos e ele digita no celular dele. O app abre direto no navegador sem ocupar espaço na memória.',
  },
  {
    q: 'O cardápio digital cobra comissão por pedido vendido?',
    a: 'Não cobra comissão! Diferente de apps como iFood e Zé Delivery que cobram porcentagens altas sobre cada venda, o cardápio do LMA Gás está incluído na assinatura mensal sem cobrança por pedido.',
  },
  {
    q: 'Funciona com a minha impressora térmica?',
    a: 'Sim, o LMA Gás gera comprovantes de venda formatados para impressoras térmicas padrão de 58mm e 80mm com os dados do cliente, endereço, itens e valor.',
  },
  {
    q: 'Preciso instalar algum programa no computador?',
    a: 'Não. O LMA Gás é 100% em nuvem e funciona direto no navegador (Chrome, Edge, Firefox, Safari) em computadores, notebooks, tablets e celulares.',
  },
];