import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams  } from 'react-router-dom';
import { logoutuser } from '../../Api/FormApi';
import { logoutUser } from '../../Store/AuthSlice';
import Brand from './Brands/Brand';
import Category from './Category/Category';
import ChartLine from './ChartLine/ChartLine';
import Products from './Products/Products';
import Siderbar from './Siderbar/Siderbar';

function MyNavLink (props) {
    return (
    <NavLink className="bar-item button textc-1 margin round-xlarge" style={({ isActive }) => {return {backgroundColor: isActive ? "#ff9900" : "#3edbf0"};}} {...props}>
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
    const dispatch = useDispatch();

    let brandlen = 0;
    for (let i in brand) { brandlen ++ };
    let categorylen = 0;
    for (let i in category) { categorylen ++ };
    let productslen = 0;
    for (let i in products) { productslen ++ };

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
                            <MyNavLink to={"/"} ><span className="fas fa-home textc-1"></span> Home</MyNavLink>
                            <MyNavLink to={"/dashboard"} ><span className="fas fa-user-cog textc-1"></span> {auth.username}</MyNavLink>
                            <div className="bar-item button textc-1 margin round-xlarge bgc-3" onClick={logout}><span className="fas fa-sign-out-alt textc- "></span> Logout</div>
                        </div>
                    </div>
                </div>

                <div className='transparent' >
                    <div className=' row-padding'>
                        <Counter name={'brand'} number={brandlen}/>
                        <Counter name={'Category'} number={categorylen}/>
                        <Counter name={'Products'} number={productslen}/>
                        <Counter name={'Users'} number={0}/>
                    </div>
                </div>

                {params.id === 'chartline' ? <ChartLine /> : ''}
                {params.id === 'brands' ? <Brand /> : ''}
                {params.id === 'category' ? <Category/> : ''}
                {params.id === 'products' ? <Products/> : ''}
                {params.id === 'users' ? <h1>Users</h1> : ''}
            </div>

            {taggle ? <Siderbar/> : ""}
        </div>
    );
}
