import styles from './ProjectCardSchedings.module.css';
import ProjectSwitch from './ProjectSwitch';
import PropTypes from 'prop-types';
import {useState, useEffect} from 'react';

function ProjectCardSchedings() {

    const[scheding, setScheding] = useState([]);
    // const [activeSwitch, setActiveSwitch] = useState(false);
    const [listId, setListId] = useState([]);
    const [canceled, setCanceled] = useState(false)


    

    // const stateSwitch = (state) => {

    //     setActiveSwitch(state)  
    //     console.log('Estado so switch:' ,activeSwitch)      
    // }


    const stateCanceled = (state) => {
        setCanceled(state)
        console.log('Estado do Canceled;', canceled)
    }

    const handleCheckboxChange = ((id) => {
    
        setListId((previous) => {
            const checkPrevious = previous.includes(id);
            if (checkPrevious) {
               return previous.filter((idItem) => idItem !== id)
            } else {
                return [...listId, id]
            }
        })
    })
     
    console.log('Lista dos IDs seleciondos: ', listId)

   
    useEffect(() => {
        fetch('http://localhost:5000/scheduling', {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }                       
        })
        .then((request) => request.json())
        .then((data) => {
            setScheding(data)   
        })               
    },[])

    
  
    return  <>
    
    {scheding.map((data) => (        
        
        <div  key={data.id}  className={`${styles.card_container}  ${listId.includes(data.id) ? styles.checkbox_ok : ''}`}>
            <p className={styles.paragraph}>
                Horario: {data.time}           
            </p>
            <p className={styles.paragraph}>
                Procedimento: {data.services}       
            </p>
            <p className={styles.paragraph}>
                Profissional: {data.profissional}
            </p> 

            {/* <div className={styles.switch_container}> </div> */}
            <ProjectSwitch 
                    text='Confirmado'
                    typeSwitch='checkbox_confirm'
                    // confirm={stateSwitch}
                    canceled={stateCanceled}
                    handleCheckBox={handleCheckboxChange} 
                    listId={data.id }
                />
           
          
           
                
               
           
        </div>        
    ))}
    
    </>
}

export default ProjectCardSchedings

ProjectCardSchedings.propTypes = {
    contagem: PropTypes.func
    
}