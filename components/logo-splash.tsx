"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

interface LogoSplashProps {
  onComplete: () => void
}

export function LogoSplash({ onComplete }: LogoSplashProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onComplete, 500) // Wait for fade out animation
    }, 3000) // Show splash for 3 seconds

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-background via-muted to-secondary transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex flex-col items-center space-y-8">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl animate-pulse" />
          <div className="relative flex h-40 w-40 items-center justify-center">
            <Image
              src="/images/ecox-logo.jpeg"
              alt="ECOX Logo"
              width={160}
              height={160}
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className="text-center space-y-2">
          <p className="text-lg text-muted-foreground font-medium">Smart Waste Management</p>
        </div>

        {/* Loading indicator */}
        <div className="flex space-x-2">
          <div className="h-2 w-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0ms" }} />
          <div className="h-2 w-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "150ms" }} />
          <div className="h-2 w-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "300ms" }} />
        </div>
      </div>
    </div>
  )
}
