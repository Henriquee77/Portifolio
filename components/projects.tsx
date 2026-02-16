"use client"

import { useState } from "react"
import { ExternalLink, Workflow, Code2, Gamepad2, Star, ShoppingCart, Bot, CalendarCheck, CalendarX, Clock, Brain, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

type ProjectCategory = "all" | "automation" | "software"

/* ── Featured Project (Barbearia) ── */
const featuredProject = {
  category: "automation" as const,
  title: "ChatBot Inteligente para Barbearia",
  subtitle: "Meu projeto mais complexo e completo",
  problem:
    "Barbearia precisava de um atendimento 100% automatizado via WhatsApp que fosse humanizado, cobrisse agendamentos, cancelamentos, reagendamentos, feriados e fidelização de clientes.",
  solution:
    "Chatbot com IA avançada que simula atendimento humano real. O bot identifica o nome do cliente automaticamente sem precisar perguntar, entende qualquer tipo de linguagem informal ou modo de fala, e conduz toda a conversa de forma educada e natural.",
  technologies: [
    "n8n",
    "WhatsApp API",
    "OpenAI GPT-4",
    "Supabase",
    "Langchain",
    "Meta API",
  ],
  result:
    "Atendimento 24/7 totalmente humanizado, com zero intervenção humana para agendamentos, cancelamentos e fidelização de clientes.",
  features: [
    {
      icon: CalendarCheck,
      label: "Agendamento inteligente",
      desc: "Agenda cortes entendendo linguagem natural como 'hoje as 20h' ou 'amanha de tarde'",
    },
    {
      icon: CalendarX,
      label: "Cancelamento e reagendamento",
      desc: "Cancela ou edita agendamentos quando o cliente tem imprevistos, de forma simples e rapida",
    },
    {
      icon: Brain,
      label: "Identifica o cliente automaticamente",
      desc: "Reconhece o nome do cliente sem ele precisar enviar, usando dados do contato",
    },
    {
      icon: MessageSquare,
      label: "Entende qualquer forma de falar",
      desc: "Compreende girias, abreviacoes e linguagem informal do dia a dia",
    },
    {
      icon: Clock,
      label: "Lembrete de retorno",
      desc: "Calcula a frequencia de visitas e envia mensagem dizendo que esta na hora de voltar",
    },
    {
      icon: Bot,
      label: "Controle de feriados",
      desc: "Reconhece feriados e dias de folga, avisa o cliente e nao agenda nesses dias",
    },
  ],
}

/* ── Other Projects ── */
const projects = [
  {
    category: "automation",
    title: "LUE - E-commerce por WhatsApp",
    problem: "Vendedores precisavam de uma forma de vender produtos diretamente pelo WhatsApp sem precisar de um site.",
    solution: "Bot de vendas completo onde o cliente navega pelo catalogo de camisas, o bot exibe todos os produtos disponiveis, adiciona ao carrinho e finaliza a compra inteira por IA, tudo dentro do WhatsApp.",
    technologies: ["n8n", "WhatsApp API", "OpenAI GPT-4", "Supabase", "Meta API"],
    result: "Loja virtual completa dentro do WhatsApp com catalogo, carrinho de compras e finalizacao de pedido 100% automatizada por IA.",
    icon: ShoppingCart,
  },
  {
    category: "automation",
    title: "ChatBot Financeiro Pessoal",
    problem: "Usuarios precisavam de uma forma simples de controlar financas pelo WhatsApp.",
    solution: "Assistente financeiro via WhatsApp com IA que registra transacoes, categoriza despesas, analisa comprovantes via imagem e gera relatorios.",
    technologies: ["n8n", "WhatsApp API", "OpenAI GPT-4", "Supabase", "Vision API"],
    result: "Controle financeiro completo com analise de imagens de comprovantes e relatorios automaticos por periodo.",
    icon: Workflow,
  },
  {
    category: "automation",
    title: "Sistema Anti-Golpe com Multi-IA",
    problem: "Pessoas precisam verificar se ofertas e mensagens sao golpes antes de cair em fraudes.",
    solution: "Sistema que consulta multiplas IAs (GPT-4, Grok, Claude) em paralelo para analise forense de possiveis golpes com consolidacao de resultados.",
    technologies: ["n8n", "OpenAI", "OpenRouter", "Multi-Agent", "API REST"],
    result: "Analise consolidada de multiplas perspectivas de IA com probabilidade de golpe e recomendacoes de seguranca.",
    icon: Workflow,
  },
  {
    category: "automation",
    title: "ChatBot Coleta de Leads em Eventos",
    problem: "Consultores em eventos presenciais precisavam registrar leads de forma rapida e organizada.",
    solution: "Bot WhatsApp que extrai nome, telefone e assunto das mensagens, transcreve audios, analisa imagens e salva tudo em planilha automaticamente.",
    technologies: ["n8n", "WhatsApp API", "OpenAI Whisper", "Google Sheets", "Vision API"],
    result: "Coleta automatizada de leads com suporte a texto, audio e imagem, integrado ao Google Sheets.",
    icon: Workflow,
  },
  {
    category: "automation",
    title: "Bot Analise de Sentimento Twitter",
    problem: "Necessidade de monitorar sentimento do publico sobre temas especificos nas redes sociais.",
    solution: "Bot que recebe um tema via WhatsApp, busca tweets recentes na API do Twitter e classifica o sentimento usando IA.",
    technologies: ["n8n", "Twitter API", "WhatsApp API", "OpenAI", "Google Sheets"],
    result: "Analise de sentimento automatizada com classificacao e armazenamento para acompanhamento de tendencias.",
    icon: Workflow,
  },
  {
    category: "software",
    title: "Marketplace em Django",
    problem: "Necessidade de plataforma para conectar vendedores e compradores.",
    solution: "Aplicação web completa com sistema de cadastro, busca, carrinho e pagamentos.",
    technologies: ["Python", "Django", "PostgreSQL", "HTML/CSS"],
    result: "Plataforma funcional com autenticação e gestão de produtos.",
    icon: Code2,
  },
  {
    category: "software",
    title: "Calculadora de Investimentos",
    problem: "Dificuldade em visualizar o crescimento de investimentos ao longo do tempo.",
    solution: "Aplicação que calcula juros compostos, compara cenários e gera gráficos interativos.",
    technologies: ["Python", "JavaScript", "Chart.js"],
    result: "Ferramenta educativa para planejamento financeiro pessoal.",
    icon: Code2,
  },
  {
    category: "software",
    title: "Calculadora de Imposto de Renda",
    problem: "Complexidade no cálculo de IR para diferentes faixas salariais.",
    solution: "Sistema que aplica automaticamente as alíquotas corretas e deduções legais.",
    technologies: ["Python", "Django", "JavaScript"],
    result: "Cálculo preciso e rápido para diferentes perfis de contribuintes.",
    icon: Code2,
  },
  {
    category: "software",
    title: "Jogo 2D com Flame",
    problem: "Projeto acadêmico para aprender desenvolvimento de jogos mobile.",
    solution: "Jogo 2D completo com física, animações e sistema de pontuação.",
    technologies: ["Dart", "Flutter", "Flame Engine"],
    result: "Domínio de conceitos de game development e programação orientada a objetos.",
    icon: Gamepad2,
  },
]

const filters: { label: string; value: ProjectCategory }[] = [
  { label: "Todos", value: "all" },
  { label: "Automações n8n", value: "automation" },
  { label: "Software", value: "software" },
]

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all")

  const filteredProjects = projects.filter(
    (project) => activeFilter === "all" || project.category === activeFilter
  )

  return (
    <section id="projetos" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm font-mono text-primary mb-4 tracking-wider uppercase">
            Projetos
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Soluções que geram resultados reais
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Cada projeto representa um problema real resolvido com tecnologia. 
            De automações empresariais a aplicações completas de software.
          </p>

          {/* ── Featured: Barbearia Bot ── */}
          {(activeFilter === "all" || activeFilter === "automation") && (
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-6">
                <Star className="h-5 w-5 text-primary fill-primary" />
                <span className="text-sm font-medium text-primary uppercase tracking-wider">
                  Projeto em destaque
                </span>
              </div>
              <article className="bg-card border-2 border-primary/40 rounded-xl overflow-hidden">
                <div className="p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-primary/10 rounded-xl shrink-0">
                      <Bot className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold text-foreground">
                        {featuredProject.title}
                      </h4>
                      <p className="text-sm text-primary font-medium mt-1">
                        {featuredProject.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 text-sm mb-8">
                    <div>
                      <span className="font-semibold text-foreground">Problema: </span>
                      <span className="text-muted-foreground leading-relaxed">
                        {featuredProject.problem}
                      </span>
                    </div>
                    <div>
                      <span className="font-semibold text-foreground">Solucao: </span>
                      <span className="text-muted-foreground leading-relaxed">
                        {featuredProject.solution}
                      </span>
                    </div>
                    <div>
                      <span className="font-semibold text-primary">Resultado: </span>
                      <span className="text-muted-foreground leading-relaxed">
                        {featuredProject.result}
                      </span>
                    </div>
                  </div>

                  {/* Features Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    {featuredProject.features.map((feat) => (
                      <div
                        key={feat.label}
                        className="flex items-start gap-3 p-4 bg-secondary/40 rounded-lg border border-border"
                      >
                        <div className="p-1.5 bg-primary/10 rounded-md shrink-0 mt-0.5">
                          <feat.icon className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">
                            {feat.label}
                          </p>
                          <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                            {feat.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                    {featuredProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs bg-primary/10 text-primary rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          )}

          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-10">
            {filters.map((filter) => (
              <Button
                key={filter.value}
                variant={activeFilter === filter.value ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(filter.value)}
              >
                {filter.label}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project, index) => (
              <article
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <project.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h4>
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">
                        {project.category === "automation" ? "Automacao" : "Software"}
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium text-foreground">Problema: </span>
                    <span className="text-muted-foreground">{project.problem}</span>
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Solucao: </span>
                    <span className="text-muted-foreground">{project.solution}</span>
                  </div>
                  <div>
                    <span className="font-medium text-primary">Resultado: </span>
                    <span className="text-muted-foreground">{project.result}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
