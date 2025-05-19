"use client"

import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
//as
export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between px-4 md:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-lg">Indonesia Regional API</span>
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="/docs" className="text-sm font-medium hover:underline underline-offset-4">
            Dokumentasi
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}

