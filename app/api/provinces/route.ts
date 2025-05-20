import { NextResponse } from "next/server"
import { getProvinces, getSortedProvincesByName } from "@/lib/data"

export const dynamic = "force-static"
export const revalidate = false

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const sort = searchParams.get('sort')
    
    const provinces = sort === 'name' 
      ? getSortedProvincesByName() 
      : getProvinces()

    return NextResponse.json(
      {
        status: true,
        statusCode: 200,
        message: "Provinces retrieved successfully",
        data: provinces,
      },
      { 
        status: 200,
        headers: {
          'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800'
        }
      }
    )
  } catch (error) {
    console.error("Error fetching provinces:", error)
    return NextResponse.json(
      {
        status: false,
        statusCode: 500,
        message: "Failed to retrieve provinces",
        data: null,
      },
      { status: 500 },
    )
  }
}




