import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  filmsFounded: [],
  isLoading: false
}

export const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    filmsLoading: (state)=>{
      state.isLoading = true
    },
    setFilmsFounded: (state, {payload}) => {
      
      state.filmsFounded = payload
    },
  }
})
// Action creators are generated for each case reducer function
export const { setFilmsFounded ,filmsLoading} = filmsSlice.actions