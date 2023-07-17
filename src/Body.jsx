import "./body.css"
import Form from "./Form"
import {useState} from "react"

export default function Body() {

  // const [shouldShowForm, setShouldShowForm] = useState(true)

	// console.log(shouldShowForm)


  return(
    <main>
      <div id="container">
				<h3 className="greeting">what's the weather supposed to be like today?</h3>
				<span id="unicorn" className="emoji">🦄</span>
      <Form />
        {/* {shouldShowForm ? <Form />: <h1>whatever</h1>}  */}
       
</div>
    </main>
  )
}