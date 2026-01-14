import { ArrowRight } from "lucide-react"

export default function WhatWeOfferSection() {
  const offers = [
    {
      image: "/medicine01.png",
      title: "Vitamins & Supplements",
      description:
        "Unlock the power of optimal health with our carefully curated selection of vitamins and supplements, meticulously crafted to support your well-being",
    },
    {
      image: "/checkup01.png",
      title: "Generic Plan",
      description:
        "Discover the perfect prescription for affordable healthcare with our comprehensive range of high-quality generic plans, designed to meet your needs",
    },
    {
      image: "/vaccin01.png",
      title: "Vaccinations",
      description:
        "Shield yourself and your loved ones from preventable diseases with our trusted vaccinations, providing a strong defense against illness, promoting a healthier future",
    },
  ]

  return (
    <section className="relative z-20 mt-6 md:-mt-10 px-3 sm:px-4 md:px-0">
      <div className="max-w-6xl mx-auto">

        {/* Dark Green Container */}
        <div className="bg-[#0d8b57] rounded-2xl shadow-2xl px-5 sm:px-8 md:px-12 py-8 md:py-10">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">

            {offers.map((offer, index) => (
              <div
                key={index}
                className={`flex flex-col items-center text-center px-3 sm:px-8 md:px-8
                ${index !== 0 ? "md:border-l md:border-white/20" : ""}`}
              >
                {/* Icon */}
                <div className="mb-6">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-16 h-16 md:w-16 md:h-16 object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-semibold tracking-wide text-white mb-3">
                  {offer.title}
                </h3>

                {/* Description */}
                <p className="text-white/85 text-sm leading-relaxed max-w-md">
                  {offer.description}
                </p>
              </div>
            ))}

          </div>
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-10 md:mt-10">
          <button className="bg-[#1B4332] hover:bg-[#0d2818] text-white font-semibold py-3 px-10 rounded-full flex items-center gap-2 transition-all duration-300">
            View More
            <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </section>
  )
}
