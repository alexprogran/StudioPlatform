import Container from '../layout/Container';
import styles from './Scheduling.module.css';
import ProjectLogo from '../project/ProjectLogo';
import ProjectFormScheduling from '../project/ProjectFormScheduling';
// import Message from '../layout/Message';
// import PropTypes from 'prop-types';

function Scheduling() {
 
  

    return <>
       <Container customClass='content-center'>
        <div className={styles.scheduling_container}> 
            <ProjectLogo /> 
            <h2>Realize seu agendamento!</h2>      
            <ProjectFormScheduling />
        
        </div>

       </Container>
    
    </> 
} 
export default Scheduling

