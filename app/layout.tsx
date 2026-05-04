import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Wind River Advisory — Custom Tools & AI Solutions',
  description: 'Wind River Advisory helps small businesses and nonprofits identify inefficiencies and integrate AI-based tools to increase productivity.',
  icons: {
    icon: '/mark-only-green.svg',
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,200;0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
