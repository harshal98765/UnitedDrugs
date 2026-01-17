"use client"

import { MapPin, Navigation, Clock } from "lucide-react"

export default function MapsSection() {
  const handleExploreMap = () => {
    window.open(
      "https://www.google.com/maps/place/Life+Care+Pharmacy+%26+Compounding/@40.7419069,-74.0626332,595m/data=!3m1!1e3!4m6!3m5!1s0x89c257d5f5dbb1f1:0xbd831928f1f6f35c!8m2!3d40.742158!4d-74.0605116!16s%2Fg%2F11rq41gzg0",
      "_blank"
    )
  }

  return (
    <section id="coverage" className="relative py-24 bg-gradient-to-b from-white/50 to-background overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="animate-slideInLeft space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                Global Coverage
              </span>
            </div>

            <h2 className="hero-title serif-heading text-foreground leading-tight">
              Service Regions & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Partner Network
              </span>
            </h2>

            <p className="text-xl text-muted-foreground leading-relaxed font-light max-w-md">
              We operate across major metropolitan areas, ensuring your prescription data reaches the right destination,
              anywhere in the network.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-primary/10 rounded-lg">
                  <Navigation className="w-5 h-5 text-primary" />
                </div>
                <p className="font-semibold text-foreground text-lg">
                  Real-time location tracking for Rx delivery on call basis only
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-secondary/10 rounded-lg">
                  <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <p className="font-semibold text-foreground text-lg">
                  New Jersey, New York
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-accent/10 rounded-lg">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <p className="font-semibold text-foreground text-lg">
                  Geo-fenced security protocols
                </p>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={handleExploreMap}
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-lg"
              >
                <MapPin className="w-5 h-5" />
                Explore Interactive Map
              </button>
            </div>

            
          </div>

          {/* RIGHT MAP */}
          <div className="animate-slideInRight flex justify-center">
            <div className="relative w-full max-w-lg">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-card bg-card">

                {/* Embedded Google Map – Life Care Pharmacy */}
                <iframe
                  src="https://www.google.com/maps?q=Life+Care+Pharmacy+%26+Compounding,+New+Jersey&output=embed"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl"
                />

                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 bg-white rounded-xl px-6 py-4 shadow-lg border border-border/50">
                  <p className="text-2xl font-bold serif-heading text-primary">Life Care</p>
                  <p className="text-xs text-muted-foreground font-medium">Primary Pharmacy Location</p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
