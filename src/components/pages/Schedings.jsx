import { useState } from 'react';
import ProjectLogo from '../project/ProjectLogo';
import styles from './schedings.module.css';
import ProjectCardSchedings from '../project/ProjectCardSchedings';
function Schedings() {

    const [agend, setAgend] = useState([]);
    
    const count = (agenda) => {
        setAgend(agenda)     
        console.log("Elmentos aparecidos no pai:", agend);  
        
    }

    return <>
   
    <div className={styles.schedings_container}>    
    <ProjectLogo contagem={count} />
    <h2>Sua agenda!</h2>
    
    <div className={styles.list_schedings}>
        <div className={styles.date}>
            <p>Hoje</p>
        </div>
        <ProjectCardSchedings contagem={count}/>
    </div>


{agend.map((item, index) => (
                <div key={index}>
                    {index % 5 === 0 && (
                        <div className={styles.list_schedings}>
                            <div className={styles.date}>
                                <p>Hoje</p>
                            </div>
                            <ProjectCardSchedings contagem={count} />
                        </div>
                    )}
                </div>
            ))}


    </div>

    
    
    </>
}
export default Schedings