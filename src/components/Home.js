import React from "react";
import DownloadButton from "./DownloadButton";


const Home = ({isScrolled}) => {

return (
<header class="lg:px-16 px-4 bg-white flex flex-wrap items-center py-4 shadow-md">
    <div class="flex-1 flex justify-between items-center">
        <a href="/" class="text-h2 font-bold text-gray-900">SOFIA</a>
    </div>

  
    <input class="hidden" type="checkbox"  />

    <div class="hidden md:flex md:items-center md:w-auto w-full">
        <nav>
            <ul class="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                <li><a class="md:p-4 py-3 px-0 block">About</a></li>
                <li><a class="md:p-4 py-3 px-0 block" href="/">Education</a></li>
                <li><a class="md:p-4 py-3 px-0 block" href="/">Contact</a></li>
                <button className="md:p-4 py-3 px-0 block" type="button" class="text-gray-600 inline-flex items-center justify-center hover:bg-gray-100 w-14 h-10  focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5 ">
        
        <svg id="theme-toggle-light-icon" class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z"></path>
        </svg>
      </button>
                <li><DownloadButton/></li>
            </ul>
        </nav>
    </div>
</header>
);
};

export default Home;