// "use client"
import { Home } from '@/components'
import Image from 'next/image'
// import Login from './log-in'
// import { useEffect } from 'react'

import Navbar from '@/components/Navbar/Navbar'
import AdminLeftbar from '@/components/AdminHome/AdminLeftbar'
import middleware from './middleware'

const page = () => {


  return (
    
    <main className='overflow-hidden'>
    <div className='home-container-1'>
    <AdminLeftbar />
    </div>
  
    
        </main>
  )
}

export default page