import React, { useState } from "react";
//@ts-ignore
// import styles from "./styles/Header.module.css";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header: React.FC = () => {
	const [login, setLogin] = useState<string>("Login");

	const onlineStatus = useOnlineStatus();
	// console.log({ onlineStatus });

	const handleLogin = () => {
		login === "Login" ? setLogin("Logout") : setLogin("Login");
	};

	return (
		<div className="flex justify-between">
			<div>
				<img
					className="w-36 h-20"
					src={require("../assets/images/app-logo.png")}
				/>
			</div>
			<div>
				<ul className="flex items-center">
					<li className="px-4">
						Online Status: {onlineStatus ? "🟢" : "🔴"}
					</li>
					<li className="px-4">
						<Link to={"/"}>Home</Link>
					</li>
					<li className="px-4">
						<Link to={"/about"}>About</Link>
					</li>
					<li className="px-4">
						<Link to={"/contact"}>Contact</Link>
					</li>
					<li className="px-4">Cart</li>
					<button onClick={handleLogin} className="px-4">
						{login}
					</button>
				</ul>
			</div>
		</div>
	);
};

export default Header;
