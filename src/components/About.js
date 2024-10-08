import React from 'react';

const AboutMe = () => {
  return (
    
    <section className=" flex flex-col md:flex-row items-center p-6 md:p-12"> 
      <div className="md:w-1/3 mb-6 md:mb-0 max-md:mr-24">
      
        <img
          src="/assets/Picture.jpg" 
          alt="Profile"
          className="rounded-lg shadow-lg ml-14 w-96 h-auto :"
        />
      </div>

      <div className="md:w-2/3 md:pl-20 mb-4 text-center md:text-left">
      
      <div className="text-center mb-10">
      <span className="bg-gray-200 px-3 py-1 text-[1.1rem] text-gray-600 rounded-full">About</span>
        <h2 className="text-2xl font-semibold mt-4">To know more about me:</h2>
      </div>
        <p className="text-lg mb-4 text-justify">
          I'm a passionate, self-proclaimed designer who specializes in UX Designing 
          and Web Development (React.js & Node.js). I am very enthusiastic about 
          bringing the technical and visual aspects of digital products to life. 
          User experience, pixel-perfect design, and writing clean, readable, 
          highly performant code matters to me.
        </p>
        <p className="text-lg mb-4 text-justify">
          I have started my journey over a year back as a designer and a web 
          developer in 2023, and since then, I’ve continued to grow and evolve 
          as a designer and a developer, taking on new challenges and learning 
          the latest technologies along the way.
        </p>
        <p className="text-lg mb-4 text-justify">
          I'm trying to learn and evolve every day by taking up new challenges 
          and learning new things on a day-to-day basis. I love learning and creating a valuable user experience for all types 
          of users.
        </p>
        <p className="text-lg mb-4 text-justify">
          I am very much a progressive thinker and enjoy working on products 
          end to end, from ideation all the way to development.
        </p>
        <p className="text-lg mb-4 text-justify">
          Finally, some quick bits about me:
        </p>
        <ul className="list-disc list-inside text-lg text-justify">
          <li>Freelancer</li>
          <li>Front-end developer</li>
          <li>UX Designer</li>
        </ul>
        <p className="text-lg mt-4 text-justify">
          One last thing, I'm available for freelance work, so feel free to 
          reach out and say hello! I promise I don’t bite. 😊
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
