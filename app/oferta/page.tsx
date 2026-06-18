import { Hero } from "@/components/oferta/hero"
import { Problem } from "@/components/oferta/problem"
import { Mechanism } from "@/components/oferta/mechanism"
import { Timeline } from "@/components/oferta/timeline"
import { SocialProof } from "@/components/oferta/social-proof"
import { Pricing } from "@/components/oferta/pricing"
import { Faq } from "@/components/oferta/faq"
import { FinalCta } from "@/components/oferta/final-cta"
import { StickyCtaBar } from "@/components/oferta/cta-button"

export default function OfertaPage() {
  return (
    <main className="min-h-[100dvh] bg-white pb-24 md:pb-0">
      <Hero />
      <Problem />
      <Mechanism />
      <Timeline />
      <SocialProof />
      <Pricing />
      <Faq />
      <FinalCta />
      <StickyCtaBar />
    </main>
  )
}
