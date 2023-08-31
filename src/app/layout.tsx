// 'use client'

import '@/styles/globals.css'
import { axeAccessibilityReporter } from '@/utils/axeAccessibilityReporter'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Desenvolvendo uma web acessível | Blog da Rocketseat',
  description:
    'Protocolos e diretrizes orientam o desenvolvimento de tecnologias acessíveis, mas é preciso olhar para além de tudo isso',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`bg-zinc-900 text-zinc-300 ${inter.className}`}>
        {children}
      </body>
    </html>
  )
}

axeAccessibilityReporter(React)
