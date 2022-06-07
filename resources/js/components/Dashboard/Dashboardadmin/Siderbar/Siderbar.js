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
            <div className="sidebar bar-block rightbar animate-left">
            <button className="bar-item button border-bottom large center textc-3 hover-textc-1"><span className="fas fa-store textc-3 hover-textc-1"></span> Admin</button>
            <MyNavLink to="/dashboard"><span className="fas fa-cogs textc-3 hover-textc-1"></span> Dashboard</MyNavLink>
            <MyNavLink to="/dashboard/chartline"><span className="fas fa-chart-line textc-3 hover-textc-1"></span> Chart Line</MyNavLink>
            <MyNavLink to="/dashboard/brands"><span className="fas fa-cube textc-3 hover-textc-1"></span> Brands</MyNavLink>
            <MyNavLink to="/dashboard/category"><span className="fas fa-network-wired textc-3 hover-textc-1"></span> Category</MyNavLink>
            <MyNavLink to="/dashboard/products"><span className="fas fa-cart-plus textc-3 hover-textc-1"></span> Products</MyNavLink>
            <MyNavLink to="/dashboard/users"><span className="fas fa-user-friends textc-3 hover-textc-1"></span> Users</MyNavLink>
            <MyNavLink to="/dashboard/chatAdmin"><span className="fab fa-telegram-plane textc-3 hover-textc-1"></span> Chat User</MyNavLink>
            </div>
        </div>
    );
}
