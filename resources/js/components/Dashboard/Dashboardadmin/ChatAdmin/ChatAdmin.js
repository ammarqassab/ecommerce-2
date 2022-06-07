import React from 'react'
import Chat from '../../../pages/ContactUs/Chat'
import ListChatAdmin from './ListChatAdmin'

export default function ChatAdmin() {

    const [userId, steuserId] = React.useState(null);

    function handleid(id) {
        steuserId(id);
    };

    return (
        <div className=' animate-top'>
            <div className='transparent display-container padding bgc-1 textc-2'>
                <h1>Chat</h1>
                <div className=' display-right button round-large border borderc-3 margin-right textc-2' onClick={() => steuserId(null)} style={{paddingBottom:'12px'}} >
                    <span className=" textc-2 xlarge">x</span> Close Chat
                </div>
            </div>
            {userId != null ? <Chat userId={userId} /> :null}
            <ListChatAdmin handleid={handleid}/>
        </div>
    )
}
