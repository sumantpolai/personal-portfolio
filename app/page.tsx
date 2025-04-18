"use client"

import { motion, useScroll, useSpring } from "framer-motion"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import MouseLight from "@/components/mouse-light"
import Achievements from "@/components/achivement"

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()

  // Smooth scroll progress indicator
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create scroll-triggered animations for each section
      const sections = gsap.utils.toArray(".section")
      sections.forEach((section: any) => {
        gsap.fromTo(
          section,
          {
            opacity: 0,
            y: 100,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "top 20%",
              toggleActions: "play reverse play reverse",
              scrub: 1,
            },
          },
        )
      })
    }, mainRef)

    return () => ctx.revert()
  }, [])

  return (
    <>
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-pink-500 transform origin-left z-50"
        style={{ scaleX }}
      />

      <div className="grid-background" />
      <MouseLight />
      <motion.div
        ref={mainRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen relative"
      >
        <Navbar />
        <main className="container mx-auto py-20">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Achievements />
          <Contact />
        </main>
      </motion.div>
    </>
  )
}

