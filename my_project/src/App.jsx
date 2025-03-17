import {BrowserRouter as Router, Routes, Route} from 'react-router';
import Navibar from './components/layout/Navibar';
import Footer from './components/layout/Footer';
import Container from './components/layout/Container';
import Home from  './components/pages/Home';
import Contact from './components/pages/Contact';
import Sevices from './components/pages/Services';
import Scheduling from './components/pages/Scheduling';
import Schedigns from './components/pages/Schedings';

function App() {

  return <>
  <Router>
  <Navibar />
  {/* <Side /> */}
  <Container customClass="min-height border-top">
  <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/service' element={<Sevices />} />
      <Route path='/scheduling' element={<Scheduling />} />
      <Route path='/schedings' element={<Schedigns/>} /> 
    </Routes>
    </Container>
  <Footer />
  </Router>

  </>

}

export default App 
