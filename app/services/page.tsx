"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Wifi, Smartphone, Server, Shield, Globe2, TrendingUp, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"

const services = [
  {
    icon: Wifi,
    title: "Home Internet",
    description:
      "Reliable, high-speed internet for homes with 24/7 technical support, competitive pricing, and flexible packages to suit every household's needs.",
    features: [
      "High-speed fiber connections",
      "24/7 customer support",
      "Flexible data packages",
      "Easy installation process",
    ],
  },
  {
    icon: Smartphone,
    title: "Postpaid Plans",
    description:
      "Flexible and affordable mobile/data packages with unlimited calling, high-speed data, and international roaming options.",
    features: ["Unlimited local calls", "High-speed 4G/5G data", "International roaming", "Family sharing plans"],
  },
  {
    icon: Server,
    title: "IT Infrastructure",
    description:
      "Scalable technology solutions for business growth including cloud services, network setup, and digital transformation consulting.",
    features: ["Cloud migration services", "Network infrastructure", "Server management", "Digital transformation"],
  },
  {
    icon: Shield,
    title: "Security Solutions",
    description:
      "Advanced safety systems for your premises with cutting-edge surveillance technology, access control, and monitoring services.",
    features: ["CCTV surveillance systems", "Access control systems", "24/7 monitoring", "Mobile app integration"],
  },
  {
    icon: Globe2,
    title: "Web Solutions",
    description:
      "Professional websites, e-commerce platforms, and comprehensive digital services to establish your online presence effectively.",
    features: ["Custom website development", "E-commerce platforms", "Mobile-responsive design", "SEO optimization"],
  },
  {
    icon: TrendingUp,
    title: "Sales & Marketing",
    description:
      "Strategic campaigns to grow brand visibility and boost your sales revenue through digital marketing and lead generation.",
    features: ["Digital marketing campaigns", "Lead generation", "Social media management", "Brand development"],
  },
]

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#ff7b54] to-[#ff6b42] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Our solutions are tailored to meet your needs, combining innovation with reliability to deliver exceptional
            results for your business.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card key={index} className="service-card border-0 shadow-lg overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-[#ff7b54] rounded-full flex items-center justify-center flex-shrink-0">
                      <service.icon className="text-white" size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                      <p className="text-gray-600 mb-6">{service.description}</p>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-700">
                            <ArrowRight size={16} className="text-[#ff7b54] mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button asChild className="bg-[#ff7b54] hover:bg-[#ff6b42] text-white">
                        <Link href="/contact">Talk to Sales</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact our team today to discuss your requirements and discover how we can help transform your business
            with our innovative solutions.
          </p>
          <Button asChild size="lg" className="bg-[#ff7b54] hover:bg-[#ff6b42] text-white">
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  )
}
