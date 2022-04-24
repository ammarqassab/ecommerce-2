import React from 'react';
import { useSelector } from 'react-redux';
import Bobbles from '../Footer/Bobbles/Bobbles';
import Dashboardadmin from './Dashboardadmin/Dashboardadmin';
import Dashboarduser from './Dashboarduser/Dashboarduser';

export default function Dashboard() {
    const auth = useSelector( (state) => state.auth);

    return (
        <div>
            {auth.token && auth.role =="admin" ? <Dashboardadmin/> : auth.token && auth.role =="user" ? <Dashboarduser/> : <h1>Not Found</h1>}

            <Bobbles/>
        </div>
    );
}
