//components/project-card.tsx
'use client'

import { useState } from 'react'

interface ProjectCardProps {
  project: {
    id: number
    title: string
    category: string
    description: string
    color: string
    borderColor: string
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <a
      href={`#project-${project.id}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative bg-gradient-to-br ${project.color} border-2 ${project.borderColor} rounded-lg p-6 transition-all duration-300 overflow-hidden cursor-pointer ${
        isHovered ? 'border-glow shadow-lg' : ''
      }`}
    >
      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-current opacity-50"></div>
      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-current opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-current opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-current opacity-50"></div>

      {/* Content */}
      <div className="relative z-10">
        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">{project.category}</p>
        
        <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
          {project.title}
        </h3>

        <p className="text-sm leading-relaxed text-foreground/80 mb-4">
          {project.description}
        </p>

        <div className="flex items-center gap-2 text-xs font-bold group-hover:translate-x-2 transition-transform">
          <span>→ VIEW PROJECT</span>
        </div>
      </div>

      {/* Animated gradient overlay on hover */}
      {isHovered && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      )}
    </a>
  )
}
