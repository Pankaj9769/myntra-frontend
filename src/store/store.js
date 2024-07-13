// import { configureStore } from "@reduxjs/toolkit";
// import { WishlistSlice } from "./WishlistSlice";
// import { bagSlice } from "./bagSlice";
// import { productSlice } from "./ProductSlice";
// import { AddressSlice } from "./AddressSlice";

// export const store = configureStore({
//   reducer: {
//     wishlist: WishlistSlice.reducer,
//     bag: bagSlice.reducer,
//     products: productSlice.reducer,
//     address: AddressSlice.reducer,
//   },
// });

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { WishlistSlice } from "./WishlistSlice";
import { bagSlice } from "./bagSlice";
import { productSlice } from "./ProductSlice";
import { AddressSlice } from "./AddressSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  wishlist: WishlistSlice.reducer,
  bag: bagSlice.reducer,
  products: productSlice.reducer,
  address: AddressSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
