'use client'

import { Montserrat } from 'next/font/google'
import './styles/globals.scss'
import Header from './components/header/Header'
import Head from 'next/head'
import ThemeContextProvider from "./context/context";


const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={montserrat.className}>
      <Head>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <body suppressHydrationWarning={true}>
        <ThemeContextProvider>
          <Header />
          {children}
        </ThemeContextProvider>
      </body>
    </html>
  )
}
