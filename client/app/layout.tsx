import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import DownloadMemoriesButton from '@/components/DownloadButton'


const inter = Inter({ subsets: ['latin'], display: 'swap',adjustFontFallback: false })

export const metadata: Metadata = {
  title: 'Our Story 💖',
  description: 'A proposal site made with love',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto+Condensed:wght@700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} relative overflow-hidden h-screen w-screen`}>
        {/* Fixed Download Button (now working as a Client Component) */}
        <div className="fixed top-4 left-4 z-50">
          <DownloadMemoriesButton />
        </div>

        {children}
      </body>
    </html>
  )
}
