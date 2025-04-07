
import { useState,useEffect} from 'react';
import styles from './ProjectSwitch.module.css';
import PropTypes from 'prop-types';

function ProjectSwitch({
        text_confirm, 
        text_canceled, 
        confirm, 
        ok,
        stateSwitch_confirm,
        stateSwitch_canceled, 
        canceled,
        annulled,
        }) {

    const [switchConfirm, setSwitchConfirm] = useState(false);
    const [switchCanceled, setSwitchCanceled] = useState(false);
    const [pesistConfirm, setPesistConfirm] = useState(false);
    const [pesistCanceled, setPesistCanceled] = useState(false);


    useEffect(() => {
        if (stateSwitch_confirm) {
            setSwitchConfirm(true);
            setPesistConfirm(true);
            setSwitchCanceled(false);
            setPesistCanceled(false);
        } else if (stateSwitch_canceled) {
            setSwitchCanceled(true);
            setPesistCanceled(true);
            setSwitchConfirm(false);
            setPesistConfirm(false);
        }
    }, [stateSwitch_confirm, stateSwitch_canceled]);
    
    

    // useEffect(() => {
    //     if(stateSwitch_confirm){ 
    //         if(pesistCanceled === false){
    //             setSwitchConfirm(stateSwitch_confirm );
    //             setPesistConfirm(stateSwitch_confirm); 
               
    //         }        
    //     }
       
    //     if(stateSwitch_canceled){

    //         if(pesistConfirm === false) {
    //             setSwitchCanceled(stateSwitch_canceled);
    //             setPesistCanceled(stateSwitch_canceled);
    //         }
           
    //     }     
       
    // },[stateSwitch_canceled, stateSwitch_confirm] );
    

    // useEffect(() => {
    //     if(stateSwitch_confirm){
    //       setPesistConfirm(true)
    //       setPesistCanceled(false)
    //     }if(stateSwitch_canceled){
    //         setPesistCanceled(true)
    //         setSwitchConfirm(false)        
    //     } 
    //     // if(stateSwitch_confirm && !switchConfirm) {
    //     //     stateSwitch_confirm === false                
    //     // } 

    // }, [])

    useEffect(() => {
        console.log('Retorno do stateSwitch_confirm', stateSwitch_confirm, 'stateSwitch_canceled:', stateSwitch_canceled)
    },[stateSwitch_canceled,stateSwitch_confirm])
      
    const handleConfirmChange = () => {  // se faz necessário a sicronização entre estado e pesistência
       
        const changedState = !switchConfirm;
        confirm(changedState);
        setSwitchConfirm(changedState);
        setPesistConfirm(changedState); 
        // setPesistCanceled(false)     
        // canceled(false);

    }; 
   
    const handleCanceledChange = () => {
       
        const changedState = !switchCanceled;
        canceled(changedState);
        setSwitchCanceled(changedState);
        setPesistCanceled(changedState);
        setPesistConfirm(false);
        // setSwitchConfirm(false);     
        // confirm(false);
        
    };
        useEffect(() => {
            console.log('Status do pesistConfirm:', pesistConfirm);
            console.log('Status do switchConfirm: ', switchConfirm);
            console.log('Status do pesistCanceld:', pesistCanceled);
            console.log('Status do switchCanceled: ', switchCanceled);
            console.log("stateSwitch_confirm:", stateSwitch_confirm);
        },[switchConfirm, pesistConfirm,switchCanceled, pesistCanceled,stateSwitch_confirm])
    
        // 
        // 
    return (
        <div className={`${styles.container}`}>
            <label>
            <div className={`
                ${styles.container_switch} 
                ${switchConfirm || pesistConfirm ? styles.confirm : ''}  
                ${switchCanceled || pesistCanceled ? styles.canceled : ''}  
                `}>

                {/* <div className={`
                    ${styles.container_switch}   
                    ${switchConfirm ? styles.confirm : ''}  
                    ${pesistConfirm && stateSwitch_confirm ? styles.confirm :'' }                   
                    ${switchCanceled ? styles.canceled : ''}
                    ${pesistCanceled && stateSwitch_canceled ? styles.canceled :'' }                
                `}> */}

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
    stateSwitch_confirm: PropTypes.bool,
    stateSwitch_canceled: PropTypes.bool,
    annulled: PropTypes.bool, 
    text_confirm: PropTypes.string,
    text_canceled: PropTypes.string,

}
