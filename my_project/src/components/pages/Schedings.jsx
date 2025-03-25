import {FaRegCalendarAlt} from 'react-icons/fa'
import ProjectLogo from '../project/ProjectLogo';
import styles from './schedings.module.css';
import ProjectCardSchedings from '../project/ProjectCardSchedings';


function Schedings() {
    
    return <> 

  
    
    <div className={styles.schedings_container}>    
        <ProjectLogo />
   
        <div className={styles.calendar_icons}>
        <h2>Sua agenda</h2>
        <FaRegCalendarAlt className={styles.icons} />
        </div>
       
       <ProjectCardSchedings />
          
         
    </div>
    {/* <Footer visible={true} /> */}
 

    </>
}
export default Schedings