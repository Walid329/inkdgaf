"use client"

import shop from '../../data/shop.json'
import Card from '../../components/Card'

export default function Shop() {
  return (
    <div className="page-wrapper">
      <div className="posts-container">
        <h1>shop</h1>
        <div className="grid">
          {shop.map((item, i) => (
            <Card
              key={i}
              title={item.name}       // product name
              subtitle={item.price}   // price below image
              image={item.image}      // image on top
              link={item.link}        // optional
            />
          ))}
        </div>
      </div>
    </div>
  )
}
