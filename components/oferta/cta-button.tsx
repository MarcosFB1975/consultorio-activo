import Link from "next/link"

export function CtaButton({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <Link
      href="/agendar"
      className={`inline-flex items-center justify-center rounded-lg bg-[#2d6a4f] px-8 py-4 text-base font-medium text-white transition-colors hover:bg-[#245741] ${className}`}
    >
      {children}
    </Link>
  )
}

export function StickyCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#e5e5e5] bg-white/95 p-3 backdrop-blur-sm md:hidden">
      <Link
        href="/agendar"
        className="flex w-full items-center justify-center rounded-lg bg-[#2d6a4f] px-6 py-4 text-base font-medium text-white transition-colors hover:bg-[#245741]"
      >
        {"Agendar demo gratuita"}
      </Link>
    </div>
  )
}
