import {useNavigate} from 'react-router';
import style from './Contact.module.css';
import Container from '../layout/Container';
import ProjectFormLogin from '../project/ProjectFormLogin';
import ProjectLogo from '../project/ProjectLogo';
import ProjectInforms from '../project/ProjectInforms';
import Footer from '../layout/Footer';

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
      
        <ProjectLogo />
        <ProjectInforms 
        title='Para que cadastrar os dados?'
        text='O cadastro dos seus dados se faz necessário para criação da conta e agendamento com a equipe.'
        />
        <h2>Informe seus dados</h2>        
        <ProjectFormLogin  Post={CreatePost} />        
        <Footer visible={true} />
    </div>

        
    
    </Container>
    
    </> 
}
export default Contact 