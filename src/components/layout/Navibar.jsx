import { Link } from 'react-router';
import style from './Navibar.module.css';

function Navibar() {
    return <> 
   
  <nav className={style.navibar}>
       
       <ul>
           <li><Link to='/'>Home</Link></li>
           <li><Link to='/contact'>Contato</Link></li>
           <li><Link to='/service'>Serviços</Link></li>
           <li><Link to='/scheduling'>Agendamento</Link></li>
                   
       </ul>
  </nav>
  
    </> 
}
export default Navibar