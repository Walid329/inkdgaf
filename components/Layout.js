
import AnimatedNavbar from "../components/AnimatedNavbar"
import Footer from "../components/Footer"
import "./globals.css" 

export const metadata = {
  title: "inkdgaf",
  description: "Official artist site built with Next.js",
  icons: {
    icon: "/favicon.ico", 
  },
}

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
