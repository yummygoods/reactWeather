import "./form.css"

export default function Form(){


  return(
<form id="cityForm" type="submit"> 
  <label htmlFor="city">enter your city or zip code</label>
  <input id="city" type="text" placeholder="90210"/>
  <button type="submit">submit</button>
  <div id="weather"></div>
  </form>
  )
  }





// 




// const weatherDiv = document.getElementById("weather");
// const cityForm = document.getElementById("cityForm");const getCurrentData = async function (city) 
//   const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=d01e96a14a9449a7a6f152442231805&q=${city}&aqi=no`);
//   const currentData = await response.json();
//   return currentData;
// }

//   const displayCurrentData = async function (city) {
//     const currentData = await getCurrentData(city);
//     console.log(currentData)
  
//     weatherDiv.innerHTML = 
//       `<h3>${currentData.location.name} weather:<br>${currentData.current.temp_f} + ${currentData.current.condition.text}</h3>`
  
//   }

//   cityForm.addEventListener("submit", function (event) {
//     event.preventDefault();
//     const userCity = document.getElementById("city").value;
//     displayCurrentData(userCity);
//     cityForm.reset();
//   });

