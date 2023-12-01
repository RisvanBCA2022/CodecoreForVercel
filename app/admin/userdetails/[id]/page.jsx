'use client'
// import LeftSideBar from '@/components/Home/LeftsideBar/LeftSideBar'
import { fetchuserbyid } from '@/redux/axios'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UserShowPage from './UserShowpage'
// import UserShowPage from './UserShowpage'

const Userprofiles = () => {
    const { id } = useParams()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchuserbyid(id))
    }, [dispatch, id])

   

    const user = useSelector((state) => state.userslice.currentuserdata.data)
    
    return (
        <div >
            <div className="main-bar">
      <div className="main-bar-header">
            {/* hello */}
            {/* <LeftSideBar  /> */}
            {/* <h1 style={{ fontWeight: "400" }}>User Details</h1> */}
            {/* <div className="home-container-2" style={{ marginTop: "100px" }}> */}
                <UserShowPage user={user} />
                </div>
                </div>
             {/* </div> */}
        </div>
    )
}

export default Userprofiles
