import React from 'react';
import {NavLink} from "react-router-dom";
import { logoutuser } from '../../Api/FormApi';
import { AuthContext } from '../../Context/AuthContext';

function MyNavLink (props) {
    return (
        <NavLink className="col m25 text-decoration-none hover-textc-4 center padding-large"  style={({ isActive }) => {return {color: isActive ? "#ff9900" : "#3edbf0"};}} {...props}>{props.children}</NavLink>
    );
}
export default function TopHeader() {

    const authContext = React.useContext(AuthContext);

    function logout() {

        logoutuser(authContext.auth.token)
        .then( (responsee) => {
            authContext.setauth({});
            localStorage.clear();
            // window.location.assign("http://127.0.0.1:8000");
        })
        .catch( () => alert("حدث خطأ في تسجيل الخروج"));
    }


    return (
        <div id="top-header" className="panle padding-0 border-bottom bgc-1">
            <div className="row-padding">
                <NavLink to={"/"} className="col m33 text-decoration-none xxlarge sofia textc-4 hover-textc-3 margin-top">online Ecommerce</NavLink>
                <div className="col m66">
                    <div className="row margin">
                        <MyNavLink to={"/search"} ><span className="fas fa-search textc-3"></span> Search</MyNavLink>
                        <MyNavLink to={"/yourCart"} ><span className="fas fa-cart-arrow-down textc-3"></span> Your Cart</MyNavLink>
                        {authContext.auth.token ?
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
