import { useEffect, useState } from "react";

export default function RendomeJoke() {
  const [joke, setJoke] = useState();

  const fetchApi = async (setJoke) => {
	const url = `https://hindi-jokes-api.onrender.com/jokes?api_key=64067fa4f55a924d3e8b99f9d19a`;
	const response = await fetch(url);
	const responsejson = await response.json();
	setJoke(responsejson.jokeContent);
  };
  
  useEffect(() => {
	fetchApi(setJoke);
  }, []);
  
  function changeJoke() {
	fetchApi(setJoke);
  }

  return (
    <div className="h-screen font-mono font-bold flex justify-center items-center">
      <div className="w-96 flex flex-col justify-around ring-4 items-center border rounded-2xl p-3 h-48">
        <h1>{joke}</h1>

        <button onClick={changeJoke} className="w-48 border rounded-2xl ring-8">
          change
        </button>
      </div>
    </div>
  );
}
