import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';
import { allMessageApi, markAsReadApi } from '../../Api/ChatUserApi';
import { addChatUser } from '../../Store/ChatUserSlice';
import BodyChat from './BodyChat'
import ListChat from './ListChat'

export default function Chat({userId}) {

    const scroll = React.useRef();

    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    React.useEffect( () => {

        if( (auth.token && auth.role =="user") ||  (auth.token && auth.role =="admin")) {

            markAsReadApi(auth.token, userId)
            .then((responsee) =>{
            })
            .catch( () => alert("حدث خطأ في إرسال طلب قراءة المحادثة"));

            scroll.current.scrollIntoView();
            window.scrollTo({
                top:0,
            });
            
        }

        if(auth.token && auth.role =="admin") {

            allMessageApi(auth.token, userId)
            .then((responsee) =>{
            dispatch(addChatUser(responsee.data.messages));
            scroll.current.scrollIntoView();
            window.scrollTo({
                top:0,
            });

            })
            .catch( () => alert("حدث خطأ في الحصول على المحادثة"));
        }

    },[]);

    return (
        <>
            { (auth.token && auth.role =="user") ||  (auth.token && auth.role =="admin") ?
                <div className=' bgc-1 height-con textc-2 animate-top'>
                    <div className=' row'>
                        {auth.role =="user" ?
                            <div className=' col l25 hide-medium hide-small'>
                                <ListChat/>
                            </div>
                        : null
                        }
                        <div className={` col ${auth.role =="user" ? ' l75': ' s100'}`}>
                            <BodyChat userId={userId} scroll={scroll}/>
                        </div>
                    </div>
                </div>
            : userId == '' ? <Navigate to="/login"/> : null
            }
        </>
    )
}
