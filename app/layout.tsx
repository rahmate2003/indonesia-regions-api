import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Indonesia Regional API | Data 38 Provinsi, Kota, Kabupaten, Kecamatan, dan Desa",
  description: "API lengkap dan terstruktur untuk data wilayah Indonesia meliputi 38 provinsi, kota/kabupaten, kecamatan, dan desa/kelurahan. Gratis, akurat, dan diperbarui secara berkala untuk kebutuhan pengembangan aplikasi Anda.",
  keywords: [
    "Indonesia API", 
    "data wilayah Indonesia", 
    "provinsi Indonesia", 
    "kota Indonesia", 
    "kabupaten Indonesia", 
    "kecamatan Indonesia", 
    "desa Indonesia", 
    "kelurahan Indonesia", 
    "regional data", 
    "API wilayah", 
    "data administratif", 
    "kode wilayah", 
    "REST API Indonesia", 
    "JSON API", 
    "developer tools Indonesia",
    "API Wilayah Administratif Indonesia"
  ],
  authors: [
    { name: "Rahmat", url: "https://rahmatw.my.id" }
  ],
  creator: "Rahmat",
  publisher: "Indonesia Regional API",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://api-regional-indonesia.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      "id-ID": "/",
      "en-US": "/",
    },
  },
  openGraph: {
    title: "Indonesia Regional API | Data 38 Provinsi",
    description: "API lengkap untuk data wilayah administratif Indonesia meliputi provinsi, kota/kabupaten, kecamatan, dan desa/kelurahan.",
    url: "https://api-regional-indonesia.vercel.app",
    siteName: "Indonesia Regional API",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Indonesia Regional API",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Indonesia Regional API | Data Wilayah Indonesia",
    description: "API lengkap untuk data wilayah administratif Indonesia",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "zb1xK8_RFyG6duy4Ap3n7VcAtNbBTI5ZuPocp68tBQ0",
    other: {
      "msvalidate.01": "DA196F3734FDE026EEC2EDC7239CA63B",
    },
  },
  category: "Technology",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
            <ScrollToTop />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}




