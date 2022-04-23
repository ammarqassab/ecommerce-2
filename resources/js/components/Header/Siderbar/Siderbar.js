import React from 'react';
import {NavLink} from "react-router-dom";

function MyNavLink (props) {
    return (
    <NavLink className="bar-item button textc-1  margin round-xlarge" style={({ isActive }) => {return {backgroundColor: isActive ? "#ff9900" : "#3edbf0"};}} {...props}>
        {props.children}
    </NavLink>);
    // className="hide-small"
}

export default function Siderbar() {
    return (
            <div className="sidebar-sticky bgc-1">
                <div className="bar textc-2 transparent" >
                    <MyNavLink to={"/"} >Home</MyNavLink>
                    <MyNavLink to={"/products"}>Products</MyNavLink>
                    <MyNavLink to={"/category"}>Category</MyNavLink>
                    <MyNavLink to={"/blog"}>Blog</MyNavLink>
                    <MyNavLink to={"/contactUs"}>Contact Us</MyNavLink>
                    <MyNavLink to={"/aboutUs"}>About Us</MyNavLink>
                </div>
            </div>

    );
}
