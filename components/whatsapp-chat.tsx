"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"

type Step = {
  assistant: string
  options: string[]
}

const STEPS: Step[] = [
  {
    assistant:
      "Hola. Antes de mostrarte cómo funciona el sistema, necesito entender tu situación actual. ¿Cómo llegan la mayoría de tus pacientes nuevos hoy?",
    options: [
      "Por recomendación de otros pacientes",
      "Por redes sociales",
      "Por Google o internet",
      "No tengo un flujo claro",
    ],
  },
  {
    assistant:
      "Tiene sentido. El boca a boca funciona bien hasta que para. ¿Cuántas horas por semana calculas que dedicas a coordinar citas, confirmar horarios y responder consultas por WhatsApp?",
    options: ["Menos de 1 hora", "Entre 1 y 3 horas", "Más de 3 horas", "No lo había calculado"],
  },
  {
    assistant:
      "Ese tiempo es el que el sistema recupera primero. Una última pregunta: ¿cuándo fue la última vez que un paciente nuevo llegó sin que alguien te recomendara directamente?",
    options: ["Hace menos de un mes", "Hace más de tres meses", "Nunca ha pasado", "No lo recuerdo"],
  },
]

const FINAL_MESSAGE =
  "Entendido. Lo que describes es exactamente el perfil para el que fue diseñado Consultorio Activo. Hay tres videos cortos que muestran cómo funciona en la práctica. ¿Los vemos?"

type ChatMessage = {
  id: number
  sender: "assistant" | "user"
  text: string
}

function timestamp() {
  return new Date().toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" })
}

export default function WhatsappChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [typing, setTyping] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [showOptions, setShowOptions] = useState(false)
  const [showCta, setShowCta] = useState(false)
  const [ctaVisible, setCtaVisible] = useState(false)
  const idRef = useRef(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const nextId = () => {
    idRef.current += 1
    return idRef.current
  }

  const pushMessage = (sender: "assistant" | "user", text: string) => {
    setMessages((prev) => [...prev, { id: nextId(), sender, text }])
  }

  // Reveal an assistant message after a typing indicator delay.
  const revealAssistant = (text: string, delay: number, onDone?: () => void) => {
    setTyping(true)
    const t = setTimeout(() => {
      setTyping(false)
      pushMessage("assistant", text)
      onDone?.()
    }, delay)
    return t
  }

  // Kick off the first assistant message on mount.
  useEffect(() => {
    const t = revealAssistant(STEPS[0].assistant, 1500, () => setShowOptions(true))
    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Auto-scroll to the bottom as content changes.
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" })
  }, [messages, typing, showOptions, showCta])

  // Fade the CTA in once it mounts.
  useEffect(() => {
    if (showCta) {
      const t = setTimeout(() => setCtaVisible(true), 50)
      return () => clearTimeout(t)
    }
  }, [showCta])

  const handleSelect = (option: string) => {
    setShowOptions(false)
    pushMessage("user", option)

    const nextStep = currentStep + 1

    if (nextStep < STEPS.length) {
      revealAssistant(STEPS[nextStep].assistant, 1500, () => {
        setCurrentStep(nextStep)
        setShowOptions(true)
      })
    } else {
      // Last question answered — final message after a 3s typing indicator.
      revealAssistant(FINAL_MESSAGE, 3000, () => setShowCta(true))
    }
  }

  return (
    <div className="flex h-[100dvh] flex-col" style={{ backgroundColor: "#ece5dd" }}>
      {/* Header */}
      <header
        className="flex items-center gap-3 px-4 py-3 shadow-sm"
        style={{ backgroundColor: "#075e54" }}
      >
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold"
          style={{ backgroundColor: "#0b7a6e", color: "#ffffff" }}
        >
          CA
        </div>
        <h1 className="text-base font-medium" style={{ color: "#ffffff" }}>
          Consultorio Activo
        </h1>
      </header>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-3 py-4">
        <div className="mx-auto flex max-w-2xl flex-col gap-2">
          {messages.map((msg) =>
            msg.sender === "assistant" ? (
              <div key={msg.id} className="flex justify-start">
                <div
                  className="max-w-[80%] rounded-lg rounded-tl-none px-3 py-2 text-sm leading-relaxed shadow-sm"
                  style={{ backgroundColor: "#ffffff", color: "#1a1a1a" }}
                >
                  <p className="text-pretty">{msg.text}</p>
                  <span className="mt-1 block text-right text-[10px]" style={{ color: "#999999" }}>
                    {timestamp()}
                  </span>
                </div>
              </div>
            ) : (
              <div key={msg.id} className="flex justify-end">
                <div
                  className="max-w-[80%] rounded-lg rounded-tr-none px-3 py-2 text-sm leading-relaxed shadow-sm"
                  style={{ backgroundColor: "#dcf8c6", color: "#1a1a1a" }}
                >
                  <p className="text-pretty">{msg.text}</p>
                  <span className="mt-1 block text-right text-[10px]" style={{ color: "#7a9b6e" }}>
                    {timestamp()}
                  </span>
                </div>
              </div>
            ),
          )}

          {/* Typing indicator */}
          {typing && (
            <div className="flex justify-start">
              <div
                className="flex items-center gap-1 rounded-lg rounded-tl-none px-4 py-3 shadow-sm"
                style={{ backgroundColor: "#ffffff" }}
              >
                <span className="typing-dot" />
                <span className="typing-dot" style={{ animationDelay: "0.2s" }} />
                <span className="typing-dot" style={{ animationDelay: "0.4s" }} />
              </div>
            </div>
          )}

          {/* Option buttons */}
          {showOptions && currentStep < STEPS.length && (
            <div className="mt-2 flex flex-col gap-2">
              {STEPS[currentStep].options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleSelect(option)}
                  className="rounded-lg border bg-white px-4 py-3 text-left text-sm font-medium transition-colors hover:bg-gray-50"
                  style={{ borderColor: "#cfe9c4", color: "#075e54" }}
                >
                  {option}
                </button>
              ))}
            </div>
          )}

          {/* Final CTA */}
          {showCta && (
            <div
              className="mt-4 flex justify-center transition-opacity duration-700"
              style={{ opacity: ctaVisible ? 1 : 0 }}
            >
              <Link
                href="/feed"
                className="rounded-lg px-8 py-4 text-base font-medium shadow-sm"
                style={{ backgroundColor: "#2d6a4f", color: "#ffffff" }}
              >
                Ver cómo funciona
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
