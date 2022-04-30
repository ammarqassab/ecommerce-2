import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCategoryApi } from '../../../Api/DashboardAdminApi/CategoryApi';
import { deleteCategory } from '../../../Store/CategorySlice';
import AddCategory from './AddCategory';

export default function Category() {

    const category = useSelector( (state) => state.category.data);
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

    const deletecategory = (id, index) => {
        deleteCategoryApi(auth.token, id)
        .then(() => {
            dispatch(deleteCategory(index));
        })
        .catch(() => alert("حدث خطأ في حذف الفئة"));
    };

    return (
        <div className=' animate-top'>
            <div className='transparent display-container margin padding'>
                <h1>Category</h1>
                <div className=' display-right button round-large border borderc-3 margin-right' onClick={handleToggle}>
                    <span className="fas fa-plus textc-1"></span> Add Category
                </div>
            </div>

            {taggle ? <AddCategory id={null} index={null} handleToggle={handleToggle} /> : edittaggle ? <AddCategory id={editid} index={editindex + 1} handleToggle={handleeditToggle} /> : ''}

            <div className="transparent margin padding">
                <div className='display-container'>
                    <h1>Table</h1>
                    <div className=' display-right'>
                        <input type="text" className="input transparent round focus-border width-30vw margin-right" placeholder="Search Category" />
                    </div>
                </div>

                <div className='responsive'>
                    <table className="table-all">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Tital</th>
                            <th>Summary</th>
                            <th>Discount %</th>
                            <th>Photo</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {category ? category.map((iteme, index) =>
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{iteme.title}</td>
                            <td>{iteme.summary}</td>
                            <td>{iteme.disscount}</td>
                            <td><img src={'../upload/category_images/' + iteme.category_image} style={{width: "50px",height: "50px"}}  /></td>
                            <td>{iteme.status}</td>
                            <td><span className="badge"><span className="fas fa-edit textc-1" onClick={() => handleeditToggle(iteme.id, index)}></span></span><span className="badge"><span className="fas fa-trash-alt textc-1" onClick={() => deletecategory(iteme.id, index)}></span></span></td>
                        </tr>
                        )
                        : <tr><td>no Category</td></tr>
                        }
                    </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
}
