import '@fontsource-variable/montserrat'
import '@fontsource-variable/inter'
import './globals.css'
import type { Metadata } from 'next'
// import { Navbar } from '@/components/layout/Navbar'
import Footer from '@/components/common/Footer'

export const metadata: Metadata = {
  title: 'AnyTxn',
  description: 'Embrace the future of finance',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* <Navbar /> */}
        {children}
        <Footer />
      </body>
    </html>
  )
}
