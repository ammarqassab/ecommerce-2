import React from 'react';
import {NavLink} from "react-router-dom";

function MyNavLink (props) {
    return (
        <NavLink className="col m25 text-decoration-none hover-textc-4 center padding-large"  style={({ isActive }) => {return {color: isActive ? "red" : "#3edbf0"};}} {...props}>{props.children}</NavLink>
    );
}
export default function TopHeader() {
    return (
        <div id="top-header" className="panle padding-0 border-bottom bgc-1">
            <div className="row-padding">
                <NavLink to={"/"} className="col m33 text-decoration-none xxlarge sofia textc-4 hover-textc-3 margin-top">online Ecommerce</NavLink>
                <div className="col m66">
                    <div className="row margin">
                        <MyNavLink to={"/search"} ><span className="fas fa-search textc-3"></span> Search</MyNavLink>
                        <MyNavLink to={"/yourCart"} ><span className="fas fa-cart-arrow-down textc-3"></span> Your Cart</MyNavLink>
                        <MyNavLink to={"/login"} ><span className="fas fa-sign-in-alt textc-3"></span> Login</MyNavLink>
                        <MyNavLink to={"/register"} ><span className="fas fa-user-plus textc-3"></span> Register</MyNavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}
