"use client";

import ProjectCard from "./project-card";

const colors = ["cyan", "pink", "violet"] as const;

const uxProjects = [
  {
    title: "Salazar Israel ",
    description: "UX/UI",
    link: "{Figma link 1}",
  },
  {
    title: "Ahorra Ya",
    description: "UX/UI",
    link: "{Figma link 2}",
  },
  {
    title: "Frigg",
    description: "UX/UI",
    link: "{Figma link 3}",
  },
  {
    title: "Un corte por una sonrisa",
    description: "UX/UI",
    link: "{Figma link 5}",
  },
  {
    title: "Nuevo Proyecto",
    description: "UX/UI",
    link: "{Figma link 5}",
  },
  {
    title: "Nuevo Proyecto",
    description: "UX/UI",
    link: "{Figma link 5}",
  },
];

const graphicProjects = [
  {
    title: "Cafe Tierra",
    description: "Graphic Design",
    link: "{Figma link A}",
  },
  {
    title: "The gamer shop",
    description: "Graphic Design",
    link: "{Figma link B}",
  },
  {
    title: "Flyers",
    description: "Graphic Design",
    link: "{Figma link C}",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 relative">
      <h2 className="text-center text-6xl md:text-7xl font-black text-white mb-20 tracking-tight">
        PROYECTOS
      </h2>

      <h3 className="text-center text-3xl md:text-4xl font-semibold text-white mb-10">
        UX/UI DESIGN
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto mb-32">
        {uxProjects.map((p, i) => (
          <ProjectCard
            key={i}
            title={p.title}
            description={p.description}
            link={p.link}
            color={colors[i % 3]}
          />
        ))}
      </div>

      <h3 className="text-center text-3xl md:text-4xl font-semibold text-white mb-10">
        GRAPHIC DESIGN
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {graphicProjects.map((p, i) => (
          <ProjectCard
            key={i}
            title={p.title}
            description={p.description}
            link={p.link}
            color={colors[i % 3]}
          />
        ))}
      </div>
    </section>
  );
}
