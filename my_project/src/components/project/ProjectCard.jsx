import {useState, useEffect} from 'react';
import { FaCheck, FaTrash } from 'react-icons/fa';
import Button from '../form/Button';
import styles from './ProjectCard.module.css';
import PropTypes from 'prop-types';



function ProjectCard({get})  {
    const[scheduling, setScheduling]  = useState([])

   useEffect(() =>{
    fetch('http://localhost:5000/scheduling',{
        method : 'GET', 
        headers: {
            'content-type': 'application/json'
        }        
    })
    .then((response) => response.json())
    .then((data) => setScheduling(data))
    .catch((error) => console.log(error))
    },[get])
   
    return <>
       <div className={styles.card_container}>
        <h2>Seu agendameto</h2>
       <div className={styles.list} >
       <ul>
        {scheduling.map((datas, index) => (
            <li key={index}>
            <p>Data: {datas.date}</p>
            <p>Horário: {datas.time}</p>
            <p>Profissional: {datas.professional}</p>
            <p>Procedimento: {datas.service}</p>
        </li>
        ))}
       </ul>
       </div>
       <p>Eviamos o seu agendamento para: <span>edenreço@email.com</span> </p>
       <div className={`${styles.button_icons} `}>
            <div className={`${styles.icons} ${styles.icon_float}`}>
                <FaCheck /> 
            </div>
            <div className={styles.button_fatrash}> 
               
                <Button  
                    className={styles.btn}
                    type='submit'                 
                    text='Reagendamento'
                    classDinamic='btn_p'
                 />

                
                <FaTrash className={`${styles.icons} `} />
            </div>
           
            </div>
            
       </div>
    </>
}
export default ProjectCard

ProjectCard.propTypes = {
    dataScheduling: PropTypes.object,
    get: PropTypes.bool,
}