"use client"

const inputClass =
  "w-full rounded-lg border border-[#e2e2e2] bg-white px-4 py-3 text-[#1a1a1a] outline-none transition-colors placeholder:text-[#9a9a9a] focus:border-[#2d6a4f] focus:ring-1 focus:ring-[#2d6a4f]"

export function DemoForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    window.location.href = "https://wa.me/59173647090"
  }

  return (
    <div>
      <header className="text-center">
        <h2 className="text-balance font-serif text-3xl font-medium text-[#1a1a1a]">
          {"Demo gratuita de 20 minutos"}
        </h2>
        <p className="mt-3 text-pretty leading-relaxed text-[#666]">
          {
            "Te muestro en vivo cómo quedaría tu perfil, tu agenda y tu sistema funcionando. Sin compromiso."
          }
        </p>
      </header>

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="nombre" className="text-sm font-medium text-[#1a1a1a]">
            {"Nombre completo"}
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            required
            autoComplete="name"
            className={inputClass}
            placeholder="Tu nombre"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="especialidad" className="text-sm font-medium text-[#1a1a1a]">
            {"Especialidad"}
          </label>
          <input
            id="especialidad"
            name="especialidad"
            type="text"
            required
            className={inputClass}
            placeholder="Ej. Nutrición, Psicología"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="ciudad" className="text-sm font-medium text-[#1a1a1a]">
            {"Ciudad"}
          </label>
          <input
            id="ciudad"
            name="ciudad"
            type="text"
            required
            autoComplete="address-level2"
            className={inputClass}
            placeholder="Tu ciudad"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="whatsapp" className="text-sm font-medium text-[#1a1a1a]">
            {"WhatsApp con código de país"}
          </label>
          <input
            id="whatsapp"
            name="whatsapp"
            type="tel"
            required
            autoComplete="tel"
            className={inputClass}
            placeholder="+591 70000000"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="horario" className="text-sm font-medium text-[#1a1a1a]">
            {"Horario preferido"}
          </label>
          <select id="horario" name="horario" required defaultValue="" className={inputClass}>
            <option value="" disabled>
              {"Selecciona un horario"}
            </option>
            <option value="manana">{"Mañana"}</option>
            <option value="tarde">{"Tarde"}</option>
            <option value="noche">{"Noche"}</option>
          </select>
        </div>

        <button
          type="submit"
          className="mt-2 w-full rounded-lg bg-[#2d6a4f] py-4 text-lg font-medium text-white transition-colors hover:bg-[#255a43]"
        >
          {"Confirmar demo"}
        </button>
      </form>
    </div>
  )
}
