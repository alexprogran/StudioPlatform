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
            <div className={styles.time}>
                <h3>Nosso horários de funcionamento!</h3>
                <p>
                    Funcionamos de Segunda as sexta-feiras das
                    9:00 ás 18:00. Aos sábados 9:00 ás 17:00.
                    Você consegue horáios diferenciados através 
                    do agendamento em nossa plataforma.
                    Enviaremos para seu e-mail todos os detalhes
                    do seu agendamento.

                </p>

            </div>
            
            <ProjectLogo /> 
            <h2>Realize seu agendamento!</h2>      
            <ProjectFormScheduling />
        
        </div>

       </Container>
    
    </> 
} 
export default Scheduling

