import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.js";
import Home from "./pages/Home.js";
import Page1 from "./pages/Page1.js";

const userInfo = {
	userName: "",
	password: "",
};

export const UserContext = createContext(userInfo);
export const SetUserContext = createContext(() => {});

const App = () => {
	const [user, setUser] = useState({
		userName: localStorage.getItem("username"),
		password: localStorage.getItem("password"),
	});

	useEffect(() => {
		console.log(user);
	}, []);

	return (
		<SetUserContext.Provider value={setUser}>
			<UserContext.Provider value={user}>
				<Router>
					<Routes>
						<Route path={"/"} element={<Home />} />
						<Route path={"/page1"} element={<Page1 />} />
						<Route path={"/login"} element={<Login />} />
					</Routes>
				</Router>
			</UserContext.Provider>
		</SetUserContext.Provider>
	);
};

export default App;
