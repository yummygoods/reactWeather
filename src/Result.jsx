import "./result.css"
import { useState } from "react";

export default function Result({location, current }){


  console.log(location, current);

  console.log("props.location:", props.current);
return(
<section>
<div id="weather">
    <h3>{props.location?.name ? props.location.name : ''}</h3>
    <h3>{props.current?.temp_f ? props.current.temp_f : ''}</h3>
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