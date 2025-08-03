import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <Image
                src="/images/miqas-logo.png"
                alt="Miqas Technologies"
                width={200}
                height={66}
                className="h-16 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-4 text-lg">
              Empowering your business with innovative solutions and redefining customer service standards worldwide.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.linkedin.com/company/miqas-technologies/"
                className="text-gray-300 hover:text-[#ff7b54] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={28} />
              </Link>
              <Link
                href="https://www.facebook.com/miqastech"
                className="text-gray-300 hover:text-[#ff7b54] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={28} />
              </Link>
              <Link
                href="https://www.instagram.com/miqastech"
                className="text-gray-300 hover:text-[#ff7b54] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={28} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[#ff7b54] transition-colors text-lg">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-[#ff7b54] transition-colors text-lg">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-[#ff7b54] transition-colors text-lg">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail size={20} className="mr-3 text-[#ff7b54]" />
                <span className="text-gray-300 text-lg">info@miqastech.com</span>
              </div>
              <div className="flex items-start">
                <MapPin size={20} className="mr-3 text-[#ff7b54] mt-1" />
                <span className="text-gray-300 text-lg">
                  Khayaban Garden, Hassan Block,
                  <br />
                  Street #9, Faisalabad
                </span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Opening Hours</h3>
            <div className="space-y-4">
              <div className="text-gray-300 text-lg">
                <span className="font-medium">Monday - Saturday:</span>
                <br />
                9:00 AM - 5:00 PM
              </div>
              <div className="text-gray-300 text-lg">
                <span className="font-medium">Sunday:</span>
                <br />
                Closed
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-lg">© {new Date().getFullYear()} Miqas Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
