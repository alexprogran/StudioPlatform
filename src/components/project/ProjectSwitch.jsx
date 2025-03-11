import { useState, useEffect} from 'react';
import styles from './ProjectSwitch.module.css';
import PropTypes from 'prop-types';


function Switch( { text, listId, handleCheckBox,typeSwitch, confirm, ok, canceled}) {

    const [switchConfirm, setSwitchConfirm] = useState(false);
    const [switchCanceled, setSwitchCanceled] = useState(false);
    
    const handleChange = () => {

        if(ok) {
            setSwitchConfirm((previous) => !previous);
            
        } else {
                setSwitchCanceled((prev) => !prev)
              
            }  
            
        handleCheckBox(listId);  

        } 
             
        
        useEffect(() => {
                if(switchConfirm) {
                    confirm(switchConfirm)
                }else {
                    canceled(switchCanceled)
                }
                console.log('Estado do Canceled:', switchCanceled)
                console.log('Lista de Ids no filho:', handleCheckBox(listId))
                
               
        },[switchConfirm, switchCanceled])

   
    return  <>
        <div className={`${styles.container} ${styles.bottom}`}>
       
        <label className={styles[typeSwitch]}>
           <div className={`${styles.container_switch} ${ok ? styles.confirm : styles.canceled}`}>
           <input 
            type="checkbox"
            checked={ok ? switchConfirm : switchCanceled}
            onChange={handleChange}
            />    
            <span></span> 
            <p className={`${styles.p_absolut} ${switchConfirm ? styles.green : switchCanceled ? styles.red : ''}`}>{text}</p>       
           </div>  
                 
        </label>        
        
        </div>

   
     
    </>

}
export default Switch

Switch.propTypes = {
    text: PropTypes.string,
    typeSwitch:PropTypes.string,
    confirm: PropTypes.func,
    canceled: PropTypes.func,
    listId: PropTypes.string,
    handleCheckBox: PropTypes.func,
    annulled: PropTypes.func,
    ok: PropTypes. bool,
    
    
}