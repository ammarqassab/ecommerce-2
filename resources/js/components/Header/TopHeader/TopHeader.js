import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {NavLink, useNavigate} from "react-router-dom";
import { logoutuser } from '../../Api/FormApi';
import { logoutUser } from '../../Store/AuthSlice';

function MyNavLink (props) {
    return (
        <NavLink className="col m25 text-decoration-none hover-textc-4 center padding-large display-container"  style={({ isActive }) => {return {color: isActive ? "rgb(255, 0, 150)" : "#3edbf0"};}} {...props}>{props.children}</NavLink>
    );
}
export default function TopHeader() {

    const auth = useSelector( (state) => state.auth);
    const cart = useSelector( state => state.cart.data);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    function logout() {

        logoutuser(auth.token)
        .then( (responsee) => {
            dispatch(logoutUser());
            localStorage.clear();
            location.assign("http://127.0.0.1:8000");
            navigate("/");
        })
        .catch( () => alert("حدث خطأ في تسجيل الخروج"));
    }

    let cartlen = 0;
    for (let i in cart) {cartlen++};


    return (
        <div id="top-header" className="panle padding-0 border-bottom bgc-1">
            <div className="row-padding">
                <NavLink to={"/"} className="col m33 text-decoration-none xxlarge sofia textc-4 hover-textc-3 margin-top">online Ecommerce</NavLink>
                <div className="col m66">
                    <div className="row margin">
                        <MyNavLink to={"/search"} ><span className="fas fa-search textc-3"></span> Search</MyNavLink>
                        <MyNavLink to={"/yourCart"} ><span className="fas fa-cart-arrow-down textc-3"></span> Your Cart<span className=' badge textc-1 border-0 large bgc-4' style={{position:"absolute",top:"0px",marginLeft:"0px",fontWeight:"bold"}} >{cartlen}</span></MyNavLink>
                        {auth.token ?
                            <>
                            <MyNavLink to={"/dashboard"} ><span className="fas fa-cogs textc-3"></span> Dashboard</MyNavLink>
                            <div onClick={logout}  className="col m25 text-decoration-none textc-3 hover-textc-4 center padding-large"><span className="fas fa-sign-out-alt textc-3"></span> Log out</div>
                            </>
                        :
                            <>
                            <MyNavLink to={"/login"} ><span className="fas fa-sign-in-alt textc-3"></span> Login</MyNavLink>
                            <MyNavLink to={"/register"} ><span className="fas fa-user-plus textc-3"></span> Register</MyNavLink>
                            </>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
}
