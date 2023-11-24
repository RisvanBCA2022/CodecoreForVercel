'use client'
import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user:JSON.parse(localStorage?.getItem('user')) || null,
    admin:JSON.parse(localStorage?.getItem('admin')) || null,

}

const authenticationSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        setUser:(state,action)=>{
            state.user=action.payload
        },
        setAdmin:(state,action)=>{
            state.admin=action.payload
        }
    }
})

export const {setUser,setAdmin}=authenticationSlice.actions

export default authenticationSlice.reducer