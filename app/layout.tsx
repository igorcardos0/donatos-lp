import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Donato's Conveniência | Infraestrutura para Eventos",
  description: 'Sua festa pronta com infraestrutura de elite. Aluguel de tendas, jogos de mesa, bebidas, gelo e caixas térmicas para seu evento.',
  keywords: ['eventos', 'festa', 'tendas', 'bebidas', 'churrasco', 'aluguel', 'conveniência'],
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#fc7e14',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className="py-0 my-0" lang="pt-BR">
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
