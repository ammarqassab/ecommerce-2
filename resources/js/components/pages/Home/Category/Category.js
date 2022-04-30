import React from 'react';
import { useSelector } from 'react-redux';
import Slider from "react-slick";

export function Card(props) {

    const num = props.num;
    const title = props.title;
    const summary = props.summary;
    const disscount = props.disscount;
    const img = props.img;

    return (
        <div className='margin'>
            <div className='display-container clip-path-circle'>
                <img src={`../upload/category_images/${img}`} alt={title} className='width-100 height-300px' />
            </div>

            <div className='row-padding center card hover-shadow ' >
                <div className='col s100' >
                    <div className='row-padding' >
                        <div className='col s100'><span className='textc-4' >Number :</span> {num}</div>
                        <div className='col s100'><span className='textc-4' >Title :</span> {title}</div>
                    </div>
                </div>
                <div className='col s100' >
                    <div className='row-padding' >
                        <div className='col s100 left-align' ><span className='textc-4' >Summary :</span> {summary}</div>
                    </div>
                </div>
                <button id='product' className='col s100 padding-small clip-path-add large textc-2 border-0 pointer' >Discount % : {disscount}</button>
            </div>
        </div>
    );
}

// <div className='margin'>
        //     <div className='display-container clip-path-circle'>
        //             <div className='display-topleft width-100 center margin-top xlarge textc-2' ><p>cat_name</p><br/>
        //                 <div>pro_title<br/>Shop now <span className='fas fa-arrow-circle-right'></span></div>
        //             </div>
        //             <img src={`../img/${img}`} alt='' className='width-100 height-300px' />
        //             {/* onclick='modalimg(this)' */}
        //     </div>

            // <div className='row-padding center card hover-shadow ' >
            //     <div className='col s100' >
            //         <div className='row-padding' >
            //             <div className='col s50'><span className='fas fa-heart large textc-3 hover-textc-4' ></span></div>
            //             <div className='col s50'><span className='fas fa-cart-arrow-down large textc-3 hover-textc-4' ></span></div>
            //         </div>
            //     </div>
            //     <div className='col s100' >
            //         <div className='row-padding' >
            //             <div className='col m58 left-align' >cat_name</div>
            //             <div className='col m41' >500<span className='text-line-through'> 1000.00</span></div>
            //         </div>
            //     </div>
            //     <div className='col s100 textc-4'>
            //         <span className='fas fa-star'></span>
            //         <span className='fas fa-star'></span>
            //         <span className='fas fa-star'></span>
            //         <span className='fas fa-star'></span>
            //         <span className='fas fa-star'></span>
            //     </div>
            //     <button id='product' className='col s100 padding-small clip-path-add large textc-2 border-0 pointer' >ADD To Card</button>
            // </div>

        // </div>


export default function Category() {

    const category = useSelector( (state) => state.category.data);

    let settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                }
                },
                {
                breakpoint: 850,
                settings: {
                    slidesToShow: 3,
                }
                },
                {
                breakpoint: 650,
                settings: {
                    slidesToShow: 2,
                }
                },
                {
                breakpoint: 350,
                settings: {
                    slidesToShow: 1,
                }
                }
            ]
    };

    return (
    <>
        <div className="center" >
            <div className="bar margin-top display-container" >
                <div className="bar-item xlarge textc-4 bottombar borderc-4">Category</div>
            </div>
        </div>
        <Slider {...settings}>
            {category ?
                category.map((iteme, index) =>
                (iteme.status == "active" ? <div key={index}>
                    <Card num={index + 1} title={iteme.title} summary={iteme.summary} disscount={iteme.disscount} img={iteme.category_image}/>
                </div> : "")
                )
            : ""
            }
        </Slider>
    </>
    );
}

/* <tr key={index}>
                <td>{index + 1}</td>
                <td>{iteme.title}</td>
                <td>{iteme.summary}</td>
                <td>{iteme.disscount}</td>
                <td><img src={'../upload/category_images/' + iteme.category_image} style={{width: "50px",height: "50px"}}  /></td>
                <td>{iteme.status}</td>
                <td><span className="badge"><span className="fas fa-edit textc-1" onClick={() => handleeditToggle(iteme.id, index)}></span></span><span className="badge"><span className="fas fa-trash-alt textc-1" onClick={() => deletecategory(iteme.id, index)}></span></span></td>
            </tr> */
