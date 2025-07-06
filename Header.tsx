import React, { useState, useEffect } from 'react';
import { TrendingUp, Clock, Menu, X } from 'lucide-react';
import TimeframeSelector from './TimeframeSelector';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <TrendingUp className="h-8 w-8 text-gold-500 mr-2" />
            <h1 className="text-2xl font-bold">GoldOracle</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <TimeframeSelector />
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <a href="#" className="text-navy-600 hover:text-gold-500 transition-colors">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="#" className="text-navy-600 hover:text-gold-500 transition-colors">
                    Predictions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-navy-600 hover:text-gold-500 transition-colors">
                    History
                  </a>
                </li>
                <li>
                  <a href="#" className="text-navy-600 hover:text-gold-500 transition-colors">
                    About
                  </a>
                </li>
              </ul>
            </nav>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-navy-500" />
              <span className="text-sm text-navy-500">
                {new Date().toLocaleString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </span>
            </div>
          </div>
          
          <button className="md:hidden text-navy-500" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 animate-fade-in">
            <TimeframeSelector />
            <nav className="mt-4">
              <ul className="space-y-4">
                <li>
                  <a href="#" className="block text-navy-600 hover:text-gold-500 transition-colors">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="#" className="block text-navy-600 hover:text-gold-500 transition-colors">
                    Predictions
                  </a>
                </li>
                <li>
                  <a href="#" className="block text-navy-600 hover:text-gold-500 transition-colors">
                    History
                  </a>
                </li>
                <li>
                  <a href="#" className="block text-navy-600 hover:text-gold-500 transition-colors">
                    About
                  </a>
                </li>
              </ul>
            </nav>
            <div className="mt-4 flex items-center space-x-2">
              <Clock className="h-4 w-4 text-navy-500" />
              <span className="text-sm text-navy-500">
                {new Date().toLocaleString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;