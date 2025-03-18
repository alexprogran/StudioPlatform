import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';
import style from './Footer.module.css';
import Container from './Container';

function Footer() {
    return <>
   <Container customClass='content-center'>
   <ul className={style.footer}>
        <li><FaFacebook /></li> 
        <li><FaInstagram /></li>    
        <li><FaLinkedin /></li> 
    </ul>
   </Container>
    </>

}
export default Footer