import { Link } from 'react-router';
import { IoClose } from "react-icons/io5";
import styles from './ProjectSidBar.module.css';
import PropTypes from 'prop-types';


function ProjectSideBar({closed}) {   
    
   
    return <>
        <div className={styles.sidebar_container}>
                 

            <div className={styles.icon_container} >
                 <IoClose className={styles.icon} onClick={() => closed('')}  />
            </div>          
           
            <ul>
                <li><Link to='#'>Cortes</Link></li>
                <li><Link to='#'>Manicure</Link></li>
                <li><Link to='#'>Pedicure</Link></li>
                <li><Link to="#">Maquiagem</Link></li>
                <li><Link to="#">Hidratações</Link></li>                
                
            </ul>
        </div>
  
    </>
}
export default ProjectSideBar

ProjectSideBar.propTypes = {
    closed: PropTypes.func
}