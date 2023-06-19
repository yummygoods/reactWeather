import "./form.css"

export default function Form(){
  return(
<form id="cityForm" type="submit"> 
  <label htmlFor="city">enter your city or zip code</label>
  <input id="city" type="text" placeholder="90210"/>
  <button type="submit">submit</button>
  </form>
  )
}

