import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: JSON.parse(localStorage.getItem("carts")) || [],
};

export const addToCartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const exists = state.carts.findIndex(item => item.id === action.payload.id);

      if (exists !=-1) {
state.carts[exists].quantity +=1
      }
      else{
        state.carts.push(action.payload)
      }
      localStorage.setItem("carts",JSON.stringify(state.carts))
    },
  },
});

export const { addToCart } = addToCartSlice.actions;
export default addToCartSlice.reducer;
