import React from 'react';
import ReactDOM from 'react-dom';
import "../../css/styleammar.css";
import "../../css/all.min.css";
import App from './App';
import {BrowserRouter} from "react-router-dom";


if (document.getElementById('root')) {
    ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root'));
}
