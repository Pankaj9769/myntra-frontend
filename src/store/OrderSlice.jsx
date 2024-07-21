import { createSlice } from "@reduxjs/toolkit";

export const OrderSlice = createSlice({
  name: "order",
  initialState: { orders: [] },
  reducers: {
    addInitialOrder: (state, action) => {
      state.orders = [];
      action.payload.orders.forEach((element) => {
        state.orders.push(element);
      });
    },
    addOrder: (state, action) => {
      action.payload.forEach((element) => {
        state.orders.push(element);
      });
    },
    removeOrder: (state, action) => {
      state.orders = [];
    },
  },
});

export const OrderAction = OrderSlice.actions;
