import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
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
		<div className="flex flex-col items-center">
			<div className="flex justify-between h-28 w-1/2 mt-4 p-4 border-b-2 border-dotted border-gray-300">
				<div>
					<p className="font-semibold text-xl">{name}</p>
					<p>{cuisines.join(", ")}</p>
					<p>{areaName}</p>
				</div>
				<div>
					<h2>{avgRating}⭐</h2>
				</div>
			</div>
			<div className="h-20 w-1/2 border-b-2 border-dotted border-gray-300">
				<div
					className="flex justify-between p-4"
					onClick={handleFirstMenu}
				>
					<p className="font-semibold text-lg">{title}</p>
					<button>
						<FontAwesomeIcon
							icon={!showFirstMenu ? faAngleRight : faAngleDown}
						/>
					</button>
				</div>
			</div>
			{showFirstMenu && (
				<div>
					<ul>
						{itemCards?.map((item) => (
							<li key={item.card.info.id} className="p-2">
								{item.card.info.name}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default RestaurantMenu;
