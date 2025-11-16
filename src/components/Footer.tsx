import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Mail, Phone, MapPin, Clock, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-2">
              <Link to="/" className="inline-flex items-center group mb-6">
                <div className="p-2.5 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Shield className="h-7 w-7 text-white" />
                </div>
                <div className="ml-3">
                  <div className="text-2xl font-bold">Virtus Systems</div>
                  <div className="text-sm text-gray-400 font-medium">FinTech Excellence</div>
                </div>
              </Link>
              <p className="text-gray-300 mb-8 max-w-md leading-relaxed text-base">
                Enterprise-grade hosting, platform administration, and custom software development
                for brokers, trading platforms, and fintech companies worldwide.
              </p>
              <div className="space-y-4">
                <a href="mailto:it@virtus-systems.net" className="flex items-center text-gray-300 hover:text-primary-400 transition-colors group">
                  <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-primary-500/10 transition-colors">
                    <Mail className="h-5 w-5 text-primary-400" />
                  </div>
                  <span className="ml-3">it@virtus-systems.net</span>
                </a>
                <div className="flex items-center text-gray-300">
                  <div className="p-2 bg-slate-800 rounded-lg">
                    <Clock className="h-5 w-5 text-primary-400" />
                  </div>
                  <span className="ml-3">24/5 Support Available</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="p-2 bg-slate-800 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary-400" />
                  </div>
                  <span className="ml-3">Limassol, Cyprus</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Services</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/hosting" className="text-gray-400 hover:text-primary-400 transition-colors font-medium text-sm">
                    Hosting Services
                  </Link>
                </li>
                <li>
                  <Link to="/platform-admin" className="text-gray-400 hover:text-primary-400 transition-colors font-medium text-sm">
                    Virtus Services
                  </Link>
                </li>
                <li>
                  <Link to="/virtus-toolbox" className="text-gray-400 hover:text-primary-400 transition-colors font-medium text-sm">
                    Virtus Toolbox
                  </Link>
                </li>
                <li>
                  <Link to="/virtus-ecosystem" className="text-gray-400 hover:text-primary-400 transition-colors font-medium text-sm">
                    Virtus Ecosystem
                  </Link>
                </li>
                <li>
                  <Link to="/development" className="text-gray-400 hover:text-primary-400 transition-colors font-medium text-sm">
                    Custom Development
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-primary-400 transition-colors font-medium text-sm">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Specializations</h3>
              <ul className="space-y-3">
                <li className="text-gray-400 text-sm font-medium">MetaTrader 4 & 5</li>
                <li className="text-gray-400 text-sm font-medium">cTrader Platforms</li>
                <li className="text-gray-400 text-sm font-medium">Trading APIs</li>
                <li className="text-gray-400 text-sm font-medium">Liquidity Bridges</li>
                <li className="text-gray-400 text-sm font-medium">Risk Management</li>
                <li className="text-gray-400 text-sm font-medium">CRM Systems</li>
                <li className="text-gray-400 text-sm font-medium">Client Portals</li>
                <li className="text-gray-400 text-sm font-medium">Custom Integrations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 py-8 px-4 sm:px-6 lg:px-8 mt-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0 font-medium">
              © 2025 Virtus Systems. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors font-medium">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors font-medium">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors font-medium">
                Security
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors font-medium">
                Compliance
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;