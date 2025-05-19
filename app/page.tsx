import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Metadata } from "next"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-24">
      <div className="max-w-5xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Indonesia Regional API</h1>
          <p className="text-xl text-muted-foreground mb-4">
            API lengkap untuk 38 provinsi, kota/kabupaten, kecamatan, dan desa/kelurahan di Indonesia
          </p>
          <p className="text-lg mb-6">
            Akses data wilayah Indonesia yang terstruktur, lengkap, dan diperbarui secara berkala. 
            Ideal untuk aplikasi e-commerce, pendidikan, pemerintahan, dan layanan berbasis lokasi.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Button asChild size="lg">
              <Link href="/docs">Dokumentasi API</Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link
                href="https://github.com/yourusername/indonesia-regional-api"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Tambahkan section fitur utama */}
        <section className="my-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Fitur Utama</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Data Lengkap</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Mencakup 38 provinsi, ratusan kota/kabupaten, ribuan kecamatan, dan puluhan ribu desa/kelurahan di seluruh Indonesia.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Performa Tinggi</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Dioptimalkan dengan static generation dan caching untuk respons cepat dan pengalaman pengguna yang lancar.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Mudah Digunakan</CardTitle>
              </CardHeader>
              <CardContent>
                <p>API endpoint yang intuitif dengan format respons JSON yang konsisten dan dokumentasi lengkap.</p>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* Tambahkan contoh penggunaan */}
        <section className="my-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Contoh Penggunaan</h2>
          <Card>
            <CardContent className="p-6">
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                <code>{`// Mendapatkan semua provinsi
fetch('/api/provinces')
  .then(response => response.json())
  .then(data => console.log(data));

// Mendapatkan kota/kabupaten berdasarkan ID provinsi
fetch('/api/cities/11')
  .then(response => response.json())
  .then(data => console.log(data));`}</code>
              </pre>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}

// Tambahkan structured data untuk SEO
export function generateMetadata(): Metadata {
  return {
    other: {
      'google-site-verification': 'YOUR-VERIFICATION-CODE',
    },
  }
}

