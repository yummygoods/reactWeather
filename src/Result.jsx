import "./result.css"
// import { useState } from "react";

export default function Result(props){



return(
<section>
<div id="weather">
    <h3>{props.locationName ? props.locationName : ''}</h3>
    <h3>{props.currentWeather?.temp_f ? props.currentWeather.temp_f : ''}</h3>
    <h3>{props.currentWeather?.condition.text ? props.currentWeather.condition.text : ''}</h3>
  </div>
<div id="astroDiv">


<h3>{props.astroData?.sunrise ? props.astroData : ''}</h3>
{astroData.sunrise}
{astroData.sunset}



</div>
</section>

)
}