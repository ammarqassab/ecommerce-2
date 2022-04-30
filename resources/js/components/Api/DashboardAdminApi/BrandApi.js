import axios from "axios";
import { apiurl, timeOut } from "../FormApi";

export const allBrandApi = () => {
    const service = axios.create({
        baseURL:apiurl,
        timeout:timeOut
    });
    const responsee = service.get('/allbrand');
    return responsee;
};

export const addBrandApi = (token, values) => {
    const service = axios.create({
        baseURL:apiurl,
        timeout:timeOut,
        headers:{
            Authorization:`Bearer ${token}`
        }

    });
    const responsee = service.post('/dashboard/addbrand',values);
    return responsee;
};

export const deleteBrandApi = (token, id) => {
    const service = axios.create({
        baseURL:apiurl,
        timeout:timeOut,
        headers:{
            Authorization:`Bearer ${token}`
        }

    });
    const responsee = service.delete('/dashboard/deletebrand/' + id);
    return responsee;
};

export const editBrandApi = (token, id, values) => {
    const service = axios.create({
        baseURL:apiurl,
        timeout:timeOut,
        headers:{
            Authorization:`Bearer ${token}`,
            'Accept': 'application/json'
        }

    });
    const responsee = service.post('/dashboard/editbrand/' + id, values);
    return responsee;
};
