// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += newItem.quantity;
      } else {
        state.items.push({ ...newItem });
      }
    },
    incrementQuantity: (state, action) => {
      const { id } = action.payload;
      const itemToIncrement = state.items.find(item => item.id === id);

      if (itemToIncrement) {
        itemToIncrement.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const { id } = action.payload;
      const itemToDecrement = state.items.find(item => item.id === id);

      if (itemToDecrement && itemToDecrement.quantity > 1) {
        itemToDecrement.quantity -= 1;
      }
    },
  }
});

export const { addToCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
