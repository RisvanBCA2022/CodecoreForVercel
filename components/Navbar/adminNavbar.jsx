'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { getCookie, deleteCookie } from 'cookies-next';
import Avatars from '../Avatar/Avatar';
import styles from './adminnav.module.css';
//fixed errors
import Logo from '../../public/Logo.png'
import admin from '../../public/admin.jpg'
import { Avatar } from '@mui/material';


const AdminNavbar = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const token = getCookie('jwt_admin');

  const logout = () => {
    deleteCookie('jwt_admin');
    router.push('/user/login');
  };

  return (
    <nav className={styles['main-nav']}>
      <div className={styles.navbar}>
        <Link href='/admin/userlists'>
        <Image src={Logo} alt='logo' style={{ width: '90px', height: '40px' }} />
        </Link>
        <Link href='/admin/userlists' className={`${styles['nav-item']} ${styles['nav-btn']}`}>
          Users
        </Link>
        <Link href='/admin/questionlist' className={`${styles['nav-item']} ${styles['nav-btn']}`}>
          Question Management
        </Link>
        <Link href='/' className={`${styles['nav-item']} ${styles['nav-btn']}`}>
          Answer Management
        </Link>

        {token ? (
  <div className={styles['avatar-container']}>
    {/* <div className={styles.avatar}> */}
     <Avatar alt='' src={admin} />
    {/* </div> */}
    <button
      className={`${styles['nav-item']} ${styles['nav-links']}`}
      onClick={logout}
    >
      Log out
    </button>
  </div>
): (
          <Link
            href='/user/login'
            className={`${styles['nav-item']} ${styles['nav-links']}`}
          >
            Log In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default AdminNavbar;