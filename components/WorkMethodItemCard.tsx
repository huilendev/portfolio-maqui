"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface WorkMethodItem {
  phase: string;
  title: string;
  description: React.ReactNode;
  icon: string;
}

const workMethods: WorkMethodItem[] = [
  {
    phase: "01",
    title: "INVESTIGACIÓN & DIAGNÓSTICO UX",
    description: (
      <ul className="text-left space-y-2">
        <li>• <strong>Benchmarks</strong> competitivos y auditorías heurísticas (Nielsen).</li>
        <li>• <strong>Análisis de Métricas</strong> con Clarity y Google Analytics.</li>
        <li>• <strong>Informes priorizados</strong> con método ICE.</li>
      </ul>
    ),
    icon: "🔍",
  },
  {
    phase: "02",
    title: "TESTING & EXPERIENCIA DE USUARIO",
    description: (
      <ul className="text-left space-y-2">
        <li>• Pruebas de usabilidad <strong>moderadas y no moderadas</strong> para obtener feedback cualitativo.</li>
        <li>• Identificación de <strong>puntos de fuga y cuellos de botella</strong> para mapear problemas de flujo.</li>
        <li>• <strong>Validación de hipótesis</strong> para optimizar flujos y sustentar decisiones de diseño.</li>
      </ul>
    ),
    icon: "👥",
  },
  {
    phase: "03",
    title: "DISEÑO UI & STORYTELLING VISUAL",
    description: (
      <ul className="text-left space-y-2">
        <li>• Wireframes y prototipos de <strong>alta fidelidad</strong> (Desktop & Mobile).</li>
        <li>• Aplicación de criterios de <strong>accesibilidad y consistencia visual</strong>.</li>
        <li>• Diseño de interfaces y landings que reflejan <strong>identidad</strong> de marca.</li>
      </ul>
    ),
    icon: "✨",
  },
  {
    phase: "04",
    title: "GESTIÓN & COLABORACIÓN ÁGIL",
    description: (
      <ul className="text-left space-y-2">
        <li>• <strong>Liderazgo</strong> end-to-end con autogestión de proyectos.</li>
        <li>• Coordinación con <strong>stakeholders</strong> y equipos de <strong>desarrollo</strong>.</li>
        <li>• Handoffs claros, eficientes y <strong>alineados a objetivos</strong> de negocio.</li>
      </ul>
    ),
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

function WorkMethodCard({ method, index }: { method: WorkMethodItem; index: number }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const revealedTitle = useReveal(method.title, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, filter: "blur(8px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "none" } : { opacity: 0, y: 60, filter: "blur(8px)" }}
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
}

export default function WorkMethodItemCard() {
  return (
    <section
      id="manera-trabajar"
      className="relative py-32 px-6 max-w-6xl mx-auto"
    >
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[linear-gradient(0deg,rgba(255,0,180,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.15)_1px,transparent_1px)] bg-[55px_55px]"></div>

      <h2 className="text-5xl uppercase md:text-6xl font-black mb-8 text-white font-mono text-center">
        Como trabajo
      </h2>

      <p className="text-center text-white text-base mb-4 max-w-3xl mx-auto">
        Investigación — Estrategia — Diseño end-to-end <br />
        Un proceso donde la investigación, el diseño y la colaboración se
        fusionan para crear experiencias que impactan
      </p>

      {/* <p className="text-center text-white/90 text-sm mb-20 max-w-3xl mx-auto leading-relaxed">
        Me especializo en investigación y diseño end-to-end: benchmarks,
        auditorías heurísticas, pruebas de usabilidad, análisis de métricas y
        diseño de interfaces en alta fidelidad. Lidero cada proyecto de
        principio a fin, desde las reuniones iniciales con el cliente hasta el
        handoff final a desarrollo. Me caracterizo por una autogestión sólida,
        comunicación clara y la capacidad de traducir hallazgos en soluciones
        funcionales, estéticas y alineadas a objetivos de negocio.
      </p> */}

      <div className="relative max-w-2xl mx-auto">
        <div className="space-y-0">
          {workMethods.map((method, index) => (
            <WorkMethodCard key={index} method={method} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
