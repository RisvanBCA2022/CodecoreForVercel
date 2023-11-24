'use client'
import Logo from '../../public/Logo.png'
import Image from 'next/image'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '@/redux/features/auth-slice';
import { useRouter } from 'next/navigation';
import { deleteCookie, getCookie } from 'cookies-next';
import { fetchAllUser, fetchuserbyid, userdata } from '@/redux/axios';
import Avatars from '../Avatar/Avatar';
import './Navbar.css';

const Navbar = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState(true);
  const [user,setUser]=useState(null)

  const cookie=getCookie('jwt')

  //   useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     const storedUser = localStorage.getItem('user');
  //     if (storedUser) {
  //       setUser(JSON.parse(storedUser));
  //     }
  //   }
  // }, []);

  // useEffect(() => {
  //   if (state && user) {
  //     dispatch(fetchuserbyid(user?.data?.ID));
  //     setState(false);
  //   }
  // }, [state, user, dispatch]);

  useEffect(() => {
    dispatch(fetchAllUser());
    if(cookie){
      dispatch(userdata())

    }

  }, [dispatch]);

  // const users = useSelector((state) => state.userslice.usersdata);
  const usrs=useSelector((state) => state.userslice.user.data);
  // console.log(usrs);
  // const currentUser=useSelector((state) => state.userslice.currentuserdata.data);
  // console.log(userlal);
  // const currentUser = users.find((user) => user?._id == user?.data?.ID)
  // console.log(currentUser);
  const router = useRouter();

  const logout = () => {
    // localStorage.removeItem('user');
    deleteCookie('jwt');
    router.push('/user/login');
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    const query = e.target.search.value;
    router.push(`/user/search?query=${query}`);
  };

  return (
    <nav className="main-nav">
      <div className="navbar">
        <Link href="/">
          <Image src={Logo} alt="logo" height="60" />
        </Link>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          style={{ color: 'black' }}
        ></IconButton>
                <a className="nav-item nav-btn">

        <Link href="/" style={{textDecoration:'none'}} >
        Products

        </Link>
        </a>


        <form action="" onSubmit={handlesubmit} className="form-container">
          <input type="text" placeholder="Search..." id="search" />
          <SearchIcon className="search-icon" />
        </form>

        {usrs ? (
          <>
            {usrs?.profilepicture ? (
              <Link href="/user/profile">
                <Avatar alt="Remy Sharp" src={usrs?.profilepicture} />
              </Link>
            ) : (
              <Avatars
                backgroundColor="#009dff"
                px="10px"
                py="7px"
                borderRadius="50%"
                color="white"
              >
                <Link
                  href="/user/profile"
                  style={{ color: 'white', textDecoration: 'none' }}
                >
                  {usrs?.username.charAt(0).toUpperCase()}
                </Link>
              </Avatars>
            )}
            <button className="nav-item nav-links" onClick={logout}>
              Log out
            </button>
          </>
        ) : (
          <Link href="/user/login" className="nav-item nav-links">
            Log In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar