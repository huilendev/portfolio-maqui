'use client'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 max-w-7xl mx-auto border-t border-primary/30">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-black mb-8">
          LET'S <span className="text-secondary">CONNECT</span>
        </h2>

        <p className="text-lg text-muted-foreground mb-12">
          ¿Tienes un proyecto en mente? Me encantaría colaborar contigo en crear algo extraordinario.
        </p>

        <a
          href="mailto:macarena@example.com"
          className="inline-block px-12 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-bold text-lg border-glow rounded-lg"
        >
          ESCRIBIME UN MENSAJE
        </a>

        <div className="mt-16 pt-12 border-t border-primary/30">
          <p className="text-muted-foreground text-sm">
            O conecta conmigo en mis redes sociales
          </p>
          <div className="flex gap-6 justify-center mt-6">
            <a href="#" className="text-primary hover:text-secondary transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-primary hover:text-secondary transition-colors">
              Instagram
            </a>
            <a href="#" className="text-primary hover:text-secondary transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
