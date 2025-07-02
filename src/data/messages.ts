import { Message } from "@/types/message";

export const messages_bot: Message[] = [
  {
    id: 0,
    message:
      "Olá! Eu sou a Sofia, consultora digital da Dolado. Estou aqui para ajudar sua empresa a vender mais nos marketplaces. Vamos conversar?",
    type: "welcome IA",
    options: [],
    selectedOptions: false,
    personality: "Consultiva, acolhedora, confiante mas não pressiona",
    sender: "bot",
  },
  {
    id: 1,
    message:
      "Oi! Sou a Sofia, consultora digital da Dolado. Sei que vendas online podem parecer complexas, mas vou te mostrar como sua empresa pode crescer nos marketplaces em 5 minutos. Podemos começar?",
    type: "welcome",
    options: [
      { text: "Claro, vamos lá!", idNextMessage: 2 },
      { text: "Primeiro quero entender melhor", idNextMessage: 3 },
    ],
    selectedOptions: false,
    personality: "Consultiva, acolhedora, confiante mas não pressiona",
    sender: "bot",
  },
  {
    id: 2,
    message:
      "Perfeito! Para te ajudar melhor, qual o tipo de operação da sua empresa?",
    type: "qualification",
    options: [
      { text: "Indústria/Fabricante", idNextMessage: 4 },
      { text: "Distribuidor atacadista", idNextMessage: 5 },
      { text: "Operação mista (fabricamos e distribuímos)", idNextMessage: 5 },
      { text: "Grupo empresarial", idNextMessage: 5 },
    ],
    selectedOptions: false,
    personality: "Consultiva, acolhedora, confiante mas não pressiona",
    sender: "bot",
  },
  {
    id: 3,
    message:
      "Legal! E qual o porte da sua operação em termos de faturamento anual?",
    type: "text",
    options: [
      { text: "Média empresa (R$ 10-50mi)", idNextMessage: 6 },
      { text: "Grande empresa (R$ 50-200mi)", idNextMessage: 7 },
      { text: "Corporação (R$ 200mi+)", idNextMessage: 8 },
      { text: "Grupo/Holding", idNextMessage: 5 },
    ],
    selectedOptions: false,
    personality: "Consultiva, acolhedora, confiante mas não pressiona",
    sender: "bot",
  },
  {
    id: 4,
    message:
      "Entendi! Como vocês enxergam os marketplaces? Sei que indústrias podem ter receios sobre canibalização de canais tradicionais.",
    type: "text",
    options: [
      { text: "Oportunidade adicional", idNextMessage: 9 },
      { text: "Ainda avaliando", idNextMessage: 5 },
      { text: "Concorrentes já estão lá", idNextMessage: 5 },
      { text: "Precisamos reagir", idNextMessage: 5 },
    ],
    selectedOptions: false,
    personality: "Consultiva, acolhedora, confiante mas não pressiona",
    sender: "bot",
  },
  {
    id: 5,
    message:
      "Faz sentido! Se fossem testar, qual canal seria mais estratégico para o porte de vocês?",
    type: "text",
    options: [
      { text: "Mercado Livre (maior alcance)", idNextMessage: 11 },
      { text: "Amazon (perfil premium)", idNextMessage: 12 },
      { text: "Shopee (crescimento rápido)", idNextMessage: 13 },
      { text: "Marketplaces B2B", idNextMessage: 4 },
      { text: "Marketplace próprio", idNextMessage: 5 },
    ],
    selectedOptions: false,
    personality: "Consultiva, acolhedora, confiante mas não pressiona",
    sender: "bot",
  },
  {
    id: 6,
    message:
      "Perfeito! Com o volume de vocês, imagino um catálogo robusto. Quantas SKUs vocês gerenciam?",
    type: "text",
    options: [
      { text: "Até 500 SKUs", idNextMessage: 11 },
      { text: "500-2000 SKUs", idNextMessage: 14 },
      { text: "Mais de 2000 SKUs", idNextMessage: 15 },
      { text: "Múltiplas categorias/divisões", idNextMessage: 5 },
    ],
    selectedOptions: false,
    personality: "Consultiva, acolhedora, confiante mas não pressiona",
    sender: "bot",
  },
  {
    id: 7,
    message: "Qual o segmento principal do seu negócio?",
    type: "text",
    options: [
      { text: "Bens de consumo duráveis", idNextMessage: 11 },
      { text: "Componentes/Insumos industriais", idNextMessage: 12 },
      { text: "Produtos de marca própria", idNextMessage: 9 },
      { text: "Linha completa multi-categoria", idNextMessage: 5 },
      { text: "B2B especializado", idNextMessage: 8 },
    ],
    selectedOptions: false,
    personality: "Consultiva, acolhedora, confiante mas não pressiona",
    sender: "bot",
  },
  {
    id: 8,
    message:
      "Seus produtos têm potencial online! Como vocês gerenciam a operação hoje? Usam ERP, WMS, integração?",
    type: "text",
    options: [
      { text: "ERP robusto (SAP, Oracle, etc)", idNextMessage: 16 },
      { text: "Sistema próprio estruturado", idNextMessage: 11 },
      { text: "Mix de sistemas integrados", idNextMessage: 9 },
      { text: "Operação ainda manual em partes", idNextMessage: 5 },
    ],
    selectedOptions: false,
    personality: "Consultiva, acolhedora, confiante mas não pressiona",
    sender: "bot",
  },
  {
    id: 9,
    message: "E em marketing/branding digital, como vocês se posicionam?",
    type: "text",
    options: [
      { text: "Marca consolidada offline, zero digital", idNextMessage: 17 },
      { text: "Presença básica (site institucional)", idNextMessage: 18 },
      { text: "Marketing B2B estruturado", idNextMessage: 10 },
      { text: "Estratégia digital em desenvolvimento", idNextMessage: 4 },
      { text: "Focamos no relacionamento direto", idNextMessage: 5 },
    ],
    selectedOptions: false,
    personality: "Consultiva, acolhedora, confiante mas não pressiona",
    sender: "bot",
  },
  {
    id: 11,
    message:
      "Ótimo! Vocês já têm uma meta de vendas para os marketplaces ou querem mais aprender e testar?",
    type: "text",
    options: [
      { text: "Buscar X de faturamento", idNextMessage: 19 },
      { text: "Testar o canal primeiro", idNextMessage: 20 },
      { text: "Ainda não definimos metas", idNextMessage: 20 },
      { text: "Crescer nossa marca online", idNextMessage: 20 },
    ],
    selectedOptions: false,
    personality: "Consultiva, acolhedora, confiante mas não pressiona",
    sender: "bot",
  },
  {
    id: 12,
    message:
      "Entendi! Para o perfil premium, a diferenciação é chave. Já pensaram em como se destacar na Amazon, por exemplo?",
    type: "text",
    options: [
      { text: "Sim, temos diferenciais claros", idNextMessage: 19 },
      { text: "Ainda estamos explorando", idNextMessage: 20 },
      { text: "Precisamos de ajuda nessa definição", idNextMessage: 20 },
    ],
    selectedOptions: false,
    personality: "Consultiva, acolhedora, confiante mas não pressiona",
    sender: "bot",
  },
  {
    id: 13,
    message:
      "Com a Shopee, agilidade e volume são cruciais. Têm estrutura para lidar com alto volume de pedidos e logística rápida?",
    type: "text",
    options: [
      { text: "Sim, estamos preparados", idNextMessage: 19 },
      { text: "Temos capacidade, mas precisamos otimizar", idNextMessage: 20 },
      { text: "Ainda avaliando a logística", idNextMessage: 20 },
    ],
    selectedOptions: false,
    personality: "Consultiva, acolhedora, confiante mas não pressiona",
    sender: "bot",
  },
  {
    id: 14,
    message:
      "Portfólio amplo é uma vantagem! Para gerenciar eficientemente nos marketplaces, já usam algum integrador ou hub?",
    type: "text",
    options: [
      { text: "Sim, já usamos", idNextMessage: 16 },
      { text: "Ainda não, mas estamos buscando", idNextMessage: 19 },
      { text: "Fazemos manualmente", idNextMessage: 20 },
    ],
    selectedOptions: false,
    personality: "Consultiva, acolhedora, confiante mas não pressiona",
    sender: "bot",
  },
  {
    id: 15,
    message:
      "Mega catálogo exige automação robusta. Vocês já têm um sistema que centraliza estoque e pedidos para todos os canais?",
    type: "text",
    options: [
      { text: "Sim, nosso sistema é integrado", idNextMessage: 16 },
      { text: "Estamos buscando uma solução", idNextMessage: 19 },
      { text: "Ainda é um desafio", idNextMessage: 20 },
    ],
    selectedOptions: false,
    personality: "Consultiva, acolhedora, confiante mas não pressiona",
    sender: "bot",
  },
  {
    id: 16,
    message:
      "Excelente! Um ERP robusto é ideal para integração. Vocês têm uma equipe dedicada ao e-commerce ou a venda online é parte de outras áreas?",
    type: "text",
    options: [
      { text: "Temos equipe dedicada", idNextMessage: 19 },
      { text: "Gerenciado por outras áreas", idNextMessage: 20 },
      { text: "Montando a equipe agora", idNextMessage: 20 },
    ],
    selectedOptions: false,
    personality: "Consultiva, acolhedora, confiante mas não pressiona",
    sender: "bot",
  },
  {
    id: 17,
    message:
      "Com marca consolidada offline, o digital é expansão natural. Pensaram em como traduzir esse reconhecimento para o online?",
    type: "text",
    options: [
      { text: "Sim, temos algumas ideias", idNextMessage: 19 },
      { text: "Ainda não, precisamos de direcionamento", idNextMessage: 20 },
      { text: "Focamos mais em vendas diretas", idNextMessage: 20 },
    ],
    selectedOptions: false,
    personality: "Consultiva, acolhedora, confiante mas não pressiona",
    sender: "bot",
  },
  {
    id: 18,
    message:
      "Site institucional é bom começo! Para alavancar nos marketplaces, consideram investir em marketing digital (anúncios, SEO)?",
    type: "text",
    options: [
      { text: "Sim, temos budget", idNextMessage: 19 },
      { text: "Ainda não, mas consideramos", idNextMessage: 20 },
      { text: "Nosso foco é orgânico", idNextMessage: 20 },
    ],
    selectedOptions: false,
    personality: "Consultiva, acolhedora, confiante mas não pressiona",
    sender: "bot",
  },
  {
    id: 19,
    message:
      "Excelente! Vocês têm grande potencial nos marketplaces. Sugiro uma conversa aprofundada para traçarmos um plano personalizado. Que tal semana que vem?",
    type: "text",
    options: [
      { text: "Sim, quero agendar!", idNextMessage: 21 },
      { text: "Preciso de mais infos", idNextMessage: 22 },
      { text: "Vou pensar e retorno", idNextMessage: 23 },
    ],
    selectedOptions: false,
    personality: "Consultiva, acolhedora, confiante mas não pressiona",
    sender: "bot",
  },
  {
    id: 20,
    message:
      "Entendi! Para te ajudar melhor, convido para um bate-papo sem compromisso. Podemos explorar suas necessidades e mostrar como a Dolado pode impulsionar suas vendas nos marketplaces. Que tal agendarmos?",
    type: "text",
    options: [
      { text: "Sim, vamos agendar!", idNextMessage: 21 },
      { text: "Saber mais sobre a Dolado", idNextMessage: 22 },
      { text: "Vou pensar e retorno", idNextMessage: 23 },
    ],
    selectedOptions: false,
    personality: "Consultiva, acolhedora, confiante mas não pressiona",
    sender: "bot",
  },
  {
    id: 21,
    message:
      "Perfeito! Qual o melhor dia, horário, seu nome e telefone para confirmarmos?",
    type: "text",
    options: [],
    selectedOptions: false,
    personality: "Consultiva, acolhedora, confiante mas não pressiona",
    sender: "bot",
  },
  {
    id: 22,
    message:
      "Claro! A Dolado ajuda indústrias e distribuidores a venderem mais nos marketplaces. Oferecemos consultoria estratégica e gestão completa. Nossos pilares: **Estratégia**, **Gestão de anúncios**, **Integração/Automação** e **Análise de dados**. Quer detalhar algum?",
    type: "text",
    options: [
      { text: "Estratégia", idNextMessage: 24 },
      { text: "Gestão de anúncios", idNextMessage: 25 },
      { text: "Agendar conversa!", idNextMessage: 21 },
    ],
    selectedOptions: false,
    personality: "Consultiva, acolhedora, confiante mas não pressiona",
    sender: "bot",
  },
  {
    id: 23,
    message:
      "Sem problemas! Fico à disposição. O mercado online evolui rápido, e as oportunidades são vastas. Quando estiver pronto, estarei aqui para ajudar!",
    type: "text",
    options: [],
    selectedOptions: false,
    personality: "Consultiva, acolhedora, confiante mas não pressiona",
    sender: "bot",
  },
  {
    id: 24,
    message:
      "Nossa **estratégia de precificação e sortimento** usa dados de mercado. Definimos preços ideais e produtos certos para cada marketplace, monitorando a concorrência em tempo real. Tudo para maximizar seus lucros.",
    type: "text",
    options: [
      { text: "E gestão de anúncios?", idNextMessage: 25 },
      { text: "Como funciona a integração?", idNextMessage: 26 },
      { text: "Agendar conversa!", idNextMessage: 21 },
    ],
    selectedOptions: false,
    personality: "Consultiva, acolhedora, confiante mas não pressiona",
    sender: "bot",
  },
  {
    id: 25,
    message:
      "A **gestão de anúncios e campanhas** da Dolado otimiza sua visibilidade. Criamos e gerenciamos campanhas de performance com SEO e mídia paga, garantindo que seus produtos sejam encontrados pelos clientes certos. Aumentamos suas vendas e ROI.",
    type: "text",
    options: [
      { text: "Como funciona a integração?", idNextMessage: 26 },
      { text: "E a análise de dados?", idNextMessage: 27 },
      { text: "Agendar conversa!", idNextMessage: 21 },
    ],
    selectedOptions: false,
    personality: "Consultiva, acolhedora, confiante mas não pressiona",
    sender: "bot",
  },
  {
    id: 26,
    message:
      "Nossa **integração e automação de processos** garantem eficiência. Conectamos seu sistema (ERP, WMS) aos marketplaces, automatizando estoque, preços, pedidos e envios. Menos erros, mais tempo, produtos sempre atualizados.",
    type: "text",
    options: [
      { text: "E a análise de dados?", idNextMessage: 27 },
      { text: "Agendar conversa!", idNextMessage: 21 },
    ],
    selectedOptions: false,
    personality: "Consultiva, acolhedora, confiante mas não pressiona",
    sender: "bot",
  },
  {
    id: 27,
    message:
      "A **análise de dados e otimização contínua** garantem resultados. Monitoramos seu desempenho nos marketplaces, identificando melhorias e ajustando a estratégia em tempo real. Relatórios detalhados e insights para decisões inteligentes.",
    type: "text",
    options: [
      { text: "Agendar conversa!", idNextMessage: 21 },
      { text: "Voltando aos pilares...", idNextMessage: 22 },
    ],
    selectedOptions: false,
    personality: "Consultiva, acolhedora, confiante mas não pressiona",
    sender: "bot",
  },
];
