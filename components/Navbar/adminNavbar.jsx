'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useReducer } from 'react'
import search from '../../public/search.svg'
import Authprofilemenu from './Authprofilemenu'
import Avatar from '../Avatar/Avatar'
import './Navbar.css'
import Logo from '../../public/Logo.png'
import Button from '../Button/Button'
import { useDispatch,useSelector } from 'react-redux'
import { logIn, logOut } from '@/redux/features/auth-slice'
import { useRouter } from 'next/navigation'
import { getCookie,deleteCookie } from 'cookies-next'
import jwtDecode from 'jwt-decode'
import { data } from 'autoprefixer'
import { useState } from 'react'
import { getUser } from '@/redux/axios'
import Avatars from '../Avatar/Avatar'

const AdminNavbar = () => {
  const dispatch = useDispatch()
  // const [user,setUser]=useState(null)


  // useEffect(() => {
  //   dispatch(getUser())
  //   if(userdata){
  //     setUser(JSON.parse(userdata))
  //   }





  const router=useRouter()
  // const auth = useSelector((state)=> state.authReducer.value)
  // console.log(auth);
  // const user=null
  //  console.log(user);
  const token = getCookie('jwt_admin')

 const logout=()=>{
  deleteCookie('jwt_admin') 
  router.push('/user/login')
 }

  return (
   <nav className='main-nav'>
    <div className='navbar'>
      <Link href='/admin/userlists' className=' '>
      <Image src={Logo} alt='logo' height='20px' width='20px'/>
      </Link>
      <Link href='/' className='nav-item nav-btn'>Users</Link>
      <Link href='/' className='nav-item nav-btn'>Question Management</Link>
      <Link href='/' className='nav-item nav-btn'>Answer Management</Link>
     
        {token?
        <> <Avatars backgroundColor='#009dff' px="10px" py="7px" borderRadius="50%" color='white'>{"admin".charAt(0).toUpperCase()}</Avatars><button className='nav-item nav-links' onClick={logout}>Log out</button></>:
        <Link href='/user/login' className='nav-item nav-links'>
      Log In
    </Link>

        }
        
     
      
    </div>
   </nav>
  )
}

export default AdminNavbar