import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUsersApi } from '../../../Api/DashboardAdminApi/UsersApi';
import { deleteusers } from '../../../Store/UsersSlice';

export default function Users() {
    
    const auth = useSelector(state => state.auth);
    const users = useSelector( (state) => state.users.data);
    const dispatch = useDispatch();

    const deleteuser= (id, index) => {
        deleteUsersApi(auth.token, index + 1)
        .then(() => {
            dispatch(deleteusers(index));
        })
        .catch(() => alert("حدث خطأ في حذف المشترك"));
    };

    return (
        <div className=' animate-top'>

            <div className="transparent margin padding">
                <div className='display-container'>
                    <h1>Table Users</h1>
                    <div className=' display-right'>
                        <input type="text" className="input transparent round focus-border width-30vw margin-right" placeholder="Search Users" />
                    </div>
                </div>

                <div className='responsive'>
                    <table className="table-all">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users ? users.map((iteme, index) =>
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{iteme.firstname}</td>
                            <td>{iteme.lastname}</td>
                            <td>{iteme.email}</td>
                            <td>{iteme.phone}</td>
                            <td>{iteme.address}</td>
                            <td>{iteme.city}</td>
                            <td><span className="badge"><span className="fas fa-trash-alt textc-1" onClick={() => deleteuser(iteme.id, index)}></span></span></td>
                        </tr>
                        )
                        : <tr><td>no Users</td></tr>
                        }
                    </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
}
