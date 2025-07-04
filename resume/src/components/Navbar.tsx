'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import personalInfo from '../utils/personalInfo';
import { useTheme } from './ThemeProvider';
import { downloadResume } from '../utils/resumeUtils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resumeDropdownOpen, setResumeDropdownOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname() || '';
  const isHomePage = pathname === '/';
  const isResumePage = pathname.startsWith('/resume');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.resume-dropdown-container')) {
        setResumeDropdownOpen(false);
      }
    };
    
    // Handle keyboard navigation for accessibility
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && resumeDropdownOpen) {
        setResumeDropdownOpen(false);
      }
    };
    
    window.addEventListener('click', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('click', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [resumeDropdownOpen]); // Added resumeDropdownOpen as a dependency

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
          <Link 
            href={isHomePage ? "#projects" : "/#projects"} 
            className="hover:text-blue-500 transition-colors"
          >
            Projects
          </Link>
          <Link 
            href={isHomePage ? "#skills" : "/#skills"} 
            className="hover:text-blue-500 transition-colors"
          >
            Skills
          </Link>
          <Link 
            href={isHomePage ? "#about" : "/#about"} 
            className="hover:text-blue-500 transition-colors"
          >
            About
          </Link>
          {(personalInfo.resume?.url || personalInfo.resumeUrl) && (
            <div className="relative resume-dropdown-container">
              <button 
                onClick={() => setResumeDropdownOpen(!resumeDropdownOpen)}
                className={`${isResumePage ? 'text-blue-500' : 'hover:text-blue-500'} transition-colors flex items-center gap-1 cursor-pointer`}
                aria-expanded={resumeDropdownOpen}
                aria-haspopup="true"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Resume
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 ml-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" 
                  style={{ transform: resumeDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {resumeDropdownOpen && (
                <div 
                  className="absolute z-10 mt-2 w-60 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="resume-menu-button"
                >
                  <div className="py-1">
                    <Link 
                      href="/resume" 
                      className={`flex items-center gap-2 px-4 py-2 text-sm ${pathname === '/resume' ? 'bg-gray-100 dark:bg-gray-700 text-blue-500' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'} transition-colors`}
                      onClick={() => setResumeDropdownOpen(false)}
                      role="menuitem"
                      aria-current={pathname === '/resume' ? 'page' : undefined}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      View PDF
                    </Link>
                    <Link 
                      href="/resume/dedicated" 
                      className={`flex items-center gap-2 px-4 py-2 text-sm ${pathname === '/resume/dedicated' ? 'bg-gray-100 dark:bg-gray-700 text-blue-500' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'} transition-colors`}
                      onClick={() => setResumeDropdownOpen(false)}
                      role="menuitem"
                      aria-current={pathname === '/resume/dedicated' ? 'page' : undefined}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Interactive Resume
                    </Link>
                    <button 
                      onClick={() => {
                        downloadResume(personalInfo.resume?.url || personalInfo.resumeUrl || '', personalInfo.resume?.fileName);
                        setResumeDropdownOpen(false);
                      }}
                      className="w-full text-left flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                      role="menuitem"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Download PDF
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
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
              href={isHomePage ? "#projects" : "/#projects"} 
              className="hover:text-blue-500 transition-colors py-2 px-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              href={isHomePage ? "#skills" : "/#skills"} 
              className="hover:text-blue-500 transition-colors py-2 px-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Skills
            </Link>
            <Link 
              href={isHomePage ? "#about" : "/#about"} 
              className="hover:text-blue-500 transition-colors py-2 px-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            {(personalInfo.resume?.url || personalInfo.resumeUrl) && (
              <>
                <div className="py-2 px-4 mb-1">
                  <span className={`font-medium ${isResumePage ? 'text-blue-500' : 'text-gray-800 dark:text-gray-200'}`}>Resume Options:</span>
                </div>
                <Link 
                  href="/resume"
                  className={`ml-4 pl-4 border-l-2 ${pathname === '/resume' ? 'text-blue-500 bg-blue-50 dark:bg-blue-900/20' : 'hover:text-blue-500'} border-blue-500 dark:border-blue-400 transition-colors py-2 px-4 flex items-center gap-2`}
                  onClick={() => setMobileMenuOpen(false)}
                  role="menuitem"
                  aria-label="View Resume PDF"
                  aria-current={pathname === '/resume' ? 'page' : undefined}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  View PDF
                </Link>
                <Link 
                  href="/resume/dedicated"
                  className={`ml-4 pl-4 border-l-2 ${pathname === '/resume/dedicated' ? 'text-blue-500 bg-blue-50 dark:bg-blue-900/20' : 'hover:text-blue-500'} border-blue-500 dark:border-blue-400 transition-colors py-2 px-4 flex items-center gap-2`}
                  onClick={() => setMobileMenuOpen(false)}
                  role="menuitem"
                  aria-label="View Interactive Resume"
                  aria-current={pathname === '/resume/dedicated' ? 'page' : undefined}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Interactive Resume
                </Link>
                <button 
                  onClick={() => {
                    downloadResume(personalInfo.resume?.url || personalInfo.resumeUrl || '', personalInfo.resume?.fileName);
                    setMobileMenuOpen(false);
                  }}
                  className="ml-4 pl-4 border-l-2 border-blue-500 dark:border-blue-400 hover:text-blue-500 transition-colors py-2 px-4 flex items-center gap-2 w-full text-left focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                  role="menuitem"
                  aria-label="Download Resume PDF"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download PDF
                </button>
              </>
            )}
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