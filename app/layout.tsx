import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Wind River Advisory — Operational Consulting & Custom Tools',
  description: 'We find what\'s costing your business — then build what fixes it. Custom tools and operational advisory for small businesses.',
  openGraph: {
    title: 'Wind River Advisory',
    description: 'We find what\'s costing your business — then build what fixes it.',
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
