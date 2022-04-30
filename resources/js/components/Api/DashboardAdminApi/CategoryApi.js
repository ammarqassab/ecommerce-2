import axios from "axios";
import { apiurl, timeOut } from "../FormApi";

// axios.defaults.validateStatus = () => {
//     return true;
//     };

export const allCategoryApi = () => {
    const service = axios.create({
        baseURL:apiurl,
        timeout:timeOut
    });
    const responsee = service.get('/allcategory');
    return responsee;
};

export const addCategoryApi = (token, values) => {
    const service = axios.create({
        baseURL:apiurl,
        timeout:timeOut,
        headers:{
            Authorization:`Bearer ${token}`
        }

    });
    const responsee = service.post('/dashboard/addcategory',values);
    return responsee;
};

export const deleteCategoryApi = (token, id) => {
    const service = axios.create({
        baseURL:apiurl,
        timeout:timeOut,
        headers:{
            Authorization:`Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
            'Accept': 'application/json'
        }

    });
    const responsee = service.delete('/dashboard/deletecategory/' + id);
    return responsee;
};

export const editCategoryApi = (token, id, values) => {
    const service = axios.create({
        baseURL:apiurl,
        timeout:timeOut,
        headers:{
            Authorization:`Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
            'Accept': 'application/json'
        }

    });
    const responsee = service.post('/dashboard/editcategory/' + id, values);
    return responsee;
};


// 'Content-Type': file.type
// headers:{
//     'Content-Type': 'multipart/form-data',
//     'Accept': 'application/json'
// }
