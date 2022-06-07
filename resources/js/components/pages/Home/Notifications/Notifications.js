import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

export default function Notifications() {

    const auth = useSelector(state => state.auth);
    const chatUser = useSelector(state => state.chatUser.data);

    let reatlen = 0;

    if(auth.token && auth.role =="user") {
        for(let i in chatUser) {
            if(chatUser[i].recipients[0].read_at == null && chatUser[i].recipients[0].user_id != 1) {reatlen++}
        }
    }

    return (
        <>
            {auth.token && auth.role =="user" ?
                <Link to={'/contactUs'} className="upscroll2 text-decoration-none" >
                    {reatlen != 0 ?
                        <span className=' display-topmiddle' style={{width:'30px',height:'30px',zIndex:"9999",top:'-30%',left:'80%'}}>
                            <span className=' badge bgc-5 small bold' style={{width:'30px',height:'30px',paddingTop:'4px'}}> {reatlen}</span>
                        </span>
                    :null
                    }
                Chat
                </Link>
            :null
            }
        </>

    )
}
