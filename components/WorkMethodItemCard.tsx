"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface WorkMethodItem {
  phase: string;
  title: string;
  description: string;
  icon: string;
}

const workMethods: WorkMethodItem[] = [
  {
    phase: "01",
    title: "INVESTIGACIÓN & DIAGNÓSTICO UX",
    description:
      "Benchmark competitivo, auditorías heurísticas (Nielsen) y análisis de datos con Clarity y Google Analytics. Elaboro informes priorizados con método ICE, transformando hallazgos en recomendaciones listas para implementar.",
    icon: "🔍",
  },
  {
    phase: "02",
    title: "TESTING & EXPERIENCIA DE USUARIO",
    description:
      "Planificación y ejecución de pruebas de usabilidad moderadas y no moderadas. Identificación de puntos de fuga, cuellos de botella y validación de hipótesis con usuarios reales para optimizar flujos y decisiones de diseño.",
    icon: "👥",
  },
  {
    phase: "03",
    title: "DISEÑO UI & STORYTELLING VISUAL",
    description:
      "Wireframes y prototipos de alta fidelidad (desktop & mobile), aplicando criterios de accesibilidad y consistencia visual. Diseño interfaces y landings que reflejan identidad de marca y elevan la experiencia más allá de lo estético.",
    icon: "✨",
  },
  {
    phase: "04",
    title: "GESTIÓN & COLABORACIÓN ÁGIL",
    description:
      "Lidero proyectos end-to-end con autogestión, adaptando metodologías ágiles a las necesidades de cada cliente. Coordino con stakeholders y equipos de desarrollo para asegurar entregas claras, eficientes y alineadas a objetivos de negocio.",
    icon: "⚡",
  },
];

const useReveal = (text: string, inView: boolean) => {
  const [output, setOutput] = useState("");

  useEffect(() => {
    if (!inView) return;

    let mounted = true;
    let i = 0;

    const revealStep = () => {
      if (!mounted) return;
      i += 1;
      setOutput(text.slice(0, i));

      if (i < text.length) {
        setTimeout(() => {
          requestAnimationFrame(revealStep);
        }, 30);
      }
    };

    revealStep();

    return () => {
      mounted = false;
    };
  }, [text, inView]);

  return output;
};

export default function WorkMethodItemCard() {
  return (
    <section
      id="manera-trabajar"
      className="relative py-32 px-6 max-w-6xl mx-auto"
    >
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[linear-gradient(0deg,rgba(255,0,180,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.15)_1px,transparent_1px)] bg-[55px_55px]"></div>

      <h2 className="text-5xl md:text-6xl font-black mb-8 text-white font-mono text-center">
        MI MANERA DE TRABAJAR
      </h2>

      <p className="text-center text-white text-base mb-4 max-w-3xl mx-auto">
        Investigación — Estrategia — Diseño end-to-end <br />
        Un proceso donde la investigación, el diseño y la colaboración se
        fusionan para crear experiencias que impactan
      </p>

      <p className="text-center text-white/90 text-sm mb-20 max-w-3xl mx-auto leading-relaxed">
        Me especializo en investigación y diseño end-to-end: benchmarks,
        auditorías heurísticas, pruebas de usabilidad, análisis de métricas y
        diseño de interfaces en alta fidelidad. Lidero cada proyecto de
        principio a fin, desde las reuniones iniciales con el cliente hasta el
        handoff final a desarrollo. Me caracterizo por una autogestión sólida,
        comunicación clara y la capacidad de traducir hallazgos en soluciones
        funcionales, estéticas y alineadas a objetivos de negocio.
      </p>

      <div className="relative max-w-2xl mx-auto">
        <div className="space-y-0">
          {workMethods.map((method, index) => {
            const { ref, inView } = useInView({
              triggerOnce: true,
              threshold: 0.3,
            });
            const controls = useAnimation();

            const revealedTitle = useReveal(method.title, inView);

            useEffect(() => {
              if (inView) {
                controls.start({ opacity: 1, y: 0, filter: "none" });
              }
            }, [inView, controls]);

            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, y: 60, filter: "blur(8px)" }}
                animate={controls}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
                className="relative flex flex-col items-center"
              >
                <div className="relative z-20 flex-shrink-0 my-8">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center shadow-[0_0_20px_rgba(0,255,255,0.6)] font-mono font-bold text-xl text-black"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={inView ? { scale: 1, rotate: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {method.phase}
                  </motion.div>

                  <motion.div
                    className="absolute inset-0 rounded-full bg-cyan-400/30"
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>

                <motion.div
                  className="relative z-30 p-6 bg-black/40 backdrop-blur-md shadow-[0_0_12px_rgba(0,255,255,0.4)] border border-cyan-400/40 w-full text-center mb-8"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 0 20px rgba(0,255,255,0.5)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold uppercase tracking-wider text-cyan-300 font-mono mb-3">
                    {revealedTitle}
                  </h3>

                  <p className="text-foreground/80 leading-relaxed">
                    {method.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
