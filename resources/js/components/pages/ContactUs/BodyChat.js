import React from 'react'
import { useSelector } from 'react-redux';
import SentChat from './SentChat';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function BodyChat({userId, scroll}) {

    const auth = useSelector(state => state.auth);
    const chatUser = useSelector(state => state.chatUser.data);

    function time(text) {
        const time = new Date(text);
        return ` ${time.getHours()}:${time.getMinutes()}`;
    }

    return (
        <div className=' height-con2 padding'>
            <div style={{overflowY:'auto',height:'85%'}}>
                <div className=' row flex-direction-reverse'>
                    <div className='col s100' ref={scroll}></div>
                    {chatUser ?
                    chatUser.map( (iteme, index) =>

                        iteme.type=='text' ?
                        <div className={`col s100 padding ${iteme.user_id==auth.id?' rtl':''}`} key={index}>
                            <div className={` display-container margin padding width-fit-content m-w large textc-1 bold text-overflow2 ${iteme.user_id==auth.id?' bgc-4 round-right':' bgc-3 round-left'}`}>
                                {iteme.user_id == auth.id && iteme.recipients[0].read_at != null ?
                                    <>
                                        <span className=' fas fa-check textc-1 small' ></span>
                                        <span className=' fas fa-check textc-1 small' ></span>
                                    </>
                                    : iteme.user_id == auth.id && iteme.recipients[0].read_at == null ?
                                        <span className=' fas fa-check textc-1 small' ></span>
                                    : null
                                }
                                {iteme.body}
                                <span className='small'> {time(iteme.created_at)} </span>
                                <span className={`${iteme.user_id==auth.id?' display-topright s-right':' display-topleft s-left'}`}></span>
                            </div>
                        </div>
                        :
                        <div className={`col s100  ${iteme.user_id==auth.id?' rtl':''}`} key={index}>
                            <div className={` display-container margin width-fit-content m-w border ${iteme.user_id==auth.id?' borderc-4':' borderc-3'}`}>
                                <LazyLoadImage
                                    src={'../storage/' + iteme.body.file_path}
                                    alt={iteme.body.file_name}
                                    width={"250px"}
                                    height={'250px'}
                                    effect={'blur'} />
                            </div>
                        </div>

                    )
                    : null
                    }
                </div>
            </div>
            <SentChat userId={userId} scroll={scroll}/>
        </div>
    )
}
