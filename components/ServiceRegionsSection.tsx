"use client"

import { MapPin, Navigation, Clock } from "lucide-react"

export default function MapsSection() {
  const handleExploreMap = () => {
    window.open(
      "https://share.google/YXMB8atgOIbrxlvtm",
      "_blank"
    )
  }

  return (
    <section
      id="coverage"
      className="relative py-24 bg-gradient-to-b from-white via-gray-50 to-gray-100 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-80 h-80 bg-[#1E5FA8]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-[#0B2C4D]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="animate-slideInLeft space-y-8">
            <div className="inline-flex items-center gap-2 bg-[#0B2C4D]/10 px-4 py-2 rounded-full border border-[#0B2C4D]/20">
              <MapPin className="w-4 h-4 text-[#0B2C4D]" />
              <span className="text-sm font-semibold text-[#0B2C4D] uppercase tracking-wide">
                Global Coverage
              </span>
            </div>

            <h2 className="hero-title  text-foreground leading-tight">
              Service Regions & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B2C4D] to-[#1E5FA8]">
                Partner Network
              </span>
            </h2>

            <p className="text-xl text-muted-foreground leading-relaxed font-light max-w-md">
              We serve communities throughout major cities, delivering your prescriptions securely wherever you need them.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-[#0B2C4D]/10 rounded-lg">
                  <Navigation className="w-5 h-5 text-[#0B2C4D]" />
                </div>
                <p className="font-semibold text-foreground text-lg">
                  Real-time location tracking for Rx delivery on call basis only
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-[#1E5FA8]/10 rounded-lg">
                  <MapPin className="w-5 h-5 text-[#1E5FA8]" />
                </div>
                <p className="font-semibold text-foreground text-lg">
                  New Jersey, New York
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-blue-500/10 rounded-lg">
                  <Clock className="w-5 h-5 text-blue-600" />
                </div>
                <p className="font-semibold text-foreground text-lg">
                  Geo-fenced security protocols
                </p>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={handleExploreMap}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#0B2C4D] text-white font-bold rounded-xl hover:bg-[#143A66] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-lg"
              >
                <MapPin className="w-5 h-5" />
                Explore Interactive Map
              </button>
            </div>
          </div>

          {/* RIGHT MAP */}
          <div className="animate-slideInRight flex justify-center">
            <div className="relative w-full max-w-lg">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-white">

                {/* ✅ UPDATED MAP DISPLAY */}
                <iframe
                  src="https://www.google.com/maps?q=Life+Care+Pharmacy+%26+Compounding+Jersey+City+NJ&output=embed"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl"
                />

                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 bg-white rounded-xl px-6 py-4 shadow-lg border border-gray-200">
                  <p className="text-2xl font-bold  text-[#0B2C4D]">
                    Life Care Pharmacy
                  </p>
                  <p className="text-xs text-gray-500 font-medium">
                    Primary Pharmacy Location
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
