"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            setIsHeaderVisible(true);
          } else {
            setIsHeaderVisible(false);
          }
        });
      },
      { threshold: 0 }
    );

    observer.observe(document.getElementById("hero")!);

    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: isHeaderVisible ? 0 : -100,
        opacity: isHeaderVisible ? 1 : 0,
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-primary/30"
    >
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="#" className="text-2xl font-bold glow-text"></Link>

        <div className="flex gap-8">
          <Link
            href="#portfolio"
            className="text-sm hover:text-primary transition-colors"
          >
            PORTFOLIO
          </Link>
          <Link
            href="#contact"
            className="text-sm hover:text-secondary transition-colors"
          >
            CONTACTO
          </Link>
        </div>
      </nav>
    </motion.header>
  );
}
