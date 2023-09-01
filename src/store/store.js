import { configureStore } from "@reduxjs/toolkit";
import { favoritesSlice } from "./slice/favoritesSlice";
import { userSlice } from "./slice/userSlice/userSlice";
import { filmsSlice } from "./slice/filmsSlice/filmsSlice";
import { infoDescriptionSlice } from "./slice/infoDescription/infoDescriptionSlice";

export const store = configureStore({
    reducer: {
      favoritesSlice : favoritesSlice.reducer,
      userSlice : userSlice.reducer,
      filmsSlice: filmsSlice.reducer,
      infoDescriptionSlice: infoDescriptionSlice.reducer
    },
  })
