import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loadingHeader: false,
  selectedHeader: null,
  // theme: lightTheme,
};

const headerSlice = createSlice({
  name: "header",
  initialState: initialState,
  reducers: {
    setHeader: (state, action) => {
      console.log("toggleTheme ACTION===>", action);
      state.selectedHeader = action?.payload;
    },
  },
  // extraReducers: (builder) => {},
});

export const { setHeader } = headerSlice.actions;
export default headerSlice.reducer;
