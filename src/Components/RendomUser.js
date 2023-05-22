import React,{useState,useEffect} from 'react';

export default function RendomeUser(){

const [fname,setFname] = useState();
const [lname,setLname] = useState();
const [gender,setGender] = useState();
const [city,setCity]=useState();
const [profile,setProfile] = useState();
const [country,setCountry]=useState();



useEffect(()=>{
fetchApi();
},[])

const fetchApi = async()=>{
const url = 'https://randomuser.me/api/'
const response = await fetch(url);
if(response.ok){
    const data= await response.json();
setFname(data.results[0].name.first);
setLname(data.results[0].name.last);
setGender(data.results[0].gender);
setProfile(data.results[0].picture.large);
setCity(data.results[0].location.city)
setCountry(data.results[0].location.country)
} else{
setFname("data not found");
setLname("data not found");
setGender("data not found");
setProfile("data not found");
setCity("data not found");
setCountry("data not found");
   };
}

function changeUser(){
fetchApi();
};




return(
<>
<div className='h-screen flex justify-center items-center'>
<div className=' h-min w-min  flex flex-col font-mono font-bold rounded-lg ring justify-center items-center'>
<img className='rounded-full m-5 ring-8 ' src={profile} alt="profile"/>
<p className='mt-3 text-center capitalize'>Name : {fname} {lname}</p>
<p className='mt-3 text-center capitalize'>Gender : {gender}</p>
<p className='mt-3 text-center capitalize'>City : {city}</p>
<p className='mt-3 text-center capitalize'>Country : {country}</p>

<button className='border-[4px] border-sky-500 w-48 m-5' onClick={changeUser}>Next</button>
</div>
</div>


</>
 );

}


