import { Mail, Linkedin, Github, FileDown, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "contato@luishenrique.dev",
    href: "mailto:contato@luishenrique.dev",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/in/luis-henrique",
    href: "https://linkedin.com/in/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@luishenrique",
    href: "https://github.com/",
  },
]

export function Contact() {
  return (
    <section id="contato" className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-sm font-mono text-primary mb-4 tracking-wider uppercase">
            Contato
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Vamos conversar sobre seu próximo projeto?
          </h3>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            Estou disponível para novos desafios em automação de processos, 
            desenvolvimento de software e integrações de sistemas. 
            Entre em contato e vamos criar soluções juntos.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex flex-col items-center p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all group"
              >
                <div className="p-3 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
                  <link.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="font-medium text-foreground">{link.label}</span>
                <span className="text-sm text-muted-foreground">{link.value}</span>
              </a>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="font-medium">
              <Send className="mr-2 h-4 w-4" />
              Enviar mensagem
            </Button>
            <Button variant="outline" size="lg" className="font-medium bg-transparent">
              <FileDown className="mr-2 h-4 w-4" />
              Baixar Currículo PDF
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
