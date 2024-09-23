import React from 'react';
import DarkMode from './DarkMode';

const Education = () => {
  return (
    <div className="p-10">
      <div className="text-center mb-10">
        <span className="bg-gray-200 px-3 py-1 text-sm text-gray-600 rounded-full">Education</span>
        <h2 className="text-2xl font-semibold mt-4">Here is the schools I attended:</h2>
      </div>

      {/* ELEMENTARY*/}
      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center ">
        <div className="flex flex-col md:flex-row items-center space-x-10">
          {/* Company Logo */}
          <div className="mb-4 md:mb-0 md:mr-4">
            <img
              src="assets/TNCES.jpg" // Replace with actual logo URL
              alt="Wyvate logo"
              className="w-32 h-32 rounded-lg"
            />
          </div>

          {/* Experience Info */}
          <div className="text-lg text-justify md:text-left mb-5">
          <h1 className="text-[1.3rem] mt-2 font-bold text-gray-700 ">Elementary</h1>
            <h3 className="text-lg mt-2 font-bold text-gray-700 ">Tabaco North Central School of Tabaco</h3>
            
          </div>
        </div>
        {/* Date */}
        <div className="text-right mt-4 md:mt-0">
          <p className="text-gray-700  font-bold">March 2013</p>
        </div>
      </div>

       {/* HIGH SCHOOL */}
       <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center mt-10 ">
        <div className="flex flex-col md:flex-row items-center space-x-10">
          {/* Company Logo */}
          <div className="mb-4 md:mb-0 md:mr-4">
            <img
              src="assets/CCS.jpg" // Replace with actual logo URL
              alt="Wyvate logo"
              className="w-32 h-32 rounded-lg"
            />
          </div>

          {/* Experience Info */}
          <div className="text-lg text-justify md:text-left">
          <h1 className="text-[1.3rem] mt-2 font-bold text-gray-700 ">Secondary / Senior High School</h1>
            <h3 className="text-lg mt-2 font-bold text-gray-700 ">Catholic Central School </h3>
            <p className="text-gray-700  font-semibold">formerly: St. Louise de Marillac School of Tabaco</p>
            
          </div>
        </div>
        {/* Date */}
        <div className="text-right md:mt-0">
          <p className="text-gray-700 text-center font-bold">April 2018</p>
        </div>
      </div>


       {/* College */}
       <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center mt-10">
        <div className="flex flex-col md:flex-row items-center space-x-10">
          {/* Company Logo */}
          <div className="mb-4 md:mb-0 md:mr-4">
            <img
              src="assets/Divine.jpg" // Replace with actual logo URL
              alt="Wyvate logo"
              className="w-32 h-32 rounded-lg"
            />
          </div>

          {/* Experience Info */}
          <div className="text-lg text-justify md:text-left">
          <h1 className="text-[1.3rem] mt-2 font-bold text-gray-700">College</h1>
            <h3 className="text-lg mt-2 font-bold text-gray-700 ">Divine Word College of Legazpi</h3>
            <p className="text-gray-700 ">Bachelor of Science in Information Technology</p>
            
            
          </div>
        </div>
        {/* Date */}
        <div className="text-right mt-4 md:mt-0">
          <p className="text-gray-700 font-bold">June 2024</p>
        </div>
      </div>

    </div>

    



    

    

    
  );
};

export default Education;
