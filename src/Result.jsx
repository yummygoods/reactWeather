import './result.css';
// import { useState } from "react";

export default function Result(props) {
	return (
		<section id="result">
			<h3>{props.locationName ? props.locationName : ''}</h3>
			<h3>{props.currentWeather?.temp_f ? props.currentWeather.temp_f : ''}</h3>
			<h3>
				{props.currentWeather?.condition.text
					? props.currentWeather.condition.text
					: ''}
			</h3>
			<h3>{props.astro?.sunrise ? `sunrise ${props.astro.sunrise}` : ''}</h3>
			<h3>{props.astro?.sunset ? `sunset ${props.astro.sunset}` : ''}</h3>
		</section>
	);
}
