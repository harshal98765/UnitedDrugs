// "use client"

// import { Shield, Users, Award, Leaf } from "lucide-react"

// const features = [
//   {
//     icon: Users,
//     title: "Expert Team",
//     description: "Licensed pharmacists with years of professional experience",
//   },
//   {
//     icon: Award,
//     title: "Quality Assured",
//     description: "All medications verified and quality checked before dispatch",
//   },
//   {
//     icon: Shield,
//     title: "Security First",
//     description: "HIPAA-compliant systems protecting your personal health information",
//   },
//   {
//     icon: Leaf,
//     title: "Care & Compassion",
//     description: "Patient-centered approach to every interaction and prescription",
//   },
// ]

// export default function FeaturesSection() {
//   return (
//     <section id="about" className="relative py-20 overflow-hidden">

//       {/* === BLUE THEME BACKGROUND === */}
//       <div className="absolute inset-0 bg-gradient-to-r from-[#D6EBFF]/95 via-[#F0F7FF]/90 to-[#D6EBFF]/95" />
//       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-200/20 to-blue-300/30" />

//       {/* Content */}
//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* HEADER */}
//         <div className="text-center mb-16 animate-slideInUp">
//           <h2 className="hero-title  leading-tight mb-4">
//             <span className="text-foreground">Why </span>
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B2C4D] to-[#1E5FA8]">
//               Choose Us
//             </span>
//           </h2>

//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             We're committed to providing the highest standard of pharmacy care
//           </p>
//         </div>

//         {/* FEATURES GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {features.map((feature, index) => {
//             const Icon = feature.icon

//             return (
//               <div
//                 key={index}
//                 className="group bg-white/90 backdrop-blur rounded-2xl p-8 border border-blue-100
//                 hover:shadow-2xl hover:border-[#1E5FA8]
//                 transition-all duration-300 animate-fadeInScale"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 {/* ICON */}
//                 <div className="mb-6 transform group-hover:scale-110 transition-transform">
//                   <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-[#0B2C4D]/10 group-hover:bg-[#1E5FA8]/20">
//                     <Icon className="text-[#0B2C4D]" size={28} />
//                   </div>
//                 </div>

//                 {/* TEXT */}
//                 <h3 className="text-xl font-bold text-[#0B2C4D] mb-3">
//                   {feature.title}
//                 </h3>

//                 <p className="text-slate-600 leading-relaxed">
//                   {feature.description}
//                 </p>
//               </div>
//             )
//           })}
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"

import { Shield, Users, Award, Leaf, CheckCircle2 } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Expert Team",
    description: "Licensed pharmacists with years of professional experience",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "All medications verified and quality checked before dispatch",
  },
  {
    icon: Shield,
    title: "Security First",
    description: "HIPAA-compliant systems protecting your personal health information",
  },
  {
    icon: Leaf,
    title: "Care & Compassion",
    description: "Patient-centered approach to every interaction and prescription",
  },
]

export default function FeaturesSection() {
  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-b from-white via-[#F4F9FF] to-white overflow-hidden"
    >
      {/* Soft background shapes */}
      <div className="absolute -top-24 -left-24 w-[420px] h-[420px] bg-blue-100/40 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-[420px] h-[420px] bg-[#1E5FA8]/10 rounded-full blur-3xl" />

      {/* SECTION HEADING (ABOVE ALL BOXES) */}
<div className="text-center mb-16">
  <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
    Why <span className="text-blue-700">Choose Us</span>
  </h2>
  <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
    Trusted care, clinical expertise, and modern pharmacy services.
  </p>
</div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* LEFT – INTRO PANEL */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl border border-blue-100 shadow-xl p-10 h-full flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-4 -py-4 rounded-full bg-blue-50 border border-blue-100 mb-6 ">
                  <CheckCircle2 className="w-4 h-4 text-blue-700" />
                  <span className="text-sm font-semibold text-blue-800">
                    Trusted Local Pharmacy
                  </span>
                </div>

                <h2 className="text-4xl font-extrabold text-slate-900 leading-tight mb-4">
                  Why Patients
                  <br />
                  <span className="text-blue-700">Choose Us</span>
                </h2>

                <p className="text-slate-600 text-lg leading-relaxed">
                  We combine clinical expertise, modern technology, and genuine care to deliver a pharmacy experience that’s reliable, secure, and personal.
                </p>
              </div>

              {/* Stats / Highlights */}
              <div className="grid grid-cols-2 gap-6 mt-5 pt-5 border-t border-slate-200">
                <div>
                  <p className="text-2xl font-bold text-slate-900">10+ Years</p>
                  <p className="text-sm text-slate-600">Industry Experience</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">HIPAA</p>
                  <p className="text-sm text-slate-600">Compliant Systems</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT – FEATURE TILES */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon

              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl border border-slate-200 p-7 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  {/* Accent Rail */}
                  <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#0B2C4D] to-[#1E5FA8]" />

                  {/* Icon */}
                  <div className="mb-5">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-blue-50 border border-blue-100 group-hover:scale-110 transition-transform">
                      <Icon className="text-blue-700" size={24} />
                    </div>
                  </div>

                  {/* Text */}
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
