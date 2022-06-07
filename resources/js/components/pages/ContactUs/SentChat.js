import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { sentMessageApi } from '../../Api/ChatUserApi';
import { updataChatUser } from '../../Store/ChatUserSlice';

export default function SentChat({userId, scroll}) {

    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const [text, settext] = React.useState('');
    const [image, setimage] = React.useState(null);

    const handlefile = (e) => {
        e.preventDefault();
        setimage(e.target.files[0]);
    }

    const submit = (e) => {
        e.preventDefault();

        let userid2 = userId;

        if(auth.role =="user") {userid2 = 1}

        let formData = new FormData();

        if(image != null) {
            formData.append("user_id", userid2);
            formData.append("attachment", image);
            formData.append("body", this);
        }

        if(text != '') {
            formData.append("message", text);
            formData.append("user_id", userid2);
        }

        sentMessageApi(auth.token, formData)
        .then( (responsee) => {
            dispatch(updataChatUser(responsee.data.data));
            settext('');
            setimage(null);
            scroll.current.scrollIntoView();
            window.scrollTo({
                top:0,
            });
        })
        .catch( () => alert("حدث خطأ في إرسال الرسالة"));

    };

    return (
        <>
            <form style={{height:'15%'}}>
                <div className=' row'>
                    <div className='col s100' >
                        <button type="submit" className="button round-large border hover-borderc-4 textc-2 margin display-inline" onClick={(e) => submit(e)}>Send</button>
                        <input type="file" multiple accept="image/*" className="input round focus-border display-inline" style={{width:'102px',height:'44px',padding:'4px'}} onChange={(e) => handlefile(e)} />
                        <input type="text" className="input width-50 transparent round focus-border textc-2 margin display-inline" placeholder="Message ..." value={text} onChange={(e) => settext(e.target.value)} />
                    </div>
                </div>
            </form>
        </>
    )
}
