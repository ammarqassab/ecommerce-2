import React from 'react';
import ReactDOM from 'react-dom';
import "../../css/styleammar.css";
import "../../css/all.min.css";
import {BrowserRouter} from "react-router-dom";
import Dashboard from './components/dashboard';


if (document.getElementById('dashboard')) {
    ReactDOM.render(
    <BrowserRouter>
        <Dashboard />
    </BrowserRouter>
    ,
    document.getElementById('dashboard'));
}