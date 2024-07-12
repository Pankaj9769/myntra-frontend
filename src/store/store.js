import { configureStore } from "@reduxjs/toolkit";
import { WishlistSlice } from "./WishlistSlice";
import { bagSlice } from "./bagSlice";
import { productSlice } from "./ProductSlice";
import { AddressSlice } from "./AddressSlice";

export const store = configureStore({
  reducer: {
    wishlist: WishlistSlice.reducer,
    bag: bagSlice.reducer,
    products: productSlice.reducer,
    address: AddressSlice.reducer,
  },
});
