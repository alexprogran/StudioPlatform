import PropTypes from 'prop-types'
import { useState } from 'react';

import style from './ProjectFormLogin.module.css';
import Inputs from '../form/Inputs';
import Button from '../form/Button';

function ProjectFormLogin({Post, userData}) {
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

        
       
        <Inputs 
        classDinamic='width_m'
        type='text' 
        name="name"
        text='Informe seu nome'
        placeholder='Digite seu nome'
        handleOnChange={handleOnChange}
        value={dataForm.name || ""} 
        />

        <Inputs 
        type='tel' 
        name='phone'
        text='Informe o seu telefone'
        placeholder='(99) 99999-9999'
        handleOnChange={handleOnChange}
        value={dataForm.phone ? dataForm.phone: ''}

        />
        <Inputs 
        type='email' 
        name='email'
        text='Informe o seu email'
        placeholder='Digite seu email'
        handleOnChange={handleOnChange}
        value={dataForm.email ? dataForm.email: ''}
        
        />
        <Button 
        type='submit'
        text='Cadastrar'
        />

   </form>
   
    </>
}
export default ProjectFormLogin

ProjectFormLogin.propTypes = {
    Post: PropTypes.func,
    userData: PropTypes.object,
}