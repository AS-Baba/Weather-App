import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./Slices/weatherSlice";

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
});
