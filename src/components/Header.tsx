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
    <header className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-slate-700/50 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center group">
            <div className="p-2 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div className="ml-3">
              <div className="text-xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">Virtus Systems</div>
              <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">FinTech Excellence</div>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-2">
            <Link
              to="/"
              className={`font-semibold text-sm transition-all duration-300 px-4 py-2.5 rounded-xl ${
                isActive('/')
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              Home
            </Link>
            <Link
              to="/hosting"
              className={`font-semibold text-sm transition-all duration-300 px-4 py-2.5 rounded-xl ${
                isActive('/hosting')
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              Hosting
            </Link>
            
            {/* Virtus Ecosystem Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsEcosystemOpen(!isEcosystemOpen)}
                className={`font-semibold text-sm transition-all duration-300 px-4 py-2.5 rounded-xl flex items-center ${
                  isEcosystemActive()
                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
              >
                Ecosystem
                <ChevronDown className={`h-4 w-4 ml-1 transition-transform ${isEcosystemOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isEcosystemOpen && (
                <div className="absolute top-full left-0 mt-2 w-52 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-gray-200 dark:border-slate-700 py-2 z-50 animate-fade-in">
                  <Link
                    to="/platform-admin"
                    onClick={() => setIsEcosystemOpen(false)}
                    className={`block px-4 py-3 mx-2 text-sm font-semibold transition-all duration-200 rounded-xl ${
                      isActive('/platform-admin')
                        ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 hover:text-primary-600 dark:hover:text-primary-400'
                    }`}
                  >
                    Virtus Services
                  </Link>
                  <Link
                    to="/virtus-toolbox"
                    onClick={() => setIsEcosystemOpen(false)}
                    className={`block px-4 py-3 mx-2 text-sm font-semibold transition-all duration-200 rounded-xl ${
                      isActive('/virtus-toolbox')
                        ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 hover:text-primary-600 dark:hover:text-primary-400'
                    }`}
                  >
                    Virtus Toolbox
                  </Link>
                </div>
              )}
            </div>
            
            <Link
              to="/development"
              className={`font-semibold text-sm transition-all duration-300 px-4 py-2.5 rounded-xl ${
                isActive('/development')
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              Development
            </Link>
            <Link
              to="/contact"
              className={`font-semibold text-sm transition-all duration-300 px-4 py-2.5 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40`}
            >
              Contact
            </Link>
            
            <button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-xl bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-all duration-300 hover:scale-110"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-amber-500" />
              ) : (
                <Moon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              )}
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2.5 rounded-xl bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
            >
              {isMenuOpen ? <X className="h-5 w-5 text-gray-700 dark:text-gray-300" /> : <Menu className="h-5 w-5 text-gray-700 dark:text-gray-300" />}
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-gray-200 dark:border-slate-700">
          <div className="px-4 py-4 space-y-2">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={`block w-full text-left px-4 py-3 font-semibold rounded-xl transition-colors ${
                isActive('/')
                  ? 'text-white bg-primary-500 shadow-lg shadow-primary-500/30'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800'
              }`}
            >
              Home
            </Link>
            <Link
              to="/hosting"
              onClick={() => setIsMenuOpen(false)}
              className={`block w-full text-left px-4 py-3 font-semibold rounded-xl transition-colors ${
                isActive('/hosting')
                  ? 'text-white bg-primary-500 shadow-lg shadow-primary-500/30'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800'
              }`}
            >
              Hosting
            </Link>
            
            <div>
              <button
                onClick={() => setIsEcosystemOpen(!isEcosystemOpen)}
                className={`flex items-center justify-between w-full text-left px-4 py-3 font-semibold rounded-xl transition-colors ${
                  isEcosystemActive()
                    ? 'text-white bg-primary-500 shadow-lg shadow-primary-500/30'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800'
                }`}
              >
                Ecosystem
                <ChevronDown className={`h-4 w-4 transition-transform ${isEcosystemOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isEcosystemOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link
                    to="/platform-admin"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsEcosystemOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2.5 text-sm font-semibold rounded-xl transition-colors ${
                      isActive('/platform-admin')
                        ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/50'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800'
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
                    className={`block w-full text-left px-4 py-2.5 text-sm font-semibold rounded-xl transition-colors ${
                      isActive('/virtus-toolbox')
                        ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/50'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800'
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
              className={`block w-full text-left px-4 py-3 font-semibold rounded-xl transition-colors ${
                isActive('/development')
                  ? 'text-white bg-primary-500 shadow-lg shadow-primary-500/30'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800'
              }`}
            >
              Development
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-left px-4 py-3 font-semibold rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/30"
            >
              Contact
            </Link>
            
            <button
              onClick={toggleDarkMode}
              className="flex items-center w-full text-left px-4 py-3 font-semibold rounded-xl bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors text-gray-700 dark:text-gray-300"
            >
              {isDarkMode ? (
                <>
                  <Sun className="h-5 w-5 text-amber-500 mr-3" />
                  Light Mode
                </>
              ) : (
                <>
                  <Moon className="h-5 w-5 text-gray-600 mr-3" />
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