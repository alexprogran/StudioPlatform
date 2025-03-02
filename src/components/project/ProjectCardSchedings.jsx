import styles from './ProjectCardSchedings.module.css';
import ProjectSwitch from './ProjectSwitch';
import PropTypes from 'prop-types';
import {useState, useEffect} from 'react';

function ProjectCardSchedings({contagem}) {

    const[scheding, setScheding] = useState([]);
   
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

    useEffect(() => {
        if(scheding.length > 0 ) {                     
        contagem(scheding)
        console.log(`Elemento da lista no filho: ${scheding}`)
        }
    },[scheding])
    
   
  
    return  <>
    
    {scheding.map((data) => (        

        <div  key={data.id}  className={`${styles.card_container}`}>
            <p>
                Horario: {data.time}           
            </p>
            <p>
                Procedimento: {data.services}       
            </p>
            <p>
                Profissional: {data.profissional}
            </p> 
           
            <ProjectSwitch />
        </div>        
    ))}
    
    </>
}

export default ProjectCardSchedings

ProjectCardSchedings.propTypes = {
    contagem: PropTypes.func
    
}