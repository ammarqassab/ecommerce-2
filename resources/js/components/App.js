import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Upscroll from './Header/Upscroll/Upscroll';
import CategorySider from './pages/CategorySider/CategorySider';
import AboutUs from './pages/AboutUs/AboutUs';

export default function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/category" element={<CategorySider />} />
                <Route path="/blog" element={<h1>blog</h1>} />
                <Route path="/contactUs" element={<h1>contact Us</h1>} />
                <Route path="/aboutUs" element={<AboutUs />} />
                <Route path="/search" element={<h1>search</h1>} />
                <Route path="/yourCart" element={<h1>yourCart</h1>} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
            <Upscroll/>
            <Footer />
        </div>
    );
}
