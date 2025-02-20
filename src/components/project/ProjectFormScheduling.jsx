import { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import Inputs from '../form/inputs';
import Select from '../form/Select';
import styles from './ProjectFormScheduling.module.css';
import Button from '../form/Button';
import Alert from '../layout/Alert';
import Card from './ProjectCard';

function ProjectFormScheduling({schedulingData}) {

    const [services, setServices] = useState([])
    const [scheduling, setScheduling] = useState(schedulingData || {})
    const [message, setMessage] = useState(false)
    const [card, setCard] = useState('')


    useEffect(() =>{
        fetch('http://localhost:5000/services',{
            method: 'GET',
            headers: {
            'Content-type': 'application/json'
            }
        })
        .then((response) => response.json())
        .then((data) => {
            setServices(data)
        })
        .catch((error) => console.log('Erro no carregamento dos serviços: ', error))
        },[])
    
    function createPost(scheduling) {

        fetch('http://localhost:5000/scheduling',{
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(scheduling)
        })
        .then((response) => response.json())
        .then((data) => {
            
            console.log(data)
            setScheduling({})
            
        })
        
        .catch((error) => console.log('Erro no registro do agendamento: ',error));
    }

    function handleOnChange(e) {
        setScheduling({...scheduling,[e.target.name]: e.target.value})
    }
    
    function handleSelect(e) {
        setScheduling({...scheduling,service:e.target.value})
    }
    

    function submit(e){
        e.preventDefault()
        createPost(scheduling)
        setMessage(true)  
        setCard('open')
    }  

    useEffect(() => {
        if(message){
            setTimeout(() => {
                setMessage(false)
                
                
            },3000)
        }
    },[message])

    return <>
    
    {message &&
    <div className={styles.alert}>
        <Alert msg='Sucesso no sue agendamento!' type='success' />
    </div>
    }
    <div className={styles.container}>
    <form className={styles.form_container} onSubmit={submit}>
        
        <Inputs 
            name='date'
            type='date'
            text='Informe a data'
            handleOnChange={handleOnChange}   
            value={scheduling.date || ""}      
            />
    
            <Inputs 
            name='time'
            type='time'
            text='Informe o horário'
            handleOnChange={handleOnChange}
            value={scheduling.time || ""}
            />
            <Inputs 
            name='profissional'
            type='text'
            text='Informe o profissional'
            placeholder='Seu profissional'
            handleOnChange={handleOnChange}
            value={scheduling.profissional || ""}
            />
    
            <Select
            text='Nosso serviços:'
            name='service'
            options={services}
            handleOnChange={handleSelect}  
            value={scheduling.service || ""} 
            />
    
            <Button 
            type='submit'
            text='Agendar'
            />
        </form>
        <div className={`${styles.card_container} ${card ==='open' ? styles.open:'' }`}>
            <Card />
        </div>
        
    </div>
   
    </>
}
export default ProjectFormScheduling

ProjectFormScheduling.propTypes = {
    schedulingData: PropTypes.object
}