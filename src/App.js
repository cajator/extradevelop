import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FloatingHeader from './components/FloatingHeader';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ProjectDetail from './components/ProjectDetail';
import ScrollToTop from './components/ScrollToTop'

const projectsData = [
  { 
    id: 1, 
    title: "Rezidence Slunečná", 
    description: "Luxusní bytový komplex s výhledem na město", 
    status: "realizace", 
    imageUrl: "/images/rezidence-slunecna.jpg" 
  },
  { 
    id: 2, 
    title: "Kancelářské centrum Meteor", 
    description: "Moderní kancelářské prostory v centru", 
    status: "dokončeno", 
    imageUrl: "/images/centrum-meteor.jpg" 
  },
  { 
    id: 3, 
    title: "Eco Village", 
    description: "Udržitelný rezidenční projekt v přírodě", 
    status: "v přípravě", 
    imageUrl: "/images/eco-village.jpg" 
  },
];

const useScrollEffect = () => {
  React.useEffect(() => {
    const handleScroll = () => {
      document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};

function App() {
  useScrollEffect();

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <FloatingHeader />
        <main className="flex-grow pt-0">
          <Routes>
            <Route path="/" element={<Home projects={projectsData.slice(0, 3)} />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects projects={projectsData} />} />
            <Route path="/project/:id" element={<ProjectDetail projects={projectsData} />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
