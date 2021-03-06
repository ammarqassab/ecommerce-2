import React from 'react';
import CategoryHome from './CategoryHome/CategoryHome';
import Notifications from './Notifications/Notifications';
import ProductsHome from './ProductsHome/ProductsHome';

export default function Home() {
    return (
        <>
            <div className="bgc-header clip-path-polygon ">
                <br/><br/><br/>
                <div className="panel padding-0">
                    <div className="height-300px display-container">
                        <div className="display-middle bgcimg-header border"><img src={"../img/headerimg.png"} className="display-bottomleft img-header" /></div>
                    </div>
                </div>
                <br/><br/><br/>
            </div>
            <Notifications/>
            <CategoryHome/>
            <ProductsHome condition={""}/>
            <ProductsHome condition={"Hot"}/>
        </>
    );
}
