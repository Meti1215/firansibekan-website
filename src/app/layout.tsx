import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

import Chatbot from '@/components/Chatbot'
import MobileMotionProvider from '@/components/MobileMotionProvider'
import ScrollProgress from '@/components/ScrollProgress'
import { brand } from '@/lib/brand'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: `${brand.name} - ${brand.tagline}`,
  description: 'Firansibekan Trade and Investment is an Ethiopian company based in Addis Ababa, providing solutions in health & hospital systems, IT consulting, electromechanical works, and medical imaging.',
  keywords: 'Firansibekan, Firansibekan Trade & Investment, healthcare systems Ethiopia, IT consulting Addis Ababa, electromechanical works Ethiopia, Mindray DigiEye 330, digital X-Ray Ethiopia',
  authors: [{ name: brand.name }],
  robots: 'index, follow',
  metadataBase: new URL('http://localhost:3000'),
  openGraph: {
    title: `${brand.name} - ${brand.tagline}`,
    description: 'Discover the story and services of Firansibekan Trade and Investment across healthcare diagnostics, IT consulting, and electrical engineering.',
    type: 'website',
    locale: 'en_US',
  },
  icons: {
    icon: brand.logoPath,
    shortcut: brand.logoPath,
    apple: brand.logoPath,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">

        <MobileMotionProvider>
          <ScrollProgress />
          {children}
          <Chatbot />
        </MobileMotionProvider>
      </body>
    </html>
  )
}
