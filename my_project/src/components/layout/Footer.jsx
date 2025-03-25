import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';
import style from './Footer.module.css';
import PropTypes from 'prop-types';

function Footer({visible}) {
    return <>
    {visible && (
     <ul className={style.footer}>
     <li><FaFacebook /></li> 
     <li><FaInstagram /></li>    
     <li><FaLinkedin /></li> 
    </ul>   
    )}  
    </>
}
export default Footer

Footer.propTypes = {
    visible: PropTypes.bool,
}