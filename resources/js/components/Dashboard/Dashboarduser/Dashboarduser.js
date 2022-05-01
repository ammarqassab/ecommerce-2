import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams  } from 'react-router-dom';
import { logoutuser } from '../../Api/FormApi';
import { logoutUser } from '../../Store/AuthSlice';
import Edituser from './Edituser/Edituser';
import Order from './Order/Order';
import Siderbaruser from './Siderbaruser/Siderbaruser';

function MyNavLink (props) {
    return (
    <NavLink className="bar-item button textc-1 margin round-xlarge" style={({ isActive }) => {return {backgroundColor: isActive ? "rgb(255, 0, 150)" : "#3edbf0"};}} {...props}>
        {props.children}
    </NavLink>);
    // className="hide-small"
}

export default function Dashboarduser() {

    const auth = useSelector( (state) => state.auth);
    const dispatch = useDispatch();

    const [taggle, settaggle] = React.useState(true);

    React.useEffect(() => {
        document.getElementById("dashboarduser").style.marginLeft = "180px";
    }, []);

    const functaggle = () => {
        if(taggle) {
            settaggle(false);
            document.getElementById("dashboarduser").style.marginLeft = "0px";
        } else {
            settaggle(true);
            document.getElementById("dashboarduser").style.marginLeft = "180px";
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
            <div id="dashboarduser">
                <div className=' center'>
                    <div className="sidebar-sticky bgc-1">
                        <div className="bar textc-2 transparent" >
                            <div className="bar-item button textc-1 margin round-xlarge bgc-3" onClick={functaggle} >☰</div>
                            <MyNavLink to={"/"} ><span className="fas fa-home textc-1"></span> Home</MyNavLink>
                            <MyNavLink to={"/dashboard"} ><span className="fas fa-user-cog textc-1"></span> {auth.username}</MyNavLink>
                            <div className="bar-item button textc-1 margin round-xlarge bgc-3" onClick={logout}><span className="fas fa-sign-out-alt textc- "></span> Logout</div>
                        </div>
                    </div>
                </div>
                {!params.id ? <Edituser/> : ''}
                {params.id === 'order' ? <Order/> : ''}
                {params.id === 'reviews' ? <h1>reviews</h1> : ''}
            </div>

            {taggle ? <Siderbaruser/> : ""}
        </div>
    );
}
