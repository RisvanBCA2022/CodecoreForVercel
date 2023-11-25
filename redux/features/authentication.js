'use client'
import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user: 'sukumaran',
    admin: "sudu",

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