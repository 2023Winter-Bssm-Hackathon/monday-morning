import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
import "../style/Header.scss";

const Header = () => {
	const user = useContext(UserContext);

	return (
		<div>
			<div className="header-wrap">
				<ul>
					<li>
						<Link to={"/"} style={{ textDecoration: "none" }}>
							<img src="../images/logo.png" alt="" />
						</Link>
					</li>
					<li>
						<Link to={"/page1"} style={{ textDecoration: "none" }}>
							기록
						</Link>
					</li>
					{user.userName ? (
						<>
							<li>
								<span />
							</li>
							<li>
								<span>{user.userName} 님 반갑습니다.</span>
							</li>
						</>
					) : (
						<>
							<li>
								<Link to={"/login"} style={{ textDecoration: "none" }}>
									로그인
								</Link>
							</li>
							<li>
								<Link to={"/login"} style={{ textDecoration: "none" }}>
									회원가입
								</Link>
							</li>
						</>
					)}
				</ul>
				<ul></ul>
			</div>
		</div>
	);
};

export default Header;
