import {BrowserRouter as Router, Routes, Route} from 'react-router';
import Navibar from './components/layout/Navibar';
import Footer from './components/layout/Footer';
import Container from './components/layout/Container';
import Side from './components/layout/Side';
import Home from  './components/pages/Home';
import Contact from './components/pages/Contact';
import Sevices from './components/pages/Services';
import Scheduling from './components/pages/Scheduling';

function App() {
  
//Resolver: const customClasses = customClass
//   ? customClass.split(' ').map(cls => style[cls]).join(' ')
//  : '';


//UTILIZAR O "felx-direction: column"

// TESTAR COR: #7b7b7b
  return <>
  <Router>
  <Navibar />
  <Side />
  <Container customClass="min-height border-top">
  <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/service' element={<Sevices />} />
      <Route path='/scheduling' element={<Scheduling />} />
    </Routes>
    </Container>
  <Footer />
  </Router>

  </>

}

export default App 
