import React, { useState, useEffect } from "react";
import { MENU_URL } from "../assets/data/data";
import Shimmer from "./Shimmer";
//@ts-ignore
import styles from "./styles/RestaurantMenu.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useOnlineStatus from "../utils/useOnlineStatus";

const RestaurantMenu: React.FC = () => {
	const [showFirstMenu, setShowFirstMenu] = useState<boolean>(false);
	const [showSecondMenu, setShowSecondMenu] = useState<boolean>(false);

	const { id } = useParams();
	const menuData = useRestaurantMenu(id);
	const onlineStatus = useOnlineStatus();

	// console.log({ onlineStatus });
	if (onlineStatus === false) return <h1>Looks like you are offline!!</h1>;

	if (menuData === null) return <Shimmer />;

	const { name, cuisines, areaName, avgRating } =
		menuData?.cards[0]?.card?.card?.info;
	const { title, itemCards } =
		menuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
			?.card;
	const starterObj = {
		title: menuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]
			?.card?.card?.title,
		itemCards:
			menuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]
				?.card?.card?.itemCards,
	};

	const handleFirstMenu = () => {
		setShowFirstMenu(!showFirstMenu);
	};

	const handleSecondMenu = () => {
		setShowSecondMenu(!showSecondMenu);
	};

	return (
		<div className={styles.menu}>
			<div className={styles.resHeading}>
				<div>
					<h1>{name}</h1>
					<p>{cuisines.join(", ")}</p>
					<p>{areaName}</p>
				</div>
				<div>
					<h2>{avgRating}⭐</h2>
				</div>
			</div>
			<div className={styles.resMenu}>
				<div className={styles.resMenuTitle} onClick={handleFirstMenu}>
					<p>{title}</p>
					<button>
						<FontAwesomeIcon
							icon={!showFirstMenu ? faAngleRight : faAngleDown}
						/>
					</button>
				</div>
				{showFirstMenu && (
					<ul>
						{itemCards?.map((item) => (
							<li key={item.card.info.id}>
								{item.card.info.name}
							</li>
						))}
					</ul>
				)}
			</div>
			<div className={styles.resMenu}>
				<div className={styles.resMenuTitle} onClick={handleSecondMenu}>
					<p>{starterObj.title}</p>
					<button>
						<FontAwesomeIcon
							icon={!showSecondMenu ? faAngleRight : faAngleDown}
						/>
					</button>
				</div>
				{showSecondMenu && (
					<ul>
						{starterObj?.itemCards?.map((item) => (
							<li key={item.card.info.id}>
								{item.card.info.name}
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};

export default RestaurantMenu;
