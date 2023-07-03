import "./result.css"
// import { useState } from "react";

export default function Result(props){



return(
<section>
<div id="weather">
    <h3>{props.locationName ? props.locationName : ''}</h3>
    <h3>{props.currentWeather?.temp_f ? props.currentWeather.temp_f : ''}</h3>
  </div>
<div id="astroDiv">
  {/* <!-- populates with data -->

  <!-- populates with data -->

  <!-- populates with data -->

  <!-- populates with data --> */}
</div>
</section>

)
}