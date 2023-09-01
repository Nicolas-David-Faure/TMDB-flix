import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  personalAside: false,
  isLoading: false
}

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    togglePersonalAside: ( state , payload )=>{
      state.personalAside = !state.personalAside
    }
  }
})
// Action creators are generated for each case reducer function
export const { togglePersonalAside } = favoritesSlice.actions