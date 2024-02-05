import { createSlice } from "@reduxjs/toolkit";
// import products from "../products";

const initialState = {
  products: [],
  cart:[],
  quantity: 0,  
  total: 0,
};

// console.log(initialState)
const bucketSlice = createSlice({
  name: "bucket",
  initialState,
  reducers: {
    clearBucket: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.products = state.products.filter((item) => item.id !== itemId);
    },


    decrease: (state, { payload }) => {
      const bucketItem = state.products.find((item) => item.id === payload.id);
      bucketItem.quantity = bucketItem.quantity - 1;
    },

    increase: (state, { payload }) => {
      // Check if the item is already in the cart
      const bucketItem = state.products.find((item) => item.id === payload.id);
      console.log(bucketItem)

      if (bucketItem) {
        // If the item is already in the cart, update its quantity
        bucketItem.quantity += 1;
      } else {
        // If the item is not in the cart, handle it accordingly (you may add it to the state)
        state.products.push({ ...payload, quantity : 1 })
      }

      // Update other state properties
      state.quantity += 1;
      state.total += payload.price;
    },













    

    calculateTotal: (state) => {

      let quantity = 0;
      let total = 0;
      state.products.forEach((item) => {
        quantity += item?.quantity;
        total += item?.quantity * item.price;
      });
      state.quantity = quantity;
      state.total = total; // Fix the typo here
    },
  },
});

export const { clearBucket, removeItem, decrease, increase, calculateTotal, addToCart } = bucketSlice.actions;

export default bucketSlice.reducer;
