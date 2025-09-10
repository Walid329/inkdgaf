import AnimatedNavbar from "../components/AnimatedNavbar"
import Footer from "../components/Footer"
import "./globals.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AnimatedNavbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
