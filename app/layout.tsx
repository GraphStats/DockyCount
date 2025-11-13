import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Roboto } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const robotoBlack = Roboto({
  weight: "900",
  subsets: ["latin"],
  variable: "--font-roboto-black",
})

export const metadata: Metadata = {
  title: "DockyCount - YouTube Real-Time Counter",
  description: "Track YouTube subscribers in real-time",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${robotoBlack.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
