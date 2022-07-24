import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import './App.css';
import Navbar from './components/Navbar';
import logo from './assets/brandlogo.svg'
import Contact from './pages/Contact';
import Services from './pages/Services';
import About from './pages/About';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navbar logo={logo} />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/services' element={<Services />} />
      <Route path='/about' element={<About />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
