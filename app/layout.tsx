import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Indonesia Regional API | Data 38 Provinsi, Kota, Kabupaten, Kecamatan, dan Desa",
  description: "API lengkap dan terstruktur untuk data wilayah Indonesia meliputi 38 provinsi, kota/kabupaten, kecamatan, dan desa/kelurahan. Diperbarui secara berkala.",
  keywords: "Indonesia API, data wilayah Indonesia, provinsi Indonesia, kota Indonesia, kabupaten, kecamatan, desa, kelurahan, regional data",
  openGraph: {
    title: "Indonesia Regional API | Data 38 Provinsi",
    description: "API lengkap untuk data wilayah administratif Indonesia",
    url: "https://indonesia-regions-api.vercel.app",
    siteName: "Indonesia Regional API",
    locale: "id_ID",
    type: "website",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://indonesia-regions-api.vercel.app",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

