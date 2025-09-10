import Footer from "../components/Footer"
import AnimatedNavbar from "../components/AnimatedNavbar"
import "./globals.css"


export const metadata = {
  title: "inkdgaf",
  description: "music, tour dates, and shop from inkdgaf",
  icons: {
    icon: "/inkgaf.png", 
  },
  openGraph: {
    title: "inkdgaf",
    description: "music, tour dates, and shop from inkdgaf",
    url: "https://inkdgaf.vercel.app/",
    siteName: "inkdgaf",
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
        alt: "inkdgaf",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "inkdgaf",
    description: "music, tour dates, and shop from inkdgaf",
    images: ["/og-image.png"],
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
