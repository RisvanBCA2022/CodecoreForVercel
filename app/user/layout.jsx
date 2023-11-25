import Navbar from '@/components/Navbar/Navbar'

import { Home } from '@/components'
import { ReduxProvider } from '@/redux/Provider'
import '../user/askquestion/AskQuestion.css'
import LeftSideBar from '@/components/Home/LeftsideBar/LeftSideBar'
import Demo from '@/components/Navbar/demo'
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({children,}) {
  return (
  
    <html>
      <body>
      <Navbar />
      {/* <Demo /> */}
         {children}
          </body>     
          </html>
          
          
   
  )
}
