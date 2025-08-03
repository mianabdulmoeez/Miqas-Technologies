"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  direction?: "up" | "left" | "right"
  delay?: number
}

export default function ScrollAnimation({
  children,
  className = "",
  direction = "up",
  delay = 0,
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay])

  const getAnimationClass = () => {
    switch (direction) {
      case "left":
        return `scroll-animate-left ${isVisible ? "animate" : ""}`
      case "right":
        return `scroll-animate-right ${isVisible ? "animate" : ""}`
      default:
        return `scroll-animate ${isVisible ? "animate" : ""}`
    }
  }

  return (
    <div ref={ref} className={`${getAnimationClass()} ${className}`}>
      {children}
    </div>
  )
}
