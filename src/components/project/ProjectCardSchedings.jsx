import styles from './ProjectCardSchedings.module.css';
import PropTypes from 'prop-types';
import {useState, useEffect} from 'react';

function ProjectCardSchedings() {
    const[scheding, setScheding] = useState([])

   
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
            console.log(`Dados: ${data}`)
        })

    },[])
  
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
       <div>
       <label className={styles.checkbox_container}>
       <input type="checkbox" />
       <p>Confirmado</p>
       </label>
       </div>      

       </div>

        
    ))}
    
    </>
}

export default ProjectCardSchedings

ProjectCardSchedings.propTypes = {
    schedings: PropTypes.object
}