import {configureStore} from '@reduxjs/toolkit'
import authReducer, { questionslice } from "./features/auth-slice"
import voteSlice from './features/voteSlice'
import userSlice from './features/userSlice'
import adminSlice from './features/adminSlice'
import authentication from './features/authentication'



export const store = configureStore({
    reducer:{
        authReducer:authReducer,
        questionslice:questionslice,
        voteSlice:voteSlice,
        userslice:userSlice,
        adminSlice:adminSlice,
    }


    
})