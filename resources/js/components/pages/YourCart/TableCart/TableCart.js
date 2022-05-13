import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { deleteCartApi, editCartApi } from '../../../Api/CartApi';
import { deleteCart, editCart } from '../../../Store/CartSlice';

export default function TableCart() {

    const cart = useSelector( state => state.cart.data);
    const products = useSelector( (state) => state.products.data);
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const deletecart = (id, index) => {
        deleteCartApi(auth.token, id)
        .then(() => {
            dispatch(deleteCart(index));
        })
        .catch(() => alert("حدث خطأ في حذف الكرت"));
    };

    const editcart = (id, product_id, index, quantity) => {
        editCartApi(auth.token, id, {product_id:product_id, quantity:quantity})
        .then((responsee) =>{
            dispatch(editCart([index + 1 , responsee.data.data]));
        })
        .catch( () => alert("حدث خطأ في تعديل الكرت"));
    };

    return (
        <div className="transparent margin padding">

            <div className='responsive'>
                <table className="table-all">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Unit Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {cart ? cart.map((itemec, indexc) =>
                        products.map((itemep, indexp) =>
                        (itemec.product_id == itemep.id ?
                            <tr key={indexc}>
                                <td>
                                    <LazyLoadImage
                                    src={'../upload/product_images/' + itemep.product_image}
                                    alt={itemep.title}
                                    width={"50px"}
                                    height={'50px'}
                                    effect={'blur'} />
                                </td>
                                <td>{itemep.title}</td>
                                <td>{itemep.disscount <= 100 ? itemep.price - (itemep.price/100) * itemep.disscount : itemep.price}</td>
                                <td><span className="badge large"  onClick={() => editcart(itemec.id, itemec.product_id, indexc, Number(itemec.quantity) - 1)}>-</span> {itemec.quantity} <span className="badge large"  onClick={() => editcart(itemec.id, itemec.product_id, indexc, Number(itemec.quantity) + 1)}>+</span></td>
                                <td>{itemep.disscount <= 100 ? (itemep.price - (itemep.price/100) * itemep.disscount) * Number(itemec.quantity) : itemep.price * Number(itemec.quantity)}</td>
                                <td><span className="badge"><span className="fas fa-trash-alt textc-1" onClick={() => deletecart(itemec.id, indexc)}></span></span></td>
                            </tr>
                        : null)
                        )
                    )
                    : <tr><td>no Cart</td></tr>
                    }
                </tbody>
                </table>
            </div>

        </div>
    );

}
