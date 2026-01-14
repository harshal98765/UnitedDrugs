"use client"

import Link from "next/link"
import { Heart } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-16">
         
          <div>
            <Image
            src="/logo.png"
            alt="DrugDropRx Logo"
            width={180}
            height={60}
            className="mb-4 object-contain"
           />
            <p className="text-primary-foreground/80 mb-4">
              Your trusted pharmacy partner for secure, reliable prescription services.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <Link href="#home" className="hover:text-primary-foreground transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-primary-foreground transition">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/telemedicine" className="hover:text-primary-foreground transition">
                  Telemedicine Clinic
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-primary-foreground transition">
                  Services
                </Link>
              </li>
                <li>
                <Link href="#contact" className="hover:text-primary-foreground transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  RX Submission
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Fast Delivery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Customer Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Insurance
                </a>
              </li>
            </ul>
          </div>

       
          <div>
            <h4 className="font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  HIPAA Compliance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Contact Info
                </a>
              </li>
            </ul>
          </div>
        </div>

     
        <div className="border-t border-primary-foreground/20"></div>

      
        <div className="py-8 flex flex-col sm:flex-row justify-between items-center text-primary-foreground/80 text-sm">
          <p>© {currentYear} LifeCarePharmacy. All rights reserved.</p>
          <p className="flex items-center gap-1 mt-4 sm:mt-0">
            Made with <Heart size={16} className="text-secondary" /> for your health
          </p>
        </div>
      </div>
    </footer>
  )
}
