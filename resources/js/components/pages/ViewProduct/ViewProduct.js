import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { addCartApi } from '../../Api/CartApi';
import { updataCart } from '../../Store/CartSlice';

export default function ViewProduct() {

    const Params = useParams();
    const products = useSelector( (state) => state.products.data);
    const product = products[Params.id];
    const category = useSelector( (state) => state.category.data);
    const brand = useSelector( (state) => state.brand.data);
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    let categorytext = "";
    for (let i in category) {
        if(category[i].id === product.category_id) {
            categorytext = category[i].title;
            break;
        }
    };
    let brandtext = "";
    for (let i in brand) {
        if(brand[i].id === product.brand_id) {
            brandtext = brand[i].title;
            break;
        }
    };

    const addcart = (id) => {
        addCartApi(auth.token, id, {quantity:1})
        .then((responsee) => {
            dispatch(updataCart(responsee.data.data));
        })
        .catch(() => alert("حدث خطأ في إضافة الكرت"));
    };

    return (
        <>
            <div className=' bgc-1 height-con' >
                <div className=' row-padding'>
                    <div className=' col m50' >
                        <LazyLoadImage
                            src={'../upload/product_images/' + product.product_image}
                            alt={product.title}
                            width={"100%"}
                            height={'500px'}
                            effect={'blur'} />
                    </div>
                    <div className=' col m50' >
                        <div className="center" >
                            <div className="bar margin-top display-container" >
                                <div className="bar-item xlarge textc-4 bottombar borderc-4">{product.title}</div>
                            </div>
                        </div>
                        <div className=' margin-top center' >
                            <div className=' row-padding' >
                                <div className='col s100 large textc-2 left-align' ><span className=' textc-4 bold' >Category : </span>{categorytext}</div>
                                <div className='col s100 large textc-2 left-align' ><span className=' textc-4 bold' >Brand : </span>{brandtext}</div>
                                <div className='col m50 large textc-2 left-align' ><span className=' textc-4 bold' >Condition : </span>{product.condition}</div>
                                <div className='col m50 large textc-2 left-align' ><span className=' textc-4 bold' >price : </span>{product.disscount <= 100 ? product.price - (product.price/100) * product.disscount : product.price}</div>
                                <div className='col m50 large textc-2 left-align' ><span className=' textc-4 bold' >Quantity : </span>{product.quantity}</div>
                                <div className='col m50 large textc-2 left-align' ><span className=' textc-4 bold' >Size : </span>{product.size}</div>
                                <div className='col s100 large textc-2 left-align' ><span className=' textc-4 bold' >Summary : </span>{product.summary}</div>
                                <div className='col s100 large textc-2 left-align' ><span className=' textc-4 bold' >Description : </span>{product.description}</div>
                                <div className='col s100 '>
                                    <div className=' margin-auto width-50' >
                                        <button className='padding large textc-4 hover-textc-2 borderc-4 round-large transparent hover-bgc-4' onClick={() => addcart(product.id)} >ADD To Card</button>
                                    </div>
                                </div>
                                <div className='col s100 '>
                                    <div className=' margin-auto width-50' >
                                        <NavLink to={"/"} className='padding large textc-4 hover-textc-2 border borderc-4 round-large transparent hover-bgc-4 width-100 text-decoration-none margin'><span className="fas fa-home textc-4 hover-textc-2"></span> Home</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
