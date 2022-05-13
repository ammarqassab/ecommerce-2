import axios from "axios";
import { apiurl, timeOut } from "./FormApi";

export const allCartApi = (token) => {
    const service = axios.create({
        baseURL:apiurl,
        timeout:timeOut,
        headers:{
            Authorization:`Bearer ${token}`
        }
    });
    const responsee = service.get('/allcart');
    return responsee;
};

export const addCartApi = (token, id, values) => {
    const service = axios.create({
        baseURL:apiurl,
        timeout:timeOut,
        headers:{
            Authorization:`Bearer ${token}`
        }

    });
    const responsee = service.post('/addcart/' + id ,values);
    return responsee;
};

export const deleteCartApi = (token, id) => {
    const service = axios.create({
        baseURL:apiurl,
        timeout:timeOut,
        headers:{
            Authorization:`Bearer ${token}`
        }

    });
    const responsee = service.post('/deletecart/' + id);
    return responsee;
};

export const editCartApi = (token, id, values) => {
    const service = axios.create({
        baseURL:apiurl,
        timeout:timeOut,
        headers:{
            Authorization:`Bearer ${token}`,
            'Accept': 'application/json'
        }

    });
    const responsee = service.post('/editcart/' + id, values);
    return responsee;
};
