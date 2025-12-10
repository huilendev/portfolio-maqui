"use client";

import ProjectCard from "./project-card";

const colors = ["cyan", "pink", "violet"] as const;

const uxProjects = [
  {
    title: "Salazar Israel ",
    description: "Challenge de Contratación: Diseño y Estrategia Rápida",
    link: "https://www.figma.com/proto/kD7Xi4oW1fO7mL0PGvKxCD/Proyecto---Salazar-Israel?node-id=8-40&p=f&t=PIwT0w056Ad38YNn-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1",
  },
  {
    title: "NS Agro",
    description: "Research Avanzado y Optimización UX/UI",
    link: "https://www.figma.com/proto/sax46n53yC1kooIQqaRy1u/Proyecto---NS-Agro?node-id=8-40&t=qgl7VMKPrGdFrkb0-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1",
  },
  {
    title: "Resiter",
    description:
      "Rediseño Integral: Gestión de Contenido y Transformación Visual",
    link: "https://www.figma.com/proto/9kGSUQxBPHrHRrWjBXrCML/Proyecto---Resiter?node-id=4031-5&t=Ct20pYW6i5KH7WTv-0&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1",
  },
];

// const graphicProjects = [
//   {
//     title: "Cafe Tierra",
//     description: "Graphic Design",
//     link: "{Figma link A}",
//   },
//   {
//     title: "The gamer shop",
//     description: "Graphic Design",
//     link: "{Figma link B}",
//   },
//   {
//     title: "Flyers",
//     description: "Graphic Design",
//     link: "{Figma link C}",
//   },
// ];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 relative">
      <h2 className="text-center uppercase text-6xl md:text-7xl font-black text-white mb-20 tracking-tight">
        Proyectos destacados
      </h2>

      {/* <h3 className="text-center text-3xl md:text-4xl font-semibold text-white mb-10">
        UX/UI DESIGN
      </h3> */}

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

      {/* <h3 className="text-center text-3xl md:text-4xl font-semibold text-white mb-10">
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
      </div> */}
    </section>
  );
}
