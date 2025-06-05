'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import personalInfo from '../utils/personalInfo';
import { useTheme } from './ThemeProvider';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`glass-navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 shadow-md' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-tight flex items-center gap-2">
          <span className="text-blue-500">{personalInfo.name.split(' ')[0]}</span>
          <span className="hidden sm:inline">{personalInfo.name.split(' ')[1] || ''}</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#projects" className="hover:text-blue-500 transition-colors">
            Projects
          </Link>
          <Link href="#skills" className="hover:text-blue-500 transition-colors">
            Skills
          </Link>
          <Link href="#about" className="hover:text-blue-500 transition-colors">
            About
          </Link>
          <Link href="#contact" className="glass-effect-subtle px-4 py-2 rounded-full hover:bg-blue-500/10 hover:scale-105 transition-all text-blue-500">
            Contact Me
          </Link>
          
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="glass-effect-subtle p-2 rounded-full hover:scale-105 transition-all duration-300"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-blue-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          {/* Theme Toggle Button (Mobile) */}
          <button
            onClick={toggleTheme}
            className="glass-effect-subtle p-2 rounded-lg"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-blue-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
          
          <button
            className="flex flex-col justify-center items-center w-10 h-10 glass-effect-subtle rounded-lg"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className={`w-6 h-0.5 bg-current transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : 'mb-1.5'}`}></div>
            <div className={`w-6 h-0.5 bg-current transition-all ${mobileMenuOpen ? 'opacity-0' : 'mb-1.5'}`}></div>
            <div className={`w-6 h-0.5 bg-current transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-effect-strong absolute top-full left-0 right-0 py-4 px-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link 
              href="#projects" 
              className="hover:text-blue-500 transition-colors py-2 px-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              href="#skills" 
              className="hover:text-blue-500 transition-colors py-2 px-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Skills
            </Link>
            <Link 
              href="#about" 
              className="hover:text-blue-500 transition-colors py-2 px-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="#contact" 
              className="text-blue-500 py-2 px-4 bg-blue-500/10 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Me
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;