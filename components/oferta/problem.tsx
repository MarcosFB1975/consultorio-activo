export function Problem() {
  return (
    <section className="border-t border-[#eee] px-5 py-16 md:py-20">
      <div className="mx-auto max-w-2xl">
        <h2 className="font-serif text-2xl leading-snug text-balance text-[#1a1a1a] md:text-3xl">
          {"Tus pacientes te buscan en Google. ¿Te encuentran?"}
        </h2>
        <div className="mt-6 flex flex-col gap-4 text-base leading-relaxed text-[#444] md:text-lg">
          <p>
            {
              "Cada día, decenas de personas en tu ciudad buscan un profesional como tú. Escriben tu especialidad, comparan opciones y deciden en minutos a quién van a llamar."
            }
          </p>
          <p>
            {
              "Si tu consultorio no aparece, esos pacientes terminan en la agenda de alguien más. No porque sea mejor, sino porque fue más fácil de encontrar."
            }
          </p>
          <p>
            {
              "El problema no es tu trabajo. Es que tu presencia digital no está haciendo el suyo mientras tú atiendes."
            }
          </p>
        </div>
      </div>
    </section>
  )
}
