import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";
export default function Navbar(props) {
    const [navbar, setNavbar] = useState(false);
  return (


<>

<nav className='md:grid md:grid-cols-6 sticky top-0 bg-white dark:bg-gray-800 dark:text-white ease-in duration-500 shadow-lg shadow-cyan-500/10'>

<button aria-label="Toggle Menu" 
className='md:hidden p-2 mx-4 fixed top-1 right-1 z-[5000] ease-in duration-75' 
onClick={() => setNavbar(!navbar)}>{navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                            
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}</button>
<div className='md:col-span-3 flex justify-between  w-screen bg-white dark:bg-gray-800'>
<h2 className="text-2xl p-2 mx-4 font-bold">Portfolio</h2>


</div>
<div className={`md:col-span-3 ease-in-out duration-500 md:duration-0 fixed top-0 flex md:h-full h-screen md:w-full w-screen bg-white dark:bg-gray-800 md:static md:flex flex-col md:flex-row justify-evenly md:justify-around items-center ${
    navbar ? "left-0 " : "left-full"
}`}>
<Link className="hover:text-blue-600 font-bold" to='/' onClick={() => setNavbar(!navbar)}>Home</Link>
<Link className="hover:text-blue-600 font-bold" to="/projects" onClick={() => setNavbar(!navbar)}>Projects</Link>
<Link className="hover:text-blue-600 font-bold" to='/about' onClick={() => setNavbar(!navbar)}>About</Link>
<Link className="hover:text-blue-600 font-bold" to="contact" onClick={() => setNavbar(!navbar)}>Contact US</Link>
<div
      onClick={props.toggleDarkMode}
      className={`cursor-pointer w-[2.9rem] order-first md:order-last h-5 text-black dark:text-white rounded-full relative px-1.5 border-double border border-gray-900 dark:border-white shadow-lg shadow-gray-900/50 dark:shadow-white/50 flex items-center${props.darkMode ? ' justify-end' : ''}`}
    >
      <div className={`w-4 h-4 rounded-full absolute transform duration-75 ease-out bg-gray-800 dark:bg-white dark:text-white left-0.5 ${props.darkMode ? 'translate-x-0' :  'translate-x-6'}`} />
      {props.darkMode ? (
         <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-black dark:text-white" viewBox="0 0 20 20" fill="currentColor">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 " viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
        </svg>
      )}
    </div>
</div>



</nav>
</>


  )
}
