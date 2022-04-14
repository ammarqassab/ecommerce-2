import axios from "axios";


const apiurl= 'http://127.0.0.1:8000/api';

// axios.defaults.validateStatus = () => {
//     return true;
//     };

export const registeruser = (values) => {
    const service = axios.create({
        baseURL:apiurl,
        timeout:20000,
        headers:{
            'Accept': 'application/json'
        }

    });
    const responsee = service.post('/register/',values);
    return responsee;
};

export const loginuser = (values) => {
    const service = axios.create({
        baseURL:apiurl,
        timeout:20000,
        headers:{
            'Accept': 'application/json'
        }

    });
    const responsee = service.post('/login/',values);
    return responsee;
};

export const logoutuser = (token) => {
    const service = axios.create({
        baseURL:apiurl,
        timeout:20000,
        headers:{
            Authorization:`Bearer ${token}`
        }

    });
    const responsee = service.post('/logout');
    return responsee;
};
