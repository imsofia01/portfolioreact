import React, { useEffect, useState } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'; // Import react-scroll
import './App.css';
import './index.css';
import DownloadButton from './components/DownloadButton';
import DarkMode from './components/DarkMode';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Skills from './components/Skills';

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
                  to="work"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70}
                >
                  Work
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
                <button className="text-gray-600 inline-flex items-center justify-center hover:bg-gray-100 w-14 h-10 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5 ml-2">
                  <DarkMode />
                  <svg
                    id="theme-toggle-light-icon"
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z"></path>
                  </svg>
                </button>
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
      <div id="work">
        <Skills />
      </div>
      <div id="contact">
        {/* Add Contact section here */}
      </div>
    </>
  );
}

export default App;
