import { useState } from 'react'

import './App.css';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';

function App() {

function blah(){
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
			<Footer  blah={blah}  />
		</>
	);
}

export default App;
