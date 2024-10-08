import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-extradevelop-dark text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">EXTRA DEVELOP</h3>
            <p className="text-sm mb-2">Inovativní developerské projekty</p>
            <p className="text-sm">IČ:  03514951</p>
            <p className="text-sm">DIČ: CZ03514951</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <p className="text-sm mb-2">info@extradevelop.cz</p>
            <p className="text-sm mb-2">+420 776 412 910</p>
            <p className="text-sm">Oplealova 1417/25, 110 00 Praha 1</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Rychlé odkazy</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:text-extradevelop-blue transition duration-300">Domů</Link></li>
              <li><Link to="/about" className="text-sm hover:text-extradevelop-blue transition duration-300">O nás</Link></li>
              <li><Link to="/projects" className="text-sm hover:text-extradevelop-blue transition duration-300">Projekty</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-extradevelop-blue transition duration-300">Kontakt</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} EXTRA DEVELOP holding. Všechna práva vyhrazena.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;