import { configureStore,combineReducers } from "@reduxjs/toolkit";
import bucketReducer from "../features/bucketSlice";
import cartReducer from "../features/cartSlice";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, combineReducers({
  bucket: bucketReducer,
  cart: cartReducer
}));

export const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export default { store, persistor };
