import style from './Home.module.css';
import Container from '../layout/Container';
import Button from '../layout/Button';
import ProjectLogo from '../project/ProjectLogo';

function Home() {
   
    return <>
   <Container customClass='content-center'>
        <div className={style.home}>            
            <ProjectLogo />
            <Button to='/contact' text='Deixe seu contato' />
        </div>
   </Container>
    </>
}
export default Home