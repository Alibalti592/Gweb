// store.js
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/userSlice";
export const makeStore = () => {
  configureStore({
    reducer: {
      user: userSlice,
    },
  });
};
