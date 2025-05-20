import './globals.css'
import Navbar from '../components/Navbar'


export const metadata = {
  title: 'Aymen Portfolio',
  description: 'Portfolio created with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
