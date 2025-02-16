import { useState, useEffect } from 'react';
import style from './Message.module.css';
import PropTypes from 'prop-types';

function Message({type, msg}) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {

        if(!msg){
            setVisible(false)
            return
        }

        setVisible(true);

        const time = setTimeout(() => {
            setVisible(false)
        },3000)

        return () => clearTimeout(time)
    },[msg])

    return <>
        {visible && (
            <div className={`${style.message} ${style[type]}`}>
            <p>{msg}</p>
        </div>
        )}
    </>
}
export default Message

Message.propTypes = {
    type:PropTypes.string,
    msg:PropTypes.string 
} 