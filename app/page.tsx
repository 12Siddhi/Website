"use client"

import { useState } from "react"
import { LogoSplash } from "@/components/logo-splash"
import { LoginForm } from "@/components/login-form"
import { Homepage } from "@/components/homepage"

type AppState = "splash" | "login" | "home"

export default function Page() {
  const [currentState, setCurrentState] = useState<AppState>("splash")

  const handleSplashComplete = () => {
    setCurrentState("login")
  }

  const handleLogin = () => {
    setCurrentState("home")
  }

  return (
    <>
      {currentState === "splash" && <LogoSplash onComplete={handleSplashComplete} />}
      {currentState === "login" && <LoginForm onLogin={handleLogin} />}
      {currentState === "home" && <Homepage />}
    </>
  )
}
