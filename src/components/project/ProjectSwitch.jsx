import { useState, useEffect} from 'react';
import styles from './ProjectSwitch.module.css';
import PropTypes from 'prop-types';


function Switch( { text, listId, handleCheckBox,confirm, ok, canceled, defaults, annulled}) {

    const [switchConfirm, setSwitchConfirm] = useState(false);
    const [switchCanceled, setSwitchCanceled] = useState(false);
    const [switchDefault, setSwitchDefault] = useState(false)
    
    const handleChange = () => {

        if(ok) {
            setSwitchConfirm((previous) => !previous);
           
            
        }else {
            setSwitchCanceled((prev) => !prev)
          
        }
                     
            
        handleCheckBox(listId);  

        } 


        useEffect(() => {
            if(switchConfirm && switchCanceled) {
              setSwitchDefault((prev) => !prev)
              defaults(switchDefault)
                console.log('Os estados estão true.');             
                // canceled(!switchConfirm)
            }
            else if(switchConfirm) {
                confirm(true)
                // canceled(false)
            }
             else if(switchCanceled){
                canceled(true)
                confirm(false)
                // confirm(!switchCanceled)           
            console.log('Estado do Canceled:', switchCanceled)           
            }
    },[switchConfirm, switchCanceled])

             
        
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
    annulled: PropTypes.bool,
    ok: PropTypes. bool,
    
    
}