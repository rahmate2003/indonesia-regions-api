import { NextResponse } from "next/server"
import { 
  getDistrictsByCityId, 
  getCityById, 
  getCities, 
  getSortedDistrictsByCityId 
} from "@/lib/data"

export const dynamic = "force-static"
export const revalidate = false

export async function GET(request: Request, { params }: { params: { cityId: string } }) {
  try {
    const { cityId } = params
    const { searchParams } = new URL(request.url)
    const sort = searchParams.get('sort')

    // Check if city exists
    const city = getCityById(cityId)
    if (!city) {
      return NextResponse.json(
        {
          status: false,
          statusCode: 404,
          message: `City with ID ${cityId} not found`,
          data: null,
        },
        { status: 404 },
      )
    }

    // Use the appropriate function based on sort parameter
    const districts = sort === 'name' 
      ? getSortedDistrictsByCityId(cityId) 
      : getDistrictsByCityId(cityId)

    return NextResponse.json(
      {
        status: true,
        statusCode: 200,
        message: `Districts in city ${city.name} retrieved successfully`,
        data: districts,
      },
      { 
        status: 200,
        headers: {
          'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800'
        }
      }
    )
  } catch (error) {
    console.error("Error fetching districts:", error)
    return NextResponse.json(
      {
        status: false,
        statusCode: 500,
        message: "Failed to retrieve districts",
        data: null,
      },
      { status: 500 },
    )
  }
}

// Generate static paths for all cities
export function generateStaticParams() {
  const cities = getCities()
  return cities.map((city) => ({
    cityId: city.id,
  }))
}




