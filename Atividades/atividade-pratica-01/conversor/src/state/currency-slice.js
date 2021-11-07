import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currencyOneQuotation: "",
  currencyOne: "",
  currencyTwoQuotation: "",
  currencyTwo: "",
  value: "",
  date: "",
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setCurrencyOneQuotation(state, { payload }) {
      state.currencyOneQuotation = payload;
    },
    setCurrencyOne(state, { payload }) {
      state.currencyOne = payload;
    },
    setCurrencyTwoQuotation(state, { payload }) {
      state.currencyTwoQuotation = payload;
    },
    setCurrencyTwo(state, { payload }) {
      state.currencyTwo = payload;
    },
    setValue(state, { payload }) {
      state.value = payload;
    },
    setQuotDate(state, { payload }) {
      state.date = payload;
    },
    setCurrencies(state, { payload }) {
      state.currencies = payload;
    },
  },
});

export const {
  setCurrencyOne,
  setCurrencyTwo,
  setValue,
  setQuotDate,
  setCurrencies,
  setCurrencyTwoQuotation,
  setCurrencyOneQuotation,
} = currencySlice.actions;

export default currencySlice.reducer;
