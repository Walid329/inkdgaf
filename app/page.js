"use client"

import { useState, useEffect } from "react"
import music from '../data/music.json'
import tour from '../data/tour.json'
import shop from '../data/shop.json'
import Card from '../components/Card'
import Footer from "../components/Footer"
import BackToTop from "../components/BackToTop"
import "./page.css"

export default function Home() {
  const [entered, setEntered] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)
  const [footerVisible, setFooterVisible] = useState(false)

  const handleEnter = () => {
    setFadeOut(true)
    setTimeout(() => {
      setEntered(true)
      window.dispatchEvent(new Event("splashEntered"))
      setFooterVisible(true)
    }, 500)
  }

  
  const allPosts = [...music, ...tour, ...shop]

  useEffect(() => {
    if (entered) window.scrollTo(0, 0)
  }, [entered])

  return (
    <>
     
      {!entered && (
        <div
          onClick={handleEnter}
          className={`splash ${fadeOut ? "fade-out" : ""}`}
        >
          <img
            src="/inkdgaf.png"
            alt="Enter Site"
            className="splash-image"
          />
        </div>
      )}

     
      {entered && (
        <div className="page-wrapper">
          <div className="posts-container">
            <h1>all posts</h1>
            <div className="grid">
              {allPosts.map((post, i) => {
                let title = post.title
                let subtitle = post.year || post.date || post.price || ""

                
                if (post.date && !post.year) {
                  
                  title = post.location || post.title
                  subtitle = post.date
                } else if (post.price && !post.date && !post.year) {
                  
                  title = post.item || post.title
                  subtitle = post.price
                }

                return (
                  <Card
                    key={i}
                    title={title}
                    subtitle={subtitle}
                    link={post.link || "#"}
                  />
                )
              })}
            </div>
            <BackToTop enabled={entered} />
          </div>
          <Footer visible={footerVisible} />
        </div>
      )}
    </>
  )
}
