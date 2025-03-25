<<<<<<< HEAD
import { useState, useEffect} from 'react';
=======
import { useState } from 'react';
>>>>>>> develop
import styles from './ProjectSwitch.module.css';
import PropTypes from 'prop-types';

function ProjectSwitch({text_confirm, text_canceled, confirm, ok, canceled, annulled}) {

    const [switchConfirm, setSwitchConfirm] = useState(false);
    const [switchCanceled, setSwitchCanceled] = useState(false);

<<<<<<< HEAD
        if(ok) {
            setSwitchConfirm((previous) => !previous);
            confirm(!switchConfirm);          
            
        }else {
            setSwitchCanceled((prev) => !prev);
            canceled(!switchCanceled);
        
        
        if(switchConfirm) {
            setSwitchCanceled(false)
        }
        if(switchCanceled){
            setSwitchConfirm(false)
        }  
       
            

        }} 
        
        
    // useEffect( () => {
    //     if(switchConfirm) {
    //         setSwitchCanceled(false)
    //     }
    //     if(switchCanceled){
    //         setSwitchConfirm(false)
    //     }    
    // },[switchConfirm,switchCanceled])
     
       
=======
    const handleConfirmChange = () => {
        const changedState = !switchConfirm;
        setSwitchConfirm(changedState);
        setSwitchCanceled(false); 
        confirm(changedState);
        canceled(false);
>>>>>>> develop

    };

    const handleCanceledChange = () => {
        const changedState = !switchCanceled;
        setSwitchCanceled(changedState);
        setSwitchConfirm(false); 
        canceled(changedState);
        confirm(false);
    };

    return (
        <div className={`${styles.container}`}>
            <label>
                <div className={`
                    ${styles.container_switch} 
                    ${ok && switchConfirm ? styles.confirm : ''} 
                    ${annulled && switchCanceled ? styles.canceled : ''}
                `}>

                    {ok && (
                        <input
                            
                            type="checkbox"
                            checked={switchConfirm}
                            onChange={handleConfirmChange}
                        />
                    )}


                    {annulled && (
                        <input
                            type="checkbox"
                            checked={switchCanceled}
                            onChange={handleCanceledChange}
                        />
                    )}

                    <span></span>
                    <p className={`${styles.p_absolut_confirm} 
                        ${switchConfirm ? styles.green :  ''}`}>
                        {text_confirm}
                    </p>

                    <p className={`${styles.p_absolut_canceld} ${switchCanceled ? styles.red : ""}`}> 
                        
                        {text_canceled}
                    </p>

                </div>
            </label>
        </div>
    );
}

export default ProjectSwitch;

ProjectSwitch.propTypes = {
    text: PropTypes.string,
    confirm: PropTypes.func,
    canceled: PropTypes.func,
    ok: PropTypes.bool,
    annulled: PropTypes.bool, 
    text_confirm: PropTypes.string,
    text_canceled: PropTypes.string,

}
