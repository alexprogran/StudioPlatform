import ProjectLogo from '../project/ProjectLogo';
import styles from './schedings.module.css';
import ProjectCardSchedings from '../project/ProjectCardSchedings';

function Schedings() {

    // const listUsedCard = (id) => {
    //     setUsedCard((prev) =>{
    //         const checkId = prev.includes(id)
    //         if(!checkId) {
    //             [...prev, id]
    //         }
    //     })    
    // }

    return <>

    <div className={styles.schedings_container}>    
    <ProjectLogo />

    <h2>Sua agenda!</h2>

        <ProjectCardSchedings />
    </div>

    </>
}
export default Schedings