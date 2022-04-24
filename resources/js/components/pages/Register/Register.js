import React from 'react';
import { registeruser } from '../../Api/FormApi';

export default function Register () {

    const [firstname,setfirstname] = React.useState("");
    const [lastname,setlastname] = React.useState("");
    const [username,setusername] = React.useState("");
    const [email,setemail] = React.useState("");
    const [password,setpassword] = React.useState("");
    const [confirmPassword,setconfirmPassword] = React.useState("");
    const [phone,setphone] = React.useState("");
    const [address,setaddress] = React.useState("");
    const [city,setcity] = React.useState("");
    const [user,setuser] = React.useState({});

    function register(e) {
        e.preventDefault();
        if(password === confirmPassword) {

            setuser({firstname:firstname, lastname:lastname, username:username, email:email, phone:phone, address:address, city:city, password:password, c_password:confirmPassword});

            registeruser(user)
            .then( (responsee) => {
                if(responsee.data.message === "register successfully") {
                    window.location.assign("http://127.0.0.1:8000/login");
                }

            })
            .catch( () => alert("حدث خطأ في الأضافة"));

        } else {
            alert("wrong for password");
        }

    }

    return (
        <form>
            <div className="container width-75vw">
                <div className="margin padding card-2 hover-shadow transparent" >
                    <div className="center" >
                        <div className="bar margin display-container" >
                            <div className="bar-item xlarge textc-3 bottombar borderc-3">Register</div>
                        </div>
                    </div>
                    <div className="row-padding">
                        <div className="col m50 padding" >
                            <input type="text" className="input transparent round focus-border" placeholder="First Name" name="f_name" value={firstname} onChange={e => setfirstname(e.target.value) } required/>
                        </div>
                        <div className="col m50 padding" >
                            <input type="text" className="input transparent round focus-border" placeholder="Last Name" name="l_name" value={lastname} onChange={e => setlastname(e.target.value) } required/>
                        </div>
                        <div className="col m50 padding" >
                            <input type="text" className="input transparent round focus-border" placeholder="User Name" name="u_name" value={username} onChange={e => setusername(e.target.value) } required/>
                        </div>
                        <div className="col m50 padding" >
                            <input type="email" className="input transparent round focus-border" placeholder="Email" name="email" value={email} onChange={e => setemail(e.target.value) } required/>
                        </div>
                        <div className="col m50 padding" >
                            <input type="password" className="input transparent round focus-border" placeholder="Password" name="password" value={password} onChange={e => setpassword(e.target.value) } required/>
                        </div>
                        <div className="col m50 padding" >
                            <input type="password" className="input transparent round focus-border" placeholder="Confirm Password" name="repassword" value={confirmPassword} onChange={e => setconfirmPassword(e.target.value) } required/>
                        </div>
                        <div className="col m50 padding" >
                            <input type="text" className="input transparent round focus-border" placeholder="Phone" name="phone" value={phone} onChange={e => setphone(e.target.value) } />
                        </div>
                        <div className="col m50 padding" >
                            <input type="text" className="input transparent round focus-border" placeholder="Address" name="address" value={address} onChange={e => setaddress(e.target.value) } />
                        </div>
                        <div className="col m50 padding" >
                            <input type="text" className="input transparent round focus-border" placeholder="City" name="city" value={city} onChange={e => setcity(e.target.value) } />
                        </div>
                        <div className="col s100 padding" >
                            <button type="submit" className="button round-large display-block border" name="signup_button" onClick={register}>Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

