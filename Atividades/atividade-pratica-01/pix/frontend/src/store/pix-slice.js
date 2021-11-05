import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  keys: [],
  transactions: [],
  bankInfo: [],
  historic: [],
};

const pixSlice = createSlice({
  name: "pix",
  initialState,
  reducers: {
    setKeys(state, { payload }) {
      state.keys = state.keys.concat(payload);
    },
    clearKyes(state) {
      state.keys = [];
    },
    registerTransaction(state, { payload }) {
      state.transactions = {};
    },
    setBankInfo(state, { payload }) {
      state.bankInfo = state.bankInfo.concat(payload);
    },
    clearBankInfo(state) {
      state.bankInfo = [];
    },
    setHistoric(state, { payload }) {
      state.historic = state.historic.concat(payload);
    },
    clearHistoric(state) {
      state.historic = [];
    },
  },
});

export const {
  setKeys,
  clearKyes,
  setBankInfo,
  clearBankInfo,
  setHistoric,
  clearHistoric,
} = pixSlice.actions;

export default pixSlice.reducer;
