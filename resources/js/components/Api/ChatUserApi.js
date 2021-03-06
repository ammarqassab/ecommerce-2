import axios from "axios";
import { apiurl, timeOut } from "./FormApi";

export const allMessageApi = (token, id) => {
    const service = axios.create({
        baseURL:apiurl,
        timeout:timeOut,
        headers:{
            Authorization:`Bearer ${token}`
        }
    });
    const responsee = service.post('/allMssageConvID/'+ id);
    return responsee;
};

export const sentMessageApi = (token, values) => {
    const service = axios.create({
        baseURL:apiurl,
        timeout:timeOut,
        headers:{
            Authorization:`Bearer ${token}`
        }

    });
    const responsee = service.post('/sentMessage',values);
    return responsee;
};

export const markAsReadApi = (token, id) => {
    const service = axios.create({
        baseURL:apiurl,
        timeout:timeOut,
        headers:{
            Authorization:`Bearer ${token}`
        }
    });
    const responsee = service.post('/markAsRead/'+ id);
    return responsee;
};

export const shoWAllConvApi = (token) => {
    const service = axios.create({
        baseURL:apiurl,
        timeout:timeOut,
        headers:{
            Authorization:`Bearer ${token}`
        }
    });
    const responsee = service.get('/dashboard/shoWAllConv');
    return responsee;
};
