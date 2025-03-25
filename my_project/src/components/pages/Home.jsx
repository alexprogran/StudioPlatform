import styles from './Home.module.css';
import Container from '../layout/Container';
import ProjectLogo from '../project/ProjectLogo';
import Footer from '../layout/Footer';


function Home() {
   
    return <>
   <Container customClass='content-center'>   
       
        <div className={styles.home}>                      
            <ProjectLogo />
            <h2>Por aqui tenha acesso aos nossos produtos e realize seus agendamento!</h2>

            <div className={styles.img_container}>
            <img src="img/salao-de-beleza.jpg" alt="Imagem salão" />
            <img src='img/images.jpg' alt="Imagem corte cabelo" />
            <img className={styles.manicure} src="img/pedicure.jpg" alt="Imagem manicure" />
            </div> 
            <Footer visible={true} />   

        </div>
   </Container>
    </>
}
export default Home 