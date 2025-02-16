import PropTypes from 'prop-types'
import { useState } from 'react';

import style from './ProjectFormLogin.module.css';
import Input from '../form/Input';
import ButtonSubmit from '../form/ButtonSubmit';

function ProjectFormLogin({h2Text, Post, userData}) {
    const [dataForm, setDataForm] = useState(userData || {})

    function handleOnChange(e) {
        setDataForm({...dataForm, [e.target.name]: e.target.value});
    }
    function submit(e) { 
        e.preventDefault()
        Post(dataForm)   
    }    
    return <>
   <form onSubmit={submit} className={style.form_container}>
        
        <h2>{h2Text}</h2>
        <Input 
        type='text' 
        name="name"
        text='Informe seu nome'
        placeholder='Digite seu nome'
        handleOnChange={handleOnChange}
        value={dataForm.name || ""}
        
        
        />
        <Input 
        type='text' 
        name='phone'
        text='Informe o seu telefone'
        placeholder='Digite seu telefone'
        handleOnChange={handleOnChange}
        value={dataForm.phone ? dataForm.phone: ''}

        />
        <Input 
        type='email' 
        name='email'
        text='Informe o seu email'
        placeholder='Digite seu email'
        handleOnChange={handleOnChange}
        value={dataForm.email ? dataForm.email: ''}
        
        />
        <ButtonSubmit 
        type='submit'
        text='Enviar'
        />

   </form>
   
    </>
}
export default ProjectFormLogin

ProjectFormLogin.propTypes = {
    h2Text: PropTypes.string,
    Post: PropTypes.func,
    userData: PropTypes.object,
}