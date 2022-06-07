import React from 'react'
import { useSelector } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


function Chats({iteme}) {

    return (
        <div className=' row border round-large center' >

            <div className=' col s100 display-container' style={{height:'68px'}}>

                {iteme.new_messages != 0 ?
                    <span className=' display-topmiddle' style={{width:'30px',height:'30px',zIndex:"9999",top:'-3%',left:'57%'}}>
                        <span className=' badge bgc-5 small bold' style={{width:'30px',height:'30px',paddingTop:'4px'}}> {iteme.new_messages}</span>
                    </span>
                :null
                }

                <div className=' border borderc-1 circle display-middle' style={{width:'64px',height:'64px'}} >
                    {iteme.profile_image != null ?
                        <LazyLoadImage
                        src={'../upload/profile_images/' + iteme.participants[0].profile_image}
                        alt={iteme.participants[0].username}
                        width={"60px"}
                        height={'60px'}
                        effect={'blur'}
                        style={{borderRadius:'50%'}} />
                    :
                        <LazyLoadImage
                            src={'../img/dashuser.png'}
                            alt={iteme.participants[0].username}
                            width={"60px"}
                            height={'60px'}
                            effect={'blur'}
                            style={{borderRadius:'50%'}} />
                    }
                </div>
            </div>

            <div className=' col s100 padding bold text-overflow'>{iteme.participants[0].username}</div>

            {iteme.last_message.type == 'text' ?
            <div className=' col s100 small left-align margin-left margin-right margin-bottom text-overflow'>{iteme.last_message.body}</div>
            :
            <div className=' col s100 small left-align margin-left margin-right margin-bottom text-overflow'>image</div>
            }

        </div>
    )
}


export default function ListChatAdmin({handleid}) {

    const chatAdmin = useSelector( (state) => state.chatAdmin.data);

    return (
        <div className='margin'>

            <div className="center" >
                <div className="bar margin-top display-container" >
                    <div className="bar-item xlarge textc-4 bottombar borderc-4">List Chat</div>
                </div>
            </div>

            <div className=' row-padding' >
            {chatAdmin ?
                chatAdmin.map( (iteme, index) =>
                <div className='col m50 l25 padding pointer' key={index} onClick={() => handleid(iteme.user_id)}>
                    <Chats iteme={iteme}/>
                </div>
                )
            :null
            }
            </div>

        </div>
    )
}
