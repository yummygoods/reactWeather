import './form.css';
import { useState, useEffect } from 'react';
import useSWR from 'swr';

export default function Form() {
	const [city, setCity] = useState('');
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
		// console.log(weather);
	}

	const handleClick = (e) => {
		console.log('button was pressed');
		e.preventDefault();
		console.log('default was prevented');
		fetchWeather();
		console.log(city);
	}; 

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
			<div id="weather">
        <h3>{weather.location?.name ? weather.location.name : ''}</h3> 
       <h3>{weather.current?.temp_f ? weather.current.temp_f : '' }</h3> 
			</div>
		</form>
	);
}

