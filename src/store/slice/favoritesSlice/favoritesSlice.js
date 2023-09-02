import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  personalAside: false,
  isLoading: false,
  thereWasChange: false,
  change: false
}

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    togglePersonalAside: ( state , payload )=>{
      state.personalAside = !state.personalAside
    },
    toggleThereWasChange: ( state , { payload } )=>{
      state.thereWasChange = payload
    },
    toggleChange : (state, { payload })=>{
      state.change = !state.change
    }
  }
})
// Action creators are generated for each case reducer function
export const { togglePersonalAside , toggleThereWasChange , toggleChange} = favoritesSlice.actions