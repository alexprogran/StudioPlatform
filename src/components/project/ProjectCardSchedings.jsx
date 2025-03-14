import styles from './ProjectCardSchedings.module.css';
import ProjectSwitch from './ProjectSwitch';
import PropTypes from 'prop-types';
import {useState, useEffect} from 'react';

function ProjectCardSchedings() {

    const[scheding, setScheding] = useState([]);
    const [activeConfirm, setActiveConfirm] = useState(false);
    const [canceled, setCanceled] = useState(false);
    const [steteCard, setStateCard] = useState({});
   

    // const stateSwitch = (state) => {
    //     setActiveConfirm(state)              
    // } 

    const state_confirm = (id, state) => {
        setStateCard((previous) => (
            {  
                ...previous,
                [id] : {...previous[id], confirms: state}
            }
        ))
    }

    const state_canceled =(id, state) => {
        setStateCard((previous) => ({
            ...previous, 
            [id]: {...previous[id], canceled: state}
        }))
    }


   

    // const handleCheckboxChange = ((id) => {
    
    //     setListId((previous) => {
    //         const checkPrevious = previous.includes(id);
    //         if (checkPrevious) {
    //            return previous.filter((idItem) => idItem !== id)
    //         } else {
                
    //             return [...previous, id]
    //         }
    //     })
    // })
    
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
            <p>
                Procedimento: {data.services}       
            </p>
            <p>
                Profissional: {data.profissional}
            </p> 

            {/* <div className={styles.switch_container}> </div> */}
            <ProjectSwitch                    
                    ok={true}
                    text='Confirmado'
                    confirm={state_confirm(data.id)}
                    canceled={state_canceled(data.id)}
                    defaults={stateDefault}
                    handleCheckBox={handleCheckboxChange} 
                    listId={data.id }
                />
                

                <ProjectSwitch 
                    annulled={true}                 
                    text='Cancelado'
                    confirm={stateSwitch}                  
                    canceled={stateCanceled}
                    stateDefault={stateDefault}
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