import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggin: false,
  userInfo: {},
  showList: false,
  animateList: false
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
    },
    setShowList: (state , { payload } )=>{
      if(payload === false){
        state.animateList = false
      }
      state.showList = payload
    },
    setAnimateList: (state , { payload } )=>{
     state.animateList = !state.animateList
    }
  }
})
// Action creators are generated for each case reducer function
export const { toggleIsLoggin , setUserInfo ,setShowList ,setAnimateList } = userSlice.actions