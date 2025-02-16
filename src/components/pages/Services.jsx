import { useEffect, useState } from "react";
import Container from "../layout/Container"
import styles from './Services.module.css';
import PropTypes from 'prop-types';
import { Link } from "react-router";

function Services() {
    const [categories, setCategories] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:5000/categoria')
        .then((resp) => resp.json())
        .then((data) => setCategories(data))
        .catch((err) => console.log(err))        
    }, [])
    return <>
    <Container customClass='content-center'>
        <div className={styles.services_container}>
        <h1>Nossos serviços!</h1>
        <p>Acesse abaixo a lista de todos os nosso seviços.</p>
    
            <ul>
                {categories.map((categoria) => (
                    <li key={categoria.id}><Link to='#'>{categoria.nome}</Link></li>
                ))}
            </ul>
    
        </div>
    </Container>
    </>
}
export default Services

Services.propTypes = {
    categories: PropTypes.array
}