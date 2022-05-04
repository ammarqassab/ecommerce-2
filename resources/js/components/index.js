import React from 'react';
import ReactDOM from 'react-dom';
import "../../css/slick.css";
import "../../css/slick-theme.css";
import "../../css/styleammar.css";
import "../../css/all.min.css";
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Provider, useDispatch } from 'react-redux';
import store from './Store/Store';
import { addDataUser } from './Store/AuthSlice';
import { allBrandApi } from './Api/DashboardAdminApi/BrandApi';
import { addBrand } from './Store/BrandSlice';
import { addCategory} from './Store/CategorySlice';
import { allCategoryApi } from './Api/DashboardAdminApi/CategoryApi';
import { allProductsApi } from './Api/DashboardAdminApi/ProductsApi';
import { addProducts } from './Store/ProductsSlice';
import Loading from './pages/Loading/Loading';

const Dashboard = React.lazy( () => import('./Dashboard/Dashboard') )

function Index() {

    const dispatch = useDispatch();

    React.useEffect( () => {

        if(localStorage.getItem("token")) {
            const firstname = localStorage.getItem("firstname");
            const lastname = localStorage.getItem("lastname");
            const username = localStorage.getItem("username");
            const email = localStorage.getItem("email");
            const phone = localStorage.getItem("phone");
            const profile_image = localStorage.getItem("profile_image");
            const address = localStorage.getItem("address");
            const city = localStorage.getItem("city");
            const token = localStorage.getItem("token");
            const role = localStorage.getItem("role");
            const message = localStorage.getItem("message");

            dispatch(addDataUser({firstname, lastname, username, email, phone, profile_image, address, city, token, role, message}));
        }

        allBrandApi()
            .then( (responsee) => {
                dispatch(addBrand(responsee.data.data));
            })
            .catch( () => alert("حدث خطأ في تحميل الماركات"));

        allCategoryApi()
            .then( (responsee) => {
                dispatch(addCategory(responsee.data.data));
            })
            .catch( () => alert("حدث خطأ في تحميل الفئات"));

        allProductsApi()
            .then( (responsee) => {
                dispatch(addProducts(responsee.data.data));
            })
            .catch( () => alert("حدث خطأ في تحميل المنتجات"));
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path='*' element={<App/>} />
                <Route path='/dashboard' element={<React.Suspense fallback={<Loading/>}><Dashboard/></React.Suspense>}/>
                <Route path='/dashboard/:id' element={<React.Suspense fallback={<Loading/>}><Dashboard/></React.Suspense>}/>
            </Routes>
        </BrowserRouter>
    );
}

if (document.getElementById('root')) {
    ReactDOM.render(
    <Provider store={store}>
        <Index/>
    </Provider>
    ,document.getElementById('root'));
}
