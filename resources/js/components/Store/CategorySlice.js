import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
    name:"category",
    initialState:{data: null},
    reducers:{
        addCategory: (state, action) => {
            state.data = action.payload;
        },
        updataCategory: (state, action) => {
            state.data.push(action.payload);
        },
        deleteCategory: (state, action) => {
            state.data.splice(action.payload, 1);
        },
        editCategory: (state, action) => {
            state.data.splice(action.payload[0] - 1, 1, action.payload[1]);
        }
    }
});

export const {addCategory, updataCategory, deleteCategory, editCategory} = categorySlice.actions;

export default categorySlice.reducer;
