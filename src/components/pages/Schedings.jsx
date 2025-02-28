import ProjectLogo from '../project/ProjectLogo';
import styles from './schedings.module.css';
import ProjecCardSchedings from '../project/ProjectCardSchedings';
function Schedings() {
    return <>
   
    <div className={styles.schedings_container}>
    <ProjectLogo />
    <h2>Sua agenda!</h2>
    
    <div className={styles.list_schedings}>
        <div className={styles.date}>
            <p>Hoje</p>
        </div>
        <ProjecCardSchedings />
    </div>
    </div>

   
    
    
    </>
}
export default Schedings