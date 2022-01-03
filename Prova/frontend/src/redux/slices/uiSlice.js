import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    message: null,
    severity: null,
  },
  reducers: {
    setMessage: (state, action) => {
      state.message = action.payload.message;
      state.severity = action.payload.severity;
    },
  },
});

export const { setMessage } = uiSlice.actions;

export default uiSlice.reducer;
