import '../styles/globals.css'

export default function Card({ title, subtitle, image, link }) {
  return (
    <div className="card">
      {image && (
        <img src={image} alt={title} />
      )}
      <h3>{title}</h3>
      {subtitle && <p>{subtitle}</p>}
      {link && (
        <a href={link} target="_blank" rel="noreferrer">
          Listen
        </a>
      )}
    </div>
  )
}
