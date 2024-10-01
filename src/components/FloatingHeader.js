import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const FloatingHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const getLinkClass = (path) => {
    const baseClass = "block px-3 py-2 rounded-md text-base font-medium transition duration-300";
    const activeClass = "bg-extradevelop-blue text-white";
    const inactiveClass = "text-extradevelop-dark hover:bg-extradevelop-light hover:text-extradevelop-blue";
    return `${baseClass} ${location.pathname === path ? activeClass : inactiveClass}`;
  };

  return (
    <header className="fixed w-full z-50 bg-white shadow-md">
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex-shrink-0 flex items-center">
            <img className="h-8 w-auto" src="/images/logo.png" alt="EXTRA DEVELOP" />
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
              className="inline-flex items-center justify-center p-2 rounded-md text-extradevelop-gray hover:text-extradevelop-blue hover:bg-extradevelop-light focus:outline-none focus:ring-2 focus:ring-inset focus:ring-extradevelop-blue"
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
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
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