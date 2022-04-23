import React from 'react';
import { NavLink } from 'react-router-dom';

function MyNavLink (props) {
    return (
    <NavLink className="bar-item button border-bottom textc-3 hover-textc-1" {...props}>
        {props.children}
    </NavLink>);
    // className="hide-small"  style={({ isActive }) => {return {backgroundColor: isActive ? "#ff9900" : ""};}}
}

export default function Siderbar() {

    return (
        <div className='' >
            <div className="sidebar bar-block rightbar animate-left" id="sidebar">
            <button className="bar-item button border-bottom large center textc-3 hover-textc-1">Admin</button>
            <MyNavLink to="/dashboard">Dashboard</MyNavLink>
            <MyNavLink to="/dashboard/brande">Brande</MyNavLink>
            <MyNavLink to="/dashboard/category">Category</MyNavLink>
            <MyNavLink to="/dashboard/products">Products</MyNavLink>
            <MyNavLink to="/dashboard/users">Users</MyNavLink>
            </div>
        </div>
    );
}
