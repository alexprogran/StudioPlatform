import {useNavigate} from 'react-router';
import style from './Contact.module.css';
import Container from '../layout/Container';
import ProjectForm from '../project/ProjectFormLogin';
import ProjectLogo from '../project/ProjectLogo';


function Contact() { 

  const navigate = useNavigate()


  function CreatePost(dataForm) {
    fetch('http://localhost:5000/data_user', {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(dataForm)      
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.log(error))
    navigate('/scheduling',{state:{message:"Cadastro realizado com sucesso"}});
  }
    return <>
    
   <Container customClass='content-center'>      
     
    <div className={style.contact_container}>
       <div className={style.logo}>
         <ProjectLogo />
       </div>
        <div>
            <ProjectForm h2Text='Informe os dados' Post={CreatePost} />
        </div>
    </div>
        
    
    </Container>
    
    </> 
}
export default Contact 