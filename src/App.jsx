// import './App.css'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HeroSection from './Component/Hero-Section/HeroSection'
// import Project1 from './Pages/Project1';
// import Project2 from './Pages/Project2';
// import ScrollToTop from './common/ScrollToTop';
// import Project3 from './Pages/Project3';
// import Project4 from './Pages/Project4';

// function App() {
//  return (
//      <Router>
//         <ScrollToTop />
//       <Routes>
//         <Route path="/" element={<HeroSection />} />
//         <Route path="/project-management" element={<Project1 />} />
//         <Route path="/milk-dairy" element={<Project2 />} />
//         <Route path="/to-do" element={<Project3 />} />
//         <Route path="/moviebly" element={<Project4 />} />
//        </Routes>
//     </Router>  
//  )
// }

// export default App


import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './Component/Hero-Section/HeroSection';
import ProjectDetails from './Pages/ProjectDetails'; // New dynamic project page
import ScrollToTop from './common/ScrollToTop';

function App() {
  return (
    <Router  basename="/Deep-Patel-Portfolio">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
