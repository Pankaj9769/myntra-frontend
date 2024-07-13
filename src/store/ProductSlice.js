import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch("http://localhost:5000/products");
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    return await response.json();
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState: {
    prod: [],
    currProd: [],
    status: "idle",
    error: null,
  },
  reducers: {
    addAll: (state, action) => {
      state.prod = action.payload.products;
      state.currProd = action.payload.products;
    },
    filterMen: (state) => {
      state.currProd = state.prod.filter(
        (item) => item.category === "Men" || item.category === "Both"
      );
    },
    filterWomen: (state) => {
      state.currProd = state.prod.filter(
        (item) => item.category === "Women" || item.category === "Both"
      );
    },
    filterKids: (state) => {
      state.currProd = state.prod.filter((item) => item.category === "Kids");
    },
    filterHomeLiving: (state) => {
      state.currProd = state.prod.filter((item) => item.type === "Home&Living");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.prod = action.payload.products;
        state.currProd = action.payload.products;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const productAction = productSlice.actions;
