import { createSlice } from "@reduxjs/toolkit";

export const bagSlice = createSlice({
  name: "bag",
  initialState: {
    id: [],
  },
  reducers: {
    removeAll: (state, action) => {
      console.log("bag->", state.id);
      state.id.length = 0;
    },
    addAll: (state, action) => {
      console.log(action.payload.id);
      state.id = [...action.payload.id];
    },
    addToBag: (state, action) => {
      if (!state.id.includes(String(action.payload))) {
        console.log("here");
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
