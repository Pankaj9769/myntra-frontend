import { createSlice } from "@reduxjs/toolkit";

export const AddressSlice = createSlice({
  name: "address",
  initialState: {
    address: [
      {
        street:
          "Flat No. 613, 6th floor, A wing, Navjivan CHS, Carter Rd no. 4",
        locality: "Borivali East",
        city: "Mumbai",
        zip: 400066,
        state: "Maharashtra",
      },
    ],
  },
  reducers: {
    addAddress: (state, action) => {
      state.address.push(action.payload);
    },
    removeAddress: (state, action) => {
      state.address.splice(action.payload, 1);
    },
  },
});

export const AddressAction = AddressSlice.actions;
