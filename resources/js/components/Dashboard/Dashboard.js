import React from 'react';
import { useSelector } from 'react-redux';
import {Navigate} from "react-router-dom"
// import Bobbles from '../Footer/Bobbles/Bobbles';
import Upscroll from '../Header/Upscroll/Upscroll';
import Dashboardadmin from './Dashboardadmin/Dashboardadmin';
import Dashboarduser from './Dashboarduser/Dashboarduser';

export default function Dashboard() {
    const auth = useSelector( (state) => state.auth);

    return (
        <div>
            {auth.token && auth.role =="admin" ? <Dashboardadmin/> : auth.token && auth.role =="user" ? <Dashboarduser/> : <Navigate to="/"/>}

            <Upscroll/>

            {/* <Bobbles/> */}
        </div>
    );
}
