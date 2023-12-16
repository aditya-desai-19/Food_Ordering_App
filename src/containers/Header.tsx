import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useAppSelector } from "../redux/hooks";

const Header: React.FC = () => {
	const [login, setLogin] = useState<string>("Login");

	const onlineStatus = useOnlineStatus();

	const handleLogin = () => {
		login === "Login" ? setLogin("Logout") : setLogin("Login");
	};

	const data = useContext(UserContext);

	const cartItems = useAppSelector((state) => state.cart.items);

	return (
		<div className="flex justify-between border-b-2 border-gray-300 shadow-md p-4">
			<div>
				<img
					className="w-36 h-12"
					src={require("../assets/images/app-logo.png")}
				/>
			</div>
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
				<li className="px-4">
					<Link to={"/cart"} className="text-lg flex">
						<FontAwesomeIcon icon={faCartShopping} />
						<p>{cartItems.length}</p>
					</Link>
				</li>
				<button onClick={handleLogin} className="px-4">
					{login}
				</button>
				<li className="px-4 font-bold">{data.userName}</li>
			</ul>
		</div>
	);
};

export default Header;
