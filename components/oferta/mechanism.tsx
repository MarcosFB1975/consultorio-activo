import { Search, Calendar, Bell } from "lucide-react"

const cards = [
  {
    icon: Search,
    title: "Te encuentran",
    text: "Cuando alguien busca tu especialidad en Google, tu consultorio aparece primero, con tu información lista y confiable.",
  },
  {
    icon: Calendar,
    title: "Agendan solos",
    text: "El paciente reserva su turno directamente, sin llamadas ni mensajes de ida y vuelta. Tu agenda se llena sola.",
  },
  {
    icon: Bell,
    title: "No se olvidan",
    text: "Recordatorios automáticos antes de cada cita reducen las ausencias y mantienen tu día ocupado.",
  },
]

export function Mechanism() {
  return (
    <section className="border-t border-[#eee] bg-[#fafafa] px-5 py-16 md:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex flex-col items-start rounded-xl border border-[#eaeaea] bg-white p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#2d6a4f]/10">
                <Icon className="h-6 w-6 text-[#2d6a4f]" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-serif text-xl text-[#1a1a1a]">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#555]">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
