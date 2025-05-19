import { NextResponse } from "next/server"
import { getProvinces, getCities, getDistricts } from "@/lib/data"

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://indonesia-regions-api.vercel.app'
  
  // Dapatkan semua data untuk sitemap
  const provinces = getProvinces()
  
  // Buat sitemap XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/docs</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  ${provinces.map(province => `
  <url>
    <loc>${baseUrl}/api/provinces/${province.id}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`).join('')}
</urlset>`

  return new NextResponse(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400'
    }
  })
}