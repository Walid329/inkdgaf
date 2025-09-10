import music from '../../data/music.json'
import Card from '../../components/Card'

export default function Music() {
  return (
    <div>
      <h1>music</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1rem'
      }}>
        {music.map((track, i) => (
          <Card
            key={i}
            title={track.title}
            subtitle={track.year}
            link={track.link}
          />
        ))}
      </div>
    </div>
  )
}
