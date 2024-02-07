// import { configureStore,combineReducers } from "@reduxjs/toolkit";
// import bucketReducer from "../features/bucketSlice";
// import cartReducer from "../features/cartSlice";
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['cart'],
// };

// const persistedReducer = persistReducer(persistConfig, combineReducers({
//   bucket: bucketReducer,
//   cart: cartReducer
// }));

// export const store = configureStore({
//   reducer: persistedReducer,
// });

// const persistor = persistStore(store);

// export default { store, persistor };

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import bucketReducer from "../features/bucketSlice";
import cartReducer from "../features/cartSlice";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// ...

const persistConfig = {
  key: 'root',
  storage,
  whitelist: process.env.CLEAR_STATE_ON_START ? [] : ['cart'], // Only persist 'cart' if CLEAR_STATE_ON_START is not set
  whitelist: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, combineReducers({
  bucket: bucketReducer,
  cart: cartReducer
}));

// Create the store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});



// ...

export const persistor = persistStore(store);

export default { store, persistor };
