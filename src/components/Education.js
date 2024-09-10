import React from 'react';
import DarkMode from './DarkMode';

const Education = () => {
  return (
    <div className="bg-gray-100 p-10 dark:bg-gray-800">
      <div className="text-center mb-10">
        <span className="bg-gray-200 px-3 py-1 text-sm text-gray-600 rounded-full">Experience</span>
        <h2 className="text-2xl font-semibold mt-4">Here is a quick summary of my most recent experiences:</h2>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 flex items-center justify-between space-x-6 max-w-4xl mx-auto">
      {/* Left side: Logo and Company name */}
      <div className="flex items-center space-x-4">
        <img
          src="https://your-logo-url.com/wyvate-logo.png" // Replace with actual logo URL
          alt="Wyvate logo"
          className="w-16 h-16 object-contain"
        />
        <div>
          <h3 className="text-lg font-semibold">Wyvate</h3>
          <p className="text-sm font-bold text-gray-800">UX Designer</p>
        </div>
      </div>

      {/* Right side: Description and Date */}
      <div className="flex flex-col justify-between">
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Supported Design the Wyvate Admin and Vendor Panel.</li>
          <li>Supported making the QR and Tape Design for the brand.</li>
        </ul>
        <p className="text-gray-500 text-sm">Sept 2023 - Present</p>
      </div>
    </div>

        {/* Sense Original Experience */}
        <div className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center">
          <div className="flex items-center space-x-4">
            {/* Company Logo */}
            <div className="bg-black text-white p-3 rounded-lg">
              <span className="text-lg font-semibold">S</span>
            </div>
            {/* Experience Info */}
            <div>
              <h3 className="text-lg font-bold">UX Designer</h3>
              <p className="text-gray-600">Designed Website for Sense Original.</p>
              <p className="text-gray-600">Designed a SO|PSIT application that was a collaboration with PSIT College.</p>
              <p className="text-gray-600">Designed the CRM Panel, along with its user flow, wireframing, and prototyping.</p>
            </div>
          </div>
          {/* Date */}
          <div className="text-right">
            <p className="text-gray-500">April 2023 - Oct 2024</p>
          </div>
        </div>
      </div>
    
  );
};

export default Education;
