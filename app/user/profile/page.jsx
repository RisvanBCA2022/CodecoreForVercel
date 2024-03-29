'use client'
import React, { useEffect, useState } from "react";
// import moment from "moment";
import LeftSidebar from '../../../components/Home/LeftsideBar/LeftSideBar'
// import Avatar from "../../../components/Avatar/Avatar";
// import EditProfileForm from "./EditProfileForm";
// import ProfileBio from "./ProfileBio";
import "./userprofile.css";
import { useDispatch, useSelector } from "react-redux";
// import RightSideBar from "@/components/Home/RightSideBar/RightSideBar";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBirthdayCake,faPen } from "@fortawesome/free-solid-svg-icons";
import { fetchAllUser, getUser } from "@/redux/axios";
import { useRouter } from "next/navigation";
import Profile from "./profile";
const Page = () => {
  const dispatch=useDispatch()
  // const [switchEdit,setSwitchEdit]=useState(false)



  useEffect(()=>{
    dispatch(fetchAllUser())
  },[dispatch])
  
 

  return (
    <div className="home-container-1">
      <LeftSidebar />
      <div className="home-container-2">
        <Profile />
      </div>
      {/* <RightSideBar /> */}
    </div>
  );
};

export default Page;