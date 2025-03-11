import styles from './ProjectCardSchedings.module.css';
import ProjectSwitch from './ProjectSwitch';
import PropTypes from 'prop-types';
import {useState, useEffect} from 'react';

function ProjectCardSchedings() {

    const[scheding, setScheding] = useState([]);
    const [activeConfirm, setActiveSwitch] = useState(false);
    const [canceled, setCanceled] = useState(false)
    const [listId, setListId] = useState([]);
   

    const stateSwitch = (state) => {
        setActiveSwitch(state)              
    } 

    const stateCanceled = (states) => {
        setCanceled(states)
        console.log('Estado do Canceled;', canceled)
    }

    useEffect(() => {   
        console.log('Estado do switch canceled no pai:', canceled);
        console.log('Estado do confirm do pai:', activeConfirm)
    },[activeConfirm, canceled])


    const handleCheckboxChange = ((id) => {
    
        setListId((previous) => {
            const checkPrevious = previous.includes(id);
            if (checkPrevious) {
               return previous.filter((idItem) => idItem !== id)
            } else {                
                return [...previous, id]
            }
        })
    })
    
    useEffect(() => {
        console.log('Listas de id:', listId)
    },[listId])
   
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
        
        <div  key={data.id}  className={`${styles.card_container}  ${listId.includes(data.id) ? (activeConfirm ? styles.confirm : canceled ? styles.canceled : '') : ''}`}>
            
            <h3>{data.time}</h3>
            <p className={styles.paragraph}>
                Procedimento: {data.services}       
            </p>
            <p className={styles.paragraph}>
                Profissional: {data.profissional}
            </p> 

            {/* <div className={styles.switch_container}> </div> */}
            <ProjectSwitch                    
                    ok={true}
                    text='Confirmado'
                    confirm={stateSwitch}
                    canceled={stateCanceled}
                    handleCheckBox={handleCheckboxChange} 
                    listId={data.id }
                />
{/* 
                <ProjectSwitch 
                 
                    text='Cancelado'
                    confirm={stateSwitch}
                    canceled={stateCanceled}
                    handleCheckBox={handleCheckboxChange} 
                    listId={data.id }
                /> */}

            

                
            
            
          
           
                
               
           
        </div>        
    ))}
    
    </>
}

export default ProjectCardSchedings

ProjectCardSchedings.propTypes = {
    contagem: PropTypes.func
    
}