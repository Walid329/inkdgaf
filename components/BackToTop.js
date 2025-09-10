"use client"

import { useState, useEffect } from "react"

export default function BackToTop({ enabled }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!enabled) return

    const toggleVisible = () => {
      if (window.scrollY > 200) setVisible(true)
      else setVisible(false)
    }

    window.addEventListener("scroll", toggleVisible)
    return () => window.removeEventListener("scroll", toggleVisible)
  }, [enabled])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (!enabled) return null

  return (
    <button
      onClick={scrollToTop}
      className={`back-to-top ${visible ? "show" : ""}`}
    >
      ↑ Top
    </button>
  )
}
