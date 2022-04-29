import React from 'react';
import { registeruser } from '../../Api/FormApi';

function Form(props) {

    const type = props.type;
    const name = props.name;
    const value = props.value;
    const setvalue = props.setvalue;

    return (
        <div className="col m50 padding" >
            <label className=' xlarge textc-3'>{name} :</label>
            <input type={type} className="input transparent round focus-border" placeholder={name} value={value} onChange={e => setvalue(e.target.value) } required/>
        </div>
    );
}

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

    function register(e) {
        e.preventDefault();
        if(password === confirmPassword) {

            registeruser({firstname:firstname, lastname:lastname, username:username, email:email, phone:phone, address:address, city:city, password:password, c_password:confirmPassword})
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
                        <Form type={"text"} name={"First Name"} value={firstname} setvalue={setfirstname}/>
                        <Form type={"text"} name={"Last Name"} value={lastname} setvalue={setlastname}/>
                        <Form type={"text"} name={"User Name"} value={username} setvalue={setusername}/>
                        <Form type={"email"} name={"Email"} value={email} setvalue={setemail}/>
                        <Form type={"password"} name={"Password"} value={password} setvalue={setpassword}/>
                        <Form type={"password"} name={"Confirm Password"} value={confirmPassword} setvalue={setconfirmPassword}/>
                        <Form type={"text"} name={"Phone"} value={phone} setvalue={setphone}/>
                        <Form type={"text"} name={"Address"} value={address} setvalue={setaddress}/>
                        <Form type={"text"} name={"City"} value={city} setvalue={setcity}/>
                        <div className="col s100 padding" >
                            <button type="submit" className="button round-large display-block border" name="signup_button" onClick={register}>Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

