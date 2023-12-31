
import Header from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'
import Intro from './Intro'
import ActiveSectionContextProvider from '@/context/active-section-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dean Portfolio',
  description: 'Dean is an aspiring full stack developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className} bg-gray-50 dark:bg-black text-gray-950 relative pt-28 sm:pt-36`}>
        <div className='bg-[#189AB4]/40 absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75]' ></div>
        <div className='bg-[#189AB4]/40 absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75] md:left-[-33rem] lg:left-[-28rem] xl:left[-15rem] 2xl:left-[-5rem]' ></div>

        <ActiveSectionContextProvider>
          <Header/>
          {children}
        </ActiveSectionContextProvider>
        </body>
    </html>
  )
}
