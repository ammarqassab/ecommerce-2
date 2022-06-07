import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from "react-slick";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { addCartApi } from '../../../Api/CartApi';
import { updataCart } from '../../../Store/CartSlice';
import { Link } from 'react-router-dom';

function Card(props) {

    let settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        rows: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                }
                },
                {
                breakpoint: 850,
                settings: {
                    slidesToShow: 3,
                }
                },
                {
                breakpoint: 650,
                settings: {
                    slidesToShow: 2,
                }
                },
                {
                breakpoint: 350,
                settings: {
                    slidesToShow: 1,
                }
                }
            ]
    };

    const products = useSelector( (state) => state.products.data);
    const id = props.id;
    const condition = props.condition;
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const numDiscount = (price, disscount) => {
        return disscount <= 100 ? price - (price/100) * disscount : price;
    };

    const addcart = (id) => {
        addCartApi(auth.token, id, {quantity:1})
        .then((responsee) => {
            dispatch(updataCart(responsee.data.data));
        })
        .catch(() => alert("حدث خطأ في إضافة الكرت"));
    };

    return (

        <Slider {...settings}>
                {products ? products.map((iteme, index) =>
                    id == iteme.category_id && iteme.status == "active" && ( iteme.condition == condition || condition == '') ?
                    <div key={index}>

                        <div className='margin' >
                            <div className='display-container clip-path-circle'>
                                <div className=' display-topright badge bgc-1 border-0 bold textc-4 round' style={{marginTop:"10px"}} >{iteme.condition}</div>
                                <LazyLoadImage
                                src={'../upload/product_images/' + iteme.product_image}
                                alt={iteme.title}
                                width={"100%"}
                                height={'300px'}
                                effect={'blur'} />
                            </div>

                            <div className='row-padding center card hover-shadow ' >
                                <div className='col s100' >
                                    <div className='row-padding' >
                                        <div className='col s50'><Link to={`/viewProduct/${index}`} className='large bold textc-3 hover-textc-4 text-decoration-none'>View</Link></div>
                                        <div className='col s50'><Link to="/yourCart" className='fas fa-cart-arrow-down large textc-3 hover-textc-4' ></Link></div>
                                    </div>
                                </div>
                                <div className='col s100' >
                                    <div className='row-padding' >
                                        <div className='col s100 left-align' >{iteme.title}</div>
                                        <div className='col s100 large' >$ {numDiscount(iteme.price, iteme.disscount)} || <span className='text-line-through'> $ {iteme.price}</span></div>
                                        <div className='col s100 left-align'>{iteme.summary}</div>
                                        <div className='col s100 left-align'>{iteme.description}</div>
                                    </div>
                                </div>
                                <button className='col s100 padding-small clip-path-add large textc-2 border-0 pointer hover-textc-1' onClick={() => addcart(iteme.id)} >ADD To Card</button>
                            </div>
                        </div>

                    </div>
                    :null
                )
                :null}
        </Slider>

    );
}


export default function ProductsHome(props) {

    const brand = useSelector( (state) => state.brand.data);
    const category = useSelector( (state) => state.category.data);
    const condition = props.condition;

    return (
        <>
            <div className="center" >
                <div className="bar margin-top display-container" >
                    <div className="bar-item xlarge textc-4 bottombar borderc-4">{condition} Products</div>
                </div>
            </div>
            {category ?
                category.map((iteme, index) =>
                (iteme.status == "active"?
                <div key={index} className="margin">
                    <br/>
                    <div className=' margin bgc-1 round-large' >
                        <div className='row-padding' >
                            <div className='col l66 xxlarge textc-4 padding' >{iteme.title}</div>
                            {iteme.disscount == 0 ? null : <div className='col l33 xxlarge textc-3 padding' >Discount = {iteme.disscount} %</div>}
                        </div>
                    </div>

                    <Card id={iteme.id} condition={condition}/>

                </div>
                : null)
                )
            : null
            }
        </>
    );
}

