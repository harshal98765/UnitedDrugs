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
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center gap-4">
        {/* Left content */}
        <div className="w-full md:w-1/3 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-neutral-900/10 px-4 py-2 rounded-full border border-neutral-900/10 mb-4">
            <span className="text-sm font-semibold">WHY CHOOSE US</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            What We Provide
          </h2>

          <p className="text-base text-muted-foreground max-w-prose leading-relaxed">
            Experience exceptional healthcare solutions designed to exceed your
            expectations and ensure your wellness.
          </p>
        </div>

        {/* Right: rotating cards + center logo */}
        <div className="w-full md:w-2/3">
          <div className="void mx-auto" id="void">
            <div className="crop">
              <ul
                id="card-list"
                style={{ ["--count" as any]: services.length }}
              >
                {services.map((service, i) => {
                  const Icon = service.icon;
                  return (
                    <li key={i} className="list">
                      <div className="card">
                        <a href="#" className="flex items-center gap-4">
                          <Icon className="service-icon" size={28} />
                          <div>
                            <span className="model-name">{service.title}</span>
                            <span className="block text-sm text-muted-foreground">
                              {service.title} services and benefits
                            </span>
                          </div>
                        </a>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <div className="last-circle"></div>
              <div className="second-circle"></div>
            </div>

            <div className="center-circle flex justify-center items-center">
              <div className="p-5 flex justify-center items-center w-full h-full">
                <img
                  src={logo.src}
                  alt="Logo"
                  className="object-contain w-full h-full rounded-full"
                />
              </div>
            </div>
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

          /* Responsive: stack on small screens and disable rotation for usability */
          @media (max-width: 640px) {
            .void {
              width: 100%;
              max-width: 100%;
              aspect-ratio: auto;
              padding: 0 8px;
            }

            ul {
              position: static;
              display: flex;
              flex-direction: column;
              gap: 12px;
              aspect-ratio: auto;
            }

            li {
              position: static;
              transform: none;
              animation: none;
            }

            .card {
              width: 100%;
              animation: none;
            }

            .crop {
              -webkit-mask-image: none;
            }

            .center-circle {
              position: relative;
              width: 120px;
              margin: 20px auto 0;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
