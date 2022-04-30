import axios from "axios";
import { apiurl, timeOut } from "../FormApi";

// axios.defaults.validateStatus = () => {
//     return true;
//     };

export const allProductsApi = () => {
    const service = axios.create({
        baseURL:apiurl,
        timeout:timeOut
    });
    const responsee = service.get('/allproduct');
    return responsee;
};

export const addProductsApi = (token, values) => {
    const service = axios.create({
        baseURL:apiurl,
        timeout:timeOut,
        headers:{
            Authorization:`Bearer ${token}`
        }

    });
    const responsee = service.post('/dashboard/addproduct',values);
    return responsee;
};

export const deleteProductsApi = (token, id) => {
    const service = axios.create({
        baseURL:apiurl,
        timeout:timeOut,
        headers:{
            Authorization:`Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
            'Accept': 'application/json'
        }

    });
    const responsee = service.delete('/dashboard/deleteproduct/' + id);
    return responsee;
};

export const editProductsApi = (token, id, values) => {
    const service = axios.create({
        baseURL:apiurl,
        timeout:timeOut,
        headers:{
            Authorization:`Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
            'Accept': 'application/json'
        }

    });
    const responsee = service.post('/dashboard/editproduct/' + id, values);
    return responsee;
};
