import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Form(props) {

    const type = props.type;
    const name = props.name;
    const value = props.value;
    const setvalue = props.setvalue;

    return (
        <div className="col s100 padding" >
            <label className=' xlarge textc-3'>{name} :</label>
            <input type={type} className="input transparent round focus-border" placeholder={name} value={value} onChange={e => setvalue(e.target.value) } required/>
        </div>
    );
}

export default function Edituser() {

    const auth = useSelector( (state) => state.auth);
    const dispatch = useDispatch();

    const [firstname,setfirstname] = React.useState(auth.firstname);
    const [lastname,setlastname] = React.useState(auth.lastname);
    const [username,setusername] = React.useState(auth.username);
    const [email,setemail] = React.useState(auth.email);
    const [phone,setphone] = React.useState(auth.phone);
    const [address,setaddress] = React.useState(auth.address);
    const [city,setcity] = React.useState(auth.city);

    const [curentpassword,setcurentpassword] = React.useState("");
    const [password,setpassword] = React.useState("");
    const [confirmPassword,setconfirmPassword] = React.useState("");

    const [user,setuser] = React.useState({});

    return (
        <div className=' margin animate-top'>
            <div className=' row-padding'>
                <div className=' col l50'>
                    <div className=' row-padding'>
                        <div className='col s100'>
                            <img src={"../img/dashuser.png"} alt='' className='width-100 height-400px'/>
                        </div>
                        <div className='col s100' >
                            <div className="center" >
                                <div className="bar display-container"  style={{marginTop:"-80px",width:"154px",height:"154px"}}>
                                    <div className="bar-item border borderc-1 circle padding-0">
                                        <img src={"../img/dashuser.png"} alt='' className=' circle' style={{width:"150px",height:"150px"}} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col s100 margin-top' >
                            <div className=' row-padding'>
                                <Form type={"password"} name={"Curent Password"} value={curentpassword} setvalue={setcurentpassword}/>
                                <Form type={"password"} name={"New Password"} value={password} setvalue={setpassword}/>
                                <Form type={"password"} name={"New Confirm Password"} value={confirmPassword} setvalue={setconfirmPassword}/>
                                <div className="col s100 padding" >
                                    <button type="submit" className="button round-large display-block border" >Change Password</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' col l50'>
                    <form>
                        <div className="transparent" >
                            <div className="center" >
                                <div className="bar margin display-container" >
                                    <div className="bar-item xlarge textc-3 bottombar borderc-3">Edit Profile</div>
                                </div>
                            </div>
                            <div className="row-padding">
                                <Form type={"text"} name={"First Name"} value={firstname} setvalue={setfirstname}/>
                                <Form type={"text"} name={"Last Name"} value={lastname} setvalue={setlastname}/>
                                <Form type={"text"} name={"User Name"} value={username} setvalue={setusername}/>
                                <Form type={"email"} name={"Email"} value={email} setvalue={setemail}/>
                                <Form type={"text"} name={"Phone"} value={phone} setvalue={setphone}/>
                                <Form type={"text"} name={"Address"} value={address} setvalue={setaddress}/>
                                <Form type={"text"} name={"City"} value={city} setvalue={setcity}/>
                                <div className="col s100 padding" >
                                    <button type="submit" className="button round-large display-block border" name="signup_button" >Update</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
