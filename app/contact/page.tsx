"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", phone: "", email: "", message: "" })
    alert("Thank you for your inquiry! We will get back to you soon.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#ff7b54] to-[#ff6b42] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Get in touch with our team and let us help you transform your business with innovative solutions.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-[#ff7b54] hover:bg-[#ff6b42] text-white">
                    Submit Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="text-[#ff7b54] mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-gray-600">info@miqastech.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="text-[#ff7b54] mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold">Address</h4>
                      <p className="text-gray-600">
                        Khayaban Garden, Hassan Block,
                        <br />
                        Street #9, Faisalabad
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold flex items-center">
                    <Clock className="mr-2 text-[#ff7b54]" size={20} />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Monday - Saturday:</span>
                      <span className="text-gray-600">9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Sunday:</span>
                      <span className="text-gray-600">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Follow Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.linkedin.com/company/miqas-technologies/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-[#ff7b54] rounded-full flex items-center justify-center text-white hover:bg-[#ff6b42] transition-colors"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href="https://www.facebook.com/miqastech"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-[#ff7b54] rounded-full flex items-center justify-center text-white hover:bg-[#ff6b42] transition-colors"
                    >
                      <Facebook size={20} />
                    </a>
                    <a
                      href="https://www.instagram.com/miqastech"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-[#ff7b54] rounded-full flex items-center justify-center text-white hover:bg-[#ff6b42] transition-colors"
                    >
                      <Instagram size={20} />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Locations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Locations</h2>
            <p className="text-xl text-gray-600">We operate call centers across multiple cities to serve you better</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
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
            ].map((location, index) => (
              <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <MapPin className="w-12 h-12 text-[#ff7b54] mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{location.city}</h3>
                  <p className="text-gray-600">{location.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  )
}
