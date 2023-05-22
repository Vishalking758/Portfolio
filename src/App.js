import { useState ,useEffect} from 'react';

import './App.css';
import  Navbar from './Components/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import {HomePage} from './Components/HomePage'
import { Projects } from './Components/Projects';
import { About } from './Components/AboutPage';
import { Contact } from './Components/ContactUs';
import Weather from './Components/Weather';
import RendomeJoke from './Components/RendomJokes'
import RendomeUser from './Components/RendomUser'
import Calculator from './Components/Calculator';
import Clock from './Components/Clock';
function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [weatherBackground, setWeatherBackground] = useState('lightWeather');

useEffect(()=>{
  if (localStorage.theme === 'light') {
    setDarkMode(false)
  } else {
    setDarkMode(true)
  }
  
},[])


  function toggleDarkMode() {
    if (localStorage.theme === 'light') {
      localStorage.theme = 'dark'
    } else {
      localStorage.theme = 'light'
    }
    setDarkMode(prevDarkMode => !prevDarkMode)
    setWeatherBackground(weatherBackground === 'lightWeather' ? false : true);
}

  return (
<BrowserRouter>
<div className={` select-none
   ${darkMode ? "light" : "dark"}`}>
    <div className='h-screen dark:text-white text-gray-800 overflow-y-scroll overflow-x-hidden bg-white dark:bg-gray-800 ease-in duration-300'>
     
      <Navbar darkMode={darkMode} 
    toggleDarkMode={toggleDarkMode} />
      
   
<Routes>
<Route path='/' element={<HomePage/>}/>
<Route path='/projects' element={<Projects/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route path='/weather' element={<Weather Background={weatherBackground}/>}/>
<Route path='/joke' element={<RendomeJoke/>}/>
<Route path='/RendomeUser' element={<RendomeUser/>}/>
<Route path='/calculator' element={<Calculator/>}/>
<Route path='/clock' element={<Clock/>}/>

</Routes>
</div>
</div>
</BrowserRouter>

    
  );
}

export default App;