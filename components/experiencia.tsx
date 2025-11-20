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
    period: "Jun 2025 – Actualidad",
    description: [
      "Única diseñadora por proyecto, liderando procesos end-to-end.",
      "Trabajo autónomo: investigación, planificación, sprints y handoff.",
      "Coordinación con equipos técnicos y stakeholders.",
    ],
    highlights: [
      "Derco Center — Automotriz: Diseño desktop/mobile, mejoras de consistencia.",
      "NS Agro — Auditoría con +70 hallazgos.",
      "Resiter — Wireframes en alta fidelidad.",
      "El Zorro — Landing con storytelling.",
    ],
  },
  {
    title: "Freelance",
    subtitle: "UX/UI & Graphic Designer",
    period: "Dic 2024 – Jun 2025",
    description: [
      "Branding, campañas digitales y diseño UX/UI.",
      "Trabajos para e-commerce, PYMEs y ONG.",
    ],
    highlights: [
      "Café Tierra — Branding completo.",
      "The Gamer Shop — Campaña Cyber Monday.",
      "Flyers y contenido social.",
    ],
  },
  {
    title: "Case Studies (Proyectos Conceptuales)",
    subtitle: "UX/UI Designer",
    period: "2024 – 2025",
    description: [
      "Diseño de producto end-to-end.",
      "Foco en usabilidad, accesibilidad y diseño emocional.",
    ],
    highlights: [
      "Frigg — App de citas.",
      "Ahorra Ya — Comparador de precios.",
      "Un corte x una sonrisa — Plataforma solidaria.",
    ],
  },
  {
    title: "Mercado Libre",
    subtitle: "Software Developer con enfoque UX/UI",
    period: "2020 – 2024",
    description: [
      "4 años con progresión desde backend a UX/UI.",
      "Trabajo junto a UX, frontend y backend.",
    ],
    highlights: [
      "UX/UI Writing & Design (2023–2024).",
      "Frontend (2021–2023): React, TypeScript.",
      "Backend & QA (2020–2021): Java, Golang.",
    ],
  },
];

// Reveal suave LENTO
const useReveal = (text: string, inView: boolean) => {
  const [output, setOutput] = useState("");

  useEffect(() => {
    if (!inView) return;

    let mounted = true;
    let i = 0;

    const revealStep = () => {
      if (!mounted) return;
      i += 1; // <-- más lento
      setOutput(text.slice(0, i));

      if (i < text.length) {
        setTimeout(() => {
          requestAnimationFrame(revealStep);
        }, 30); // <-- velocidad bonita, suave y visible
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

      <h2 className="text-5xl md:text-6xl font-black mb-20 text-primary neon-title font-mono text-center">
        EXPERIENCIA
      </h2>

      <div className="space-y-24">
        {experiences.map((exp, index) => {
          const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
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
              className="relative p-8 bg-black/40 backdrop-blur-md shadow-[0_0_12px_rgba(0,255,255,0.4)] outline outline-1 outline-cyan-400/40"
            >
              {/* Esquinas tech cuadradas */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-cyan-400/60"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-cyan-400/60"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-cyan-400/60"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-cyan-400/60"></div>

              {/* TÍTULO reveal + glitch */}
              <motion.h3
                className="text-2xl font-bold uppercase tracking-wider text-cyan-300 font-mono"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.2 }}
              >
                <span className="inline-block glitch-sm">{revealedTitle}</span>
              </motion.h3>

              <p className="text-lg text-cyan-200/80 font-mono mt-1">{exp.subtitle}</p>
              <p className="text-sm text-foreground/80 mt-1">{exp.period}</p>

              <ul className="mt-4 space-y-2 text-foreground/80">
                {exp.description.map((d, i) => (
                  <li key={i}>• {d}</li>
                ))}
              </ul>

              {exp.highlights && (
                <div className="mt-5">
                  <p className="text-cyan-300 font-mono text-sm mb-2">
                    Proyectos destacados:
                  </p>
                  <ul className="space-y-1 text-foreground/80">
                    {exp.highlights.map((h, i) => (
                      <li key={i}>→ {h}</li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
