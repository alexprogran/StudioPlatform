import { useState} from 'react';
import styles from './ProjectSwitch.module.css';
import PropTypes from 'prop-types';


function Switch( { text,confirm, ok, canceled}) {

    const [switchConfirm, setSwitchConfirm] = useState(false);
    const [switchCanceled, setSwitchCanceled] = useState(false);
    
    const handleChange = () => {

        if(ok) {
            setSwitchConfirm((previous) => !previous);
            confirm(!switchConfirm);          
            
        }else {
            setSwitchCanceled((prev) => !prev);
            canceled(!switchCanceled);
          
        }}       
             
        
        // useEffect(() => {
        //         if(switchConfirm) {
        //             confirm(switchConfirm)
        //             // canceled(!switchConfirm)
        //         }
        //         if(switchCanceled){
        //             canceled(switchCanceled)
        //             // confirm(!switchCanceled)
        //         }
        //         console.log('Estado do Canceled:', switchCanceled)           
               
        // },[switchConfirm, switchCanceled])

   
    return  <>
        <div className={`${styles.container}`}>
       
        <label>
           <div className={`${styles.container_switch} ${ok ? styles.confirm : styles.canceled}`}>
           <input 
            type="checkbox"
            checked={switchCanceled || switchConfirm}
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
    confirm: PropTypes.func,
    canceled: PropTypes.func,
    defaults: PropTypes.func,
    listId: PropTypes.string,
    handleCheckBox: PropTypes.func,
    ok: PropTypes. bool,
    
    
}