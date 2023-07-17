import "./result.css"
// import { useState } from "react";

export default function Result(props){
;

return(
<section>
<div id="weather">
    <h3>{props.locationName ? props.locationName : ''}</h3>
    <h3>{props.currentWeather?.temp_f ? `
    currently: 
    ${props.currentWeather.temp_f} ` : ''}</h3>
    <h3> {props.currentWeather?.condition.text ? `and ${props.currentWeather.condition.text}` : ''}</h3>
  </div>
<div id="astro">

{/* <h3>sunrise: {props.sunrise}</h3>
<h3>sunset: {props.sunset}</h3> */}

</div>
</section>

)
}