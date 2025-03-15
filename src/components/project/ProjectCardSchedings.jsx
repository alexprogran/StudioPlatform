import styles from './ProjectCardSchedings.module.css';
import ProjectSwitch from './ProjectSwitch';
import PropTypes from 'prop-types';
import {useState, useEffect} from 'react';

function ProjectCardSchedings() {

    const[scheding, setScheding] = useState([]);
    const [stateCards, setStateCard] = useState({});
   

    const stateConfirm = (id, state) => {
        setStateCard((previous) => (
            {  
                ...previous,
                [id] : {...previous[id], confirms: state}
            }
        ))
    }

    const stateCanceled =(id, state) => {
        setStateCard((previous) => ({
            ...previous, 
            [id]: {...previous[id], canceled: state}
        }))
    }

    useEffect(() => {
        console.log('Object statCard:', stateCards )
    })
   

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
        const stateCard = stateCards[data.id] || {};
        return (
            <div  key={data.id}  className={`${styles.card_container}  ${stateCard.confirm ? styles.confirm : stateCard.canceled ? styles.canceled : ''}`}>
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
                    confirm={(state) => stateConfirm(data.id, state)}                  
                    canceled={(state) => stateCanceled(data.id, state)}   
                   
                />
                

                <ProjectSwitch 
                    annulled={true}                 
                    text='Cancelado'
                    confirm={(state) => stateConfirm(data.id, state)}                  
                    canceled={(state) => stateCanceled(data.id, state)}        
                />       
        </div>      
        )
          
    ))}
    
    </>
}

export default ProjectCardSchedings

ProjectCardSchedings.propTypes = {
    contagem: PropTypes.func
    
}