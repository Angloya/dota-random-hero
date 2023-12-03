import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Random Dota 2 hero',
  description: 'Choose random dota 2 hero',
  icons: {
    icon: './../assets/icons/icons8-dota-2-cloud-16.png',
    shortcut: './../assets/icons/icons8-dota-2-cloud-16.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-W47GD9T4JS" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-W47GD9T4JS');
        `}
        </Script>

        <div className=' bg-neutral-800 text-white p-4'>
          {children}
        </div>
        <span className='opacity-0 hidden'>
          <a target="_blank" href="https://icons8.com/icon/lmiEXfmRr5xJ/dota-2">Dota 2</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        </span>
      </body>
    </html>
  )
}
