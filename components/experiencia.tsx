"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ExperienceItem {
  title: string;
  subtitle: string;
  period: string;
  description: string[];
  highlights?: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "FORMA Technology & Growth Solutions",
    subtitle: "UX/UI & Product Designer",
    period: "Junio 2025 - Actualidad",
    description: [
      "Diseño de interfaces desktop y mobile en alta fidelidad.",
      "Benchmarks, auditorías heurísticas, pruebas con usuarios y análisis con Clarity/GA.",
      "Facilitación de reuniones, definición de requerimientos y alineación con stakeholders.",
      "Diseño de flujos, landings y productos centrados en claridad, storytelling y conversión.",
      "Trabajo end-to-end con clientes de rubros variados: automotriz, agro, inmobiliario, gestión ambiental y retail.",
    ],
  },
  {
    title: "Freelance",
    subtitle: "UX/UI & Graphic Designer",
    period: "Diciembre 2024 - Junio 2025",
    description: [
      "Identidades visuales y sistemas gráficos (Café Tierra).",
      "Campañas visuales para redes, mailing y retargeting (The Gamer Shop).",
      "Diseño de piezas promocionales adaptadas a tono, marca y objetivo.",
      "Landings, prototipos y piezas visuales para emprendimientos y pymes.",
    ],
  },
  {
    title: "Mercado Libre",
    subtitle: "",
    period: "Enero 2020 - Septiembre 2024",
    description: [
      "UX/UI Writing & Diseño: Diseño de pantallas con Design System, microcopy y tono de voz. Documentación clara para equipos de desarrollo y stakeholders.",
      "Frontend Developer: Desarrollo en React, TypeScript y Node.js. Implementación visual y mejoras de usabilidad. Responsable de landing de costos de venta.",
      "Backend Developer & QA: Desarrollo en Java y Golang. Automatización de testing y soporte técnico en producción.",
    ],
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

export default function Experiencia() {
  return (
    <section id="experiencia" className="relative py-32 px-6 max-w-5xl mx-auto">
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[linear-gradient(0deg,rgba(255,0,180,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.15)_1px,transparent_1px)] bg-[55px_55px]"></div>

      <h2 className="text-5xl md:text-6xl font-black mb-8 text-white font-mono text-center">
        EXPERIENCIA LABORAL
      </h2>

      <div className="space-y-12">
        {experiences.map((exp, index) => {
          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.2,
          });
          const controls = useAnimation();

          const revealedTitle = useReveal(exp.title, inView);

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
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative p-8 bg-black/40 backdrop-blur-md shadow-[0_0_12px_rgba(0,255,255,0.4)] border border-cyan-400/40"
            >
              <motion.h3
                className="text-2xl font-bold uppercase tracking-wider text-cyan-300 font-mono"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.2 }}
              >
                {revealedTitle}
              </motion.h3>

              {exp.subtitle && (
                <p className="text-lg text-cyan-200/80 font-mono mt-1">
                  {exp.subtitle}
                </p>
              )}

              <p className="text-sm text-foreground/80 mt-1">{exp.period}</p>

              {exp.description.length > 0 && (
                <ul className="mt-4 space-y-2 text-foreground/80">
                  {exp.description.map((d, i) => (
                    <li key={i}>• {d}</li>
                  ))}
                </ul>
              )}

              {exp.highlights && (
                <div className="mt-5 space-y-3">
                  {exp.highlights.map((h, i) => (
                    <div key={i} className="text-foreground/80">
                      → {h}
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
