import axios from "axios";
import { apiurl, timeOut } from "../FormApi";

export const allUsersApi = () => {
    const service = axios.create({
        baseURL:apiurl,
        timeout:timeOut
    });
    const responsee = service.get('/dashboard/alluser');
    return responsee;
};

export const deleteUsersApi = (token, id) => {
    const service = axios.create({
        baseURL:apiurl,
        timeout:timeOut,
        headers:{
            Authorization:`Bearer ${token}`
        }

    });
    const responsee = service.post('/dashboard/deleteuser/' + id);
    return responsee;
};
