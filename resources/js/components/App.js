import React from 'react';
import Header from './Header/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';

export default function App() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/products" element={<h1>products</h1>} />
                <Route path="/category" element={<h1>category</h1>} />
                <Route path="/blog" element={<h1>blog</h1>} />
                <Route path="/contactUs" element={<h1>contact Us</h1>} />
                <Route path="/aboutUs" element={<h1>about Us</h1>} />
                <Route path="/search" element={<h1>search</h1>} />
                <Route path="/yourCart" element={<h1>yourCart</h1>} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </div>
    );
}
