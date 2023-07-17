import './footer.css';
// import {useState} from "react"

export default function Footer(props) {
console.log(props)
	return (
		<footer>
     
      <div id="colorBlock" ></div>
      <div id='flowerContainer'>
			<span className="emoji">🌼</span>
			<div className="animationContainer">
		
					<span onClick={()=> {props.blah} } id="twistFlower" className="emoji">
						🌼
					</span>
				
			</div>

			<span className="emoji">🌼</span>
      </div>
		</footer>
	);
}
