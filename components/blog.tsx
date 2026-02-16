import { ArrowRight, Clock, Tag, MessageCircle, Briefcase, Lightbulb, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const experiences = [
  {
    icon: Briefcase,
    title: "Minha Experiência na Fábrica de Software",
    content:
      "Durante 6 meses atuei como Desenvolvedor de Automações e Software em uma fábrica de software, onde tive contato direto com projetos reais de empresas. Foi ali que entendi como funciona o ciclo de vida de um projeto de verdade: desde o levantamento de requisitos com o cliente até a entrega final. Trabalhei com integrações de sistemas via APIs, automatizei processos internos usando n8n e participei do desenvolvimento de soluções completas. Essa experiência me mostrou que teoria e prática são mundos diferentes, e que resolver problemas reais exige adaptação, agilidade e comunicação constante com a equipe.",
    tags: ["Fábrica de Software", "Projetos Reais", "Automação"],
  },
  {
    icon: Zap,
    title: "Como me Tornei Desenvolvedor de Automações com n8n",
    content:
      "Meu primeiro contato com n8n foi dentro da fábrica de software, e desde então não parei mais. Com mais de 1 ano criando workflows profissionais, já desenvolvi chatbots inteligentes com WhatsApp e OpenAI, sistemas anti-golpe com múltiplas IAs, bots de coleta de leads para eventos, automações financeiras e muito mais. Cada projeto me ensinou algo novo: desde conectar APIs complexas até lidar com fluxos de dados em tempo real. Hoje, automação não é só o que eu faço, é o que me motiva a acordar cedo e estudar todos os dias.",
    tags: ["n8n", "WhatsApp API", "OpenAI", "Automação"],
  },
  {
    icon: Lightbulb,
    title: "De Estudante a Profissional: O que Realmente Faz Diferença",
    content:
      "Quando entrei no curso de Ciência da Computação, achava que sabia bastante. A fábrica de software me mostrou o contrário. Aprendi que um bom desenvolvedor não é só quem sabe programar, mas quem sabe entender o problema do cliente, trabalhar em equipe, entregar no prazo e documentar o que fez. Hoje, no 3o semestre, consigo unir a base teórica da faculdade com a experiência prática que adquiri. Essa combinação me permite criar soluções mais robustas, pensar em escalabilidade e entregar software que realmente resolve problemas.",
    tags: ["Carreira", "Desenvolvimento", "Soft Skills"],
  },
]

const WHATSAPP_NUMBER = "5561994291131"
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Vi seu portfólio e gostaria de conversar sobre um projeto."
)
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

export function Blog() {
  return (
    <section id="blog" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-mono text-primary mb-4 tracking-wider uppercase">
            Blog & Experiencias
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Minha trajetoria: do aprendizado aos projetos reais
          </h3>
          <p className="text-muted-foreground mb-12 max-w-2xl leading-relaxed">
            Relatos reais sobre minha experiencia profissional, aprendizados 
            dentro da fabrica de software e a evolucao como desenvolvedor de automacoes.
          </p>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <article
                key={index}
                className="group bg-card border border-border rounded-lg p-6 md:p-8 hover:border-primary/50 transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                    <exp.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors pt-1">
                    {exp.title}
                  </h4>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4 ml-0 md:ml-16">
                  {exp.content}
                </p>
                <div className="flex flex-wrap items-center gap-2 ml-0 md:ml-16">
                  <Tag className="h-4 w-4 text-muted-foreground" />
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 text-xs bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <div className="mt-16 bg-card border border-border rounded-xl p-8 md:p-10 text-center">
            <div className="flex justify-center mb-5">
              <div className="p-4 bg-green-500/10 rounded-full">
                <MessageCircle className="h-8 w-8 text-green-500" />
              </div>
            </div>
            <h4 className="text-2xl font-bold text-foreground mb-3">
              Gostou do que viu?
            </h4>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto leading-relaxed">
              Se voce tem um projeto em mente, precisa de automacoes ou quer 
              bater um papo sobre tecnologia, me chama no WhatsApp. 
              Respondo rapido!
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-foreground font-medium"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Chamar no WhatsApp
              </Button>
            </a>
            <p className="text-sm text-muted-foreground mt-4 font-mono">
              +55 (61) 99429-1131
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
