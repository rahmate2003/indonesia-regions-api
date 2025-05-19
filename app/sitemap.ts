import { MetadataRoute } from "next"
import { getProvinces } from "@/lib/data"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://api-regional-indonesia.vercel.app"
  const provinces = getProvinces()
  
  // Halaman statis
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/docs`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
  ]
  
  // Halaman provinsi
  const provincePages = provinces.map((province) => ({
    url: `${baseUrl}/api/provinces/${province.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))
  
  return [...staticPages, ...provincePages]
}