import React from 'react'
import './usershowpage.css'
import Image from 'next/image'


const UserShowPage = ({user}) => {
  console.log(user);
  if (!user) {
    return <p>Loading...</p>; // or any other fallback UI
  }

  return (
    <>
         <div className="container mt-5 ">
      <div className="row ">
        <div className="">
          <div className="card ">
              <img src={user?.profilepicture?user?.profilepicture:"https://i.imgur.com/bDLhJiP.jpg"}  className="avatar" alt="User Avatar" />
            <div className="user-details  text-center">
              <span className="badge">Pro</span>
              <h5 className="username">{user?.username}</h5>
              <span>Web Developer</span>
              <div className="bio mt-1">
                <p>{user?.bio}</p>
              </div>
              <ul className="social-list">
                <li><i className="fa fa-facebook"></i></li>
                <li><i className="fa fa-dribbble"></i></li>
                <li><i className="fa fa-instagram"></i></li>
                <li><i className="fa fa-linkedin"></i></li>
                <li><i className="fa fa-google"></i></li>
              </ul>
              <div className="buttons">
                <button className="btn message-btn">Message</button>
                <button className="btn contact-btn">Contact</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default UserShowPage