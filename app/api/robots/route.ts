import { NextResponse } from "next/server"

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://indonesia-regions-api.vercel.app'
  
  const robots = `User-agent: *
Allow: /
Sitemap: ${baseUrl}/sitemap.xml`

  return new NextResponse(robots, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400'
    }
  })
}