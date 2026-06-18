"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { Play } from "lucide-react"

const CARDS: string[][] = [
  [
    "Lo que no sabes:",
    "el 72% de las personas busca",
    "un profesional de salud en Google",
    "antes de pedir una recomendación.",
    "",
    "Tu próximo paciente",
    "ya te está buscando.",
    "",
    "Tú decides si te encuentra.",
  ],
  [
    "El problema no fue el marketing.",
    "",
    "Fue que te vendieron herramientas",
    "sin sistema.",
    "",
    "Consultorio Activo no es",
    "una herramienta más.",
    "Es el sistema completo",
    "ya funcionando.",
  ],
  [
    "No tienes que aprender nada.",
    "",
    "En 7 días tienes todo activo.",
    "Después de eso,",
    "yo me encargo.",
    "",
    "Tú solo atiendes.",
  ],
]

export function VerticalFeed() {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLElement | null)[]>([])
  const [active, setActive] = useState(0)
  const [showCta, setShowCta] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"))
            setActive(index)
            if (index === CARDS.length - 1) {
              setShowCta(true)
            }
          }
        })
      },
      { threshold: 0.6 },
    )

    cardRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={containerRef}
      className="h-[100dvh] w-full snap-y snap-mandatory overflow-y-scroll bg-[#111111]"
    >
      {CARDS.map((lines, index) => (
        <section
          key={index}
          data-index={index}
          ref={(el) => {
            cardRefs.current[index] = el
          }}
          className="relative flex h-[100dvh] w-full snap-start snap-always items-center justify-center"
        >
          {/* Video placeholder */}
          <div className="absolute inset-0 flex items-center justify-center bg-[#161616]">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
              <Play className="h-7 w-7 translate-x-0.5 text-white/80" fill="currentColor" />
            </div>
          </div>

          {/* Overlay text */}
          <div className="relative z-10 px-8 text-center">
            <p className="text-balance text-2xl font-semibold leading-relaxed text-white sm:text-3xl">
              {lines.map((line, i) =>
                line === "" ? (
                  <span key={i} className="block h-4" aria-hidden="true" />
                ) : (
                  <span key={i} className="block">
                    {line}
                  </span>
                ),
              )}
            </p>
          </div>

          {/* Progress dots */}
          <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
            {CARDS.map((_, dot) => (
              <span
                key={dot}
                className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                  dot === active ? "bg-white" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </section>
      ))}

      {/* Fixed CTA after last card */}
      <div
        className={`pointer-events-none fixed inset-x-0 bottom-0 z-20 flex justify-center px-4 pb-8 transition-opacity duration-700 ${
          showCta ? "opacity-100" : "opacity-0"
        }`}
      >
        <Link
          href="/post-vsl"
          className={`${
            showCta ? "pointer-events-auto" : ""
          } w-full max-w-md rounded-lg bg-[#2d6a4f] px-8 py-4 text-center text-lg font-medium text-white shadow-lg transition-colors hover:bg-[#245a42]`}
        >
          Ver cómo quedaría tu consultorio
        </Link>
      </div>
    </div>
  )
}
