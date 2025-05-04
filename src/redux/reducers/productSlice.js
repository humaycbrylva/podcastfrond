import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductThunk = createAsyncThunk("get/products", async () => {
  const res = await axios.get("http://localhost:4000/musics");
  return res.data;
});

export const postProductThunk = createAsyncThunk(
  "products/add",
  async (data) => {
    console.log("POST:", data);
    const response = await axios.post("http://localhost:4000/musics", data);
    return response.data;
  }
);

export const deleteProductThunk = createAsyncThunk(
  "products/delete",
  async (productId) => {
    await axios.delete(`http://localhost:4000/musics/${productId}`);
    return productId;
  }
);

export const updateProductThunk = createAsyncThunk(
  "products/update",
  async ({ id, updatedData }) => {
    const response = await axios.put(
      `http://localhost:4000/musics/${id}`,
      updatedData
    );
    return response.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getProductThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(postProductThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(postProductThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.products.push(action.payload);
      })
      .addCase(postProductThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteProductThunk.fulfilled, (state, action) => {
        if (state.products) {
          state.products = state.products.filter(
            (item) => item._id !== action.payload
          );
        }
      })
      .addCase(updateProductThunk.fulfilled, (state, action) => {
        if (state.items) {
          state.items.findIndex((item) => item._id === action.payload._id);
        }
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      });
  },
});

export default productSlice.reducer;