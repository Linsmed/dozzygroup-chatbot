import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import LexChatbot from "./LexChatbot"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "600"], // ✅ only 300 and 600 loaded
})

export const metadata: Metadata = {
  title: "Dozzy Group - Redefining the Future",
  description: "Redefining the Future through Innovation and Creativity",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
        <LexChatbot />
      </body>
    </html>
  )
}
