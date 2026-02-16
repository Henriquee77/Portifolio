import { 
  Workflow, 
  FileCode2, 
  Database, 
  Globe, 
  Smartphone, 
  GitBranch,
  Zap,
  Server
} from "lucide-react"

const skillCategories = [
  {
    title: "Automação",
    icon: Workflow,
    highlight: true,
    skills: [
      { name: "n8n", level: "Avançado" },
      { name: "Automação de Processos", level: "Avançado" },
      { name: "Webhooks", level: "Avançado" },
    ],
  },
  {
    title: "Linguagens",
    icon: FileCode2,
    skills: [
      { name: "JavaScript", level: "Intermediário" },
      { name: "Python", level: "Intermediário" },
      { name: "Dart", level: "Básico" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Django", level: "Intermediário" },
      { name: "APIs REST", level: "Intermediário" },
      { name: "Node.js", level: "Básico" },
    ],
  },
  {
    title: "Banco de Dados",
    icon: Database,
    skills: [
      { name: "Supabase", level: "Avançado" },
      { name: "MySQL", level: "Intermediário" },
      { name: "PostgreSQL", level: "Intermediário" },
    ],
  },
  {
    title: "Plataformas",
    icon: Zap,
    highlight: true,
    skills: [
      { name: "Meta (WhatsApp/Facebook)", level: "Avançado" },
      { name: "Lovable", level: "Avançado" },
      { name: "Supabase", level: "Avançado" },
    ],
  },
  {
    title: "Mobile",
    icon: Smartphone,
    skills: [
      { name: "Flutter", level: "Básico" },
      { name: "Flame (Games)", level: "Básico" },
    ],
  },
  {
    title: "Ferramentas",
    icon: GitBranch,
    skills: [
      { name: "Git & GitHub", level: "Intermediário" },
      { name: "VS Code", level: "Avançado" },
      { name: "Postman", level: "Intermediário" },
    ],
  },
  {
    title: "Frontend",
    icon: Globe,
    skills: [
      { name: "HTML & CSS", level: "Intermediário" },
      { name: "Tailwind CSS", level: "Básico" },
    ],
  },
  {
    title: "Integrações",
    icon: Zap,
    skills: [
      { name: "APIs de Terceiros", level: "Avançado" },
      { name: "Sistemas Legados", level: "Intermediário" },
      { name: "CRMs e ERPs", level: "Intermediário" },
    ],
  },
]

function getLevelColor(level: string) {
  switch (level) {
    case "Avançado":
      return "bg-primary text-primary-foreground"
    case "Intermediário":
      return "bg-secondary text-secondary-foreground"
    default:
      return "bg-muted text-muted-foreground"
  }
}

export function Skills() {
  return (
    <section id="habilidades" className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm font-mono text-primary mb-4 tracking-wider uppercase">
            Habilidades Técnicas
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Stack tecnológica e competências
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className={`p-6 rounded-lg border transition-all hover:scale-105 ${
                  category.highlight
                    ? "bg-primary/10 border-primary"
                    : "bg-card border-border hover:border-primary/50"
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <category.icon className={`h-6 w-6 ${category.highlight ? "text-primary" : "text-muted-foreground"}`} />
                  <h4 className="font-semibold text-foreground">{category.title}</h4>
                  {category.highlight && (
                    <span className="ml-auto px-2 py-0.5 text-xs font-medium bg-primary text-primary-foreground rounded">
                      Destaque
                    </span>
                  )}
                </div>
                
                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <li key={skill.name} className="flex items-center justify-between">
                      <span className="text-sm text-foreground">{skill.name}</span>
                      <span className={`px-2 py-0.5 text-xs rounded ${getLevelColor(skill.level)}`}>
                        {skill.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
