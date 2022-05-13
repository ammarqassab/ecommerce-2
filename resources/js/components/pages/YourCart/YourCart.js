import React from 'react'
import TableCart from './TableCart/TableCart';

export default function YourCart() {

    return (
        <div className=''>
            <div className="center" >
                <div className="bar margin-top display-container" >
                    <div className="bar-item xlarge textc-4 bottombar borderc-4">Cart</div>
                </div>
            </div>
            <TableCart/>
        </div>
    );

}
