import "./form.css"
import { useState } from "react"
import { useEffect } from "react";

export default function Form(){

const [city, setCity] = useState("");
// const [result, setResult] = useState("");



useEffect(()=> {
  fetch(`https://api.weatherapi.com/v1/current.json?key=d01e96a14a9449a7a6f152442231805&q=${city}&aqi=no`)
  .then(response => response.json())
     .then(data => {
 console.log(data)
     });
  }, [city]);

  const handleChange = (event)=>{
    const updatedCity = event.target.value;
    setCity(updatedCity);
    console.log("changed!" + city);
  }




  return(
<form id="cityForm" type="submit"> 
  <label htmlFor="city">enter your city or zip code</label>
  <input name="city" id="city" type="text"  onChange={handleChange} value={city}  />
  <button type="submit">submit</button>
  <div id="weather">
   <h3>
 </h3> 
  </div>
  </form>
  )
  }

  // {currentData.location.name} 
  // <br/>
  //  {currentData.current.temp_f} {currentData.current.condition.text}

