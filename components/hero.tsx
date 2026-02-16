import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl">
          <p className="text-primary font-mono text-sm mb-4 tracking-wider">
            Bem-vindo ao meu portfólio
          </p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight text-balance">
            Luis Henrique
            <br />
            <span className="text-muted-foreground">da Silva Sousa</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-primary font-medium mb-6">
            Desenvolvedor de Automações | Desenvolvedor de Software
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mb-10 leading-relaxed text-pretty">
            Transformando processos manuais em fluxos automatizados e inteligentes. 
            Construindo soluções que aumentam eficiência e geram resultados reais para empresas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button asChild size="lg" className="font-medium">
              <a href="#projetos">Ver Projetos</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-medium bg-transparent">
              <a href="#certificados">Certificados</a>
            </Button>
            <Button asChild variant="secondary" size="lg" className="font-medium">
              <a href="#contato">Entrar em Contato</a>
            </Button>
          </div>
          
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:contato@example.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  )
}
