import { NextResponse } from "next/server"
import { 
  getVillagesByDistrictId, 
  getDistrictById, 
  getDistricts, 
  getSortedVillagesByDistrictId 
} from "@/lib/data"

export const dynamic = "force-static"
export const revalidate = false

export async function GET(request: Request, { params }: { params: { districtId: string } }) {
  try {
    const { districtId } = params
    const { searchParams } = new URL(request.url)
    const sort = searchParams.get('sort')

    // Check if district exists
    const district = getDistrictById(districtId)
    if (!district) {
      return NextResponse.json(
        {
          status: false,
          message: `District with ID ${districtId} not found`,
          data: null,
        },
        { status: 404 },
      )
    }

    // Use the appropriate function based on sort parameter
    const villages = sort === 'name' 
      ? getSortedVillagesByDistrictId(districtId) 
      : getVillagesByDistrictId(districtId)

    return NextResponse.json(
      {
        status: true,
        message: `Villages in district ${district.name} retrieved successfully`,
        data: villages,
      },
      { 
        status: 200,
        headers: {
          'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800'
        }
      }
    )
  } catch (error) {
    console.error("Error fetching villages:", error)
    return NextResponse.json(
      {
        status: false,
        message: "Failed to retrieve villages",
        data: null,
      },
      { status: 500 },
    )
  }
}

// Generate static paths for all districts
export function generateStaticParams() {
  const districts = getDistricts()
  return districts.map((district) => ({
    districtId: district.id,
  }))
}






