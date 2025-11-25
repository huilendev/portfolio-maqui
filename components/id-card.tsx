'use client'
import Image from 'next/image'

export default function IdCard() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8 items-stretch">
        
        {/* LEFT SIDE - Text Presentation */}
        <div className="space-y-6 md:col-span-1">
          <h2 className="text-4xl md:text-5xl font-black">
            SOBRE MÍ
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Soy Diseñadora UX/UI con más de 5 años de experiencia y me especializo en investigación y diseño end-to-end
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Llevo adelante los proyectos de principio a fin, incluyendo reuniones con clientes, definición de requerimientos, investigación y diseño de interfaces de alta fidelidad
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
             Me caracterizo por trabajar con autogestión, claridad y organización, asegurando soluciones funcionales, estéticas y alineadas a los objetivos del negocio.
          </p>

          <div className="pt-4">
            <a 
              href="/cv-macarena.pdf" 
              download 
              className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-black transition-all duration-300 font-mono"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              DESCARGAR CV
            </a>
          </div>
        </div>

        {/* CENTER - Identity Card */}
        <div className="flex justify-center md:col-span-1 h-full">
          <div className="relative w-full max-w-xs h-full">
            
            <div className="relative border-2 border-primary rounded-lg overflow-hidden bg-black/50 backdrop-blur-sm h-full flex flex-col">

              <div className="relative w-full aspect-[3/4]">
                <Image
                  src="/maca.jpg"
                  alt="Macarena"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary"></div>
              </div>

              <div className="p-4 bg-black/80 border-t-2 border-primary mt-auto">
                <div className="grid grid-cols-3 gap-3 text-xs">
                  <div>
                    <p className="text-muted-foreground uppercase tracking-wider font-mono">NAME</p>
                    <p className="text-lg font-black text-primary mt-0.5">MACA</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground uppercase tracking-wider font-mono">EXPERIENCE</p>
                    <p className="text-lg font-black text-secondary mt-0.5">5+</p>
                  </div>
                </div>
                
                <div className="mt-3 pt-3 border-t border-primary/30">
                  <p className="text-xs font-mono text-primary">UX/UI DESIGNER</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE - Stack & Skills */}
        <div className="flex justify-center md:col-span-1 h-full">
          <div className="relative w-full max-w-xs h-full">

            {/* EL RECTÁNGULO REAL + CONTENIDO */}
            <div className="relative border-2 border-secondary rounded-lg overflow-hidden bg-black/50 backdrop-blur-sm p-4 h-full flex flex-col">

              {/* Header */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-secondary/30">
                <h3 className="text-lg font-black text-secondary">STACK & SKILLS</h3>
                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
              </div>

              {/* UX/UI */}
              <Section title="UX/UI & RESEARCH" items={[
                "Figma",
                "Usability Test",
                "Design System",
                "Analytics (GA4, Clarity)"
              ]} />

              {/* Management */}
              <Section title="MANAGEMENT" items={[
                "Jira",
                "Scrum / Agile",
                "Teamwork"
              ]} />

              {/* Frontend */}
              <div className="mt-auto">
                <Section title="FRONTEND" items={[
                  "HTML, CSS, JS",
                  "React"
                ]} />
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

function Section({ title, items }: { title: string, items: string[] }) {
  return (
    <div className="mb-4">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-primary">▶</span>
        <h4 className="text-xs font-bold text-primary">{title}</h4>
      </div>
      <div className="space-y-1 ml-4">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="text-secondary text-xs">▼</span>
            <p className="text-xs text-muted-foreground font-mono">{item}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
