import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams, useNavigate  } from 'react-router-dom';
import { allUsersApi } from '../../Api/DashboardAdminApi/UsersApi';
import { logoutuser } from '../../Api/FormApi';
import { logoutUser } from '../../Store/AuthSlice';
import { addusers } from '../../Store/UsersSlice';
import Brand from './Brands/Brand';
import Category from './Category/Category';
import ChartLine from './ChartLine/ChartLine';
import ChatAdmin from './ChatAdmin/ChatAdmin';
import Products from './Products/Products';
import Siderbar from './Siderbar/Siderbar';
import Users from './Users/Users';

function MyNavLink (props) {
    return (
    <NavLink className="bar-item button textc-1 margin round-xlarge" style={({ isActive }) => {return {backgroundColor: isActive ? "rgb(255, 0, 150)" : "#3edbf0"};}} {...props}>
        {props.children}
    </NavLink>);
    // className="hide-small"
}

function Counter (props) {
    const name = props.name;
    const number = props.number;
    return (
        <div className=' col s100 m50 l25'>
            <div className='display-container border borderc-3 round-large height-100px margin'><div className='xlarge display-middle'>{name} {number}</div></div>
        </div>
    );
}

export default function Dashboardadmin() {

    const auth = useSelector( (state) => state.auth);
    const brand = useSelector( (state) => state.brand.data);
    const category = useSelector( (state) => state.category.data);
    const products = useSelector( (state) => state.products.data);
    const users = useSelector( (state) => state.users.data);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let brandlen = 0;
    for (let i in brand) { brandlen ++ };
    let categorylen = 0;
    for (let i in category) { categorylen ++ };
    let productslen = 0;
    for (let i in products) { productslen ++ };
    let userslen = 0;
    for (let i in users) { userslen ++ };

    const [taggle, settaggle] = React.useState(true);

    React.useEffect(() => {
        document.getElementById("dashboard").style.marginLeft = "180px";

        allUsersApi()
            .then( (responsee) => {
                dispatch(addusers(responsee.data.data));
            })
            .catch( () => alert("حدث خطأ في تحميل المشتركين"));

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
            location.assign("http://127.0.0.1:8000");
            navigate("/");
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
                            <MyNavLink to={"/"} ><span className="fas fa-home textc-1"></span> Home</MyNavLink>
                            <MyNavLink to={"/dashboard"} ><span className="fas fa-user-cog textc-1"></span> {auth.username}</MyNavLink>
                            <div className="bar-item button textc-1 margin round-xlarge bgc-3" onClick={logout}><span className="fas fa-sign-out-alt textc- "></span> Logout</div>
                        </div>
                    </div>
                </div>

                {params.id === 'chatAdmin' ? null
                :
                <div className='transparent' >
                    <div className=' row-padding'>
                        <Counter name={'brand'} number={brandlen}/>
                        <Counter name={'Category'} number={categorylen}/>
                        <Counter name={'Products'} number={productslen}/>
                        <Counter name={'Users'} number={userslen}/>
                    </div>
                </div>
                }

                {params.id === 'chartline' ? <ChartLine /> : null}
                {params.id === 'brands' ? <Brand /> : null}
                {params.id === 'category' ? <Category/> : null}
                {params.id === 'products' ? <Products/> : null}
                {params.id === 'users' ? <Users/> : null}
                {params.id === 'chatAdmin' ? <ChatAdmin/> : null}
            </div>

            {taggle ? <Siderbar/> : null}
        </div>
    );
}
