"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

type Line = {
  text: string
  // pause (ms) BEFORE this line begins typing
  delayBefore: number
}

const LINES: Line[] = [
  { text: "Cargando perfil profesional...", delayBefore: 400 },
  { text: "Especialidad detectada: Salud y bienestar", delayBefore: 1500 },
  { text: "Visibilidad digital actual: No encontrada", delayBefore: 800 },
  { text: "Pacientes que te buscaron en Google este mes: —", delayBefore: 800 },
  { text: "Calculando lo que estás perdiendo...", delayBefore: 1000 },
  { text: "Sistema listo.", delayBefore: 2000 },
]

const TYPE_SPEED = 38 // ms per character

export function DiagnosticSequence() {
  // text rendered so far for each line
  const [rendered, setRendered] = useState<string[]>(() => LINES.map(() => ""))
  const [activeLine, setActiveLine] = useState(0)
  const [done, setDone] = useState(false)
  const timers = useRef<ReturnType<typeof setTimeout>[]>([])

  useEffect(() => {
    const schedule = (fn: () => void, ms: number) => {
      const id = setTimeout(fn, ms)
      timers.current.push(id)
    }

    const typeLine = (index: number) => {
      if (index >= LINES.length) {
        schedule(() => setDone(true), 500)
        return
      }
      setActiveLine(index)
      const { text } = LINES[index]
      let char = 0

      const typeChar = () => {
        char += 1
        setRendered((prev) => {
          const next = [...prev]
          next[index] = text.slice(0, char)
          return next
        })
        if (char < text.length) {
          schedule(typeChar, TYPE_SPEED)
        } else {
          const nextIndex = index + 1
          const pause = LINES[nextIndex]?.delayBefore ?? 0
          schedule(() => typeLine(nextIndex), pause)
        }
      }

      schedule(typeChar, TYPE_SPEED)
    }

    schedule(() => typeLine(0), LINES[0].delayBefore)

    return () => {
      timers.current.forEach(clearTimeout)
      timers.current = []
    }
  }, [])

  return (
    <main
      className="flex h-[100dvh] w-full flex-col items-center justify-center overflow-hidden px-6"
      style={{ backgroundColor: "#FFFFFF", color: "#1a1a1a" }}
    >
      <section
        aria-label="Diagnóstico de perfil profesional"
        className="w-full max-w-md"
      >
        <ul className="flex flex-col gap-3 font-mono text-sm leading-relaxed sm:text-base">
          {LINES.map((line, i) => {
            const isVisible = i <= activeLine
            const isTyping = i === activeLine && !done
            return (
              <li
                key={i}
                aria-hidden={!isVisible}
                className="min-h-[1.4em] tabular-nums"
                style={{ opacity: isVisible ? 1 : 0 }}
              >
                {isVisible && (
                  <span>
                    <span aria-hidden="true" style={{ color: "#2d6a4f" }}>
                      {"> "}
                    </span>
                    {rendered[i]}
                    {isTyping && (
                      <span className="caret" aria-hidden="true">
                        ▋
                      </span>
                    )}
                  </span>
                )}
              </li>
            )
          })}
        </ul>

        <div
          className="mt-10 flex justify-center transition-opacity duration-700 ease-out"
          style={{
            opacity: done ? 1 : 0,
            visibility: done ? "visible" : "hidden",
          }}
        >
          <Link
            href="/vsl"
            tabIndex={done ? 0 : -1}
            className="rounded-lg px-8 py-4 text-lg font-medium transition-transform duration-150 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            style={{
              backgroundColor: "#2d6a4f",
              color: "#FFFFFF",
              fontFamily:
                'var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif',
            }}
          >
            Ver diagnóstico
          </Link>
        </div>
      </section>

      <style>{`
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        .caret {
          display: inline-block;
          margin-left: 1px;
          animation: blink 1s step-end infinite;
        }
      `}</style>
    </main>
  )
}
