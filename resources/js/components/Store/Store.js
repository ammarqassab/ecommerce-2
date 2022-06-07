import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./AuthSlice";
import { brandSlice } from "./BrandSlice";
import { cartSlice } from "./CartSlice";
import { categorySlice } from "./CategorySlice";
import { chatAdminSlice } from "./ChatAdminSlice";
import { chatUserSlice } from "./ChatUserSlice";
import { productsSlice } from "./ProductsSlice";
import { usersSlice } from "./UsersSlice";

const store = configureStore({
    reducer : {
        auth: authSlice.reducer,
        brand: brandSlice.reducer,
        category: categorySlice.reducer,
        products: productsSlice.reducer,
        users: usersSlice.reducer,
        cart: cartSlice.reducer,
        chatUser: chatUserSlice.reducer,
        chatAdmin: chatAdminSlice.reducer
    },
});

export default store ;
