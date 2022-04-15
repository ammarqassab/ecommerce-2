import React from 'react';
import { AuthContext } from '../Context/AuthContext';

export default function Dashboard() {
    const authContext = React.useContext(AuthContext);

    return (
        <div>
            {authContext.auth.token ? <h1>Dashboard</h1> : <h1>Not Found</h1>}
        </div>
    );
}
