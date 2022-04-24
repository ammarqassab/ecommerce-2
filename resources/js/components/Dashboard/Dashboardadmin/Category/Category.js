import React from 'react';
import AddCategory from './AddCategory';

export default function Category() {
    const [taggle, settaggle] = React.useState(false);

    const handleToggle = () => {
        taggle ? settaggle(false) : settaggle(true) ;
    };

    return (
        <div className=' animate-top'>
            <div className=' card hover-shadow transparent display-container margin padding'>
                <h1>Category</h1>
                <div className=' display-right button round-large border borderc-3 margin-right' onClick={handleToggle}>
                    <span className="fas fa-plus textc-1"></span> Add Category
                </div>
            </div>

            {taggle ? <AddCategory handleToggle={handleToggle} /> : ''}

            <div className=" card hover-shadow transparent margin padding">
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
                            <th>S.N</th>
                            <th>Tital</th>
                            <th>Slug</th>
                            <th>Photo</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>test</td>
                            <td>test</td>
                            <td>test</td>
                            <td>test</td>
                            <td>test</td>
                            <td><span className="badge"><span className="fas fa-edit textc-1"></span></span><span className="badge"><span className="fas fa-trash-alt textc-1"></span></span></td>
                        </tr>
                        <tr>
                            <td>test</td>
                            <td>test</td>
                            <td>test</td>
                            <td>test</td>
                            <td>test</td>
                            <td><span className="badge"><span className="fas fa-edit textc-1"></span></span><span className="badge"><span className="fas fa-trash-alt textc-1"></span></span></td>
                        </tr>
                    </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
}
