import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Mail, Phone, MapPin, Clock, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      {/* Main Footer Content */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center mb-6">
                <Shield className="h-8 w-8 text-primary-400 mr-3" />
                <div>
                  <div className="text-2xl font-bold">Virtus Systems</div>
                  <div className="text-sm text-neutral-400">FinTech Infrastructure Solutions</div>
                </div>
              </Link>
              <p className="text-neutral-300 mb-6 max-w-md leading-relaxed">
                We provide enterprise-grade hosting, platform administration, and custom software development 
                services specifically designed for brokers, trading platforms, and fintech companies worldwide.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-neutral-300">
                  <Mail className="h-5 w-5 text-primary-400 mr-3" />
                  <a href="mailto:giorgos.v@virtus-systems.net" className="hover:text-primary-400 transition-colors">
                    giorgos.v@virtus-systems.net
                  </a>
                </div>
                <div className="flex items-center text-neutral-300">
                  <Clock className="h-5 w-5 text-primary-400 mr-3" />
                  <span>24/7 Support Available</span>
                </div>
                <div className="flex items-center text-neutral-300">
                  <MapPin className="h-5 w-5 text-primary-400 mr-3" />
                  <span>Limassol Cyprus</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Our Services</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/hosting" className="text-neutral-300 hover:text-primary-400 transition-all duration-300 flex items-center hover:translate-x-1">
                    Hosting Services
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </Link>
                </li>
                <li>
                  <Link to="/platform-admin" className="text-neutral-300 hover:text-primary-400 transition-all duration-300 flex items-center hover:translate-x-1">
                    ↳ Virtus Services
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </Link>
                </li>
                <li>
                  <Link to="/virtus-toolbox" className="text-neutral-300 hover:text-primary-400 transition-all duration-300 flex items-center hover:translate-x-1">
                    ↳ Virtus Toolbox
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </Link>
                </li>
                <li>
                  <Link to="/virtus-ecosystem" className="text-neutral-300 hover:text-primary-400 transition-all duration-300 flex items-center hover:translate-x-1">
                    Virtus Ecosystem
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </Link>
                </li>
                <li>
                  <Link to="/development" className="text-neutral-300 hover:text-primary-400 transition-all duration-300 flex items-center hover:translate-x-1">
                    Custom Development
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-neutral-300 hover:text-primary-400 transition-all duration-300 flex items-center hover:translate-x-1">
                    Contact Us
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Specializations */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Specializations</h3>
              <ul className="space-y-3 text-neutral-300">
                <li>MetaTrader 4 & 5</li>
                <li>cTrader Platforms</li>
                <li>Trading APIs</li>
                <li>Liquidity Bridges</li>
                <li>Risk Management</li>
                <li>CRM Systems</li>
                <li>Client Portals</li>
                <li>Custom Integrations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-neutral-400 mb-4 md:mb-0">
              © 2025 Virtus Systems. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-all duration-300 hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-all duration-300 hover:underline">
                Terms of Service
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-all duration-300 hover:underline">
                Security
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-all duration-300 hover:underline">
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