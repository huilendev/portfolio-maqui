"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Metodologia() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, filter: "none" });
    }
  }, [inView, controls]);

  return (
    <section
      id="metodologia"
      className="relative py-32 px-6 max-w-5xl mx-auto"
    >
      {/* fondo de grilla neon */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[linear-gradient(0deg,rgba(255,0,180,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.15)_1px,transparent_1px)] bg-[55px_55px]"></div>

      {/* título como experiencia */}
      <h2 className="text-5xl md:text-6xl font-black mb-16 text-white font-mono text-center relative">
        METODOLOGÍA Y ESPECIALIDADES
      </h2>

      {/* grid de 3 cards */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 70, filter: "blur(8px)" }}
        animate={controls}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
      >
        {/* --- CARD 1 --- */}
        <div className="p-8 bg-black/40 backdrop-blur-md shadow-[0_0_12px_rgba(0,255,255,0.4)] border border-cyan-400/40">
          <h4 className="text-cyan-200 font-mono text-lg mb-4 font-semibold uppercase tracking-wide">
            Investigación & Diagnóstico
          </h4>
          <ul className="space-y-2 text-foreground/80 text-sm">
            <li>• Benchmarks competitivos.</li>
            <li>• Auditorías heurísticas (Nielsen).</li>
            <li>• Pruebas moderadas y no moderadas.</li>
            <li>• Análisis de métricas y puntos de fuga.</li>
            <li>• Informes priorizados con ICE para accionar rápido.</li>
          </ul>
        </div>

        {/* --- CARD 2 --- */}
        <div className="p-8 bg-black/40 backdrop-blur-md shadow-[0_0_12px_rgba(0,255,255,0.4)] border border-cyan-400/40">
          <h4 className="text-cyan-200 font-mono text-lg mb-4 font-semibold uppercase tracking-wide">
            Diseño de Experiencias Digitales
          </h4>
          <ul className="space-y-2 text-foreground/80 text-sm">
            <li>• Wireframes y prototipos de alta fidelidad.</li>
            <li>• Heurísticas, accesibilidad y consistencia visual.</li>
            <li>
              • Diseño de flujos y landings con storytelling y diferenciación.
            </li>
          </ul>
        </div>

        {/* --- CARD 3 --- */}
        <div className="p-8 bg-black/40 backdrop-blur-md shadow-[0_0_12px_rgba(0,255,255,0.4)] border border-cyan-400/40">
          <h4 className="text-cyan-200 font-mono text-lg mb-4 font-semibold uppercase tracking-wide">
            Gestión & Colaboración
          </h4>
          <ul className="space-y-2 text-foreground/80 text-sm">
            <li>• Coordinación directa con clientes y equipos de desarrollo.</li>
            <li>• Definición de alcance, prioridades y tiempos.</li>
            <li>• Documentación clara para handoff.</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
