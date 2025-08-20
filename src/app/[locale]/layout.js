import './globals.css'
import { Poppins } from 'next/font/google'
import { dir } from 'i18next'
import { languages } from '../i18n/settings'
import Navbar from '../../components/Navbar.js'; // <-- ¡Sin las llaves!

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700']
})

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export const metadata = {
  title: 'El Rinconcito Cubano',
  description: 'Auténtico Restaurante de Comida Cubana',
}

export default function RootLayout({ children, params: { locale } }) {
  return (
    <html lang={locale} dir={dir(locale)}>
      <body className={`${poppins.className} bg-gray-50`}>
        <Navbar locale={locale} />
        <main>
          {children}
        </main>
          </body>
    </html>
  )
}