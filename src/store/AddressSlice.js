import { createSlice } from "@reduxjs/toolkit";

export const AddressSlice = createSlice({
  name: "address",
  initialState: {
    name: "",
    address: [],
  },
  reducers: {
    addAddress: (state, action) => {
      state.address.push(action.payload.address);
      state.name =
        action.payload.name === undefined ? state.name : action.payload.name;
    },
    removeAddress: (state, action) => {
      state.address.splice(action.payload, 1);
    },
  },
});

export const AddressAction = AddressSlice.actions;
