import { NextResponse } from "next/server"
import { getProvinces } from "@/lib/data"

export const dynamic = "force-static"
export const revalidate = false

export async function GET() {
  try {
    const provinces = getProvinces()

    return NextResponse.json(
      {
        status: true,
        message: "Provinces retrieved successfully",
        data: provinces,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error fetching provinces:", error)
    return NextResponse.json(
      {
        status: false,
        message: "Failed to retrieve provinces",
        data: null,
      },
      { status: 500 },
    )
  }
}
