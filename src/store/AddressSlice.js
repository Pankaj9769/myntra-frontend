import { createSlice } from "@reduxjs/toolkit";

export const AddressSlice = createSlice({
  name: "address",
  initialState: {
    address: [],
  },
  reducers: {
    addAddress: (state, action) => {
      const newAddresses = action.payload;

      if (Array.isArray(newAddresses)) {
        newAddresses.forEach((addr) => state.address.push(addr));
      } else {
        console.error("Payload is not an array:", newAddresses);
      }
    },
    removeAddress: (state, action) => {
      state.address.splice(action.payload, 1);
    },
  },
});

export const AddressAction = AddressSlice.actions;
