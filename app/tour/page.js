import tour from '../data/tour.json'
import Card from '../components/Card'

export default function Tour() {
  return (
    <div>
      <h1>Tour Dates</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1rem'
      }}>
        {tour.map((show, i) => (
          <Card
            key={i}
            title={show.city}
            subtitle={`${show.date} @ ${show.venue}`}
          />
        ))}
      </div>
    </div>
  )
}
