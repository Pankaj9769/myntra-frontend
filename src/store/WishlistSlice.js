import { createSlice } from "@reduxjs/toolkit";

export const WishlistSlice = createSlice({
  name: "wishlist",
  initialState: { id: [] },
  reducers: {
    removeAll: (state, action) => {
      state.id.length = 0;
    },
    addAll: (state, action) => {
      state.id = [...action.payload.id];
    },
    addToWishList: (state, action) => {
      const newList = [...state.id, String(action.payload)];
      state.id = newList;
    },
    removeToWishList: (state, action) => {
      state.id = state.id.filter((id) => id != action.payload);
    },
  },
});

export const WishlistAction = WishlistSlice.actions;
