"use client"

import { MapPin, Navigation, Clock, ExternalLink } from "lucide-react"

export default function MapsSection() {
  const handleExploreMap = () => {
    window.open("https://maps.app.goo.gl/HgHquhUMQrDRWnRQ6?g_st=iwb", "_blank")
  }

  return (
    <section
      id="coverage"
      className="relative py-28 bg-gradient-to-b from-white via-[#F4F9FF] to-white overflow-hidden"
    >
      {/* Ambient background */}
      <div className="absolute -top-24 -left-24 w-[420px] h-[420px] bg-blue-100/40 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-[420px] h-[420px] bg-[#1E5FA8]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-4">
            <MapPin className="w-4 h-4 text-blue-700" />
            <span className="text-sm font-semibold text-blue-800">
              SERVICE COVERAGE
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            Our Service Regions &{" "}
            <span className="text-blue-700">Partner Network</span>
          </h2>

          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            We deliver prescriptions across major cities with secure handling and geo-fenced logistics.
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">

          {/* LEFT — INFO CARDS */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-7 shadow-sm hover:shadow-xl transition">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                  <Navigation className="w-6 h-6 text-blue-700" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">
                    Real-Time Delivery Tracking
                  </p>
                  <p className="text-sm text-slate-600">
                    Location updates available on call basis only.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-7 shadow-sm hover:shadow-xl transition">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-700" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">
                    Regional Coverage
                  </p>
                  <p className="text-sm text-slate-600">
                    Newark, NJ service area
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-7 shadow-sm hover:shadow-xl transition">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-blue-700" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">
                    Geo-Fenced Security Protocols
                  </p>
                  <p className="text-sm text-slate-600">
                    Secure handoff zones for patient safety
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={handleExploreMap}
              className="mt-4 inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0B2C4D] text-white font-bold rounded-xl hover:bg-[#143A66] hover:shadow-lg transition"
            >
              Explore United Drugs on Maps
              <ExternalLink className="w-5 h-5" />
            </button>
          </div>

          {/* RIGHT — MAP PANEL */}
          <div className="lg:col-span-7">
            <div className="relative bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden h-full">

              <iframe
                src="https://www.google.com/maps?q=United+Drugs,+W+Market+St,+Newark,+NJ&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="min-h-[460px]"
              />

              {/* LOCATION TAG */}
              <div className="absolute bottom-6 left-6 bg-white rounded-xl px-5 py-3 shadow-lg border border-slate-200">
                <p className="text-base font-bold text-[#0B2C4D]">
                  United Drugs
                </p>
                <p className="text-xs text-slate-500">
                  Newark, New Jersey
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}