"use client"

import { useRef } from "react"
import Link from "next/link"
export function DemoVideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <main className="flex min-h-[100dvh] flex-col items-center justify-center bg-[#f8f8f8] px-4 py-8">
      <p className="mb-6 text-center text-sm text-[#888]">Marcos Fernández — Círculo IA</p>

      <div className="w-full max-w-[700px]">
        <div className="aspect-video w-full overflow-hidden rounded-xl shadow-md">
          <video
            ref={videoRef}
            className="h-full w-full bg-black object-cover"
            controls
            playsInline
            poster="/demo-poster.png"
          >
            <source src="/demo.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="mt-5 space-y-1 text-center">
          <p className="text-sm leading-relaxed text-[#888] text-pretty">
            Una demo de 20 minutos puede mostrarte exactamente cómo quedaría tu consultorio.
          </p>
          <p className="text-sm leading-relaxed text-[#888]">Sin compromiso.</p>
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/oferta"
            className="rounded-lg bg-[#2d6a4f] px-8 py-4 text-lg font-medium text-white transition-colors hover:bg-[#255c43]"
          >
            Continuar
          </Link>
        </div>
      </div>
    </main>
  )
}
