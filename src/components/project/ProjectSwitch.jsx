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
    
    // const handleCanceledChange = () => {

    //     setSwitchCanceled((previous) => {

    //         const newState = !previous;            
    //         return newState
    //     });

    //     canceled(!switchCanceled);          
    // }
   
    return  <>
        <div className={styles.container}>
        <p>{text}</p>
        <label className={styles[typeSwitch]}>
            <input 
            type="checkbox"
            checked={switchActive}
            onChange={handleActiveChange}
            />
            <span></span>
           
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