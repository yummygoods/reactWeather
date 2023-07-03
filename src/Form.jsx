import './form.css';
import { useState } from 'react';
import Result from './result.jsx';

export default function Form() {
	const [city, setCity] = useState('');
	// const [shouldShowResult, setShouldShowResult] = useState(false);
	const [weather, setWeather] = useState({ data: '' });

	const handleChange = (e) => {
		setCity(e.target.value);
		return city;
	};

	let url = `https://api.weatherapi.com/v1/current.json?key=d01e96a14a9449a7a6f152442231805&q=${city}&aqi=no`;

	async function fetchWeather() {
		console.log('inside fetch function');
		const response = await fetch(url);
		const currentWeather = await response.json();
		console.log(currentWeather);
		setWeather(currentWeather);
		return weather;
	}

	const handleClick = (e) => {
		console.log('button was pressed');
		e.preventDefault();
		console.log('default was prevented');
		fetchWeather();
		setCity('');
	};

	// console.log(weather.location?.name);
	console.log(weather);
	return (
		<form id="cityForm">
			<label htmlFor="city">enter your city or zip code</label>
			<input
				name="city"
				id="city"
				type="text"
				onChange={handleChange}
				value={city}
			/>
			<button type="submit" onClick={handleClick}>
				submit
			</button>
			<Result weather={weather.currentWeather && {weather}}/>
			{/* {shouldShowResult && <Result 
			location={weather.location} 
			current={weather.current} 
			
			/>} */}
		</form>
	);
}
