import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBrandApi, editBrandApi } from '../../../Api/DashboardAdminApi/BrandApi';
import { editBrand, updataBrand } from '../../../Store/BrandSlice';

export default function AddBrand(props) {

    const handleToggle = props.handleToggle;
    const editindex = props.index;
    const editid = props.id;

    const auth = useSelector( (state) => state.auth);
    const brand = useSelector( (state) => state.brand.data);
    const dispatch = useDispatch();

    const [title, settitle] = React.useState('');
    const [status, setstatus] = React.useState('active');

    React.useEffect(() => {
        if(editindex > 0) {
            settitle(brand[editindex - 1].title);
            setstatus(brand[editindex - 1].status);
        }
    }, []);

    const submit = (e) => {
        e.preventDefault();

        addBrandApi(auth.token, {title:title, status:status})
        .then( (responsee) => {
            dispatch(updataBrand(responsee.data.data));
        })
        .catch( () => alert("حدث خطأ في إضافة الماركة"));
    };

    const edit = (e) => {
        e.preventDefault();

        editBrandApi(auth.token, editid, {title:title, status:status})
        .then((responsee) =>{
            dispatch(editBrand([editindex, responsee.data.data]));
        })
        .catch( () => alert("حدث خطأ في تعديل الماركة"));
    };

    return (
        <div className=' margin padding transparent animate-top'>
            <div className='display-container'>
                <h1>{editid ? "EDIT Brands" : "ADD Brands"}</h1>
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
