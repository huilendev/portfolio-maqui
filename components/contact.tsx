"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Contact() {
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
    <section id="contact" className="relative py-32 px-6 max-w-4xl mx-auto">
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[linear-gradient(0deg,rgba(255,0,180,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.15)_1px,transparent_1px)] bg-[55px_55px]"></div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 60, filter: "blur(8px)" }}
        animate={controls}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative p-10 bg-black/40 backdrop-blur-md shadow-[0_0_22px_rgba(0,255,255,0.35)] border border-cyan-400/40"
      >
        <h2 className="text-5xl md:text-6xl font-black mb-8 text-center text-white font-mono">
          ¿TE GUSTARÍA QUE TRABAJEMOS JUNTOS?
        </h2>

        <p className="text-lg text-gray-300 text-center max-w-xl mx-auto mb-12 leading-relaxed">
          Estoy lista para colaborar y crear algo realmente extraordinario.
        </p>

        <div className="flex justify-center">
          <a
            href="mailto:escalante.macarenae@gmail.com"
            className="
              relative inline-block px-14 py-4 font-mono text-lg font-bold uppercase
              border border-cyan-400 text-cyan-300 tracking-wide
              hover:bg-cyan-400 hover:text-black
              transition-all duration-300 backdrop-blur
              shadow-[0_0_18px_rgba(0,255,255,0.4)]
            "
          >
            Escribime un mensaje
          </a>
        </div>

        <div className="mt-16 pt-12 border-t border-cyan-400/30">
          <p className="text-gray-400 text-center text-sm font-mono">
            También podés conectar conmigo acá <br />↓
          </p>

          <div className="flex gap-8 justify-center mt-6 text-cyan-300 font-mono text-sm">
            <a
              href="https://www.linkedin.com/in/macarena-escalante/"
              target="_blank"
              className="hover:text-pink-300 transition-all hover:drop-shadow-[0_0_6px_rgba(255,0,150,0.6)]"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
