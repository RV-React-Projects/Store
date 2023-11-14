import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadUserTheme = createAsyncThunk("user/theme", async () => {
  var isDark = await window.matchMedia("(prefers-color-scheme: dark)").matches;
  await localStorage.getItem("Driver_Theme");
  return isDark;
});

const initialState = {
  loadingTheme: false,
  isDarkMode: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    toggleTheme: (state, action) => {
      console.log("toggleTheme ACTION===>", action);
      state.isDarkMode = action?.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadUserTheme.pending, (state) => {
        state.loadingTheme = true;
      })
      .addCase(loadUserTheme.fulfilled, (state, action) => {
        console.log("loadUserTheme Action====>", action.payload);
        state.loadingTheme = false;
        state.isDarkMode = action?.payload;
      });
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
