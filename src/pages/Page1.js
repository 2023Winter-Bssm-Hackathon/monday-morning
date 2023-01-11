import { React, useEffect } from "react";
import axios from "axios";

const Page1 = () => {
	/** 날씨 API 가져오는 함수 하하 */
	const getWeatherAPI = () => {
		/** 인증키 */
		const API_KEY = "1af9314497443ac739cced077296c089";
		/** 위도 */
		const lat = 35.18;
		/** 적도 */
		const lon = 129.0752;
		const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
		axios.get(URL).then((res) => {
			const data = res.data;
			const weatherData = data.weather[0];
			const mainData = data.main;
			const windData = data.wind;
			/** 기온(섭씨) */
			const celTemp = parseInt(mainData.temp - 273.15);
			/** 습도 */
			const humidity = mainData.humidity;
			/** 날씨 */
			const weather = weatherData.main;
			/** 풍속 */
			const wind = Math.round(windData.speed);
		});
	};

	useEffect(() => {
		getWeatherAPI();
	});

	return <div></div>;
};

export default Page1;
