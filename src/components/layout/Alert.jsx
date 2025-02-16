import { useState, useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';
// import styles from './Alert.module.css';
import PropTypes from 'prop-types';

function Alert({msg,type}) {
    
    const [visible, setVisible] = useState(false)
    const [action, setAction] = useState('visible')
    
    useEffect(() => {
        setVisible(true); // Garante que o alerta aparecerá
        console.log(visible)
        console.log(action)
    
        const timer = setTimeout(() => {
            setAction('invisible');
            // setVisible(false)
        },1000); // Define o tempo que o alerta ficará visível
        console.log('Estado de visible: ', action)
        return () => clearTimeout(timer);
       
    },[visible]);
    
    
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