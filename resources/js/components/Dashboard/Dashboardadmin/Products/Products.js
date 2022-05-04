import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductsApi } from '../../../Api/DashboardAdminApi/ProductsApi';
import AddProducts from './AddProducts';
import { deleteProducts } from '../../../Store/ProductsSlice';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Products() {

    const brand = useSelector( (state) => state.brand.data);
    const category = useSelector( (state) => state.category.data);
    const products = useSelector( (state) => state.products.data);
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const [taggle, settaggle] = React.useState(false);
    const [edittaggle, setedittaggle] = React.useState(false);
    const [editindex, seteeditindex] = React.useState(null);
    const [editid, seteeditid] = React.useState(null);

    const handleToggle = () => {
        setedittaggle(false);
        taggle ? settaggle(false) : settaggle(true) ;
    };

    const handleeditToggle = (id, index) => {
        settaggle(false);
        edittaggle ? setedittaggle(false) : setedittaggle(true) ;
        seteeditindex(index) ;
        seteeditid(id);
    };

    const deleteproduct = (id, index) => {
        deleteProductsApi(auth.token, id)
        .then(() => {
            dispatch(deleteProducts(index));
        })
        .catch(() => alert("حدث خطأ في حذف المنتج"));
    };

    return (
        <div className=' animate-top'>
            <div className='transparent display-container margin padding'>
                <h1>Products</h1>
                <div className=' display-right button round-large border borderc-3 margin-right' onClick={handleToggle}>
                    <span className="fas fa-plus textc-1"></span> Add Products
                </div>
            </div>

            {taggle ? <AddProducts id={null} index={null} handleToggle={handleToggle} /> : edittaggle ? <AddProducts id={editid} index={editindex + 1} handleToggle={handleeditToggle} /> : ''}

            <div className="transparent margin padding">
                <div className='display-container'>
                    <h1>Table</h1>
                    <div className=' display-right'>
                        <input type="text" className="input transparent round focus-border width-30vw margin-right" placeholder="Search Products" />
                    </div>
                </div>

                <div className='responsive'>
                    <table className="table-all">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Tital</th>
                            <th>Summary</th>
                            {/* <th>Description</th> */}
                            <th>Brand</th>
                            <th>Category</th>
                            <th>Discount %</th>
                            <th>Price</th>
                            <th>Size</th>
                            <th>Condition</th>
                            <th>Quantity</th>
                            <th>Photo</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products ? products.map((iteme, index) =>
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{iteme.title}</td>
                            <td>{iteme.summary}</td>
                            {/* <td>{iteme.description}</td> */}
                            <td>{
                                brand ?
                                brand.map((itemeb, index) =>
                                iteme.brand_id == itemeb.id ?<span key={index}>{itemeb.title}</span> : ""
                                )
                            : iteme.brand_id
                            }</td>
                            <td>{
                                category ?
                                category.map((itemec, index) =>
                                iteme.category_id == itemec.id ?<span key={index}>{itemec.title}</span> : ""
                                )
                            : iteme.category_id
                            }</td>
                            <td>{iteme.disscount}</td>
                            <td>{iteme.price}</td>
                            <td>{iteme.size}</td>
                            <td>{iteme.condition}</td>
                            <td>{iteme.quantity}</td>
                            <td>
                                <LazyLoadImage
                                src={'../upload/product_images/' + iteme.product_image}
                                alt={iteme.title}
                                width={"50px"}
                                height={'50px'}
                                effect={'blur'} />
                            </td>
                            <td>{iteme.status}</td>
                            <td><span className="badge"><span className="fas fa-edit textc-1" onClick={() => handleeditToggle(iteme.id, index)}></span></span><span className="badge"><span className="fas fa-trash-alt textc-1" onClick={() => deleteproduct(iteme.id, index)}></span></span></td>
                        </tr>
                        )
                        : <tr><td>no Products</td></tr>
                        }
                    </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
}
