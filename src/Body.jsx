import "./body.css"
import Form from "./Form"

export default function Body() {
  return(
    <main>
      <div id="container">
				<h3 className="greeting">what's the weather supposed to be like today?</h3>

				<span id="unicorn" className="emoji">🦄</span>
        <Form />
</div>
    </main>
  )
}