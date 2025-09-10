"use client"

import { useEffect, useState } from "react"
import Navbar from "./Navbar"

export default function AnimatedNavbar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleEnter = () => setVisible(true)
    window.addEventListener("splashEntered", handleEnter)
    return () => window.removeEventListener("splashEntered", handleEnter)
  }, [])

  return (
    <div className={`navbar-container ${visible ? "fade-slide-in" : ""}`}>
      <Navbar />
    </div>
  )
}
