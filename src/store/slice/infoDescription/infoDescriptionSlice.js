import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  
  filmDescription: null,
  filmGenres: null,
  isLoading: false
}

export const infoDescriptionSlice = createSlice({
  name: 'infoDescription',
  initialState,
  reducers: {
    setFilmsDescription: (state, {payload}) => {
      state.filmDescription = payload
    },
    setFilmGenres : ( state , { payload })=>{
      state.filmGenres = payload
    }
  }
})
// Action creators are generated for each case reducer function
export const { setFilmsDescription , setFilmGenres } = infoDescriptionSlice.actions