import React from 'react';

export default function Login () {
    return (
        <form>
            <div className="container width-75vw">
                <div className="margin padding card -2 hover-shadow transparent" >
                    <div class="center" >
                        <div class="bar margin display-container" >
                            <div class="bar-item xlarge textc-3 bottombar borderc-3">Login</div>
                        </div>
                    </div>
                    <div className="row-padding">
                        <div className="col s100 padding" >
                            <input type="email" className="input transparent round focus-border" placeholder="Email" name="email" />
                        </div>
                        <div className="col s100 padding" >
                            <input type="password" className="input transparent round focus-border" placeholder="Password" name="password" />
                        </div>
                        <div className="col s100 padding" >
                            <button type="submit" className="button round-large display-block border" name="signup_button" >Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}
