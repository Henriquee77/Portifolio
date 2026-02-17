import { Award, ExternalLink, Calendar, FileText } from "lucide-react"

const featuredCertificates = [
  {
    title: "Curso Challenger - Escola de IA e Programação",
    issuer: "Escola de Inteligência Artificial e Programação",
    description: "Programação com Python, análise de dados, desenvolvimento web full-stack, integração com bancos de dados, criação de startup e jogo digital com IA, redes neurais convolucionais e metodologias ágeis.",
    year: "2025",
    pdfUrl: "/certificates/certificado-challenger-ia-programacao.pdf",
  },
  {
    title: "Brasília + TI 2025",
    issuer: "Evento de Tecnologia - Brasília",
    description: "Participação em evento focado em inovação tecnológica, networking e tendências do mercado de TI no Distrito Federal.",
    year: "2025",
    pdfUrl: "/certificates/certificado-brasilia-ti-2025.pdf",
  },
]

export function Certificates() {
  return (
    <section id="certificados" className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm font-mono text-primary mb-4 tracking-wider uppercase">
            Certificados
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Formação continuada e qualificações
          </h3>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Compromisso com o aprendizado constante através de cursos, 
            certificações e participação em eventos da comunidade tech.
          </p>

          {/* Featured Certificates with PDF Preview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {featuredCertificates.map((cert, index) => (
              <article
                key={index}
                className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all group"
              >
                {/* PDF Preview */}
                <div className="relative bg-secondary/30 h-64 overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/10 flex items-center justify-center">
                    <div className="text-center">
                      <FileText className="h-16 w-16 text-primary/60 mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Certificado</p>
                    </div>
                  </div>
                  <a
                    href={cert.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors z-10"
                  >
                    <FileText className="h-4 w-4" />
                    Ver PDF completo
                  </a>
                </div>
                
                {/* Certificate Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{cert.year}</span>
                    </div>
                  </div>

                  <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors text-lg">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-primary/80 mb-3">{cert.issuer}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cert.description}</p>

                  <div className="mt-4 pt-4 border-t border-border">
                    <a 
                      href={cert.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Abrir em nova aba
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Education Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-foreground mb-8">Formação Acadêmica</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-lg">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Ciência da Computação</h4>
                  <p className="text-primary/80">3º Semestre - Em andamento</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Curso superior focado em fundamentos da computação, algoritmos, 
                    estruturas de dados, desenvolvimento de software e sistemas.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-lg">
                <div className="p-3 bg-secondary rounded-lg">
                  <Award className="h-6 w-6 text-muted-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Ensino Médio</h4>
                  <p className="text-muted-foreground">Completo</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Base sólida de formação com foco em ciências exatas e tecnologia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
