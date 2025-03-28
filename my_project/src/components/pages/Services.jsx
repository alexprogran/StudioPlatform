import { useEffect, useState } from "react";
import Container from "../layout/Container"
import styles from './Services.module.css';
import PropTypes from 'prop-types';
import { Link } from "react-router";
import Footer from "../layout/Footer";

function Services() {
    
    return <>
    <Container customClass='content-center'>
        <div className={styles.services_container}>
        <h1>Em breve os nossos serviços!</h1>
        <p>Área para implementar serviços</p>              
            <Footer visible={true} />
        </div>

        
    </Container>
    </>
}
export default Services

Services.propTypes = {
    categories: PropTypes.array
}