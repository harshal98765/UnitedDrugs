import { ArrowRight } from "lucide-react"
import TrueFocus from "./TrueFocus"
import Link from "next/link"

export default function TransferPrescriptionBanner() {
  return (
    <section className="relative w-full mt-6 md:mt-22 overflow-hidden">

      {/* Gradient Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#D6EBFF]/95 via-[#F0F7FF]/90 to-[#D6EBFF]/95" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-200/20 to-blue-300/30" />


      <div className="relative max-w-7xl mx-auto px-4 py-12 md:py-12">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-center gap-4 md:gap-10">

          {/* Animated Text */}
          <div className=" text-3xl md:text-4xl lg:text-5xl leading-tight text-center md:text-left">
            <TrueFocus
              sentence="Transfer a Prescription"
              manualMode={false}
              blurAmount={5}
              borderColor="#0B2C4D"
              glowColor="rgba(30, 95, 168, 0.6)"
              animationDuration={0.8}
              pauseBetweenAnimations={1.2}
            />
          </div>

          {/* Button */}
          <Link href="/prescription">
  <button className="bg-[#0B2C4D] text-white font-semibold px-8 py-3 rounded-full flex items-center gap-2 hover:bg-[#143A66] transition-all duration-300 shadow-md">
    Transfer Now
    <ArrowRight size={18} />
  </button>
</Link>


        </div>
      </div>
    </section>
  )
}
