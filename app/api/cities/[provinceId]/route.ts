import { NextResponse } from "next/server"
import { getCitiesByProvinceId, getProvinces } from "@/lib/data"

export const dynamic = "force-static"
export const revalidate = false

export async function GET(request: Request, { params }: { params: { provinceId: string } }) {
  try {
    const { provinceId } = params

    const province = getProvinces().find(p => p.id === provinceId)
    if (!province) {
      return NextResponse.json(
        {
          status: false,
          message: `Province with ID ${provinceId} not found`,
          data: null,
        },
        { status: 404 },
      )
    }

    const cities = getCitiesByProvinceId(provinceId)

    return NextResponse.json(
      {
        status: true,
        message: `Cities in province ${province.name} retrieved successfully`,
        data: cities,
      },
      { 
        status: 200,
        headers: {
          'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800'
        }
      }
    )
  } catch (error) {
    console.error("Error fetching cities:", error)
    return NextResponse.json(
      {
        status: false,
        message: "Failed to retrieve cities",
        data: null,
      },
      { status: 500 },
    )
  }
}

export function generateStaticParams() {
  const provinces = getProvinces()
  return provinces.map((province) => ({
    provinceId: province.id,
  }))
}



