import React from 'react';

export default function Order() {
    return (
        <div className="transparent margin padding animate-top">
            <div className='display-container'>
                <h1>Order Table</h1>
                <div className=' display-right'>
                    <input type="text" className="input transparent round focus-border width-30vw margin-right" placeholder="Search Order" />
                </div>
            </div>

            <div className='responsive'>
                <table className="table-all">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>order</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Quantity</th>
                        <th>Total Amount</th>
                        <th>status</th>
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
                        <td><span className="badge"><span className="fas fa-edit textc-1"></span></span><span className="badge"><span className="fas fa-trash-alt textc-1"></span></span></td>
                    </tr>
                </tbody>
                </table>
            </div>

        </div>
    );
}
