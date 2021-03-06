import React from 'react';
import { useDispatch } from 'react-redux';
import {useNavigate} from "react-router-dom"
import { allCartApi } from '../../Api/CartApi';
import { loginuser } from '../../Api/FormApi';
import { addDataUser } from '../../Store/AuthSlice';
import { addCart } from '../../Store/CartSlice';

export default function Login () {

    const [email,setemail] = React.useState("");
    const [password,setpassword] = React.useState("");

    const dispatch = useDispatch();

    const navigate = useNavigate();

    function login(e) {
        e.preventDefault();

        loginuser({email:email, password:password})
        .then( (responsee) => {

            if (responsee.data.data.token){
                localStorage.setItem("firstname", responsee.data.data.firstname);
                localStorage.setItem("lastname", responsee.data.data.lastname);
                localStorage.setItem("username", responsee.data.data.username);
                localStorage.setItem("email", responsee.data.data.email);
                localStorage.setItem("phone", responsee.data.data.phone);
                localStorage.setItem("profile_image", responsee.data.data.profile_image);
                localStorage.setItem("address", responsee.data.data.address);
                localStorage.setItem("city", responsee.data.data.city);
                localStorage.setItem("token", responsee.data.data.token);
                localStorage.setItem("role", responsee.data.data.role);
                localStorage.setItem("id", responsee.data.data.id);
                localStorage.setItem("message", responsee.data.message);

                dispatch(addDataUser(responsee.data.data));

                allCartApi(responsee.data.data.token)
                .then( (responsee) => {
                    dispatch(addCart(responsee.data.data));
                })
                .catch( () => alert("حدث خطأ في تحميل الكروت"));

                // navigate("/");
                location.assign("http://127.0.0.1:8000");
            }

        })
        .catch( () => alert("حدث خطأ في تسجيل الدخول"));

    }

    return (
        <form>
            <div className="container width-75vw height-con">
                <div className="margin padding card-2 hover-shadow transparent" >
                    <div className="center" >
                        <div className="bar margin display-container" >
                            <div className="bar-item xlarge textc-3 bottombar borderc-3">Login</div>
                        </div>
                    </div>
                    <div className="row-padding">
                        <div className="col s100 padding" >
                            <input type="email" className="input transparent round focus-border" placeholder="Email" name="email" value={email} onChange={e => setemail(e.target.value) } required/>
                        </div>
                        <div className="col s100 padding" >
                            <input type="password" className="input transparent round focus-border" placeholder="Password" name="password" value={password} onChange={e => setpassword(e.target.value) } required/>
                        </div>
                        <div className="col s100 padding" >
                            <button type="submit" className="button round-large display-block border" name="signup_button" onClick={login} >Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}
