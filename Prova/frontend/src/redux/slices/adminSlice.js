import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    isLoading: false,
    message: null,
    isLogged: false,
    admin: null,
  },
  reducers: {
    loginRequest: (state) => {
      state.isLoading = true;
    },
    loginRequestSuccess: (state, action) => {
      state.isLoading = false;
      state.isLogged = true;
      state.admin = action.payload;
    },
    loginRequestError: (state, action) => {
      state.isLoading = false;
      state.isLogged = false;
      state.message = action.payload.message;
    },
    logoutRequest: (state) => {
      state.isLoading = false;
      state.isLogged = false;
      state.admin = null
    }
  },
});

export const { loginRequest, loginRequestError, loginRequestSuccess, logoutRequest } =
  adminSlice.actions;

export default adminSlice.reducer;
