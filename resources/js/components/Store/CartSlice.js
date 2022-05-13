import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name:"cart",
    initialState:{data: null},
    reducers:{
        addCart: (state, action) => {
            state.data = action.payload;
        },
        updataCart: (state, action) => {
            state.data.push(action.payload);
        },
        deleteCart: (state, action) => {
            state.data.splice(action.payload, 1);
        },
        editCart: (state, action) => {
            state.data.splice(action.payload[0] - 1, 1, action.payload[1]);
        }
    }
});

export const {addCart, updataCart, deleteCart, editCart} = cartSlice.actions;

export default cartSlice.reducer;
