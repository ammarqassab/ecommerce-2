import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductsApi, editProductsApi } from '../../../Api/DashboardAdminApi/ProductsApi';
import { editProducts, updataProducts } from '../../../Store/ProductsSlice';

export default function AddProducts(props) {

    const handleToggle = props.handleToggle;
    const editindex = props.index;
    const editid = props.id;

    const auth = useSelector( (state) => state.auth);
    const brand = useSelector( (state) => state.brand.data);
    const category = useSelector( (state) => state.category.data);
    const products = useSelector( (state) => state.products.data);
    const dispatch = useDispatch();

    const [title, settitle] = React.useState('');
    const [summary, setsummary] = React.useState('');
    const [description, setdescription] = React.useState('');
    const [brand_id, setbrand_id] = React.useState("choose");
    const [category_id, setcategory_id] = React.useState("choose");
    const [disscount, setdisscount] = React.useState(0);
    const [price, setprice] = React.useState(0);
    const [size, setsize] = React.useState(0);
    const [condition, setcondition] = React.useState("New");
    const [quantity, setquantity] = React.useState(0);
    const [status, setstatus] = React.useState('active');
    const [image, setimage] = React.useState(null);

    React.useEffect(() => {
        if(editindex > 0) {
            settitle(products[editindex - 1].title);
            setsummary(products[editindex - 1].summary);
            setdescription(products[editindex - 1].description);
            setbrand_id(products[editindex - 1].brand_id);
            setcategory_id(products[editindex - 1].category_id);
            setdisscount(products[editindex - 1].disscount);
            setprice(products[editindex - 1].price);
            setsize(products[editindex - 1].size);
            setcondition(products[editindex - 1].condition);
            setquantity(products[editindex - 1].quantity);
            setstatus(products[editindex - 1].status);
        }
    }, []);

    const handlefile = (e) => {
        setimage(e.target.files[0]);
    }

    const submit = (e) => {
        e.preventDefault();

        let formData = new FormData();

        formData.append("title", title);
        formData.append("summary", summary);
        formData.append("description", description);
        formData.append("brand_id", brand_id);
        formData.append("category_id", category_id);
        formData.append("disscount", disscount);
        formData.append("price", price);
        formData.append("size", size);
        formData.append("condition", condition);
        formData.append("quantity", quantity);
        formData.append("product_image", image);
        formData.append("status", status);

        addProductsApi(auth.token, formData)
        .then( (responsee) => {
            dispatch(updataProducts(responsee.data.data));
        })
        .catch( () => alert("حدث خطأ في إضافة المنتج"));
    };

    const edit = (e) => {
        e.preventDefault();

        let formData = new FormData();

        formData.append("title", title);
        formData.append("summary", summary);
        formData.append("description", description);
        formData.append("brand_id", brand_id);
        formData.append("category_id", category_id);
        formData.append("disscount", disscount);
        formData.append("price", price);
        formData.append("size", size);
        formData.append("condition", condition);
        formData.append("quantity", quantity);
        formData.append("product_image", image);
        formData.append("status", status);

        editProductsApi(auth.token, editid, formData)
        .then((responsee) =>{
            dispatch(editProducts([editindex, responsee.data.data]));
        })
        .catch( () => alert("حدث خطأ في تعديل المنتج"));
    };

    return (
        <div className='margin padding transparent animate-top'>
            <div className='display-container'>
                <h1>{editid ? "EDIT Products" : "ADD Products"}</h1>
                <div className=' display-right button round-large border borderc-3 margin-right xlarge' onClick={handleToggle}> x </div>
            </div>

            <form>
                <div className="center" >
                    <div className="bar margin display-container" >
                        <div className="bar-item xlarge textc-3 bottombar borderc-3">{editid ? "EDIT" : "ADD"}</div>
                    </div>
                </div>
                <div className="row-padding">
                    <div className="col s100 padding" >
                        <label className=' xlarge textc-3'>Title :</label>
                        <input type="text" className="input transparent round focus-border" placeholder="Enter Title" value={title} onChange={(e) => settitle(e.target.value)} required/>
                    </div>
                    <div className="col s100 padding" >
                        <label className=' xlarge textc-3'>Summary :</label>
                        <input type="text" className="input transparent round focus-border" placeholder="Write Short Description..." value={summary} onChange={(e) => setsummary(e.target.value)} required/>
                    </div>
                    <div className="col s100 padding" >
                        <label className=' xlarge textc-3'>Description :</label>
                        <input type="text" className="input transparent round focus-border" placeholder="Write Detail Description..." value={description} onChange={(e) => setdescription(e.target.value)} required/>
                    </div>
                    <div className="col s100 padding" >
                        <label className=' xlarge textc-3'>Brands :</label>
                        <select className="select transparent round focus-border" value={brand_id} onChange={(e) => setbrand_id(e.target.value)} required>
                            <option value="choose" disabled>Select Any Brand</option>
                            {brand ?
                                brand.map((iteme, index) =>
                                <option key={index} value={iteme.id}>{iteme.title}</option>
                                )
                            : ""}
                        </select>
                    </div>
                    <div className="col s100 padding" >
                        <label className=' xlarge textc-3'>Category :</label>
                        <select className="select transparent round focus-border" value={category_id} onChange={(e) => setcategory_id(e.target.value)} required>
                            <option value="choose" disabled>Select Any Category</option>
                            {category ?
                                category.map((iteme, index) =>
                                <option key={index} value={iteme.id}>{iteme.title}</option>
                                )
                            : ""}
                        </select>
                    </div>
                    <div className="col s100 padding" >
                        <label className=' xlarge textc-3'>Price $ :</label>
                        <input type="number" className="input transparent round focus-border" placeholder="Enter Price" value={price} onChange={(e) => setprice(e.target.value)} required/>
                    </div>
                    <div className="col s100 padding" >
                        <label className=' xlarge textc-3'>Discount % :</label>
                        <input type="number" className="input transparent round focus-border" placeholder="Enter Discount" value={disscount} onChange={(e) => setdisscount(e.target.value)} required/>
                    </div>
                    <div className="col s100 padding" >
                        <label className=' xlarge textc-3'>Size :</label>
                        <input type="text" className="input transparent round focus-border" placeholder="ُEnter Size" value={size} onChange={(e) => setsize(e.target.value)} required/>
                    </div>
                    <div className="col s100 padding" >
                        <label className=' xlarge textc-3'>Condition :</label>
                        <select className="select transparent round focus-border" value={condition} onChange={(e) => setcondition(e.target.value)} required>
                            <option value="choose" disabled>Select Any Condition</option>
                            <option value="New">New</option>
                            <option value="Old">Old</option>
                            <option value="Hot">Hot</option>
                        </select>
                    </div>
                    <div className="col s100 padding" >
                        <label className=' xlarge textc-3'>Quantity :</label>
                        <input type="number" className="input transparent round focus-border" placeholder="Enter Quantity" value={quantity} onChange={(e) => setquantity(e.target.value)} required/>
                    </div>
                    <div className="col s100 padding" >
                        <label className=' xlarge textc-3'>Photo :</label>
                        <input type="file" multiple accept="image/*" className="input transparent round focus-border" onChange={handlefile} required/>
                    </div>
                    <div className="col s100 padding" >
                        <label className=' xlarge textc-3'>Status :</label>
                        <select className="select transparent round focus-border" value={status} onChange={(e) => setstatus(e.target.value)} required>
                            <option value="choose" disabled>Choose your Status</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </div>
                    <div className="col s100 padding" >
                        <button type="reset" className="button round-large border margin-right">Reset</button>
                        <button type="submit" className="button round-large border" onClick={(e) => {editid ? edit(e) : submit(e)}}>{editid ? "Edit" : "Submit"}</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
