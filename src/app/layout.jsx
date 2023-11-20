import { Outfit } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const outfit = Outfit({ 
  subsets: ['latin'] ,
  weight: ['400', '700', '900']
})

export const metadata = {
  title: 'Guitar - LA',
  description: 'Aplicacion de tienda de guitarras creada con NextJS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} text-[16px]`}>
        <Header />
        {children}
        <Footer />  
      </body>
    </html>
  )
}
