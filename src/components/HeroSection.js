
import LocationIcon from "./LocationIcon";



const HeroSection = () => {
    return(
        <div className="w-full h-screen relative">
        <div class="w-full h-full xl:px-16 xs:px-8 flex gap-4 justify-center items-center">
        <div class="w-full m-10">
        <h1 class="sm:text-5xl font-bold xs:text-md dark:text-gray-900">Hello, I'm Sofia
                </h1>
   
                <p className="text-justify mt-4 sm:text-lg xs:text-md capitalize dark:text-gray-600">I'm a UX Designer and Web Developer (React.js & Node.js) with a focus on creating exceptional digital experiences that are user-centric, accessible, usable, visually appealing, and responsive. I have been  designing web and android applications for over a year and developing web applications for over a year now, I have a deep passion for designing and researching about user psychology.</p>
                <button className="p-2 px-6 mt-6 bg-gray-900 text-white rounded-full">Hire Me</button>
               <div className="mt-2 stroke-gray-600 py-5 w-10 h-20 flex ">  
                <LocationIcon/> 
                   </div>
                 

               <div className="mt-5 ">
               <button className="flex space-x-5">
                {/* github icon */}
                <a href="https://github.com/imsofia01">
               <svg href="/" className="stroke-gray-500 w-10 h-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><g fill="#181616">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"/>
                <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"/>
                </g>
               </svg>
               </a>
               {/* facebook icon */}
               <a href="https://www.facebook.com/imsofiabocalig/">
               <svg className="stroke-gray-500 w-10 h-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
               <rect fill="#3d5a98" x="4.83" y="4.83" width="118.35" height="118.35" rx="6.53" ry="6.53"/>
               <path fill="#fff" d="M86.48 123.17V77.34h15.38l2.3-17.86H86.48v-11.4c0-5.17 1.44-8.7 8.85-8.7h9.46v-16A126.56 126.56 0 0091 22.7c-13.62 0-23 8.3-23 23.61v13.17H52.62v17.86H68v45.83z"/>
               </svg>    
               </a>           {/* figma icon */}
               <a href="https://www.figma.com/files/team/1319099158493557158/drafts?fuid=1319099156263688117">
               <svg className="stroke-gray-500 w-10 h-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
               <path fill="#0acf83" d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0"/>
               <path fill="#a259ff" d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0"/>
               <path fill="#f24e1e" d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0"/>
               <path fill="#ff7262" d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"/>
               <path fill="#1abcfe" d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0"/>
               </svg>
               </a>
               </button>
               </div>
        </div>
        <div className=" m-16 md:-mt-10 xl:max-w-[55%] md:max-w-[30%] h-fit hidden md:block">
                <img className="rounded-lg mr-60 w-80 h-1/4 md:inset-10" src="/assets/Picture.jpg" alt="My Pic" />
            </div>
        </div>
        </div>
    );
}

export default HeroSection