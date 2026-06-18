import { CtaButton } from "./cta-button"

export function Hero() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center px-5 pt-16 pb-14 text-center md:pt-24">
      <h1 className="font-serif text-3xl leading-tight text-balance text-[#1a1a1a] md:text-5xl md:leading-[1.15]">
        {"Tu consultorio encontrando pacientes mientras tú atiendes."}
      </h1>
      <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-[#666] md:text-lg">
        {"Sin publicidad. Sin redes sociales. Sin aprender ninguna herramienta."}
      </p>
      <CtaButton className="mt-8">{"Agendar demo gratuita"}</CtaButton>
    </section>
  )
}
