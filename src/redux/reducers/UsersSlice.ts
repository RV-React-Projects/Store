import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loadingUser: false,
  isAdmin: false,
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      console.log("toggleTheme ACTION===>", action);
      state.user = action?.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
