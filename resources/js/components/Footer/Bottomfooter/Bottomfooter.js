import React from 'react';

export function Description() {
    return (
        <div className="col m33" >
            <div className="textc-1 sofia xxlarge hover-textc-4" >ammar</div>
            <p className="textc-2 hover-textc-3 justify" >
                Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.
            </p>
        </div>
    );
}

export function Ullink() {
    return (
        <div className="col m33" >
            <div className="row-padding" >
                <div className="col m50" >
                    <p className="textc-1 hover-textc-4 large" >Information</p>
                    <ul className="ul hoverul" >
                        <li className="textc-2 hover-textc-4" >About Us</li>
                        <li className="textc-2 hover-textc-4" >Faq</li>
                        <li className="textc-2 hover-textc-4" >Terms & Conditions</li>
                        <li className="textc-2 hover-textc-4" >Contact Us</li>
                        <li className="textc-2 hover-textc-4" >Help</li>
                    </ul>
                </div>
                <div className="col m50" >
                    <p className="textc-1 hover-textc-4 large" >Payment</p>
                    <ul className="ul hoverul" >
                        <li className="textc-2 hover-textc-4" >Payment Methods</li>
                        <li className="textc-2 hover-textc-4" >Money-back</li>
                        <li className="textc-2 hover-textc-4" >Returns</li>
                        <li className="textc-2 hover-textc-4" >Shipping</li>
                        <li className="textc-2 hover-textc-4" >Privacy Policy</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export function Contact() {
    return (
        <div className="col m33" >
            <p className="textc-1 hover-textc-4 large" >Get In Tuch</p>
            <p className="textc-2 hover-textc-3" >+963943435697</p>
            <p className="textc-2 hover-textc-3" >onlineecommerce@gmail.com</p>
            <div className="row-padding center" >
                <div className="col s25 textc-4 hover-textc-3 large" ><span className="fab fa-facebook-f" ></span></div>
                <div className="col s25 textc-4 hover-textc-3 large" ><span className="fab fa-twitter" ></span></div>
                <div className="col s25 textc-4 hover-textc-3 large" ><span className="fab fa-instagram" ></span></div>
                <div className="col s25 textc-4 hover-textc-3 large" ><span className="fab fa-linkedin" ></span></div>
            </div>
            <div className="row-padding center margin-top" >
                <div className="col s25 textc-4 hover-textc-3 xxlarge" ><span className="fab fa-cc-visa" ></span></div>
                <div className="col s25 textc-4 hover-textc-3 xxlarge" ><span className="fab fa-cc-amazon-pay" ></span></div>
                <div className="col s25 textc-4 hover-textc-3 xxlarge" ><span className="fab fa-cc-paypal" ></span></div>
                <div className="col s25 textc-4 hover-textc-3 xxlarge" ><span className="fab fa-cc-mastercard" ></span></div>
            </div>
        </div>
    );
}

export default function Bottomfooter() {
    return (
        <div>
            <footer className="bgc-footer padding-large" id="footer">
                <div className="row-padding" >
                    <Description/>
                    <Ullink/>
                    <Contact/>
                </div>
                <hr/>
                <div className="row-padding center" >
                    <div className="col s100 textc-2 hover-textc-3" >Copyright © 2022 ammar qassab and ahmad alaa - All Rights Reserved</div>
                </div>
            </footer>
        </div>
    );
}