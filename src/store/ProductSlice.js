import { createSlice } from "@reduxjs/toolkit";
import { products } from "../components/ProductPage/ProductsPage";

export const productSlice = createSlice({
  name: "products",
  initialState: { prod: products },
  reducers: {
    addAll: (state, action) => {
      state.prod = products;
    },
    filterMen: (state, action) => {
      state.prod = products.filter(
        (item) => item.category === "Men" || item.category === "Both"
      );
    },
    filterWomen: (state, action) => {
      state.prod = products.filter(
        (item) => item.category === "Women" || item.category === "Both"
      );
    },
    filterKids: (state, action) => {
      state.prod = products.filter((item) => item.category === "Kids");
    },
    filterHomeLiving: (state, action) => {
      state.prod = products.filter((item) => item.type === "Home&Living");
    },
  },
});

export const productAction = productSlice.actions;
