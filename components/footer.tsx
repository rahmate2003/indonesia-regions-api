import Link from "next/link"
import { Github, Globe, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-muted/40">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Indonesia Regional API</h3>
            <p className="text-muted-foreground">
              API lengkap untuk data wilayah administratif Indonesia, meliputi 38 provinsi, kota/kabupaten, kecamatan, dan desa/kelurahan.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Tautan</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-muted-foreground hover:text-foreground transition-colors">
                  Dokumentasi API
                </Link>
              </li>
              <li>
                <Link 
                  href="https://github.com/rahmate2003/indonesia-regions-api" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Github className="h-4 w-4" />
                <a 
                  href="https://github.com/rahmate2003" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                <a 
                  href="https://rahmatw.my.id" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  rahmatw.my.id
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Indonesia Regional API. MIT Lisensi.
            </p>
            <p className="text-sm text-muted-foreground mt-2 md:mt-0">
              Dibuat dengan ❤️ untuk Indonesia
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}