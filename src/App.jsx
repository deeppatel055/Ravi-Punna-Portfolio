import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './Component/Hero-Section/HeroSection'
import Navbar from './Component/Navbar/Navbar'
import Project1 from './Pages/Project1';
import Project2 from './Pages/Project2';
import ScrollToTop from './common/ScrollToTop';

function App() {
 return (
     <Router>
        <ScrollToTop />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/project-management" element={<Project1 />} />
        <Route path="/milk-dairy" element={<Project2 />} />
       </Routes>
    </Router>  
 )
}

export default App
