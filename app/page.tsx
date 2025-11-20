'use client'

import { useEffect, useState, useRef } from 'react'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Portfolio from '@/components/portfolio'
import Experiencia from '@/components/experiencia'
import IdCard from '@/components/id-card'
import Contact from '@/components/contact'
import Footer from '@/components/footer'


export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative overflow-hidden bg-background">
      <Header />
      <Hero scrollY={scrollY} />
      <IdCard />
      <Experiencia />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}
