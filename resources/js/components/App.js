import React from 'react';
import Header from './Header/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Upscroll from './Header/Upscroll/Upscroll';
import Loading from './pages/Loading/Loading';

const CategorySider = React.lazy( () => import('./pages/CategorySider/CategorySider'));
const AboutUs = React.lazy( () => import('./pages/AboutUs/AboutUs'));
const Footer = React.lazy( () => import('./Footer/Footer'));

export default function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/category" element={<React.Suspense fallback={<Loading/>}><CategorySider /></React.Suspense>} />
                <Route path="/blog" element={<h1>blog</h1>} />
                <Route path="/contactUs" element={<h1>contact Us</h1>} />
                <Route path="/aboutUs" element={<React.Suspense fallback={<Loading/>}><AboutUs /></React.Suspense>} />
                <Route path="/search" element={<h1>search</h1>} />
                <Route path="/yourCart" element={<h1>yourCart</h1>} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
            <Upscroll/>
            <React.Suspense fallback={<Loading/>}><Footer /></React.Suspense>
        </div>
    );
}
