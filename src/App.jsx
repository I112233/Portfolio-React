import React, { useState } from 'react';
import './index.css';
import './script.js';
import 'ionicons';
import 'react-ionicons';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';
import Sidebar from './components/Sidebar/Sidebar';

// Main App Component
const App = () => {
  const [activePage, setActivePage] = useState('about');

  const handleNavigation = (page) => {
    setActivePage(page);
  };

  return (
    <div className="app">
      <div className='sidebarComponent'>  <Sidebar /></div>

      <main className="main-content">
        <Navbar onNavigate={handleNavigation} />
        {activePage === 'about' && <About />}
        {/* {activePage === 'resume' && <Resume />} */}
        {activePage === 'portfolio' && <Portfolio />}
        {activePage === 'blog' && <Blog />}
        {activePage === 'contact' && <Contact />}
      </main>
    </div>
  );
};

export default App;