import Link from 'next/link'

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#111', color: '#fff' }}>
      <Link href="/">Home</Link> |{' '}
      <Link href="/music">Music</Link> |{' '}
      <Link href="/tour">Tour</Link> |{' '}
      <Link href="/shop">Shop</Link>
    </nav>
  )
}
