import styles from './ProjectCardSchedings.module.css';
import ProjectSwitch from './ProjectSwitch';
import PropTypes from 'prop-types';
import {useState, useEffect} from 'react';

function ProjectCardSchedings() {

    const[scheding, setScheding] = useState([]);
    const [stateCards, setStateCard] = useState({});
    // const [countItens, setCountItens]  = useState(false)

    

 

    const stateConfirm = (id, state) => {
        setStateCard((previous) => (
            {  
                ...previous,
                [id] : {...previous[id], confirm: state}
            }
        ))
    }

    const stateCanceled =(id, state) => {
        setStateCard((previous) => ({
            ...previous, 
            [id]: {...previous[id], canceled: state}
        }))
    }




    // useEffect(() => {
    //     console.log('Object statCard:', stateCards )
    // },[se])   
  
    // useEffect(() => {
    //     for (let i ; scheding.length; i++) {
    //         console.log('Constate ,' , i)
    //     }
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
    {scheding.map((data) => {
        const stateCard = stateCards[data.id] || {};
        return (
            <div  key={data.id}  className={`${styles.card_container}  ${stateCard.confirm ? styles.confirm : stateCard.canceled ? styles.canceled : ''}`}>
            <h3>{data.time}</h3>
            <p>    
                Procedimento: {data.service}       
            </p>
            <p>
                Profissional: {data.professional}
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
    } ) }
    
    </>
}

export default ProjectCardSchedings

ProjectCardSchedings.propTypes = {
    contagem: PropTypes.func
    
}