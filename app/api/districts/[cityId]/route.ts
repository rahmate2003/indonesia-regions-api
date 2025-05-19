import { NextResponse } from "next/server"
import { getDistrictsByCityId, getCityById } from "@/lib/data"

export const dynamic = "force-static"
export const revalidate = false

export async function GET(request: Request, { params }: { params: { cityId: string } }) {
  try {
    const { cityId } = params

    // Check if city exists
    const city = getCityById(cityId)
    if (!city) {
      return NextResponse.json(
        {
          status: false,
          message: `City with ID ${cityId} not found`,
          data: null,
        },
        { status: 404 },
      )
    }

    const districts = getDistrictsByCityId(cityId)

    return NextResponse.json(
      {
        status: true,
        message: `Districts in city ${city.name} retrieved successfully`,
        data: districts,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error fetching districts:", error)
    return NextResponse.json(
      {
        status: false,
        message: "Failed to retrieve districts",
        data: null,
      },
      { status: 500 },
    )
  }
}

// Generate static paths for all cities
export function generateStaticParams() {
  const cities = getCityById()
  return cities.map((city) => ({
    cityId: city.id,
  }))
}
