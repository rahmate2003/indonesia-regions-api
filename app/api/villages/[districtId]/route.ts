import { NextResponse } from "next/server"
import { getVillagesByDistrictId, getDistricts } from "@/lib/data"

export const dynamic = "force-static"
export const revalidate = false

export async function GET(request: Request, { params }: { params: { districtId: string } }) {
  try {
    const { districtId } = params

    // Check if district exists
    const district = getDistricts().find(d => d.id === districtId)
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

    const villages = getVillagesByDistrictId(districtId)

    return NextResponse.json(
      {
        status: true,
        message: `Villages in district ${district.name} retrieved successfully`,
        data: villages,
      },
      { status: 200 },
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
  const districts = getDistricts() // Gunakan getDistricts() bukan getDistrictById()
  return districts.map((district) => ({
    districtId: district.id,
  }))
}


