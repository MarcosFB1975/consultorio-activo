"use client"

import { useRef, useState, useEffect } from "react"
import Link from "next/link"

export function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleTimeUpdate = () => {
      if (video.duration > 0) {
        setProgress((video.currentTime / video.duration) * 100)
      }
    }
    const handleEnded = () => {
      setProgress(100)
    }

    video.addEventListener("timeupdate", handleTimeUpdate)
    video.addEventListener("ended", handleEnded)
    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate)
      video.removeEventListener("ended", handleEnded)
    }
  }, [])

  return (
    <main className="flex min-h-[100dvh] flex-col items-center justify-center bg-[#111111] px-4">
      <div className="w-full max-w-[800px]">
        <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-[#2a2a2a] bg-black">
          <video
            ref={videoRef}
            className="h-full w-full"
            controls
            playsInline
            preload="metadata"
            poster="/video-poster.png"
          >
            <source src="/video.mp4" type="video/mp4" />
            {"Tu navegador no soporta el elemento de video."}
          </video>
        </div>

        {/* Progress bar */}
        <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-[#2a2a2a]">
          <div
            className="h-full rounded-full bg-[#2d6a4f] transition-[width] duration-200 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Helper text */}
        <p className="mt-4 text-center text-sm text-[#666666]">
          Activa el sonido para una mejor experiencia
        </p>

        {/* CTA — always visible below the player */}
        <div className="mt-8 flex justify-center">
          <Link
            href="/whatsapp"
            className="rounded-lg bg-[#2d6a4f] px-8 py-4 text-lg font-medium text-white transition-colors hover:bg-[#255c43]"
          >
            Continuar
          </Link>
        </div>
      </div>
    </main>
  )
}
