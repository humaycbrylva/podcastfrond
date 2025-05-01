import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductThunk=createAsyncThunk('/product/get', async()=>{
    const res=await axios.get('http://localhost:4000/musics')
    return res.data
});
export const postProductThunk=createAsyncThunk('/products/post', async(data)=>{
    const res=await axios.post('http://localhost:4000/musics',data)
    return res.data
});
export const deleteProductThunk = createAsyncThunk('/products/delete', async (id) => {
    await axios.delete(`http://localhost:4000/musics/${id}`);
    return id;
});
export const updateProductThunk = createAsyncThunk('/products/update', async ({ id, updatedData }) => {
    const res = await axios.put(`http://localhost:4000/musics/${id}`, updatedData);
    return res.data;
});

const productSlice=createSlice({
        name: 'products',
        initialState: {
        products: [],
        loading: false,
        error: null,
        editProduct: null,
        },
        reducers: {
          setEditProduct: (state, action) => {
            state.editProduct = action.payload;
          },
        },
    extraReducers:(builer)=>{
        builer
        .addCase(getProductThunk.fulfilled,(state,action)=>{
            state.loading=false
            state.products=action.payload
        })
        .addCase(getProductThunk.pending,(state)=>{
            state.loading=true
        })
        .addCase(getProductThunk.rejected,(state,action)=>{
            state.loading=falsestate.error=action.error.message
        })
        .addCase(postProductThunk.fulfilled, (state,action)=> {
            state.loading=false
            state.products.push(action.payload)
        })
        .addCase(deleteProductThunk.fulfilled, (state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload);
        })
        .addCase(updateProductThunk.fulfilled, (state, action) => {
          state.products = state.products.map(product => 
          product.id === action.payload.id ? action.payload : product);
          state.editProduct = null;
        });
}
})

export const { setEditProduct } = productSlice.actions;
export default productSlice.reducer