export function SocialProof() {
  return (
    <section className="border-t border-[#eee] px-5 py-16 md:py-20">
      <div className="mx-auto max-w-2xl">
        <div className="rounded-2xl bg-[#f2f2f0] p-7 md:p-9">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#2d6a4f]">{"Caso real"}</p>
          <blockquote className="mt-4 font-serif text-lg italic leading-relaxed text-[#2a2a2a] md:text-xl">
            {
              "“Tengo mi consultorio en Santa Cruz y antes dependía de las recomendaciones de siempre. En la primera semana ya recibí cuatro pacientes nuevos que me encontraron en Google y agendaron solos. No tuve que aprender nada ni cambiar mi forma de trabajar.”"
            }
          </blockquote>
          <p className="mt-5 text-sm text-[#666]">{"— Profesional de la salud, Santa Cruz"}</p>
        </div>
      </div>
    </section>
  )
}
