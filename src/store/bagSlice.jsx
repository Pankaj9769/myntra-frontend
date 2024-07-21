import { createSlice } from "@reduxjs/toolkit";

export const bagSlice = createSlice({
  name: "bag",
  initialState: {
    id: [],
  },
  reducers: {
    removeAll: (state, action) => {
      state.id.length = 0;
      console.log(state.id);
    },
    addAll: (state, action) => {
      state.id = [...action.payload.id];
    },
    addToBag: (state, action) => {
      if (!state.id.includes(String(action.payload))) {
        let newList = [...state.id, String(action.payload)];
        state.id = newList;
      }
    },
    removeFromBag: (state, action) => {
      state.id = state.id.filter((item) => item != action.payload);
    },
  },
});

export const bagAction = bagSlice.actions;
