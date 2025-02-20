import { Link } from 'react-router';
import styles from './Navibar.module.css';
import { MdMenu } from "react-icons/md";

function Navibar() {
    return <> 
  <div className={styles.navibar_container}>
      <MdMenu className={styles.menu}/>
    <nav className={styles.navibar}>
          
          <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/contact'>Contato</Link></li>
              <li><Link to='/service'>Serviços</Link></li>
              <li><Link to='/scheduling'>Agendamento</Link></li>
                      
          </ul>
    </nav>
  
  </div>
  
    </> 
}
export default Navibar