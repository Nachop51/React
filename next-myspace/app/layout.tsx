import './globals.css'
import type { Metadata } from 'next'
import NavMenu from './NavMenu'
import AuthProvider from './AuthProvider'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

interface IProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: IProps) {
  return (
    <AuthProvider>
      <html lang="en">
        <body>
          <NavMenu />
          {children}
        </body>
      </html>
    </AuthProvider>
  )
}
