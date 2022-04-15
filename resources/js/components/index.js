import React from 'react';
import ReactDOM from 'react-dom';
import "../../css/styleammar.css";
import "../../css/all.min.css";
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AuthProvider from './Context/AuthContext';
import Dashboard from './Dashboard/Dashboard';

function Index() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='*' element={<App/>} />
                    <Route path='/dashboard' element={<Dashboard/>}/>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

if (document.getElementById('root')) {
    ReactDOM.render(
    <Index/>
    ,
    document.getElementById('root'));
}
