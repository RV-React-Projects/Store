import { createSlice } from "@reduxjs/toolkit";
import { headerDataTypes } from "@src/common/CommonTypes";

const currencyData: headerDataTypes[] = [
  { name: "USD", value: "usd" },
  { name: "EURO", value: "euro" },
  { name: "GBP", value: "gbp" },
  { name: "INR", value: "idr" },
];

const initialState = {
  loadingHeader: false,
  selecteCurrency: currencyData[0],
  currencyTypes: currencyData,
  currency: currencyData[0].value,
};

const headerSlice = createSlice({
  name: "header",
  initialState: initialState,
  reducers: {
    setHeader: (state, action) => {
      console.log("currency ACTION===>", action);
      state.selecteCurrency = action?.payload;
    },
    setCurrency: (state, action) => {
      console.log("currency ACTION===>", action);
      state.currency = action?.payload;
    },
  },
  // extraReducers: (builder) => {},
});

export const { setHeader, setCurrency } = headerSlice.actions;
export default headerSlice.reducer;
