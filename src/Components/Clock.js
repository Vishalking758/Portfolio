import React, { useEffect,useState } from "react";
import "../files/clock.css";
import numbers from "../files/clock.webp";
export default function Clock() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      setSeconds(date.getSeconds());
      setMinutes(date.getMinutes());
      setHours(date.getHours());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const secondsRotate = `rotate(${seconds * 6}deg)`;
  const minutesRotate = `rotate(${minutes * 6}deg)`;
  const hoursRotate = `rotate(${hours * 30 + minutes / 2}deg)`;
  return (
    <>
      <section className="h-screen flex justify-center align-center">
        <div className="h-[50vh] w-[50vh] relative m-auto rounded-full flex justify-center items-center shadow-xl dark:shadow-white/40 shadow-gray-800/80">
          <img src={numbers} alt="clock numbers" className="h-[90%]"/>
          <div className="h-full w-full flex-col flex justify-center items-center absolute" style={{ transform: hoursRotate }}>
            <div className="w-[7px] rounded-xl rounded-b h-[30%] bg-slate-700/90 dark:bg-white/90" ></div>
            <div className="w-2 h-[20%]"></div>
          </div>
          <div className="h-full w-full flex-col flex justify-center items-center absolute"  style={{ transform: minutesRotate }}>
            <div className="h-[40%] w-[5px] rounded-xl bg-slate-700/90 dark:bg-white/90"></div>
            <div className="h-[30%] w-1 "></div>
          </div>
          <div className="h-full w-full flex justify-center absolute" style={{ transform: secondsRotate }}>
            <div className="h-[60%] w-[3px] rounded-xl bg-slate-700/90 dark:bg-white/90"></div>
          </div>
        </div>
      </section>
    </>
  );
}
