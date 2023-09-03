import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  isLoggin: false,
  userInfo: {}
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleIsLoggin : ( state , { payload } )=>{
      state.isLoggin = payload
    },
    setUserInfo: (state, { payload })=>{
      state.userInfo = payload
      state.isLoggin = typeof payload === 'object' ? true : false;
    }
  }
})
// Action creators are generated for each case reducer function
export const { toggleIsLoggin , setUserInfo } = userSlice.actions