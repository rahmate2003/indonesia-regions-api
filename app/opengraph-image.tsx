import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Indonesia Regional API"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "linear-gradient(to bottom, #CE1126, #FFFFFF)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          padding: "40px",
        }}
      >
        <div style={{ fontSize: 64, fontWeight: "bold", marginBottom: 20 }}>
          Indonesia Regional API
        </div>
        <div style={{ fontSize: 32, textAlign: "center", maxWidth: "80%" }}>
          Data lengkap 38 provinsi, kota/kabupaten, kecamatan, dan desa di Indonesia
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}