"use client";

import React from "react";
import logo from "../public/logo1.jpeg";
import { Truck, Clock, Pill, Heart, Shield, Zap } from "lucide-react";

const services = [
  { icon: Truck, title: "Free Delivery" },
  { icon: Clock, title: "24/7 Support" },
  { icon: Pill, title: "Prescriptions" },
  { icon: Heart, title: "Health Care" },
  { icon: Shield, title: "Secure & Safe" },
  { icon: Zap, title: "Fast Service" },
];

export default function RotatingCards() {
  return (
    <div>
      {/* <h1 className="translate-y-10">Servcies</h1> */}
      <div className="void" id="void">
        <div className="crop">
          <ul id="card-list" style={{ ["--count" as any]: 6 }}>
            {[...Array(6)].map((_, i) => (
              <li key={i}>
                <div className="card">
                  <a href="#">
                    <span className="model-name">Gretel-ACTGAN</span>
                    <span>
                      Model for generating highly dimensional, mostly numeric,
                      tabular data
                    </span>
                  </a>
                </div>
              </li>
            ))}
          </ul>

          <div className="last-circle"></div>
          <div className="second-circle"></div>
        </div>

        <div className="mask">
          <div className="services-grid">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="service-item">
                  <Icon className="service-icon" size={32} />
                  <p className="service-title">{service.title}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="center-circle flex justify-center items-center">
          <div className="p-5 flex justify-center items-center">
            <img
              src={logo.src}
              alt="Logo"
              className="object-contain w-full h-full rounded-full"
            />
          </div>
        </div>
        <style jsx global>{`
          :root {
            --rotate-speed: 40;
            --count: 8;
            --easeInOutSine: cubic-bezier(0.37, 0, 0.63, 1);
            --easing: cubic-bezier(0, 0.37, 1, 0.63);
          }

          body {
            margin: 0;
          }

          .void {
            width: 100%;
            max-width: 1024px;
            margin: auto;
            position: relative;
            aspect-ratio: 1 / 1;
          }

          ul:hover * {
            animation-play-state: paused;
          }

          ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            position: relative;
            width: 100%;
            aspect-ratio: 1 / 1;
            z-index: 1;
          }

          li {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 100%;
            animation: rotateCW calc(var(--rotate-speed) * 1s) var(--easing)
              infinite;
          }

          .card {
            width: 27%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 16px 24px;
            gap: 8px;
            background: #ffffff;
            box-shadow:
              0px 4px 12px rgba(0, 0, 0, 0.1),
              0px 16px 32px rgba(0, 0, 0, 0.1);
            border-radius: 12px;
            font-family: Inter, sans-serif;
            font-size: 14px;
            line-height: 20px;
            color: #2464ca;
            animation: rotateCCW calc(var(--rotate-speed) * 1s) var(--easing)
              infinite;
          }

          a {
            text-decoration: none;
            color: unset;
          }

          .model-name {
            font-weight: 500;
            font-size: 18px;
            line-height: 150%;
            color: #48494a;
            display: block;
          }

          li:nth-child(2),
          li:nth-child(2) .card {
            animation-delay: calc((var(--rotate-speed) / var(--count)) * -1s);
          }
          li:nth-child(3),
          li:nth-child(3) .card {
            animation-delay: calc((var(--rotate-speed) / var(--count)) * -2s);
          }
          li:nth-child(4),
          li:nth-child(4) .card {
            animation-delay: calc((var(--rotate-speed) / var(--count)) * -3s);
          }
          li:nth-child(5),
          li:nth-child(5) .card {
            animation-delay: calc((var(--rotate-speed) / var(--count)) * -4s);
          }
          li:nth-child(6),
          li:nth-child(6) .card {
            animation-delay: calc((var(--rotate-speed) / var(--count)) * -5s);
          }

          @keyframes rotateCW {
            from {
              transform: translate3d(0px, -50%, -1px) rotate(-45deg);
            }
            to {
              transform: translate3d(0px, -50%, 0px) rotate(-315deg);
            }
          }

          @keyframes rotateCCW {
            from {
              transform: rotate(45deg);
            }
            to {
              transform: rotate(315deg);
            }
          }

          @keyframes pulseGlow {
            from {
              background-size: 60%;
            }
            to {
              background-size: 100%;
            }
          }

          .center-circle {
            position: absolute;
            width: 230px;
            aspect-ratio: 1 / 1;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            background: #ffffff;
            box-shadow:
              0px 18px 36px -18px rgba(12, 5, 46, 0.3),
              0px 30px 60px -12px rgba(12, 5, 46, 0.25);
            border-radius: 50%;
          }

          .second-circle {
            position: absolute;
            width: 40%;
            aspect-ratio: 1 / 1;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            background: #87b1f1;
            opacity: 0.5;
            border-radius: 50%;
          }

          .last-circle {
            position: absolute;
            width: 66%;
            aspect-ratio: 1 / 1;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            background: #87b1f1;
            opacity: 0.25;
            border-radius: 50%;
          }

          .crop {
            -webkit-mask-image: linear-gradient(
              90deg,
              rgba(0, 0, 0, 0),
              rgba(0, 0, 0, 0) 50%,
              rgba(0, 0, 0, 1) 50%,
              rgba(0, 0, 0, 1)
            );
          }

          .mask {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            width: 50%;
            animation: pulseGlow 5s linear infinite alternate;
            background-position: 100% 50%;
            background-repeat: no-repeat;
            background-image: radial-gradient(
              100% 50% at 100% 50%,
              rgba(26, 104, 229, 0.25) 0%,
              rgba(32, 26, 229, 0) 100%
            );
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .services-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
            padding: 32px;
            width: 100%;
            height: 100%;
            align-content: center;
          }

          .service-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 12px;
            padding: 20px;
            background: rgb(255, 255, 255);
            border: 1px solid rgba(255, 255, 255, 0.15);
            border-radius: 12px;
            backdrop-filter: blur(10px);
            transition: all 0.3s ease;
            cursor: pointer;
          }

          .service-item:hover {
            background: rgba(255, 255, 255, 0.12);
            border-color: rgba(255, 255, 255, 0.25);
            transform: translateY(-4px);
          }

          .service-icon {
            color: #1a68e5;
            animation: float 3s ease-in-out infinite;
          }

          .service-item:nth-child(2) .service-icon {
            animation-delay: 0.1s;
          }

          .service-item:nth-child(3) .service-icon {
            animation-delay: 0.2s;
          }

          .service-item:nth-child(4) .service-icon {
            animation-delay: 0.3s;
          }

          .service-item:nth-child(5) .service-icon {
            animation-delay: 0.4s;
          }

          .service-item:nth-child(6) .service-icon {
            animation-delay: 0.5s;
          }

          .service-title {
            font-size: 14px;
            font-weight: 600;
            color: #000000;
            margin: 0;
            text-align: center;
          }

          @keyframes float {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-8px);
            }
          }

          .mask:after {
            content: "";
            position: absolute;
            width: 1px;
            height: 100%;
            right: 0;
            background-image: linear-gradient(
              180deg,
              rgba(60, 26, 229, 0) 0%,
              #3c1ae5 50%,
              rgba(60, 26, 229, 0) 100%
            );
          }
        `}</style>
      </div>
    </div>
  );
}

// "use client"

// import { useState, useEffect } from "react"
// import {
//   ChevronLeft,
//   ChevronRight,
//   Pill,
//   Truck,
//   Clock,
//   Sparkles
// } from "lucide-react"
// import Link from "next/link"

// const services = [
//   {
//     icon: Truck,
//     title: "Free Delivery Service",
//     description:
//       "Enjoy fast, reliable home delivery of your prescriptions and health products at no extra cost convenient, secure, and right to your doorstep.",
//     color: "from-neutral-900/12 to-neutral-900/5",
//     accentColor: "text-neutral-900",
//     badge: "Fast Track",
//   },
//   {
//     icon: Clock,
//     title: "Health Consultations",
//     description:
//       "Get personalized health advice from our experienced pharmacists for better wellness.",
//     color: "from-neutral-700/12 to-neutral-700/5",
//     accentColor: "text-neutral-800",
//     badge: "Extended Hours",
//   },
//   {
//     icon: Pill,
//     title: "Prescription Services",
//     description:
//       "We provide accurate and timely prescription filling for your medications.",
//     color: "from-neutral-800/12 to-neutral-800/5",
//     accentColor: "text-neutral-900",
//     badge: "Premium Service",
//   },
// ]

// export default function ServicesCarousel() {
//   const [current, setCurrent] = useState(0)
//   const [isAutoPlay, setIsAutoPlay] = useState(true)
//   const [direction, setDirection] = useState("right")

//   useEffect(() => {
//     if (!isAutoPlay) return
//     const timer = setInterval(() => {
//       setDirection("right")
//       setCurrent((prev) => (prev + 1) % services.length)
//     }, 6000)
//     return () => clearInterval(timer)
//   }, [isAutoPlay])

//   const next = () => {
//     setDirection("right")
//     setCurrent((prev) => (prev + 1) % services.length)
//     setIsAutoPlay(false)
//   }

//   const prev = () => {
//     setDirection("left")
//     setCurrent((prev) => (prev - 1 + services.length) % services.length)
//     setIsAutoPlay(false)
//   }

//   return (
//     <section
//       id="services"
//       className="relative py-24 bg-gradient-to-b from-background via-background to-white/60 overflow-hidden"
//     >
//       {/* GRAY BLOBS */}
//       <div className="absolute top-40 right-0 w-96 h-96 bg-neutral-900/5 rounded-full blur-3xl" />
//       <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-neutral-700/5 rounded-full blur-3xl" />

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* HEADER */}
//         <div className="text-center mb-20 animate-slideInUp space-y-4">

//           <div className="inline-flex items-center gap-2 bg-neutral-900/10 px-4 py-2 rounded-full border border-neutral-900/20">
//             <Sparkles className="w-4 h-4 text-neutral-800" />
//             <span className="text-sm font-semibold text-neutral-800">
//               WHY CHOOSE US
//             </span>
//           </div>

//           <h2 className="hero-title serif-heading leading-tight">
//             <span className="text-foreground">What We </span>
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-neutral-600">
//               Offer
//             </span>
//           </h2>

//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
//             Experience exceptional healthcare solutions designed to exceed your expectations and ensure your wellness.
//           </p>
//         </div>

//         {/* CAROUSEL */}
//         <div className="relative animate-fadeInScale">
//           <div className="overflow-hidden rounded-3xl">
//             <div
//               className="flex transition-all duration-700 ease-out"
//               style={{ transform: `translateX(-${current * 100}%)` }}
//             >
//               {services.map((service, index) => {
//                 const Icon = service.icon
//                 return (
//                   <div key={index} className="w-full flex-shrink-0">
//                     <div
//                       className={`bg-gradient-to-br ${service.color} rounded-3xl p-12 md:p-16 lg:p-20 border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500`}
//                     >
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

//                         {/* ICON SIDE */}
//                         <div className="flex flex-col items-start gap-8">
//                           <div className="px-3 py-1.5 bg-white/50 border border-neutral-300 rounded-full text-xs font-semibold tracking-wide text-foreground">
//                             {service.badge}
//                           </div>

//                           <div className="animate-float">
//                             <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-white/70 to-white/30 rounded-3xl flex items-center justify-center shadow-lg backdrop-blur-sm border border-neutral-300">
//                               <Icon
//                                 className={`${service.accentColor} w-12 h-12 md:w-16 md:h-16`}
//                               />
//                             </div>
//                           </div>
//                         </div>

//                         {/* TEXT */}
//                         <div className="space-y-6">
//                           <h3 className="text-4xl md:text-5xl font-bold serif-heading text-foreground leading-tight">
//                             {service.title}
//                           </h3>

//                           <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
//                             {service.description}
//                           </p>

//                           <Link href="/ALLservice">
//                             <button className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-semibold rounded-xl hover:bg-neutral-800 transition-all duration-300 hover:-translate-y-1 mt-2">
//                               Learn More
//                               <ChevronRight className="w-4 h-4" />
//                             </button>
//                           </Link>
//                         </div>

//                       </div>
//                     </div>
//                   </div>
//                 )
//               })}
//             </div>
//           </div>

//           {/* NAV BUTTONS */}
//           <button
//             onClick={prev}
//             className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 md:-translate-x-16 lg:-translate-x-20 bg-black text-white rounded-full p-4 hover:bg-neutral-800 transition-all duration-300 z-10 group"
//           >
//             <ChevronLeft className="w-6 h-6 group-hover:scale-125 transition-transform" />
//           </button>

//           <button
//             onClick={next}
//             className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 md:translate-x-16 lg:translate-x-20 bg-black text-white rounded-full p-4 hover:bg-neutral-800 transition-all duration-300 z-10 group"
//           >
//             <ChevronRight className="w-6 h-6 group-hover:scale-125 transition-transform" />
//           </button>

//           {/* DOTS */}
//           <div className="flex justify-center gap-4 mt-12">
//             {services.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => {
//                   setCurrent(index)
//                   setIsAutoPlay(false)
//                 }}
//                 className={`transition-all duration-500 rounded-full ${
//                   index === current
//                     ? "bg-black w-12 h-4 shadow-lg"
//                     : "bg-neutral-300 w-4 h-4 hover:bg-neutral-500 hover:scale-125"
//                 }`}
//               />
//             ))}
//           </div>

//           <div className="text-center mt-8 text-muted-foreground text-sm font-medium">
//             <span className="text-neutral-900 font-semibold">
//               {current + 1}
//             </span>{" "}
//             of {services.length}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
