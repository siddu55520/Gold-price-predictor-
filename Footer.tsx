import React from 'react';
import { TrendingUp, Mail, Info, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-500 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <TrendingUp className="h-6 w-6 text-gold-500 mr-2" />
              <h2 className="text-xl font-bold text-white">GoldOracle</h2>
            </div>
            <p className="text-navy-100 text-sm">
              Providing accurate gold price predictions and market insights to help you make informed investment decisions.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-navy-100 hover:text-gold-300 transition-colors text-sm">Dashboard</a>
              </li>
              <li>
                <a href="#" className="text-navy-100 hover:text-gold-300 transition-colors text-sm">Predictions</a>
              </li>
              <li>
                <a href="#" className="text-navy-100 hover:text-gold-300 transition-colors text-sm">Historical Data</a>
              </li>
              <li>
                <a href="#" className="text-navy-100 hover:text-gold-300 transition-colors text-sm">Market Analysis</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-navy-100 hover:text-gold-300 transition-colors text-sm">Methodology</a>
              </li>
              <li>
                <a href="#" className="text-navy-100 hover:text-gold-300 transition-colors text-sm">API Documentation</a>
              </li>
              <li>
                <a href="#" className="text-navy-100 hover:text-gold-300 transition-colors text-sm">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-navy-100 hover:text-gold-300 transition-colors text-sm">Blog</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="h-4 w-4 text-gold-400 mr-2" />
                <a href="mailto:info@goldoracle.com" className="text-navy-100 hover:text-gold-300 transition-colors text-sm">
                  info@goldoracle.com
                </a>
              </li>
              <li className="flex items-center">
                <Info className="h-4 w-4 text-gold-400 mr-2" />
                <a href="#" className="text-navy-100 hover:text-gold-300 transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li className="flex items-center">
                <Globe className="h-4 w-4 text-gold-400 mr-2" />
                <a href="#" className="text-navy-100 hover:text-gold-300 transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-navy-400 text-center text-sm text-navy-200">
          <p>© {new Date().getFullYear()} GoldOracle. All rights reserved.</p>
          <p className="mt-1">
            Disclaimer: Predictions are based on historical data and market analysis but should not be considered financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;