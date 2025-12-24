import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'EagleX Logistics | Trucking & Freight Logistics | Ontario & Quebec',
  description: 'Reliable trucking and logistics execution across Ontario & Quebec. Commercial freight transportation, white glove execution, and end-to-end logistics coordination.',
  keywords: 'trucking, freight logistics, commercial logistics, Ontario, Quebec, white glove logistics, freight transportation',
  openGraph: {
    title: 'EagleX Logistics | Trucking & Freight Logistics',
    description: 'Reliable trucking and logistics execution across Ontario & Quebec.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
