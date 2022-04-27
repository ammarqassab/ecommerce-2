import { createSlice } from "@reduxjs/toolkit";

export const brandSlice = createSlice({
    name:"brand",
    initialState:{data: null},
    reducers:{
        addBrand: (state, action) => {
            state.data = action.payload;
        },
        updataBrand: (state, action) => {
            state.data.push(action.payload);
        },
        deleteBrand: (state, action) => {
            state.data.splice(action.payload, 1);
        },
        editBrand: (state, action) => {
            state.data.splice(action.payload[0] - 1, 1, action.payload[1]);
        }
    }
});

export const {addBrand, updataBrand, deleteBrand, editBrand} = brandSlice.actions;

export default brandSlice.reducer;
