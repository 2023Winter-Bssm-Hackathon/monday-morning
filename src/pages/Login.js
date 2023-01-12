import { React, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SetUserContext, UserContext } from "../App.js";
import Header from "../components/Header.js";
import "../style/Login.scss";

const Login = () => {
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const user = useContext(UserContext);
	const setUser = useContext(SetUserContext);
	const navigate = useNavigate();

	const onClickLogin = () => {
		try {
			localStorage.setItem("username", userName);
			localStorage.setItem("password", password);
			navigate("/");
			window.location.reload();
			console.log(userName, password);
		} catch (err) {
			console.log(err);
			alert("오류가 발생했습니다.");
		}
	};

	return (
		<div>
			<Header />
			<div>
				<form
					className="joinForm"
					onSubmit={(e) => {
						e.preventDefault();
					}}
				>
					<h2>LOGIN</h2>
					<div className="textForm">
						<input
							type="text"
							className="id"
							placeholder="아이디"
							value={userName}
							onChange={(e) => {
								setUserName(e.target.value);
							}}
						/>
					</div>
					<div className="textForm">
						<input
							type="password"
							className="pw"
							placeholder="비밀번호"
							value={password}
							onChange={(e) => {
								setPassword(e.target.value);
							}}
						/>
					</div>
					<button onClick={onClickLogin} className="btn">
						로그인
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
