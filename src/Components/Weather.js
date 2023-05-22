import React, { useEffect, useState } from "react";

export default function Weather(props) {
  const [city, setCity] = useState();
  const [data, setData] = useState(null);
  const [localData, setLocalData] = useState(null);
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [time, setTime] = useState(null);
  const [days, setDays] = useState(null);
  const [error, setError] = useState(null);
  const [localError, setLocalError] = useState(null);
  const [environment, setEnvironment] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      if (lat && lon) {
        const locationUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=e045b569dd462141d2cf6cc28e88c106`;
        const response = await fetch(locationUrl);
        const json = await response.json();
        setLocalData(json);
        setCity(json.name);
        setData(json);
      }
    };

    const successCallback = (position) => {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    };

    const errorCallback = (error) => {
      console.log(error);
      setLocalError(error.message);
    };

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

    function clock() {
      var now = new Date();
      var hour = now.getHours();
      var min = now.getMinutes();
      var sec = now.getSeconds();
      var mid = "PM";

      if (min < 10) {
        min = "0" + min;
      }
      if (hour > 12) {
        hour = hour - 12;
      }
      if (hour === 0) {
        hour = 12;
      }
      if (hour > 12) {
        mid = "AM";
      }

      var dayOfWeek = now.toLocaleString("en-US", { weekday: "long" });
      var month = now.toLocaleString("en-US", { month: "long" });
      var dayOfMonth = now.getDate();
      var year = now.getFullYear();

      setTime(hour + ":" + min + ":" + sec + " " + mid);
      setDays(dayOfWeek + ", " + month + " " + dayOfMonth + ", " + year);
      setTimeout(clock, 1000);
    }

    fetchLocation();
    clock();
  }, [lat, lon]);
  useEffect(() => {
    const fetchData = async () => {
      if (city) {
        try {
          const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=e045b569dd462141d2cf6cc28e88c106`;
          const response = await fetch(url);
          const json = await response.json();
          if (response.ok) {
            setData(json);
            setEnvironment(json.weather[0].main)
            setError(null);
          } else if (response.status === 404) {
            setError(`City ${city} not found`);
            setData(null);
          } else {
            setError(json.message);
            setData(null);
          }
        } catch (error) {
          setError("An error occurred while fetching data.");
          setData(null);
        }
      }
    };
    fetchData();
  }, [city]);



  return (
    <div className="h-screen flex justify-center items-center">
      <div className="grid grid-cols-3 text-gray-700  md:h-4/5 md:w-4/5 rounded-xl">
        <div
          className={`col-span-2 hidden md:block p-2 relative rounded-xl ease-in duration-300 ${
            props.Background ? "ligthWeather" : "darkWeather"
          }`}
        >
          <div className="text-3xl font-black font-serif p-2 absolute top-10 right-10">
           {localError}
            {localData && localData.name} ,
            {localData && localData.sys.country}
          </div>
          <div className="text-[6vw] font-black  absolute bottom-14 right-10">
            {localData && localData.main.temp}°C
          </div>
          <div className="p-4 text-[1.6vw] font-bold absolute bottom-14 left-10">
            <p>{time}</p>
            <p>{days}</p>
          </div>
        </div>
        <div className="col-span-3 mobileWeather md:col-span-1 flex justify-evenly items-center flex-col text-white md:rounded-xl p-2 md:h-full h-screen w-screen md:w-full">
        
            
              <input
                onChange={(event) => setCity(event.target.value)}
                className="w-[100%] h-[50px] focus:outline-sky-300 rounded-lg text-white p-2 text-sm bg-gray-500/[0.5] border focus:outline-0 placeholder:text-white"
                placeholder="City name"
              />
            
            <div className="text-3xl font-black text-center mt-2">{error ? error : city} ,{data && data.sys.country}</div>
            <div className="text-5xl font-black">{data && data.main.temp}°C</div>
            
          
          <div className="text-4xl p-1 m font-black font-mono">
            {environment}
          </div>
          
          <div className="text-2xl p-1 font-medium font-mono ">
            Min : {data && data.main.temp_min}°C
          </div>
          <div className="text-2xl p-1 font-medium font-mono ">
           Max :  {data && data.main.temp_max}°C
          </div>
          <div className=" text-lg font-bold flex flex-col items-center">
            <p>{time}</p>
            <p>{days}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
