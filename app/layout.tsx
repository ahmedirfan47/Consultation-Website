import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BlackMont Consulting Services | Enterprise Strategy & AI Transformation',
  description: 'Global consulting firm specializing in enterprise strategy, AI transformation, supply chain optimization, and operational excellence for Fortune 500 companies and growth enterprises.',
  keywords: 'management consulting, AI consulting, enterprise strategy, supply chain optimization, logistics consulting, restaurant operations, digital transformation, operational excellence',
  authors: [{ name: 'BlackMont Consulting Services' }],
  openGraph: {
    title: 'BlackMont Consulting Services | Enterprise Transformation',
    description: 'Transforming complexity into competitive advantage through strategic intelligence and operational excellence.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BlackMont Consulting Services',
    description: 'Global enterprise consulting and AI transformation',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}