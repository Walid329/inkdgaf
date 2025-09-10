"use client"

import { useEffect, useState } from "react"
import { FaInstagram, FaSpotify, FaApple, FaYoutube, FaSoundcloud } from "react-icons/fa"

export default function Footer({ visible }) {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    if (visible) setAnimate(true)
  }, [visible])

  return (
    <footer className={`footer ${animate ? "fade-slide-in" : ""}`}>
      <div>© {new Date().getFullYear()} inkdgaf</div>
      <div className="social-links">
        <a href="https://www.instagram.com/inkdgaf/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://spotify.com" target="_blank" rel="noopener noreferrer"><FaSpotify /></a>
        <a href="https://music.apple.com/us/artist/inkdgaf/1811777517" target="_blank" rel="noopener noreferrer"><FaApple /></a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        <a href="https://soundcloud.com/user-571645570" target="_blank" rel="noopener noreferrer"><FaSoundcloud /></a>
      </div>
    </footer>
  )
}
