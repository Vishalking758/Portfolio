import React from "react";
import ProfileImg from "../files/profile-m.webp";
import { Link } from "react-router-dom";
import Resume from '../files/Resume.pdf'

export function HomePage() {
  return (
    <>
    
      <div
        className="h-[88vh]  text-4xl gap-4 grid md:grid-cols-4 place-content-center mt-5 md:mt-0"
          
      >
        <div className="flex justify-center items-center col-span-2 flex-col">
          <div className="flex justify-center w-full flex-col items-center ">
            <div className=" flex items-end ">
              <h1 className="font-bold text-xl  md:text-2xl font-mono uppercase">
                Hello
              </h1>
              <hr className="sm:w-64 w-28 text-center h-[2px] ring-sky-200 mb-2 bg-black" />
            </div>
            <p className="font-bold uppercase text-center text-base sm:text-3xl mt-3">
              i am vishal sharma
            </p>
            <p className="font-bold capitalize text-center text-base sm:text-xl   mb-6">
              frontend web app devaloper
            </p>
            <div className="w-full flex justify-center gap-2 items-center mb-4">
              <button
                className="sm:text-lg text-sm font-medium px-2 rounded-lg dark:bg-sky-900 bg-sky-200/[0.5] border-4 border-double border-slate-700 hover:scale-105 ease-in duration-300 dark:border-white"
                onClick={() =>
                  (window.location =
                    "mailto:Vishalking758@gmail.com?subject=")
                }
              >
              Send Mail
              </button>
             
             
              <Link
               to={Resume} download="Resume-Vishal-Sharma"
               rel="noreferrer" target="_blank"
                className="sm:text-lg text-sm font-medium px-2 rounded-lg border-slate-700 bg-sky-200/[0.5] dark:bg-sky-900 border-4 border-double hover:scale-105 ease-in duration-300 dark:border-white"
              >
              Download CV
              </Link>
            </div>
            <button
                className="sm:text-lg text-sm font-medium px-2 rounded-lg border-slate-700 bg-sky-200/[0.5] dark:bg-sky-900 border-4 border-double hover:scale-105 ease-in duration-300 dark:border-white"
                onClick={() =>
                  (window.location =
                    "https://github.com/Vishalking758?tab=repositories")
                }
              >
                My all projects on Github
              </button>
          </div>
        </div>
        
        <div className="flex justify-center col-span-2 items-center">
          <div className="shadow-base shadow-gray-900/50 dark:shadow-white/50 w-[80%] sm:w-[60%] md:w-[80%] ">
            <img
            src={ProfileImg}
              alt="profile"
            
              className=" rounded-lg w-[100%]"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}

