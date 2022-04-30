import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name:"products",
    initialState:{data: null},
    reducers:{
        addProducts: (state, action) => {
            state.data = action.payload;
        },
        updataProducts: (state, action) => {
            state.data.push(action.payload);
        },
        deleteProducts: (state, action) => {
            state.data.splice(action.payload, 1);
        },
        editProducts: (state, action) => {
            state.data.splice(action.payload[0] - 1, 1, action.payload[1]);
        }
    }
});

export const {addProducts, updataProducts, deleteProducts, editProducts} = productsSlice.actions;

export default productsSlice.reducer;
