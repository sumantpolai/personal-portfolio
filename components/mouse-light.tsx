"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function MouseLight() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const lightRef = useRef<HTMLDivElement>(null)
  const gridHighlightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e

      // Super smooth cursor animation
      gsap.to(cursorRef.current, {
        x: x - 10,
        y: y - 10,
        duration: 0.1,
        ease: "power2.out",
      })

      // Multi-layered light effect
      gsap.to(lightRef.current, {
        x: x - 200,
        y: y - 200,
        duration: 0.15,
        ease: "power2.out",
      })

      // Grid highlight effect
      const gridCell = document.elementFromPoint(x, y)
      if (gridCell?.classList.contains("grid-cell")) {
        gsap.to(gridHighlightRef.current, {
          x: Math.floor(x / 30) * 30 - 45,
          y: Math.floor(y / 30) * 30 - 45,
          opacity: 1,
          duration: 0.15,
          ease: "power2.out",
        })
      } else {
        gsap.to(gridHighlightRef.current, {
          opacity: 0,
          duration: 0.15,
        })
      }
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest("button, a, .animated-card")) {
        gsap.to(cursorRef.current, {
          scale: 1.5,
          duration: 0.2,
          backgroundColor: "rgba(255, 255, 255, 0.2)",
        })
      } else {
        gsap.to(cursorRef.current, {
          scale: 1,
          duration: 0.2,
          backgroundColor: "transparent",
        })
      }
    }

    // Create grid cells
    const createGridCells = () => {
      const container = document.querySelector(".grid-background")
      if (!container) return

      const width = window.innerWidth
      const height = window.innerHeight
      const cellSize = 30

      for (let y = 0; y < height; y += cellSize) {
        for (let x = 0; x < width; x += cellSize) {
          const cell = document.createElement("div")
          cell.className = "grid-cell"
          cell.style.left = `${x}px`
          cell.style.top = `${y}px`
          container.appendChild(cell)
        }
      }
    }

    createGridCells()
    window.addEventListener("mousemove", moveCursor)
    document.addEventListener("mouseover", handleMouseOver)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      document.removeEventListener("mouseover", handleMouseOver)
    }
  }, [])

  return (
    <>
      {/* Enhanced Mouse Light Effect */}
      <div
        ref={lightRef}
        className="fixed pointer-events-none w-[400px] h-[400px] z-0"
        style={{
          background: `
            radial-gradient(circle, 
              rgba(99, 102, 241, 0.15) 0%,
              rgba(168, 85, 247, 0.15) 25%,
              rgba(236, 72, 153, 0.15) 50%,
              transparent 70%
            )
          `,
          filter: "blur(20px)",
          mixBlendMode: "screen",
        }}
      />

      {/* Grid Highlight Effect */}
      <div ref={gridHighlightRef} className="grid-highlight" />

      {/* Enhanced Cursor */}
      <div
        ref={cursorRef}
        className="fixed pointer-events-none w-5 h-5 rounded-full border-2 border-white/60 z-50 mix-blend-difference"
        style={{
          boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
          transition: "transform 0.1s ease, background-color 0.2s ease",
        }}
      />
    </>
  )
}

