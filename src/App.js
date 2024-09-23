import React, { useEffect, useState } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'; // Import react-scroll
import './App.css';
import './index.css';
import DownloadButton from './components/DownloadButton';
import DarkMode from './components/DarkMode';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';


function App() {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollPosition > windowHeight * 0.1) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  

  return (
    <>
      <header className="dark:bg-gray-900 hover:shadow-slate-400 bg-white p-5 flex justify-between items-center shadow-md">
        <div className="text-2xl font-bold text-gray-900 dark:text-white">
          <a href="/" className="flex items-center" onClick={() => scroll.scrollToTop()}>
            <span className="text-lg mr-2"> SOFIA </span>
          </a>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button
            className="text-gray-900 p-2 rounded-md focus:outline-none dark:text-gray-500"
            onClick={handleMenuToggle}
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Menu Items */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } dark:bg-gray-900 md:flex md:items-center md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent md:p-0 p-5 md:shadow-none shadow-lg z-10`}
        >
          <nav>
            <ul className="md:flex items-center text-base text-gray-800 dark:text-white">
              <li>
                <ScrollLink
                  className="md:p-4 py-2 block cursor-pointer"
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70}
                >
                  About
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  className="md:p-4 py-2 block cursor-pointer"
                  to="skills"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70}
                >
                  Skills
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  className="md:p-4 py-2 block cursor-pointer"
                  to="education"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70}
                >
                  Education
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  className="md:p-4 py-2 block cursor-pointer"
                  to="contact"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70}
                >
                  Contact
                </ScrollLink>
              </li>
              <li className="flex items-center justify-between py-2 md:py-0 md:px-4">
                
              </li>
              <li>
                <DownloadButton className="bg-gray-900 text-white rounded-lg px-5 py-2 text-sm">
                  Download CV
                </DownloadButton>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Sections with corresponding IDs */}
      <HeroSection />
      <div id="about">
        <About />
      </div>
      <div id="education">
        <Education/>
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="contact">
        {/* Add Contact section here */}
      </div>
      <Footer/>
      
    </>
  );
}

export default App;
