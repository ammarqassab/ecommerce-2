import React from 'react';

export default function Register () {
    return (
        <form>
            <div className="container width-75vw">
                <div className="margin padding card -2 hover-shadow transparent" >
                    <div class="center" >
                        <div class="bar margin display-container" >
                            <div class="bar-item xlarge textc-3 bottombar borderc-3">Register</div>
                        </div>
                    </div>
                    <div className="row-padding">
                        <div className="col m50 padding" >
                            <input type="text" className="input transparent round focus-border" placeholder="First Name" name="f_name" />
                        </div>
                        <div className="col m50 padding" >
                            <input type="text" className="input transparent round focus-border" placeholder="Last Name" name="l_name" />
                        </div>
                        <div className="col m50 padding" >
                            <input type="text" className="input transparent round focus-border" placeholder="User Name" name="l_name" />
                        </div>
                        <div className="col m50 padding" >
                            <input type="email" className="input transparent round focus-border" placeholder="Email" name="email" />
                        </div>
                        <div className="col m50 padding" >
                            <input type="password" className="input transparent round focus-border" placeholder="Password" name="password" />
                        </div>
                        <div className="col m50 padding" >
                            <input type="password" className="input transparent round focus-border" placeholder="Confirm Password" name="repassword" />
                        </div>
                        <div className="col m50 padding" >
                            <input type="text" className="input transparent round focus-border" placeholder="Phone" name="mobile" />
                        </div>
                        <div className="col m50 padding" >
                            <input type="text" className="input transparent round focus-border" placeholder="Address" name="address1" />
                        </div>
                        <div className="col m50 padding" >
                            <input type="text" className="input transparent round focus-border" placeholder="City" name="city" />
                        </div>
                        <div className="col s100 padding" >
                            <button type="submit" className="button round-large display-block border" value="REGISTER" name="signup_button" >Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

