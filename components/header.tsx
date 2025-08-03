"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          {/* Logo - Slimmer Header */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/images/miqas-logo.png"
              alt="Miqas Technologies"
              width={200}
              height={60}
              className="h-14 w-auto transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-[#ff7b54] transition-colors font-medium text-lg">
              Home
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-[#ff7b54] transition-colors font-medium text-lg">
              Services
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-[#ff7b54] transition-colors font-medium text-lg">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild className="bg-[#ff7b54] hover:bg-[#ff6b42] text-white font-semibold text-lg px-6 py-2">
              <Link href="/contact">Talk to Sales</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-[#ff7b54] transition-colors font-medium text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-gray-700 hover:text-[#ff7b54] transition-colors font-medium text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-[#ff7b54] transition-colors font-medium text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Button
                asChild
                className="bg-[#ff7b54] hover:bg-[#ff6b42] text-white w-fit font-semibold text-lg px-6 py-2"
              >
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  Talk to Sales
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
