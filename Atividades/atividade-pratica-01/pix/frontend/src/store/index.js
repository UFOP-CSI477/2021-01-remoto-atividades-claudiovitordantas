import { configureStore } from "@reduxjs/toolkit";
import pixSlice from "./pix-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: {
    pix: pixSlice,
    ui: uiSlice,
  },
});

export default store;
