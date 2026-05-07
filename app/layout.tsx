import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Wind River Advisory | Custom AI Tools for Small Businesses',
  description: 'Wind River Advisory builds custom AI tools and process automation for small businesses and nonprofits. Based in Lander, Wyoming, serving clients worldwide. Free 30-min discovery call.',
  keywords: ['AI tools for small business', 'custom AI solutions', 'process automation', 'workflow improvement', 'small business consulting', 'nonprofit technology', 'Lander Wyoming'],
  icons: {
    icon: '/mark-only-green.svg',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Wind River Advisory | Custom AI Tools for Small Businesses',
    description: 'Custom AI tools and process automation built for your operation. Wind River Advisory partners with small businesses and nonprofits worldwide.',
    url: 'https://windriveradvisory.com',
    siteName: 'Wind River Advisory',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Wind River Advisory | Custom AI Tools for Small Businesses',
    description: 'Custom AI tools and process automation built for your operation.',
  },
  alternates: {
    canonical: 'https://windriveradvisory.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Wind River Advisory',
    description: 'Custom AI tools and process automation for small businesses and nonprofits.',
    url: 'https://windriveradvisory.com',
    telephone: '+13074389112',
    email: 'brent@windriveradvisory.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lander',
      addressRegion: 'WY',
      addressCountry: 'US',
    },
    areaServed: 'Worldwide',
    founder: {
      '@type': 'Person',
      name: 'Brent Edelman',
    },
    serviceType: ['AI Consulting', 'Process Automation', 'Custom Software Development', 'Workflow Optimization'],
  }

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,200;0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
