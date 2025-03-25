import { useState } from 'react';
import { Link } from 'react-router';
import styles from './Navibar.module.css';
import { MdMenu } from "react-icons/md";
import ProjectSideBar from '../project/ProjectSidBar';

function Navibar() {
  const [open, setOpen] = useState(''); 

    function openMenu() {
      setOpen('open')          
    } 

  function closedMenu(msg) {
    setOpen(msg)
   
    console.log(`Mensagem do filho para o pai: ${msg}`) 
  }

    return <> 
  <div className={styles.navibar_container}>   
    <div className={`${styles.sidebar_moble} ${styles[open]}`}>
      <ProjectSideBar closed={closedMenu} />
     </div>
    <MdMenu className={styles.menu} onClick={openMenu}/>
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