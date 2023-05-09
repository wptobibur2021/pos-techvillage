import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  carts: [],
  cartQty: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "productCarts",
  initialState,
  reducers: {
    // Cart add declaration below
    addCart: (state, action) => {
      const indexItem = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (indexItem >= 0) {
        state.carts[indexItem].proQty += action.payload.proQty;
        toast.success("Product quantity increment");
      } else {
        state.carts.push(action.payload);
        state.cartQty += 1;
        toast.success("Product cart add successfully");
      }
      state.total += action.payload.price * action.payload.proQty;
    },
    // Cart remove declaration below
    removeCart: (state, action) => {
      const newArray = state.carts.filter(
        (cart) => cart.id !== action.payload.id
      );
      state.carts = newArray;
      state.cartQty -= 1;
      toast.success("Product remove successfully");
      const amount = state.total - action.payload.proQty * action.payload.price;
      state.total = amount;
    },
    // Cart Decrement declaration below
    cartDecrement: (state, { payload }) => {
      const itemIndex = state.carts.findIndex((item) => item.id === payload.id);
      if (state.carts[itemIndex].proQty > 1) {
        state.carts[itemIndex].proQty -= 1;
        const amount = state.total - 1 * payload.price;
        state.total = amount;
        toast.success("Quantity decrement successfull");
      } else {
        toast.error(`You can't decrement quantity`);
      }
    },
    // Cart Increment declaration below
    cartIncrement: (state, { payload }) => {
      const itemIndex = state.carts.findIndex((item) => item.id === payload.id);
      if (state.carts[itemIndex].proQty >= 1) {
        state.carts[itemIndex].proQty += 1;
        const amount = state.total + 1 * payload.price;
        state.total = amount;
        toast.success("Quantity increment successfull");
      } else {
        toast.error(`You can't increment quantity`);
      }
    },
    resetCart: (state) => {
      state.cartQty = 0;
      state.total = 0;
      state.carts = [];
      toast.success("Cart reset successfull");
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCart, removeCart, cartDecrement, cartIncrement, resetCart } =
  cartSlice.actions;
export default cartSlice.reducer;
