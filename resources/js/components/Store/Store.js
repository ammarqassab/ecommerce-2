import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./AuthSlice";
import { brandSlice } from "./BrandSlice";
import { categorySlice } from "./CategorySlice";
import { productsSlice } from "./ProductsSlice";


const store = configureStore({
    reducer : {
        auth: authSlice.reducer,
        brand: brandSlice.reducer,
        category: categorySlice.reducer,
        products: productsSlice.reducer
    },
});

export default store ;
