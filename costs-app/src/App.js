import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import Home from './components/pages/Home';
import NewProject from './components/pages/NewProject';
import Contact from './components/pages/Contact';
import Company from './components/pages/Company';
import Container from './components/layout/Container';

function App() {

  return (
    
    <Router>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/newproject'>New Project</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/company'>Company</Link>
      </div>
      
      <Container customClass="min-height">
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/company' element={<Company/>}/>
            <Route path='/newproject' element={<NewProject/>}/>
        </Routes>
        </Container>
    <p>Footer</p>
    </Router>
  );
}

export default App;
