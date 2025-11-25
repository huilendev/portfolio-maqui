"use client";

import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  color: "cyan" | "pink" | "violet";
  link: string;
}

const colorMap = {
  cyan: {
    stroke: "#00FFFF",
    glow: "drop-shadow(0 0 8px rgba(0,255,255,0.8))",
    bg: "bg-[rgba(0,255,255,0.03)]",
  },
  pink: {
    stroke: "#FF0080",
    glow: "drop-shadow(0 0 8px rgba(255,0,128,0.8))",
    bg: "bg-[rgba(255,0,128,0.03)]",
  },
  violet: {
    stroke: "#B000FF",
    glow: "drop-shadow(0 0 8px rgba(176,0,255,0.8))",
    bg: "bg-[rgba(176,0,255,0.03)]",
  },
};

export default function ProjectCard({
  title,
  description,
  color,
  link,
}: ProjectCardProps) {
  const c = colorMap[color];

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative block transition-all duration-300 hover:scale-[1.02] ${c.bg} backdrop-blur-sm group`}
    >
      <div className="relative w-full aspect-[4/3]">
        <svg
          className="absolute inset-0 w-full h-full transition-all duration-300"
          style={{ filter: c.glow }}
          viewBox="0 0 400 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="400" height="300" fill="black" />

          <path
            d="M 25 0 L 240 0 L 270 12 L 330 12 L 345 0 L 400 0 L 400 50 L 390 60 L 400 70 L 400 300 L 190 300 L 175 285 L 115 285 L 105 300 L 0 300 L 0 230 L 10 220 L 0 210 L 0 0 Z"
            fill="none"
            stroke={c.stroke}
            strokeWidth="2.5"
            className="transition-all duration-300 group-hover:stroke-[3]"
          />

          <line
            x1="35"
            y1="18"
            x2="60"
            y2="18"
            stroke={c.stroke}
            strokeWidth="2"
          />
          <line
            x1="35"
            y1="25"
            x2="60"
            y2="25"
            stroke={c.stroke}
            strokeWidth="2"
          />
          <line
            x1="35"
            y1="32"
            x2="90"
            y2="32"
            stroke={c.stroke}
            strokeWidth="2"
          />
          <line
            x1="35"
            y1="39"
            x2="90"
            y2="39"
            stroke={c.stroke}
            strokeWidth="2"
          />
          <line
            x1="35"
            y1="46"
            x2="90"
            y2="46"
            stroke={c.stroke}
            strokeWidth="2"
          />

          <line
            x1="95"
            y1="32"
            x2="102"
            y2="46"
            stroke={c.stroke}
            strokeWidth="2"
          />
          <line
            x1="103"
            y1="32"
            x2="110"
            y2="46"
            stroke={c.stroke}
            strokeWidth="2"
          />
          <line
            x1="111"
            y1="32"
            x2="118"
            y2="46"
            stroke={c.stroke}
            strokeWidth="2"
          />
          <line
            x1="119"
            y1="32"
            x2="126"
            y2="46"
            stroke={c.stroke}
            strokeWidth="2"
          />
          <line
            x1="127"
            y1="32"
            x2="134"
            y2="46"
            stroke={c.stroke}
            strokeWidth="2"
          />
          <line
            x1="135"
            y1="32"
            x2="142"
            y2="46"
            stroke={c.stroke}
            strokeWidth="2"
          />
          <line
            x1="143"
            y1="32"
            x2="150"
            y2="46"
            stroke={c.stroke}
            strokeWidth="2"
          />

          <rect
            x="285"
            y="18"
            width="50"
            height="18"
            fill="none"
            stroke={c.stroke}
            strokeWidth="2"
          />
          <line
            x1="302"
            y1="18"
            x2="302"
            y2="36"
            stroke={c.stroke}
            strokeWidth="1"
          />
          <line
            x1="318"
            y1="18"
            x2="318"
            y2="36"
            stroke={c.stroke}
            strokeWidth="1"
          />

          <line
            x1="350"
            y1="18"
            x2="357"
            y2="28"
            stroke={c.stroke}
            strokeWidth="2"
          />
          <line
            x1="360"
            y1="18"
            x2="367"
            y2="28"
            stroke={c.stroke}
            strokeWidth="2"
          />
          <line
            x1="370"
            y1="18"
            x2="377"
            y2="28"
            stroke={c.stroke}
            strokeWidth="2"
          />
          <line
            x1="380"
            y1="18"
            x2="387"
            y2="28"
            stroke={c.stroke}
            strokeWidth="2"
          />

          <line
            x1="340"
            y1="254"
            x2="365"
            y2="254"
            stroke={c.stroke}
            strokeWidth="2"
          />
          <line
            x1="340"
            y1="261"
            x2="365"
            y2="261"
            stroke={c.stroke}
            strokeWidth="2"
          />
          <line
            x1="310"
            y1="268"
            x2="365"
            y2="268"
            stroke={c.stroke}
            strokeWidth="2"
          />
          <line
            x1="310"
            y1="275"
            x2="365"
            y2="275"
            stroke={c.stroke}
            strokeWidth="2"
          />
          <line
            x1="310"
            y1="282"
            x2="365"
            y2="282"
            stroke={c.stroke}
            strokeWidth="2"
          />

          <line
            x1="290"
            y1="268"
            x2="297"
            y2="254"
            stroke={c.stroke}
            strokeWidth="2"
          />
          <line
            x1="282"
            y1="268"
            x2="289"
            y2="254"
            stroke={c.stroke}
            strokeWidth="2"
          />
          <line
            x1="274"
            y1="268"
            x2="281"
            y2="254"
            stroke={c.stroke}
            strokeWidth="2"
          />
          <line
            x1="266"
            y1="268"
            x2="273"
            y2="254"
            stroke={c.stroke}
            strokeWidth="2"
          />
          <line
            x1="258"
            y1="268"
            x2="265"
            y2="254"
            stroke={c.stroke}
            strokeWidth="2"
          />
          <line
            x1="250"
            y1="268"
            x2="257"
            y2="254"
            stroke={c.stroke}
            strokeWidth="2"
          />
          <line
            x1="242"
            y1="268"
            x2="249"
            y2="254"
            stroke={c.stroke}
            strokeWidth="2"
          />

          <line
            x1="35"
            y1="244"
            x2="60"
            y2="244"
            stroke={c.stroke}
            strokeWidth="2"
          />
          <line
            x1="35"
            y1="251"
            x2="60"
            y2="251"
            stroke={c.stroke}
            strokeWidth="2"
          />

          <rect
            x="27"
            y="170"
            width="20"
            height="45"
            fill="none"
            stroke={c.stroke}
            strokeWidth="2"
          />
          <line
            x1="27"
            y1="180"
            x2="47"
            y2="180"
            stroke={c.stroke}
            strokeWidth="1"
          />
          <line
            x1="27"
            y1="190"
            x2="47"
            y2="190"
            stroke={c.stroke}
            strokeWidth="1"
          />
          <line
            x1="27"
            y1="200"
            x2="47"
            y2="200"
            stroke={c.stroke}
            strokeWidth="1"
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
          <h3 className="text-2xl font-bold text-white text-center mb-4 uppercase tracking-wider">
            {title}
          </h3>
          <p className="text-gray-300 text-center text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </a>
  );
}
