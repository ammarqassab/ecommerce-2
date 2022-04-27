import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBrandApi } from '../../../Api/DashboardAdminApi/BrandApi';
import { deleteBrand } from '../../../Store/BrandSlice';
import AddBrand from './AddBrand';

export default function Brand() {

    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const brand = useSelector( (state) => state.brand.data);

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

    const deletebrand = (id, index) => {
        deleteBrandApi(auth.token, id)
        .then(() => {
            dispatch(deleteBrand(index));
        })
        .catch(() => alert("حدث خطأ في حذف الماركة"));
    };

    return (
        <div className=' animate-top'>
            <div className='transparent display-container margin padding'>
                <h1>Brands</h1>
                <div className=' display-right button round-large border borderc-3 margin-right' onClick={handleToggle}>
                    <span className="fas fa-plus textc-1"></span> Add Brand
                </div>
            </div>

            {taggle ? <AddBrand id={null} index={null} handleToggle={handleToggle} /> : edittaggle ? <AddBrand id={editid} index={editindex + 1} handleToggle={handleeditToggle} /> : ''}

            <div className="transparent margin padding">
                <div className='display-container'>
                    <h1>Table</h1>
                    <div className=' display-right'>
                        <input type="text" className="input transparent round focus-border width-30vw margin-right" placeholder="Search Brand" />
                    </div>
                </div>

                <div className='responsive'>
                    <table className="table-all">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Tital</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {brand ? brand.map((iteme, index) =>
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{iteme.title}</td>
                            <td>{iteme.status}</td>
                            <td><span className="badge"><span className="fas fa-edit textc-1" onClick={() => handleeditToggle(iteme.id, index)}></span></span><span className="badge"><span className="fas fa-trash-alt textc-1" onClick={() => deletebrand(iteme.id, index)}></span></span></td>
                        </tr>
                        )
                        : <tr><td>not Brand</td></tr>
                        }
                    </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
}
