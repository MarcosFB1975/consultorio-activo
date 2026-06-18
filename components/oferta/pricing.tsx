export function Pricing() {
  return (
    <section className="border-t border-[#eee] bg-[#fafafa] px-5 py-16 md:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-serif text-2xl leading-snug text-balance text-[#1a1a1a] md:text-3xl">
          {"Una inversión que se paga con un solo paciente nuevo."}
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="flex flex-col rounded-2xl border border-[#eaeaea] bg-white p-7 text-left">
            <p className="text-sm font-medium uppercase tracking-wide text-[#666]">{"Puesta en marcha"}</p>
            <p className="mt-2 font-serif text-3xl text-[#1a1a1a]">{"Bs. 300"}</p>
            <p className="mt-3 text-sm leading-relaxed text-[#555]">
              {
                "Pago único. Configuramos tu presencia digital completa, el sistema de reservas y los recordatorios automáticos. Listo en 7 días."
              }
            </p>
          </div>
          <div className="flex flex-col rounded-2xl border-2 border-[#2d6a4f] bg-white p-7 text-left">
            <p className="text-sm font-medium uppercase tracking-wide text-[#2d6a4f]">{"Mensual"}</p>
            <div className="mt-2 flex items-baseline gap-2">
              <p className="font-serif text-3xl text-[#1a1a1a]">{"Bs. 550"}</p>
              <span className="text-sm text-[#888]">{"/mes"}</span>
              <span className="text-base text-[#aaa] line-through">{"Bs. 800"}</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-[#555]">
              {
                "Mantenemos tu consultorio visible, las reservas activas y los recordatorios funcionando. Soporte continuo incluido."
              }
            </p>
            <p className="mt-3 text-xs font-medium text-[#2d6a4f]">
              {"Precio de lanzamiento. Antes Bs. 800/mes — válido para los primeros consultorios."}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
