import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name:"auth",
    initialState:{firstname:null, lastname:null, username:null, email:null, phone:null, address:null, city:null, token:null, role:null, message:null},
    reducers: {
        addDataUser: (state, action) => {
            state.firstname = action.payload.firstname;
            state.lastname = action.payload.lastname;
            state.username = action.payload.username;
            state.email = action.payload.email;
            state.phone = action.payload.phone;
            state.address = action.payload.address;
            state.city = action.payload.city;
            state.token = action.payload.token;
            state.role = action.payload.role;
            state.message = action.payload.message;
        },
        logoutUser: (state) => {
            state.firstname = null;
            state.lastname = null;
            state.username = null;
            state.email = null;
            state.phone = null;
            state.address = null;
            state.city = null;
            state.token = null;
            state.role = null;
            state.message = null;
        }
    }
});

export const {addDataUser, logoutUser} = authSlice.actions;

export default authSlice.reducer ;
