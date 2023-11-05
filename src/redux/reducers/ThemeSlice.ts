import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loadingTheme: false,
  isDarkMode: false,
  // theme: lightTheme,
};

const themeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    toggleTheme: (state, action) => {
      console.log("toggleTheme ACTION===>", action);
      state.isDarkMode = !state.isDarkMode;
      // state.theme = state.isDarkMode ? { ...darkTheme } : { ...lightTheme };
    },
  },
  // extraReducers: (builder) => {},
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
