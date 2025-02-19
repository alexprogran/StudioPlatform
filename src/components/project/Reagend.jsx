import {useState, useEffect} from 'react';
import { FaCheck } from 'react-icons/fa';
import Button from '../form/Button';
import styles from './Reagend.module.css';
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
       <div className={styles.reagend_container}>
       <h1>Agendamento ralizado!</h1>
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
       <div className={styles.button_icons}>
            <div className={styles.icons}>
                <FaCheck /> 
            </div>
            <Button type='submit' text='Reagendamento' />
       </div>
       </div>
    </>
}
export default Reagend

Reagend.propTypes = {
    dataScheduling: PropTypes.object,
}