import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const FloatingHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  const getLinkClass = (path) => {
    const baseClass = "px-3 py-2 rounded-md text-sm font-medium transition duration-300";
    const activeClass = "bg-extradevelop-blue text-white";
    const inactiveClass = isScrolled ? "text-extradevelop-dark hover:bg-extradevelop-light hover:text-extradevelop-blue" : "text-white hover:bg-white hover:text-extradevelop-blue";
    return `${baseClass} ${location.pathname === path ? activeClass : inactiveClass}`;
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-black bg-opacity-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="relative flex items-center justify-between h-16">
          <Link to="/" className="flex-shrink-0 flex items-center">
            <img 
              className="h-8 w-auto" 
              src="/images/logo.png" 
              alt="EXTRA DEVELOP"
              style={{
                filter: isScrolled ? 'none' : 'brightness(0) invert(1)'
              }}
            />
          </Link>
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link to="/" className={getLinkClass('/')}>Domů</Link>
            <Link to="/about" className={getLinkClass('/about')}>O nás</Link>
            <Link to="/projects" className={getLinkClass('/projects')}>Projekty</Link>
            <Link to="/contact" className={getLinkClass('/contact')}>Kontakt</Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                isScrolled ? 'text-extradevelop-dark hover:text-extradevelop-blue hover:bg-extradevelop-light' : 'text-white hover:text-extradevelop-blue hover:bg-white'
              } focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`}
            >
              <span className="sr-only">Otevřít hlavní menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${isScrolled ? 'bg-white' : 'bg-black bg-opacity-50'}`}>
            <Link to="/" className={getLinkClass('/')}>Domů</Link>
            <Link to="/about" className={getLinkClass('/about')}>O nás</Link>
            <Link to="/projects" className={getLinkClass('/projects')}>Projekty</Link>
            <Link to="/contact" className={getLinkClass('/contact')}>Kontakt</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default FloatingHeader;