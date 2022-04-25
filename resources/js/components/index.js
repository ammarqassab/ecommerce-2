import React from 'react';
import ReactDOM from 'react-dom';
import "../../css/slick.css";
import "../../css/slick-theme.css";
import "../../css/styleammar.css";
import "../../css/all.min.css";
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from './Dashboard/Dashboard';
import { Provider, useDispatch } from 'react-redux';
import store from './Store/Store';
import { addDataUser } from './Store/AuthSlice';

function Index() {

    const dispatch = useDispatch();

    React.useEffect( () => {

        if(localStorage.getItem("token")) {
            const firstname = localStorage.getItem("firstname");
            const lastname = localStorage.getItem("lastname");
            const username = localStorage.getItem("username");
            const email = localStorage.getItem("email");
            const phone = localStorage.getItem("phone");
            const address = localStorage.getItem("address");
            const city = localStorage.getItem("city");
            // const id = localStorage.getItem("id");
            const token = localStorage.getItem("token");
            const role = localStorage.getItem("role");
            const message = localStorage.getItem("message");

            dispatch(addDataUser({firstname, lastname, username, email, phone, address, city, token, role, message}));
        }
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path='*' element={<App/>} />
                <Route path='/dashboard' element={<Dashboard/>}/>
                <Route path='/dashboard/:id' element={<Dashboard/>}/>
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
