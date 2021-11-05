import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: null
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setMessage: (state, action) => {
      state.message = {
        variant: action.payload.variant,
        message: action.payload.message,
      };
    },
  },
});

export const { setMessage } = uiSlice.actions;

export default uiSlice.reducer;
