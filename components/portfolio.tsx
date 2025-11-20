//components/portfolio.tsx
'use client'

import ProjectCard from '@/components/project-card'

const uxProjects = [
  {
    id: 1,
    title: 'NS AGRO',
    category: 'agroindustria',
    description: 'Auditoria UX/UI para optimizar conversión: benchmark, heurística y tests con usuarios reales.',
    color: 'from-accent/50 to-accent/20',
    borderColor: 'border-accent',
  },
  {
    id: 2,
    title: 'SALAZAR ISRAEL',
    category: 'automotriz',
    description: 'Challenge real con benchmark y heurística. Rediseño de pantallas con foco en claridad y mejora visual.',
    color: 'from-secondary/50 to-secondary/20',
    borderColor: 'border-secondary',
  },
  {
    id: 3,
    title: 'DERCO CENTER',
    category: 'automotriz',
    description: 'Diseño de pantallas con Design System propio para mejorar la experiencia de navegación y uso.',
    color: 'from-primary/50 to-primary/20',
    borderColor: 'border-primary',
  },
]

const designProjects = [
  {
    id: 4,
    title: 'RESITER',
    category: 'gestión de residuos',
    description: 'Rediseño completo del sitio. Trabajo iterativo con el cliente y actualización constante de pantallas.',
    color: 'from-secondary/50 to-secondary/20',
    borderColor: 'border-secondary',
  },
  {
    id: 5,
    title: 'EL ZORRO',
    category: 'inmobiliaria',
    description: 'Landing teaser que transmite la vida en la naturaleza. Proyecto colaborativo con diseño gráfico.',
    color: 'from-primary/50 to-primary/20',
    borderColor: 'border-primary',
  },
  {
    id: 6,
    title: 'NUBLE',
    category: 'inmobiliaria',
    description: 'Landing de lanzamiento para barrio cerrado. Diseño orientado a comunicar bienestar y vida en comunidad.',
    color: 'from-accent/50 to-accent/20',
    borderColor: 'border-accent',
  },
  {
    id: 7,
    title: 'PROYECTO 7',
    category: 'categoria',
    description: 'Descripción del proyecto a ser actualizada con información real.',
    color: 'from-secondary/50 to-secondary/20',
    borderColor: 'border-secondary',
  },
  {
    id: 8,
    title: 'PROYECTO 8',
    category: 'categoria',
    description: 'Descripción del proyecto a ser actualizada con información real.',
    color: 'from-primary/50 to-primary/20',
    borderColor: 'border-primary',
  },
  {
    id: 9,
    title: 'PROYECTO 9',
    category: 'categoria',
    description: 'Descripción del proyecto a ser actualizada con información real.',
    color: 'from-accent/50 to-accent/20',
    borderColor: 'border-accent',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-5xl md:text-6xl font-black mb-4">
          <span className="text-primary">PORTFOLIO</span>
        </h2>
        <p className="text-muted-foreground text-lg">Proyectos de UX/UI y Diseño Gráfico</p>
      </div>

      {/* UX/UI Projects */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-secondary mb-8 uppercase tracking-wider">UX / UI Design</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {uxProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* Graphic Design Projects */}
      <div>
        <h3 className="text-2xl font-bold text-accent mb-8 uppercase tracking-wider">Graphic Design</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {designProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
