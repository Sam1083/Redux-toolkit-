 import { configureStore } from "@reduxjs/toolkit";
 import bucketReducer   from "../features/bucketSlice"
 import cartReducer   from "../features/cartSlice"

 export const store =configureStore({
     reducer: {

        bucket: bucketReducer,
        cart: cartReducer

     },
 });

export default store;