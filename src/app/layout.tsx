import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ooo shop',
  description: 'Built by AI Editor',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}