const milestones = [
  {
    label: "Días 1–2",
    title: "Conocemos tu consultorio",
    text: "Recopilamos tu información, especialidad y horarios. Tú sigues atendiendo; nosotros nos encargamos del resto.",
  },
  {
    label: "Días 3–4",
    title: "Construimos tu presencia",
    text: "Creamos tu perfil profesional optimizado para que Google te muestre cuando los pacientes buscan tu especialidad.",
  },
  {
    label: "Día 5",
    title: "Activamos las reservas",
    text: "Conectamos el sistema de agendamiento automático y los recordatorios. Todo queda listo para recibir pacientes.",
  },
  {
    label: "Día 7",
    title: "Tu consultorio trabaja solo",
    text: "Empiezas a recibir solicitudes de turno sin mover un dedo. Tú atiendes, el sistema consigue pacientes.",
  },
]

export function Timeline() {
  return (
    <section className="border-t border-[#eee] px-5 py-16 md:py-20">
      <div className="mx-auto max-w-2xl">
        <h2 className="font-serif text-2xl leading-snug text-balance text-[#1a1a1a] md:text-3xl">
          {"En 7 días, tu consultorio está encontrando pacientes."}
        </h2>
        <ol className="mt-10 flex flex-col">
          {milestones.map((m, i) => (
            <li key={m.label} className="relative flex gap-5 pb-10 last:pb-0">
              <div className="flex flex-col items-center">
                <span className="z-10 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 border-[#2d6a4f] bg-white">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2d6a4f]" />
                </span>
                {i < milestones.length - 1 && <span className="mt-1 w-px flex-1 bg-[#d8e3dd]" />}
              </div>
              <div className="-mt-1 pb-1">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#2d6a4f]">{m.label}</p>
                <h3 className="mt-1 font-serif text-lg text-[#1a1a1a]">{m.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#555]">{m.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
