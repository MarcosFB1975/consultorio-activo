import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    q: "¿Tengo que aprender a usar alguna herramienta?",
    a: "No. Nosotros configuramos y mantenemos todo. Tú solo recibes a los pacientes que ya agendaron. No hay paneles que aprender ni aplicaciones que manejar.",
  },
  {
    q: "¿Necesito tener redes sociales o hacer publicidad?",
    a: "Para nada. El sistema funciona con las búsquedas que tus pacientes ya hacen en Google. No dependemos de Instagram, Facebook ni anuncios pagados.",
  },
  {
    q: "¿Cuánto tiempo tarda en funcionar?",
    a: "En 7 días tu consultorio ya está visible y recibiendo solicitudes de turno. Desde el primer día tú sigues atendiendo con total normalidad.",
  },
  {
    q: "¿Qué pasa si no me llegan pacientes?",
    a: "Garantizamos la entrega y el funcionamiento del sistema, no el volumen de pacientes. Lo que hacemos es poner tu consultorio donde tus pacientes te buscan. Que lleguen depende también de tu especialidad, tu ciudad y tu reputación. Lo que sí garantizamos es que el sistema funciona desde el día 7.",
  },
  {
    q: "¿El pago mensual tiene permanencia?",
    a: "No hay contratos de permanencia. Pagas mes a mes mientras el sistema te traiga pacientes. Si decides parar, lo haces cuando quieras.",
  },
]

export function Faq() {
  return (
    <section className="border-t border-[#eee] px-5 py-16 md:py-20">
      <div className="mx-auto max-w-2xl">
        <h2 className="font-serif text-2xl leading-snug text-balance text-[#1a1a1a] md:text-3xl">
          {"Preguntas frecuentes"}
        </h2>
        <Accordion className="mt-8 w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-[#e5e5e5]">
              <AccordionTrigger className="text-left font-sans text-base text-[#1a1a1a] hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-[#555]">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
