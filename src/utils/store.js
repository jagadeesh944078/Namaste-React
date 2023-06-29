import { configureStore } from "@reduxjs/toolkit";
import createSlice from "./createSlice";

const store = configureStore({
  reducer: {
    cart: createSlice,
  },
});

export default store;
