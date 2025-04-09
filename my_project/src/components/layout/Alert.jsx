import { useState, useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';
import styles from './Alert.module.css';
import PropTypes from 'prop-types';

function Alert({msg,type}) {
    
    const [visible, setVisible] = useState(false)
    const [action, setAction] = useState('invisible')
    
    useEffect(() => {
        setVisible(true);    
        const timer = setTimeout(() => {
            setAction('visible'); 
                setTimeout(() => {
                    setAction('invisible')
                },2100)      
        },100);       
        return () => clearTimeout(timer);
       
    },[]);
     
    
    return <>
    
    {visible && (
         <div className={`${styles.msg} ${styles[type]} ${styles[action]}`}>    
         <div className={styles.icons}>
             <FaCheck /> 
         </div>
         <div>
             <p>{msg}</p>
         </div>       
        </div>

    )}
    
    </>
}

export default Alert

Alert.propTypes = {
    msg: PropTypes.string,
    type: PropTypes.string,
}