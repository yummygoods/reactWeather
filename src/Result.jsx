import "./result.css"
// import { useState } from "react";

export default function Result(props){

return(
<section>
<div id="weather">
    <h3 class="result">{props.locationName ? props.locationName : ''}</h3>
    <h3 class="result">{props.currentWeather?.temp_f ? ` currently:${props.currentWeather.temp_f} `  : '' }
    </h3>
    <h3 class="result"> {props.currentWeather?.condition.text ? `and ${props.currentWeather.condition.text}` : ''}</h3>
  </div>
<div id="astro">
<h3 class="result">{props.astro?.sunrise ? `sunrise ${props.astro.sunrise}`: ''}</h3>
<h3 class="result">{props.astro?.sunset ? `sunset ${props.astro.sunset}`: ''}</h3>
</div>
</section>

)
}