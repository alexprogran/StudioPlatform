
import { useState,useEffect} from 'react';
import styles from './ProjectSwitch.module.css';
import PropTypes from 'prop-types';

function ProjectSwitch({
        text_confirm, 
        confirm, 
        ok,
        stateSwitch_confirm,       
        }) {

    const [switchConfirm, setSwitchConfirm] = useState(false);
    const [pesistConfirm, setPesistConfirm] = useState(false);


    useEffect(() => {
        if (stateSwitch_confirm) {
            setSwitchConfirm(true);
            setPesistConfirm(true);
           
        }
    }, [stateSwitch_confirm]);  

    useEffect(() => {
        console.log('Retorno do stateSwitch_confirm', stateSwitch_confirm,)
    },[stateSwitch_confirm])
      
    const handleConfirmChange = () => {  // se faz necessário a sicronização entre estado e pesistência
       
        const changedState = !switchConfirm;
        confirm(changedState);
        setSwitchConfirm(changedState);
        setPesistConfirm(changedState);      

    }; 
   
        
    
        useEffect(() => {
            console.log('Status do pesistConfirm:', pesistConfirm);
            console.log('Status do switchConfirm: ', switchConfirm);
            console.log("stateSwitch_confirm:", stateSwitch_confirm);
        },[switchConfirm, pesistConfirm,stateSwitch_confirm])
    
       
    return (
        <div className={`${styles.container}`}>
            <label>
            <div className={`
                ${styles.container_switch} 
                ${switchConfirm || pesistConfirm ? styles.confirm : ''}                
                `}>              

                    {ok && (
                        <input                            
                            type="checkbox"
                            checked={switchConfirm}
                            onChange={handleConfirmChange}
                        />
                    )}                   

                    <span></span>
                    <p className={`${styles.p_absolut_confirm} 
                        ${switchConfirm ? styles.green :  ''}`}>
                        {text_confirm}
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
    ok: PropTypes.bool,
    stateSwitch_confirm: PropTypes.bool,   
    text_confirm: PropTypes.string,   

}
