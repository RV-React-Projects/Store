import { createSlice } from "@reduxjs/toolkit";

interface CartSliceProps {
  loadingCart?: boolean;
  cart?: null | object;
  cartTotalAmount?: number;
  cartCount?: number;
  itemCount?: number;
}

const initialState: CartSliceProps = {
  loadingCart: false,
  cart: null,
  cartTotalAmount: 0,
  cartCount: 0,
  itemCount: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    setCart: (state, action) => {
      console.log("Cart ACTION===>", action);
      state.cart = action?.payload;
    },
    updateCart: (state, action) => {
      console.log("Cart ACTION===>", action);
      state.cart = action?.payload;
    },
    clearCart: (state, action) => {
      console.log("Cart ACTION===>", action);
      state.cart = null;
    },
  },
});

export const { setCart, updateCart } = CartSlice.actions;
export default CartSlice.reducer;
