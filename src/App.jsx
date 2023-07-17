import { useState } from 'react'

import './App.css';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';

function App() {
const [shouldShowEasterEgg, setShouldShowEasterEgg] = useState(false);

function handleEgg(){
console.log("testing blah")
}

function toggleForm(){
 console.log("testing toggle")
}

	return (
		<>
			<Header />
			<Body 
     
     toggleForm={toggleForm}
      />
			<Footer    />

			{/* <Footer  shouldShowEasterEgg={}  />  */}
		</>
	);
}

export default App;
