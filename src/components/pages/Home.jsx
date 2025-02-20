import styles from './Home.module.css';
import Container from '../layout/Container';
// import Button from '../layout/Button';
import ProjectLogo from '../project/ProjectLogo';
// import img from '../../img/salao-de-beleza.jpg';

function Home() {
   
    return <>
   <Container customClass='content-center'>
        <div className={styles.home}>            
            <ProjectLogo />
            {/* <Button to='/contact' text='Deixe seu contato' /> */}
            <div className={styles.img_container}>
            <img className={styles.img} src="img/salao-de-beleza.jpg" alt="Imagem salão" />
            <img className={styles.img} src='img/images.jpg' alt="Imagem corte cabelo" />
            <img className={`${styles.img} ${styles.manicure}`} src="img/pedicure.jpg" alt="Imagem manicure" />

            </div>
            
          
          
        </div>
   </Container>
    </>
}
export default Home 