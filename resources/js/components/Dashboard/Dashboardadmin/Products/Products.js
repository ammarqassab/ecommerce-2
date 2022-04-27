import React from 'react';
import AddProducts from './AddProducts';

export default function Products() {
    const [taggle, settaggle] = React.useState(false);

    const handleToggle = () => {
        taggle ? settaggle(false) : settaggle(true) ;
    };

    return (
        <div className=' animate-top'>
            <div className='transparent display-container margin padding'>
                <h1>Products</h1>
                <div className=' display-right button round-large border borderc-3 margin-right' onClick={handleToggle}>
                    <span className="fas fa-plus textc-1"></span> Add Products
                </div>
            </div>

            {taggle ? <AddProducts handleToggle={handleToggle} /> : ''}

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
                            <th>Brand</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Discount %</th>
                            <th>Size</th>
                            <th>Condition</th>
                            <th>Quantity</th>
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
                            <td>test</td>
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
                            <td>test</td>
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
