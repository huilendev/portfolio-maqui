"use client";

interface HeroProps {
  scrollY: number;
}

export default function Hero({ scrollY }: HeroProps) {
  const parallaxY = scrollY * 0.5;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Cyberpunk background grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-25 animate-scanlines"
          style={{
            backgroundImage: `
              linear-gradient(0deg, rgba(0,255,255,0.18) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,255,255,0.18) 1px, transparent 1px)
            `,
            backgroundSize: "55px 55px",
            transform: `translateY(${parallaxY}px)`,
          }}
        />
      </div>

      {/* 🔵🟢 Blobs neon SIN VIOLETA */}
      <div
        className="absolute top-24 left-16 w-80 h-80 rounded-full opacity-25 blur-3xl mix-blend-screen"
        style={{
          background: "linear-gradient(135deg, #00eaff, #8fff85)",
          transform: `translateY(${parallaxY * 0.25}px)`,
        }}
      />

      <div
        className="absolute bottom-20 right-12 w-96 h-96 rounded-full opacity-25 blur-3xl mix-blend-screen"
        style={{
          background: "linear-gradient(135deg, #00eaff, #8fff85)",
          transform: `translateY(${parallaxY * -0.2}px)`,
        }}
      />

      {/* FRAME CYBERPUNK SIN HALO VIOLETA */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div
          className="absolute rounded-xl"
          style={{
            top: "26px",
            left: 0,
            right: 0,
            bottom: 0,
            border: "2px solid rgba(0, 255, 255, 0.25)", // 💠 SOLO CIAN, SIN MAGENTA
            boxShadow: "0 0 18px rgba(0, 255, 255, 0.15)", // 💠 glow limpio
            filter: "none", // evita halos
            mixBlendMode: "normal", // elimina mezcla violeta
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-6xl md:text-8xl font-black mb-4 neon-title font-mono tracking-tight">
          MACARENA <br /> ESCALANTE
        </h1>

        <p className="text-xl md:text-2xl text-cyan-200/80 mb-10 font-light">
          UX/UI Designer - Product designer - Research and strategy
        </p>

        <div className="flex gap-6 justify-center flex-wrap">
          <a href="#portfolio" className="px-10 py-3 neon-button font-mono">
            VER PROYECTOS
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce text-cyan-300/80 font-mono text-sm">
        ↓ SCROLL
      </div>
    </section>
  );
}
