import { useState} from 'react';
import styles from './ProjectSwitch.module.css';
import PropTypes from 'prop-types';


function Switch( { text, listId, handleCheckBox,typeSwitch }) {

    const [switchActive, setSwitchActive] = useState(false);
    // const [switchCanceled, setSwitchCanceled] = useState(false);
       
     
    const handleActiveChange = () => {

        setSwitchActive((previous) => {
            const newState = !previous; 
            return newState
        })         
        handleCheckBox(listId)        
    }   

    console.log('Estado do switch:',switchActive)
    
    // const handleCanceledChange = () => {

    //     setSwitchCanceled((previous) => {

    //         const newState = !previous;            
    //         return newState
    //     });

    //     canceled(!switchCanceled);          
    // }
   
    return  <>
        <div className={styles.container}>
       
        <label className={styles[typeSwitch]}>
           <div className={styles.container_switch}>
           <input 
            type="checkbox"
            checked={switchActive}
            onChange={handleActiveChange}
            />    
            <span></span> 
            <p className={`${styles.p_absolut} ${switchActive ? styles.green : ''}`}>{text}</p>       
           </div>          
                       
        </label>
        
        {/* <lebal className={styles.checkbox_canceled}>
            <input
            type="checkbox"
            checked={switchCanceled}   
            onChange={handleCanceledChange}
            />
            <span></span>           
        </lebal>   */}
        </div>

   
     
    </>
}

export default Switch

Switch.propTypes = {
    text: PropTypes.string,
    typeSwitch:PropTypes.string,
    confirm: PropTypes.func,
    canceled: PropTypes.func,
    listId: PropTypes.array,
    handleCheckBox: PropTypes.func,
    
}