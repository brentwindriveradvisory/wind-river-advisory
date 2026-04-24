import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Wind River Advisory — Custom Tools & AI Solutions',
  description: 'Wind River Advisory helps small businesses and nonprofits identify inefficiencies and integrate AI-based tools to increase productivity.',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Wind River Advisory',
    description: 'Custom tools and AI solutions, built for your operation.',
    url: 'https://windriveradvisory.com',
    siteName: 'Wind River Advisory',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
