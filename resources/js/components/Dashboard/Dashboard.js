import React from 'react';
import { AuthContext } from '../Context/AuthContext';
import Dashboardadmin from './Dashboardadmin/Dashboardadmin';

export default function Dashboard() {
    const authContext = React.useContext(AuthContext);

    return (
        <div>
            {authContext.auth.token ? <Dashboardadmin/> : <h1>Not Found</h1>}
        </div>
    );
}
