import Container from '../layout/Container';
import styles from './Scheduling.module.css';
import ProjectLogo from '../project/ProjectLogo';
import ProjectFormScheduling from '../project/ProjectFormScheduling';
import ProjectInforms from '../project/ProjectInforms';
import Footer from '../layout/Footer';


function Scheduling() {
 
  

    return <>
        <Container customClass='content-center'>  

        <div className={styles.scheduling_container}> 
            <ProjectInforms
            title='Nossos horários de funcionamento!'
            text=' Funcionamos de Segunda as sexta-feiras das
                    9:00 ás 18:00. Aos sábados 9:00 ás 17:00.
                    Você consegue horáios diferenciados através 
                    do agendamento em nossa plataforma.
                    Enviaremos para seu e-mail todos os detalhes
                    do seu agendamento.'
            />          
            <ProjectLogo /> 
            <h2>Realize seu agendamento!</h2>      
            <ProjectFormScheduling />
            <Footer visible={true} />
        
        </div>

       </Container>
    
    </> 
} 
export default Scheduling

