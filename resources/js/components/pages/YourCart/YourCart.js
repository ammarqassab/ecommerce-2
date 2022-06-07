import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PanleCart from './PanleCart/PanleCart';
import TableCart from './TableCart/TableCart';

export default function YourCart() {

    const auth = useSelector(state => state.auth);

    return (
        <>
            {auth.token && auth.role =="user" ?
                <div className='animate-top height-con'>
                    <div className="center" >
                        <div className="bar margin-top display-container" >
                            <div className="bar-item xlarge textc-4 bottombar borderc-4">Cart</div>
                        </div>
                    </div>
                    <TableCart/>
                    <PanleCart/>
                </div>
            : auth.token && auth.role =="admin" ? <Navigate to="/dashboard"/>
            :<Navigate to="/login"/>
            }
        </>
    );

}
