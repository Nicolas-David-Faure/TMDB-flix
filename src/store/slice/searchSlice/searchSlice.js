import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showInputSearch:false,
  
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    handleClickOutSide : ( state , { payload } )=>{
      state.showInputSearch = false
    },
    handleToogleDisplaySearch: (state)=>{
      state.showInputSearch =  !state.showInputSearch
    }
  }
})
// Action creators are generated for each case reducer function
export const { handleClickOutSide , handleToogleDisplaySearch } = searchSlice.actions