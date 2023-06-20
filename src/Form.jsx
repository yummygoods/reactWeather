import "./form.css"
import { useState, useEffect } from "react"

export default function Form(){

const [city, setCity] = useState("");
const [weather, setWeather] = useState({data: ""});
// const [weather, setWeather] = useState({{location.name}: "", {current.temp_f}:"", {current.condition.text}:""});


const handleChange = (event)=>{
let currentCityVal = event.target.value;
console.log(currentCityVal);
return currentCityVal;
// setCity(currentCityVal);
// return city;
}

// const handleChange = (event)=>{
//   const updatedCity = event.target.value;
// setCity(updatedCity);
// console.log(updatedCity)
// return city;
// }

useEffect(
  function fetchWeatherOnSubmit(){
  async function fetchWeather(city){

    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=d01e96a14a9449a7a6f152442231805&q=${city}&aqi=no`);
  const currentWeather = await response.json();
  setWeather(currentWeather);
  return weather;
  }
  fetchWeather(city);
},
  [city]
);


const handleSubmit = (e) =>{
  console.log("button was pressed")
  e.preventDefault();
  console.log("default was prevented")
  setCity()

 
}

  return(
<form id="cityForm" type="submit" onSubmit={handleSubmit} > 
  <label htmlFor="city">enter your city or zip code</label>
  <input name="city" id="city" type="text"  onChange={handleChange} value={city}  />
  <button>submit</button>
  <div id="weather">

   {/* <h3>{weather.location.name}</h3> 
   <h3>{weather.current.temp_f}</h3>  */}
  </div>
  </form>
  )
  }

