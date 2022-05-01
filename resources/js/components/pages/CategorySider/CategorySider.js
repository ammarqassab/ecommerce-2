import React from 'react';
import { useSelector } from 'react-redux';
import { CardCategory } from '../Home/Category/CategoryHome';

export default function CategorySider() {

    const category = useSelector( (state) => state.category.data);

    return (
        <div className='bgc-header'>
            <div className="center" >
                <div className="bar margin-top display-container" >
                    <div className="bar-item xlarge textc-4 bottombar borderc-4">Category</div>
                </div>
            </div>
            <div className=' row-padding' >
                <div className=' col m25 hide-small height-100'  style={{overflowY:"auto"}} >
                    <div className=' margin' >
                        <ul className="ul hoverul" >
                            {category ?
                                category.map((iteme, index) =>
                                (iteme.status == "active" ?
                                    <li className="textc-2 hover-textc-4" key={index} >{iteme.title}</li>
                                : null)
                                )
                            : null
                            }
                        </ul>
                    </div>
                </div>
                <div className=' col m75 height-100' style={{overflowY:"auto"}} >
                    <div className='margin' >
                        <div className=' row-padding' >
                            {category ?
                                category.map((iteme, index) =>
                                (iteme.status == "active" ?
                                <div className='col m50 l33' key={index}>
                                    <CardCategory num={index + 1} title={iteme.title} summary={iteme.summary} disscount={iteme.disscount} img={iteme.category_image}/>
                                </div>
                                : null)
                                )
                            : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
