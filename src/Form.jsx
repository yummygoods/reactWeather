import "./form.css"
import { useState } from "react"
import { useEffect } from "react";

export default function Form(){

const [city, setCity] = useState("");
const [result, setResult] = useState("");

const handleChange = (event)=>{
  const updatedCity = event.target.value;
  setCity(updatedCity);
  console.log(city);
}

useEffect((city)=> {
  fetch(`https://api.weatherapi.com/v1/current.json?key=d01e96a14a9449a7a6f152442231805&q=02668&aqi=no`)
  .then(response => response.json())
     .then(currentData => {
      setResult(currentData);
     })
    return result}, [city, result]);

function  showWeather() {
 return(
    <div id="weather">
    <h3>{result.location.name} 
    <br/>
    {result.current.temp_f} {result.current.condition.text}
    </h3>
    </div>);
}
  
  return(
<form id="cityForm" type="submit"> 
  <label htmlFor="city">enter your city or zip code</label>
  <input name="city" id="city" type="text"  value={city} onChange={handleChange} />
  <button onSubmit={showWeather}  type="submit">submit</button>

  </form>
  )
  }