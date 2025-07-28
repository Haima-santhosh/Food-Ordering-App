import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  cartItems: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload
      const existItem = state.cartItems.find((x) => x.itemId === item.itemId)
      if (existItem) {
        existItem.quantity += 1
      } else {
        state.cartItems.push({ ...item, quantity: 1 })
      }
    },

    increaseQuantity(state, action) {
      const item = state.cartItems.find((item) => item.id === action.payload)
      if (item) {
        item.quantity += 1;
        state.totalQuantity += 1
      }
    },
    decreaseQuantity(state, action) {
      const item = state.cartItems.find((item) => item.id === action.payload)
      if (item && item.quantity > 1) {
        item.quantity -= 1
        state.totalQuantity -= 1
      } else {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload,
        );
        state.totalQuantity -= 1
      }
    },
    removeFromCart(state, action) {
      const item = state.cartItems.find((item) => item.id === action.payload)
      if (item) {
        state.totalQuantity -= item.quantity;
      }
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload,
      );
    },
    clearCart(state) {
      state.cartItems = []
      state.totalQuantity = 0
    },
  },
})

export const {addToCart,increaseQuantity,decreaseQuantity,removeFromCart,clearCart,} = cartSlice.actions;
export default cartSlice.reducer
