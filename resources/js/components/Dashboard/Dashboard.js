import React from 'react';
import { useSelector } from 'react-redux';
import Dashboardadmin from './Dashboardadmin/Dashboardadmin';

export default function Dashboard() {
    const auth = useSelector( (state) => state.auth);

    return (
        <div>
            {auth.token ? <Dashboardadmin/> : <h1>Not Found</h1>}
        </div>
    );
}
