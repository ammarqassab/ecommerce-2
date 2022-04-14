import React from 'react';
import ReactDOM from 'react-dom';
import "../../css/styleammar.css";
import "../../css/all.min.css";
import App from './App';
import {BrowserRouter} from "react-router-dom";
import AuthProvider from './Context/AuthContext';


if (document.getElementById('root')) {
    ReactDOM.render(
    <AuthProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </AuthProvider>
    ,
    document.getElementById('root'));
}
