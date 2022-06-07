import React from 'react'

export default function ListChat() {
    return (
        <>
            <div className="rightbar height-con2" style={{overflowY:'auto'}} >
                <div className=' border borderc-3 round-xxlarge margin-auto padding hover-bgc-4 hover-borderc-4 width-75'>
                    <img src={"../img/dashuser.png"} alt='' className='border borderc-1 circle display-inline' style={{width:"40px",height:"40px"}} />
                    <button className=" button hover-none textc-3 display-inline">Admin</button>
                </div>
            </div>
        </>
    )
}
