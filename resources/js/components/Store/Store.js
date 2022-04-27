import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./AuthSlice";
import { brandSlice } from "./BrandSlice";


const store = configureStore({
    reducer : {
        auth: authSlice.reducer,
        brand: brandSlice.reducer
    },
});

export default store ;
