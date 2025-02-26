import {useState, useEffect} from 'react';
import { FaCheck, FaTrash } from 'react-icons/fa';
import Button from '../form/Button';
import styles from './ProjectCard.module.css';
import PropTypes from 'prop-types';



function Reagend()  {
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
    console.log(scheduling)

   },[])
    return <>
       <div className={styles.card_container}>
        <h2>Seu agendameto</h2>
       <div className={styles.list} >
       <ul>
        {scheduling.map((data) => (
            <li key={data.id}>
            <p>Data: {data.date}</p>
            <p>Horário: {data.time}</p>
            <p>Profissional: {data.profissional}</p>
            <p>Procedimento: {data.service}</p>
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
                <div>
                <Button  
                    className={styles.btn}
                    type='submit'                 
                    text='Reagendamento'
                    classDinamic='btn_m'
                 />
                </div>
                <div className={styles.fatrash_container}>
                <FaTrash className={styles.icons} />
                </div>
               
           
            </div>
           
            </div>
            
       </div>
    </>
}
export default Reagend

Reagend.propTypes = {
    dataScheduling: PropTypes.object,
}