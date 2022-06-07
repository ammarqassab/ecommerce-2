import React from 'react';

function CardAbout(props) {

    const name = props.name;
    const des = props.des;
    const icon = props.icon;

    return (
        <div className='col m50 l25' >
            <div className='margin' >
                <div className=' row-padding  border borderc-4 round-large height-100px'>
                    <div className=' col s33 xxlarge textc-4' >
                        <span className={icon} ></span>
                    </div>
                    <div className=' col s66' >
                        <div className='large textc-4' >{name}</div>
                        <div className='textc-2' >{des}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function AboutUs() {
    return (
        <div className=' bgc-1 height-con'>
            <br/><br/><br/>
            <div className='center animate-top' >
                <div className=' row-padding margin' >
                    <CardAbout name={"FREE SHIPING"} des={'Orders over $100'} icon={"fas fa-fire"} />
                    <CardAbout name={'FREE RETURN'} des={'Within 30 days returns'} icon={"fas fa-sync-alt"} />
                    <CardAbout name={'SUCURE PAYMENT'} des={'100% secure payment'} icon={"fas fa-lock"} />
                    <CardAbout name={'BEST PEICE'} des={'Guaranteed price'} icon={"fas fa-bolt"} />
                </div>
            </div>
            <br/><br/><br/>
        </div>
    );
}
