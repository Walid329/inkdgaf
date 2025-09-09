import shop from '../data/shop.json'
import Card from '../components/Card'

export default function Shop() {
  return (
    <div>
      <h1>Shop</h1>
      <div className="grid">
        {shop.map((item, i) => (
          <Card
            key={i}
            title={item.name}
            subtitle={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  )
}
