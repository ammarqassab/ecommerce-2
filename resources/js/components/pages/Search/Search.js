import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from 'react-router-dom';
import { addCartApi } from '../../Api/CartApi';
import { updataCart } from '../../Store/CartSlice';

export default function Search() {

    const category = useSelector( (state) => state.category.data);
    const products = useSelector( (state) => state.products.data);

    const [title, settitle] = React.useState('');
    const [category_id, setcategory_id] = React.useState("all");
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    let newproducts =[];

    for(let i in products) {
        if(products[i].title.toLowerCase().includes(title.toLowerCase()) == true) {
            newproducts.push(products[i].id);
        }
    }

    const addcart = (id) => {
        addCartApi(auth.token, id, {quantity:1})
        .then((responsee) => {
            dispatch(updataCart(responsee.data.data));
        })
        .catch(() => alert("حدث خطأ في إضافة الكرت"));
    };

    const numDiscount = (price, disscount) => {
        return disscount <= 100 ? price - (price/100) * disscount : price;
    };

    return (
        <>
            <div className=' bgc-1 height-con' >
                <div className=' row-padding' >
                    <div className=' col m25 hide-small height-100'  style={{overflowY:"auto"}} >
                        <div className=' margin' >
                            <ul className="ul hoverul" >
                                <li className="textc-2 hover-textc-4" onClick={(e) => setcategory_id('all')}>All Category</li>
                                {category ?
                                    category.map((iteme, index) =>
                                    (iteme.status == "active" ?
                                        <li className="textc-2 hover-textc-4" key={index} onClick={(e) => setcategory_id(iteme.id)}>{iteme.title}</li>
                                    : null)
                                    )
                                : null
                                }
                            </ul>
                        </div>
                    </div>
                    <div className=' col m75 height-100' style={{overflowY:"auto"}} >
                        <div className='margin' >
                            <div className=' row-padding' >
                                <div className="col s100 padding" >
                                    <div className=' center' >
                                        <select className="select width-20 bgc-3 focus-border textc-1 display-inline" value={category_id} onChange={(e) => setcategory_id(e.target.value)} style={{borderRight:'none',borderRadius:'16px 0 0 16px'}}>
                                            <option value="all">All Category</option>
                                            {category ?
                                                category.map((iteme, index) =>
                                                <option key={index} value={iteme.id}>{iteme.title}</option>
                                                )
                                            : null}
                                        </select>
                                        <input type="text" className="input width-50 transparent focus-border textc-2 display-inline" placeholder="Search" value={title} onChange={(e) => settitle(e.target.value)} style={{borderLeft:'none',borderRadius:'0 16px 16px 0'}} />
                                    </div>
                                </div>
                                {products ? products.map((iteme, index) =>
                                    newproducts.indexOf(iteme.id) != -1 && (iteme.category_id == category_id || category_id == 'all') ?
                                    <div key={index} className='col m50 l33'>

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
                                                        <div className='col s100 left-align textc-2' >{iteme.title}</div>
                                                        <div className='col s100 large textc-2' >$ {numDiscount(iteme.price, iteme.disscount)} || <span className='text-line-through'> $ {iteme.price}</span></div>
                                                        <div className='col s100 left-align textc-2'>{iteme.summary}</div>
                                                        <div className='col s100 left-align textc-2'>{iteme.description}</div>
                                                    </div>
                                                </div>
                                                <button className='col s100 padding-small clip-path-add large textc-2 border-0 pointer hover-textc-1' onClick={() => addcart(iteme.id)} >ADD To Card</button>
                                            </div>
                                        </div>

                                    </div>
                                    :null
                                )
                                :null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
