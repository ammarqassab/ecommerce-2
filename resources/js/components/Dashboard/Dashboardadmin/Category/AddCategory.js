import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCategoryApi, editCategoryApi } from '../../../Api/DashboardAdminApi/CategoryApi';
import { editCategory, updataCategory } from '../../../Store/CategorySlice';

export default function AddCategory(props) {

    const handleToggle = props.handleToggle;
    const editindex = props.index;
    const editid = props.id;

    const auth = useSelector( (state) => state.auth);
    const category = useSelector( (state) => state.category.data);
    const dispatch = useDispatch();

    const [title, settitle] = React.useState('');
    const [summary, setsummary] = React.useState('');
    const [disscount, setdisscount] = React.useState(0);
    const [status, setstatus] = React.useState('active');
    const [image, setimage] = React.useState(null);

    React.useEffect(() => {
        if(editindex > 0) {
            settitle(category[editindex - 1].title);
            setsummary(category[editindex - 1].summary);
            setdisscount(category[editindex - 1].disscount);
            setstatus(category[editindex - 1].status);
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
        formData.append("category_image", image);
        formData.append("disscount", disscount);
        formData.append("status", status);

        addCategoryApi(auth.token, formData)
        .then( (responsee) => {
            dispatch(updataCategory(responsee.data.data));
        })
        .catch( () => alert("حدث خطأ في إضافة الفئة"));
    };

    const edit = (e) => {
        e.preventDefault();

        let formData = new FormData();

        formData.append("title", title);
        formData.append("summary", summary);
        formData.append("category_image", image);
        formData.append("disscount", disscount);
        formData.append("status", status);

        editCategoryApi(auth.token, editid, formData)
        .then((responsee) =>{
            dispatch(editCategory([editindex, responsee.data.data]));
        })
        .catch( () => alert("حدث خطأ في تعديل الفئة"));
    };

    return (
        <div className='margin padding transparent animate-top'>
            <div className='display-container'>
                <h1>{editid ? "EDIT Category" : "ADD Category"}</h1>
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
                        <label className=' xlarge textc-3'>Discount % :</label>
                        <input type="number" className="input transparent round focus-border" placeholder="Enter Discount" value={disscount} onChange={(e) => setdisscount(e.target.value)} required/>
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
