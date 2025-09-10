"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const onSplashEnter = () => setAnimate(true)
    window.addEventListener("splashEntered", onSplashEnter)
    return () => window.removeEventListener("splashEntered", onSplashEnter)
  }, [])

  return (
    <nav className={`navbar-container ${animate ? "fade-slide-in" : ""}`}>
      <div className="nav-container">
        <div className="nav-logo">inkdgaf</div>

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          &#9776;
        </div>

        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <Link href="/" onClick={() => setIsOpen(false)}>home</Link>
          <Link href="/music" onClick={() => setIsOpen(false)}>music</Link>
          <Link href="/tour" onClick={() => setIsOpen(false)}>tour</Link>
          <Link href="/shop" onClick={() => setIsOpen(false)}>shop</Link>
        </div>
      </div>
    </nav>
  )
}
