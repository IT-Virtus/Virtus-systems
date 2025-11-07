import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Menu, X, ChevronDown, Moon, Sun } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEcosystemOpen, setIsEcosystemOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => location.pathname === path;
  const isEcosystemActive = () => {
    return ['/virtus-ecosystem', '/platform-admin', '/virtus-toolbox'].includes(location.pathname);
  };

  // Initialize dark mode from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsEcosystemOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed top-0 w-full bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 z-50 shadow-soft">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <Shield className="h-8 w-8 text-primary-600 dark:text-primary-400 mr-3" />
            <div>
              <div className="text-xl font-bold">Virtus Systems</div>
              <div className="text-xs text-neutral-600 dark:text-neutral-400">Hosting • Platform Admin • Software</div>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className={`font-medium transition-all duration-300 px-3 py-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:scale-105 ${
                isActive('/') 
                  ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950' 
                  : 'text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              Home
            </Link>
            <Link
              to="/hosting"
              className={`font-medium transition-all duration-300 px-3 py-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:scale-105 ${
                isActive('/hosting') 
                  ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950' 
                  : 'text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              Hosting
            </Link>
            
            {/* Virtus Ecosystem Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsEcosystemOpen(!isEcosystemOpen)}
                className={`font-medium transition-all duration-300 px-3 py-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:scale-105 flex items-center ${
                  isEcosystemActive() 
                    ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950' 
                    : 'text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
              >
                Virtus Ecosystem
                <ChevronDown className={`h-4 w-4 ml-1 transition-transform ${isEcosystemOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isEcosystemOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white dark:bg-neutral-800 rounded-lg shadow-large border border-neutral-200 dark:border-neutral-700 py-2 z-50 animate-fade-in">
                  <Link
                    to="/platform-admin"
                    onClick={() => setIsEcosystemOpen(false)}
                    className={`block px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-neutral-100 dark:hover:bg-neutral-700 hover:translate-x-1 ${
                      isActive('/platform-admin')
                        ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950'
                        : 'text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400'
                    }`}
                  >
                    Virtus Services
                  </Link>
                  <Link
                    to="/virtus-toolbox"
                    onClick={() => setIsEcosystemOpen(false)}
                    className={`block px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-neutral-100 dark:hover:bg-neutral-700 hover:translate-x-1 ${
                      isActive('/virtus-toolbox')
                        ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950'
                        : 'text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400'
                    }`}
                  >
                    Virtus Toolbox
                  </Link>
                </div>
              )}
            </div>
            
            <Link
              to="/development"
              className={`font-medium transition-all duration-300 px-3 py-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:scale-105 ${
                isActive('/development') 
                  ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950' 
                  : 'text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              Software Development
            </Link>
            <Link
              to="/contact"
              className={`font-medium transition-all duration-300 px-3 py-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:scale-105 ${
                isActive('/contact') 
                  ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950' 
                  : 'text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              Contact
            </Link>
            
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all duration-300 hover:scale-110 hover:rotate-12"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />
              )}
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 shadow-soft">
          <div className="px-4 py-3 space-y-1">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={`block w-full text-left px-3 py-2 font-medium rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors ${
                isActive('/') 
                  ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950' 
                  : 'text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              Home
            </Link>
            <Link
              to="/hosting"
              onClick={() => setIsMenuOpen(false)}
              className={`block w-full text-left px-3 py-2 font-medium rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors ${
                isActive('/hosting') 
                  ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950' 
                  : 'text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              Hosting
            </Link>
            
            {/* Mobile Ecosystem Menu */}
            <div>
              <button
                onClick={() => setIsEcosystemOpen(!isEcosystemOpen)}
                className={`flex items-center justify-between w-full text-left px-3 py-2 font-medium rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors ${
                  isEcosystemActive() 
                    ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950' 
                    : 'text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
              >
                Virtus Ecosystem
                <ChevronDown className={`h-4 w-4 transition-transform ${isEcosystemOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isEcosystemOpen && (
                <div className="ml-4 mt-1 space-y-1">
                  <Link
                    to="/platform-admin"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsEcosystemOpen(false);
                    }}
                    className={`block w-full text-left px-3 py-2 text-sm font-medium rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors ${
                      isActive('/platform-admin')
                        ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950'
                        : 'text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400'
                    }`}
                  >
                    Virtus Services
                  </Link>
                  <Link
                    to="/virtus-toolbox"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsEcosystemOpen(false);
                    }}
                    className={`block w-full text-left px-3 py-2 text-sm font-medium rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors ${
                      isActive('/virtus-toolbox')
                        ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950'
                        : 'text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400'
                    }`}
                  >
                    Virtus Toolbox
                  </Link>
                </div>
              )}
            </div>
            
            <Link
              to="/development"
              onClick={() => setIsMenuOpen(false)}
              className={`block w-full text-left px-3 py-2 font-medium rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors ${
                isActive('/development') 
                  ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950' 
                  : 'text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              Software Development
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={`block w-full text-left px-3 py-2 font-medium rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors ${
                isActive('/contact') 
                  ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950' 
                  : 'text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              Contact
            </Link>
            
            {/* Mobile Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="flex items-center w-full text-left px-3 py-2 font-medium rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-neutral-700 dark:text-neutral-300"
            >
              {isDarkMode ? (
                <>
                  <Sun className="h-5 w-5 text-yellow-500 mr-3" />
                  Light Mode
                </>
              ) : (
                <>
                  <Moon className="h-5 w-5 text-neutral-600 mr-3" />
                  Dark Mode
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;