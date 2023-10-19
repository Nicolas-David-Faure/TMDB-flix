import { configureStore } from "@reduxjs/toolkit";
import { favoritesSlice } from "./slice/favoritesSlice";
import { userSlice } from "./slice/userSlice/userSlice";
import { filmsSlice } from "./slice/filmsSlice";
import { infoDescriptionSlice } from "./slice/infoDescription/infoDescriptionSlice";
import { searchSlice } from "./slice/searchSlice";


export const store = configureStore({
    reducer: {
      favoritesSlice : favoritesSlice.reducer,
      userSlice : userSlice.reducer,
      filmsSlice: filmsSlice.reducer,
      infoDescriptionSlice: infoDescriptionSlice.reducer,
      searchSlice: searchSlice.reducer,
    
    },
  })
