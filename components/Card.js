"use client"

export default function Card({ title, subtitle, image, link }) {
  return (
    <a href={link || "#"} target="_blank" rel="noopener noreferrer">
      <div className="card">
        {image && <img src={image} alt={title} className="card-image" />}
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </a>
  )
}
