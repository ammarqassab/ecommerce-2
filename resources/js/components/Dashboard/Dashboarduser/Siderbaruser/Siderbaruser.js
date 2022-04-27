import React from 'react';
import { NavLink } from 'react-router-dom';

function MyNavLink (props) {
    return (
    <NavLink className="bar-item button border-bottom textc-3 hover-textc-1" {...props}>
        {props.children}
    </NavLink>);
    // className="hide-small"  style={({ isActive }) => {return {backgroundColor: isActive ? "#ff9900" : ""};}}
}

export default function Siderbaruser() {

    return (
        <div className='' >
            <div className="sidebar bar-block rightbar animate-left">
            <button className="bar-item button border-bottom large center textc-3 hover-textc-1"><span className="fas fa-store textc-3 hover-textc-1"></span> User</button>
            <MyNavLink to="/dashboard"><span className="fas fa-cogs textc-3 hover-textc-1"></span> Dashboard</MyNavLink>
            <MyNavLink to="/dashboard/order"><span className="fas fa-cogs textc-3 hover-textc-1"></span> Order</MyNavLink>
            <MyNavLink to="/dashboard/reviews"><span className="fas fa-cogs textc-3 hover-textc-1"></span> Reviews</MyNavLink>
            </div>
        </div>
    );
}
