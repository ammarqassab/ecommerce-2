import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams  } from 'react-router-dom';
import { logoutuser } from '../../Api/FormApi';
import { logoutUser } from '../../Store/AuthSlice';
import Siderbar from './Siderbar/Siderbar';

function MyNavLink (props) {
    return (
    <NavLink className="bar-item button textc-1 margin round-xlarge" style={({ isActive }) => {return {backgroundColor: isActive ? "#ff9900" : "#3edbf0"};}} {...props}>
        {props.children}
    </NavLink>);
    // className="hide-small"
}

export default function Dashboardadmin() {

    const auth = useSelector( (state) => state.auth);
    const dispatch = useDispatch();

    const [taggle, settaggle] = React.useState(true);

    React.useEffect(() => {
        document.getElementById("dashboard").style.marginLeft = "180px";
    }, []);

    const functaggle = () => {
        if(taggle) {
            settaggle(false);
            document.getElementById("dashboard").style.marginLeft = "0px";
        } else {
            settaggle(true);
            document.getElementById("dashboard").style.marginLeft = "180px";
        }
    }

    function logout() {

        logoutuser(auth.token)
        .then( (responsee) => {
            dispatch(logoutUser());
            localStorage.clear();
            window.location.assign("http://127.0.0.1:8000");
        })
        .catch( () => alert("حدث خطأ في تسجيل الخروج"));
    }

    let params = useParams();

    return (
        <div>
            <div id="dashboard">
                <div className=' center'>
                    <div className="sidebar-sticky bgc-1">
                        <div className="bar textc-2 transparent" >
                            <div className="bar-item button textc-1 margin round-xlarge bgc-3" onClick={functaggle} >☰</div>
                            <MyNavLink to={"/"} >Home</MyNavLink>
                            <MyNavLink to={"/"} >{auth.username}</MyNavLink>
                            <div className="bar-item button textc-1 margin round-xlarge bgc-3" onClick={logout}>Logout</div>
                        </div>
                    </div>
                </div>
                {params.id === 'brande' ? <h1>Brande</h1> : ''}
                {params.id === 'category' ? <h1>Category</h1> : ''}
                {params.id === 'products' ? <h1>Products</h1> : ''}
                {params.id === 'users' ? <h1>Users</h1> : ''}
            </div>

            {taggle ? <Siderbar/> : ""}
        </div>
    );
}
