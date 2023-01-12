import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/Home.scss";
import Header from "../components/Header.js";
import axios from "axios";

const Home = () => {
	const [isConn, setIsConn] = useState();
	const [weatherDatas, setWeatherDatas] = useState([]);
	/** 날씨 API 가져오는 함수 하하 */
	const getWeatherAPI = () => {
		/** 인증키 */
		const API_KEY = "6dccdcf65414cb4165864179531181c4";
		/** 위도 */
		const lat = 35.18;
		/** 적도 */
		const lon = 129.0752;
		const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
		/** API를 가져온다 */
		axios
			.get(URL)
			.then((res) => {
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
				const datas = [celTemp, humidity, weather, wind];
				updateWeatherInfo(datas);
			})
			.catch((ERR) => console.log(ERR));
	};

	const updateWeatherInfo = (datas) => {
		setWeatherDatas(datas);
	};

	useEffect(() => {
		getWeatherAPI();
	}, []);

	return (
		<div>
			<div className="home-wrap">
				<Header />
				<div className="home-title-box">ds</div>
				<div className="home-weather-box">
					<div className="home-weather-content-box">
						<span className="daily-weather">오늘의 날씨</span>
						<div className="home-weather-contents">
							<div>기온 : {weatherDatas[0]}도</div>
							<div>습도 : {weatherDatas[1]}%</div>
							<div>오늘의 날씨 : {weatherDatas[2]}</div>
							<div>풍속 : {weatherDatas[3]}m/s</div>
						</div>
					</div>
				</div>
				<div>ing</div>
			</div>
		</div>
	);
};

export default Home;
