import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export default function PanleCart() {

    const cart = useSelector( state => state.cart.data);
    const products = useSelector( (state) => state.products.data);

    const youPay = () =>{
        let pay = 0;
        for (let x in cart) {
            for (let y in products) {
                if (cart[x].product_id == products[y].id) {
                    if (products[y].disscount <= 100) {
                        pay += ((products[y].price - (products[y].price/100) * products[y].disscount) * Number(cart[x].quantity));
                    } else {
                        pay += (products[y].price * Number(cart[x].quantity));
                    }
                }
            }
        };
        return pay;
    };

    return (
        <div className='width-33 width-90vw card-2 hover-shadow round margin-auto' >
            <div className=' row-padding' >
                <div className='col s100' >
                    <div className=' margin-auto width-85' >
                        <div className=' row-padding' >
                            <div className=' col s66 xlarge bold' >Cart Subtotal</div>
                            <div className=' col s33 xlarge bold textc-5' >
                                $ {youPay()}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col s100' >
                    <div className=' margin-auto width-85' >
                        <div className=' row-padding' >
                            <div className=' col s66 xlarge bold' >You Pay</div>
                            <div className=' col s33 xlarge bold textc-5' >
                                $ {youPay()}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col s100' >
                    <div className=' margin-auto width-85' >
                        <NavLink to={"/"}  className='button round-large border borderc-3 width-100'>
                            <span className="fas fa-home textc-1"></span> Continue Shopping
                        </NavLink>
                    </div>
                </div>
                <div className='col s100' >
                    <div className=' margin-auto width-85' >
                        <NavLink to={"/"}  className='button round-large bgc-5 width-100'>
                            <span className="fas fa-cart-arrow-down textc-1"></span> Checkout
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );

}
