"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  ChevronLeft,
  ChevronRight,
  Globe,
  Users,
  DollarSign,
  Wifi,
  Smartphone,
  Server,
  Shield,
  Globe2,
  TrendingUp,
  ArrowRight,
  Mail,
  MapPin,
  Star,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import ScrollAnimation from "@/components/scroll-animation"

const services = [
  {
    icon: Wifi,
    title: "Home Internet",
    description: "Reliable, high-speed internet for homes with 24/7 support and competitive pricing.",
  },
  {
    icon: Smartphone,
    title: "Postpaid Plans",
    description: "Flexible and affordable mobile/data packages tailored to your communication needs.",
  },
  {
    icon: Server,
    title: "IT Infrastructure",
    description: "Scalable technology solutions for business growth and digital transformation.",
  },
  {
    icon: Shield,
    title: "Security Solutions",
    description: "Advanced safety systems for your premises with cutting-edge surveillance technology.",
  },
  {
    icon: Globe2,
    title: "Web Solutions",
    description: "Professional websites, e-commerce platforms, and comprehensive digital services.",
  },
  {
    icon: TrendingUp,
    title: "Sales & Marketing",
    description: "Strategic campaigns to grow brand visibility and boost your sales revenue.",
  },
]

const testimonials = [
  {
    name: "Ahmed Hassan",
    company: "Tech Solutions Ltd",
    content:
      "Miqas Technologies transformed our IT infrastructure completely. Their professional approach and innovative solutions exceeded our expectations.",
    rating: 5,
  },
  {
    name: "Sarah Khan",
    company: "Digital Marketing Pro",
    content:
      "Outstanding web development services! They delivered a beautiful, functional website that perfectly represents our brand.",
    rating: 5,
  },
  {
    name: "Muhammad Ali",
    company: "Secure Systems Inc",
    content:
      "Their security solutions are top-notch. We feel completely protected with their advanced surveillance systems in place.",
    rating: 5,
  },
]

const processSteps = [
  {
    title: "Lead Generation",
    description:
      "We identify and connect with potential customers through multiple channels including door-to-door marketing, online platforms, and referral systems.",
  },
  {
    title: "Telesales",
    description:
      "Our expert team engages prospects using our customized CRM system and presents tailored solutions that meet their specific needs.",
  },
  {
    title: "Fulfillment",
    description:
      "We deliver and implement solutions with ongoing support, ensuring customer satisfaction and long-term success.",
  },
]

const locations = [
  {
    city: "Faisalabad",
    description: "Main headquarters with comprehensive call center operations",
  },
  {
    city: "Lahore",
    description: "Strategic location serving Punjab region with dedicated teams",
  },
  {
    city: "Burewala",
    description: "Regional office providing localized customer support",
  },
]

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0)

    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-teaser")
    contactSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section with Moving Circles */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white text-gray-900 overflow-hidden min-h-screen flex items-center">
        {/* Moving Circles */}
        <div className="moving-circle"></div>
        <div className="moving-circle"></div>
        <div className="moving-circle"></div>
        <div className="moving-circle"></div>
        <div className="moving-circle"></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-[#ff7b54] font-medium mb-8 hero-text-animation opacity-0">
              <Star className="w-4 h-4 mr-2" />
              Redefining Customer Service Standards
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 hero-text-animation opacity-0">
              Empowering Your
              <br />
              <span className="text-[#ff7b54] relative">
                Business Solutions
                <div className="absolute -bottom-2 left-0 right-0 h-3 bg-orange-200 opacity-30 rounded"></div>
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto hero-subtext-animation opacity-0">
              Miqas Technologies is redefining customer service standards worldwide with innovative solutions and
              exceptional support.
            </p>

            {/* CTA Button */}
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-[#ff7b54] hover:bg-[#ff6b42] text-white text-lg px-8 py-4 rounded-full hero-button-animation opacity-0"
            >
              Get Free Consultation
              <ArrowRight className="ml-2" size={20} />
            </Button>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 hero-animation opacity-0">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#ff7b54] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="text-white" size={24} />
                </div>
                <div className="text-3xl font-bold text-gray-900">80+</div>
                <div className="text-gray-600">Projects Successfully Delivered</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#ff7b54] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-white" size={24} />
                </div>
                <div className="text-3xl font-bold text-gray-900">349+</div>
                <div className="text-gray-600">Clients Satisfied Worldwide</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#ff7b54] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="text-white" size={24} />
                </div>
                <div className="text-3xl font-bold text-gray-900">7+</div>
                <div className="text-gray-600">Years Industry Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Services Snapshot */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Key Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive solutions tailored to meet your business needs with innovation and reliability
              </p>
            </div>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <Card className="service-card border-0 shadow-lg h-full">
                  <CardContent className="p-8 text-center h-full flex flex-col">
                    <div className="w-16 h-16 bg-[#ff7b54] rounded-full flex items-center justify-center mx-auto mb-6">
                      <service.icon className="text-white" size={32} />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                    <Button
                      asChild
                      variant="outline"
                      className="border-[#ff7b54] text-[#ff7b54] hover:bg-[#ff7b54] hover:text-white bg-transparent"
                    >
                      <Link href="/services">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Miqas Technologies?</h2>
            </div>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation direction="left" delay={100}>
              <div className="text-center">
                <div className="w-20 h-20 bg-[#ff7b54] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="text-white" size={40} />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Global Presence</h3>
                <p className="text-gray-600">
                  Operating across multiple locations with call centers in Faisalabad, Lahore, and Burewala
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <div className="text-center">
                <div className="w-20 h-20 bg-[#ff7b54] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="text-white" size={40} />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Customer-Centric</h3>
                <p className="text-gray-600">
                  Dedicated to delivering exceptional customer service and building lasting relationships
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="right" delay={300}>
              <div className="text-center">
                <div className="w-20 h-20 bg-[#ff7b54] rounded-full flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="text-white" size={40} />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Affordable Solutions</h3>
                <p className="text-gray-600">
                  High-quality services at competitive prices, ensuring maximum value for your investment
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Our Locations - With Animated Background */}
      <section className="py-20 bg-gray-50 animated-background relative">
        {/* Floating Shapes */}
        <div className="floating-shapes">
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Locations</h2>
              <p className="text-xl text-gray-600">
                We operate call centers across multiple cities to serve you better
              </p>
            </div>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <ScrollAnimation key={index} delay={index * 150}>
                <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <MapPin className="w-12 h-12 text-[#ff7b54] mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{location.city}</h3>
                    <p className="text-gray-600">{location.description}</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            </div>
          </ScrollAnimation>
          <ScrollAnimation delay={200}>
            <div className="relative max-w-4xl mx-auto">
              <Card className="border-0 shadow-xl">
                <CardContent className="p-12 text-center">
                  <div className="mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <span key={i} className="text-[#ff7b54] text-2xl">
                        ★
                      </span>
                    ))}
                  </div>
                  <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 italic">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>
                  <div>
                    <p className="font-semibold text-lg">{testimonials[currentTestimonial].name}</p>
                    <p className="text-gray-600">{testimonials[currentTestimonial].company}</p>
                  </div>
                </CardContent>
              </Card>
              <button
                onClick={prevTestimonial}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
              >
                <ChevronLeft size={24} className="text-[#ff7b54]" />
              </button>
              <button
                onClick={nextTestimonial}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
              >
                <ChevronRight size={24} className="text-[#ff7b54]" />
              </button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Process Overview - Vertical Timeline with Animated Background */}
      <section className="py-20 bg-gray-50 animated-background relative">
        {/* Floating Shapes */}
        <div className="floating-shapes">
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
              <p className="text-xl text-gray-600">A streamlined approach to delivering exceptional results</p>
            </div>
          </ScrollAnimation>
          <div className="max-w-4xl mx-auto">
            <div className="process-timeline">
              {processSteps.map((step, index) => (
                <ScrollAnimation key={index} delay={index * 200}>
                  <div className="process-step">
                    <div className="process-number">{index + 1}</div>
                    <div className="process-content">
                      <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Teaser */}
      <section id="contact-teaser" className="py-20 bg-[#ff7b54] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get in touch with our experts today and discover how we can help you achieve your goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center">
                <Mail className="mr-2" size={20} />
                <span>info@miqastech.com</span>
              </div>
            </div>
            <Button asChild size="lg" className="bg-white text-[#ff7b54] hover:bg-gray-100">
              <Link href="/contact">Talk to Sales</Link>
            </Button>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  )
}
