// import './globals.css'

import { Home } from '@/components'
import AdminNavbar from '@/components/Navbar/adminNavbar'
import { ReduxProvider } from '@/redux/Provider'
import LeftSideBar from '@/components/AdminHome/AdminLeftbar'
import AdminLeftbar from '@/components/AdminHome/AdminLeftbar'
import { getCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({children,}) {

  return (
    <>
    <ReduxProvider>
    
    <AdminNavbar />
   
          <main className="my-0 py-16">{children}</main>
          </ReduxProvider>
          </>
          
          
    
  )
}
