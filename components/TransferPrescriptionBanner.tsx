import { ArrowRight } from "lucide-react"
import TrueFocus from "./TrueFocus"
import Link from "next/link"

export default function TransferPrescriptionBanner() {
  return (
    <section className="relative w-full mt-6 md:mt-22 overflow-hidden">

      {/* Gradient Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-50/90 via-green-50/80 to-green-50/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-100/20 to-emerald-200/40" />

      <div className="relative max-w-7xl mx-auto px-4 py-12 md:py-12">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-center gap-4 md:gap-10">

          {/* Animated Text */}
          <div className="serif-heading text-3xl md:text-4xl lg:text-5xl leading-tight text-center md:text-left">
            <TrueFocus
              sentence="Transfer a Prescription"
              manualMode={false}
              blurAmount={5}
              borderColor="#2f7d32"
              glowColor="rgba(47, 125, 50, 0.6)"
              animationDuration={0.8}
              pauseBetweenAnimations={1.2}
            />
          </div>

          {/* Button */}
          <Link href="/prescription">
  <button className="bg-white text-[#26441f] font-semibold px-8 py-3 rounded-full flex items-center gap-2 hover:bg-gray-100 transition-all duration-300 shadow-md">
    Transfer Now
    <ArrowRight size={18} />
  </button>
</Link>


        </div>
      </div>
    </section>
  )
}
