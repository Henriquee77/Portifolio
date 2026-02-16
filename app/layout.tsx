import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ["latin"] });
const _jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Luis Henrique da Silva Sousa | Desenvolvedor de Automações & Software',
  description: 'Desenvolvedor de Automações e Software com experiência em n8n, Python, JavaScript e integrações de sistemas. Portfólio profissional e currículo online.',
  keywords: ['desenvolvedor', 'automação', 'n8n', 'software', 'Python', 'JavaScript', 'API', 'integração'],
  authors: [{ name: 'Luis Henrique da Silva Sousa' }],
  creator: 'Luis Henrique da Silva Sousa',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title: 'Luis Henrique da Silva Sousa | Desenvolvedor de Automações & Software',
    description: 'Desenvolvedor de Automações e Software com experiência em n8n, Python, JavaScript e integrações de sistemas.',
    siteName: 'Luis Henrique Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luis Henrique da Silva Sousa | Desenvolvedor de Automações & Software',
    description: 'Desenvolvedor de Automações e Software com experiência em n8n, Python, JavaScript e integrações de sistemas.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: '/apple-icon.png',
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: '#1a1f2e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
