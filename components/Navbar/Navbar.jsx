'use client'
// Navbar.js

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
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
import styles from './Navbar.module.css'; // Import the styles
import Logo from '../../public/Logo.png'

const Navbar = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState(true);
  const [user, setUser] = useState(null);

  const cookie = getCookie('jwt');

  useEffect(() => {
    dispatch(fetchAllUser());
    if (cookie) {
      dispatch(userdata());
    }
  }, [dispatch]);

  const usrs = useSelector((state) => state.userslice.user.data);
  const router = useRouter();

  const logout = () => {
    deleteCookie('jwt');
    router.push('/user/login');
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    const query = e.target.search.value;
    router.push(`/user/search?query=${query}`);
  };

  return (
    <nav className={styles['main-nav']}>
      <div className={styles.navbar}>
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
        <a className={`${styles['nav-item']} ${styles['nav-btn']}`}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            Products
          </Link>
        </a>

        <form
          action=""
          onSubmit={handlesubmit}
          className={styles['form-container']}
        >
          <input type="text" placeholder="Search..." id="search" />
          <SearchIcon className={styles['search-icon']} />
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
            <button
              className={`${styles['nav-item']} ${styles['nav-links']}`}
              onClick={() => logout()}
            >
              Log out
            </button>
          </>
        ) : (
          <Link
            href="/user/login"
            className={`${styles['nav-item']} ${styles['nav-links']}`}
          >
            Log In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
