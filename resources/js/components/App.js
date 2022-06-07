import React from 'react';
import Header from './Header/Header';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Upscroll from './Header/Upscroll/Upscroll';
import Loading from './pages/Loading/Loading';
import { useSelector } from 'react-redux';

const CategorySider = React.lazy( () => import('./pages/CategorySider/CategorySider'));
const AboutUs = React.lazy( () => import('./pages/AboutUs/AboutUs'));
const YourCart = React.lazy( () => import('./pages/YourCart/YourCart'));
const ViewProduct = React.lazy( () => import('./pages/ViewProduct/ViewProduct'));
const Search = React.lazy( () => import('./pages/Search/Search'));
const Chat = React.lazy( () => import('./pages/ContactUs/Chat'));
const Footer = React.lazy( () => import('./Footer/Footer'));

export default function App() {

    const auth = useSelector(state => state.auth);

    return (
        <div>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/category" element={<React.Suspense fallback={<Loading/>}><CategorySider /></React.Suspense>} />
                {/* <Route path="/blog" element={<h1>blog</h1>} /> */}
                <Route path="/contactUs" element={
                <React.Suspense fallback={<Loading/>}>
                    {auth.id && auth.role =="user" ? <Chat userId={auth.id} /> : auth.id && auth.role =="admin" ? <Navigate to="/dashboard/chatAdmin"/> : <Navigate to="/login"/>}
                </React.Suspense>}
                />
                <Route path="/aboutUs" element={<React.Suspense fallback={<Loading/>}><AboutUs /></React.Suspense>} />
                <Route path="/search" element={<React.Suspense fallback={<Loading/>}><Search/></React.Suspense>} />
                <Route path="/viewProduct/:id" element={<React.Suspense fallback={<Loading/>}><ViewProduct/></React.Suspense>} />
                <Route path="/yourCart" element={<React.Suspense fallback={<Loading/>}><YourCart /></React.Suspense>} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
            <Upscroll/>
            <React.Suspense fallback={<Loading/>}><Footer /></React.Suspense>
        </div>
    );
}
