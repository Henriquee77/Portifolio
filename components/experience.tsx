import { Briefcase, Calendar, CheckCircle2 } from "lucide-react"

const experiences = [
  {
    title: "Desenvolvedor de Automações & Software",
    company: "Fábrica de Software",
    period: "6 meses",
    current: false,
    activities: [
      "Desenvolvimento de automações robustas com n8n",
      "Integração de sistemas via APIs REST",
      "Desenvolvimento de soluções de software personalizadas",
      "Participação ativa em projetos reais para clientes",
      "Otimização de processos internos e externos",
      "Colaboração em equipe multidisciplinar",
    ],
  },
  {
    title: "Desenvolvedor de Automações",
    company: "Atuação Contínua",
    period: "+1 ano de experiência",
    current: true,
    activities: [
      "Criação de workflows complexos e escaláveis em n8n",
      "Automação de processos empresariais",
      "Integrações com múltiplas plataformas e serviços",
      "Desenvolvimento de soluções personalizadas para cada necessidade",
      "Documentação e manutenção de fluxos automatizados",
      "Consultoria técnica em automação de processos",
    ],
  },
]

export function Experience() {
  return (
    <section id="experiencia" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-mono text-primary mb-4 tracking-wider uppercase">
            Experiência Profissional
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Trajetória com entregas reais e resultados comprovados
          </h3>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 pb-8 border-l-2 border-border last:pb-0"
              >
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary" />
                
                <div className="bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-foreground">{exp.title}</h4>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Briefcase className="h-4 w-4" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{exp.period}</span>
                      {exp.current && (
                        <span className="px-2 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full">
                          Atual
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {exp.activities.map((activity, actIndex) => (
                      <li key={actIndex} className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
