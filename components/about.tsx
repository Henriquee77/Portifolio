import { Code2, Cpu, Workflow, GraduationCap } from "lucide-react"

const highlights = [
  {
    icon: Workflow,
    title: "Automação",
    description: "+1 ano de experiência com n8n",
  },
  {
    icon: Code2,
    title: "Desenvolvimento",
    description: "6 meses em Fábrica de Software",
  },
  {
    icon: Cpu,
    title: "Integrações",
    description: "APIs REST e sistemas complexos",
  },
  {
    icon: GraduationCap,
    title: "Formação",
    description: "Ciência da Computação - 3º sem",
  },
]

export function About() {
  return (
    <section id="sobre" className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-mono text-primary mb-4 tracking-wider uppercase">
            Sobre Mim
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            De estudante a profissional: uma jornada de evolução constante
          </h3>
          
          <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
            <p>
              A tecnologia sempre fez parte da minha vida. Desde cedo, fui movido pela curiosidade 
              de entender como as coisas funcionam por trás das telas. Essa paixão me levou a 
              ingressar no curso de <span className="text-foreground font-medium">Ciência da Computação</span>, 
              onde atualmente curso o 3º semestre.
            </p>
            
            <p>
              O que começou como projetos acadêmicos e estudos pessoais rapidamente evoluiu para 
              uma carreira profissional. Hoje, atuo como <span className="text-foreground font-medium">Desenvolvedor 
              de Automações e Software</span>, com experiência prática em uma fábrica de software, 
              onde tive a oportunidade de participar de projetos reais e entregar soluções que 
              impactam diretamente os resultados das empresas.
            </p>
            
            <p>
              Meu foco principal está na criação de automações inteligentes utilizando a 
              plataforma <span className="text-primary font-medium">n8n</span>, onde acumulo mais de um ano de 
              experiência criando workflows complexos, escaláveis e profissionais. Além disso, 
              desenvolvo integrações de sistemas via APIs e soluções de software completas.
            </p>
            
            <p>
              Acredito firmemente no aprendizado contínuo e na evolução constante. Cada projeto 
              é uma nova oportunidade de crescer, aprender e entregar mais valor.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="p-6 bg-secondary/50 rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <item.icon className="h-8 w-8 text-primary mb-4" />
                <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
