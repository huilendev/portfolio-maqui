"use client";
import Image from "next/image";

export default function IdCard() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-[1fr_400px_400px] gap-10 items-start">
        <div className="space-y-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
            SOBRE MÍ
          </h2>

          <p className="text-base text-gray-300 leading-relaxed">
            Soy Diseñadora UX/UI con más de 5 años de experiencia y me
            especializo en investigación y diseño end-to-end
          </p>
          <p className="text-base text-gray-300 leading-relaxed">
            Llevo adelante los proyectos de principio a fin, incluyendo
            reuniones con clientes, definición de requerimientos, investigación
            y diseño de interfaces de alta fidelidad
          </p>
          <p className="text-base text-gray-300 leading-relaxed">
            Me caracterizo por trabajar con autogestión, claridad y
            organización, asegurando soluciones funcionales, estéticas y
            alineadas a los objetivos del negocio.
          </p>

          <div className="pt-6">
            <a
              href="/cv-macarena.pdf"
              download
              className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 font-mono uppercase tracking-wider hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] group"
            >
              <svg
                className="w-5 h-5 group-hover:animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Descargar CV
            </a>
          </div>
        </div>

        <div className="relative w-full">
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-10"
            viewBox="0 0 400 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ filter: "drop-shadow(0 0 10px rgba(0,255,255,0.7))" }}
          >
            <path
              d="M 25 0 L 250 0 L 280 15 L 340 15 L 360 0 L 400 0 L 400 50 L 385 65 L 400 80 L 400 600 L 160 600 L 145 580 L 110 580 L 100 600 L 0 600 L 0 530 L 15 515 L 0 500 L 0 0 Z"
              fill="none"
              stroke="#00FFFF"
              strokeWidth="3"
            />
          </svg>

          <div
            className="relative bg-black overflow-hidden"
            style={{
              clipPath:
                "polygon(25px 0, 250px 0, 280px 15px, 340px 15px, 360px 0, 100% 0, 100% 50px, calc(100% - 15px) 65px, 100% 80px, 100% 100%, 160px 100%, 145px calc(100% - 20px), 110px calc(100% - 20px), 100px 100%, 0 100%, 0 calc(100% - 70px), 15px calc(100% - 85px), 0 calc(100% - 100px), 0 0)",
            }}
          >
            <div className="relative w-full h-[600px]">
              <Image
                src="/maca.jpg"
                alt="Macarena"
                fill
                className="object-cover"
                priority
              />

              <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/60 via-transparent to-transparent"></div>

              <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"></div>

              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/3 to-transparent animate-pulse pointer-events-none"></div>
            </div>
          </div>
        </div>

        <div className="relative w-full">
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-10"
            viewBox="0 0 400 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ filter: "drop-shadow(0 0 10px rgba(176,0,255,0.7))" }}
          >
            <path
              d="M 25 0 L 250 0 L 280 15 L 340 15 L 360 0 L 400 0 L 400 50 L 385 65 L 400 80 L 400 600 L 160 600 L 145 580 L 110 580 L 100 600 L 0 600 L 0 530 L 15 515 L 0 500 L 0 0 Z"
              fill="none"
              stroke="#B000FF"
              strokeWidth="3"
            />

            <line
              x1="40"
              y1="20"
              x2="70"
              y2="20"
              stroke="#B000FF"
              strokeWidth="2.5"
            />
            <line
              x1="40"
              y1="30"
              x2="70"
              y2="30"
              stroke="#B000FF"
              strokeWidth="2.5"
            />
            <line
              x1="40"
              y1="40"
              x2="100"
              y2="40"
              stroke="#B000FF"
              strokeWidth="2.5"
            />
            <line
              x1="40"
              y1="50"
              x2="100"
              y2="50"
              stroke="#B000FF"
              strokeWidth="2.5"
            />
            <line
              x1="40"
              y1="60"
              x2="100"
              y2="60"
              stroke="#B000FF"
              strokeWidth="2.5"
            />

            <line
              x1="110"
              y1="40"
              x2="120"
              y2="60"
              stroke="#B000FF"
              strokeWidth="2.5"
            />
            <line
              x1="125"
              y1="40"
              x2="135"
              y2="60"
              stroke="#B000FF"
              strokeWidth="2.5"
            />
            <line
              x1="140"
              y1="40"
              x2="150"
              y2="60"
              stroke="#B000FF"
              strokeWidth="2.5"
            />
            <line
              x1="155"
              y1="40"
              x2="165"
              y2="60"
              stroke="#B000FF"
              strokeWidth="2.5"
            />
            <line
              x1="170"
              y1="40"
              x2="180"
              y2="60"
              stroke="#B000FF"
              strokeWidth="2.5"
            />
            <line
              x1="185"
              y1="40"
              x2="195"
              y2="60"
              stroke="#B000FF"
              strokeWidth="2.5"
            />

            <rect
              x="290"
              y="20"
              width="60"
              height="30"
              fill="none"
              stroke="#B000FF"
              strokeWidth="2.5"
            />
            <line
              x1="310"
              y1="20"
              x2="310"
              y2="50"
              stroke="#B000FF"
              strokeWidth="1.5"
            />
            <line
              x1="330"
              y1="20"
              x2="330"
              y2="50"
              stroke="#B000FF"
              strokeWidth="1.5"
            />

            <line
              x1="300"
              y1="540"
              x2="340"
              y2="540"
              stroke="#B000FF"
              strokeWidth="2.5"
            />
            <line
              x1="300"
              y1="550"
              x2="340"
              y2="550"
              stroke="#B000FF"
              strokeWidth="2.5"
            />
            <line
              x1="270"
              y1="560"
              x2="340"
              y2="560"
              stroke="#B000FF"
              strokeWidth="2.5"
            />
            <line
              x1="270"
              y1="570"
              x2="340"
              y2="570"
              stroke="#B000FF"
              strokeWidth="2.5"
            />
            <line
              x1="270"
              y1="580"
              x2="340"
              y2="580"
              stroke="#B000FF"
              strokeWidth="2.5"
            />

            <line
              x1="260"
              y1="560"
              x2="267"
              y2="540"
              stroke="#B000FF"
              strokeWidth="2.5"
            />
            <line
              x1="245"
              y1="560"
              x2="252"
              y2="540"
              stroke="#B000FF"
              strokeWidth="2.5"
            />
            <line
              x1="230"
              y1="560"
              x2="237"
              y2="540"
              stroke="#B000FF"
              strokeWidth="2.5"
            />
            <line
              x1="215"
              y1="560"
              x2="222"
              y2="540"
              stroke="#B000FF"
              strokeWidth="2.5"
            />
            <line
              x1="200"
              y1="560"
              x2="207"
              y2="540"
              stroke="#B000FF"
              strokeWidth="2.5"
            />

            <rect
              x="347"
              y="200"
              width="25"
              height="50"
              fill="none"
              stroke="#B000FF"
              strokeWidth="2.5"
            />
            <line
              x1="347"
              y1="217"
              x2="372"
              y2="217"
              stroke="#B000FF"
              strokeWidth="1.5"
            />
            <line
              x1="347"
              y1="233"
              x2="372"
              y2="233"
              stroke="#B000FF"
              strokeWidth="1.5"
            />
          </svg>

          <div
            className="relative bg-black h-[600px] flex flex-col"
            style={{
              clipPath:
                "polygon(25px 0, 250px 0, 280px 15px, 340px 15px, 360px 0, 100% 0, 100% 50px, calc(100% - 15px) 65px, 100% 80px, 100% 100%, 160px 100%, 145px calc(100% - 20px), 110px calc(100% - 20px), 100px 100%, 0 100%, 0 calc(100% - 70px), 15px calc(100% - 85px), 0 calc(100% - 100px), 0 0)",
            }}
          >
            <div className="px-8 pt-24 pb-6 flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-purple-500/40">
                <h3 className="text-2xl font-black text-purple-400 tracking-wider">
                  STACK & SKILLS
                </h3>
                <div className="flex gap-2 items-center">
                  <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></div>
                  <div className="w-1 h-1 rounded-full bg-purple-400/60"></div>
                  <div className="w-1 h-1 rounded-full bg-purple-400/40"></div>
                </div>
              </div>

              <Section
                title="UX/UI & RESEARCH"
                color="cyan"
                items={[
                  "Figma",
                  "Usability Test",
                  "Design System",
                  "Analytics (GA4, Clarity)",
                ]}
              />

              <Section
                title="MANAGEMENT"
                color="pink"
                items={["Jira", "Scrum / Agile", "Teamwork"]}
              />

              <Section
                title="FRONTEND"
                color="violet"
                items={["HTML, CSS, JS", "React"]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section({
  title,
  items,
  color,
}: {
  title: string;
  items: string[];
  color: "cyan" | "pink" | "violet";
}) {
  const colorClasses = {
    cyan: {
      arrow: "text-cyan-400",
      text: "text-cyan-400",
      bullet: "text-cyan-400/70",
    },
    pink: {
      arrow: "text-pink-500",
      text: "text-pink-500",
      bullet: "text-pink-500/70",
    },
    violet: {
      arrow: "text-purple-400",
      text: "text-purple-400",
      bullet: "text-purple-400/70",
    },
  };

  const c = colorClasses[color];

  return (
    <div className="mb-7">
      <div className="flex items-center gap-2 mb-3">
        <span className={`${c.arrow} text-sm`}>▶</span>
        <h4 className={`text-sm font-bold ${c.text} tracking-widest uppercase`}>
          {title}
        </h4>
      </div>
      <div className="space-y-2 ml-6">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2 group">
            <span
              className={`${c.bullet} text-xs transition-transform duration-200 group-hover:translate-x-1`}
            >
              ▸
            </span>
            <p className="text-sm text-gray-300 group-hover:text-white transition-colors duration-200">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
