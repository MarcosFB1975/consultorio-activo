import { CtaButton } from "./cta-button"

export function FinalCta() {
  return (
    <section className="border-t border-[#eee] px-5 py-20 md:py-28">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <h2 className="font-serif text-3xl leading-tight text-balance text-[#1a1a1a] md:text-4xl">
          {"Tu consultorio encontrando pacientes mientras tú atiendes."}
        </h2>
        <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-[#666] md:text-lg">
          {"Sin publicidad. Sin redes sociales. Sin aprender ninguna herramienta."}
        </p>
        <CtaButton className="mt-8">{"Agendar demo gratuita"}</CtaButton>
      </div>
    </section>
  )
}
