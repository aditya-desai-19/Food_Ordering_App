import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useOnlineStatus from "../utils/useOnlineStatus";
import CarouselCard from "../components/CarouselCard";
// import { CDN_URL } from "../assets/data/data";

const CDN_URL =
	"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

const RestaurantMenu: React.FC = () => {
	const [showFirstMenu, setShowFirstMenu] = useState<boolean>(false);

	const { id } = useParams();
	const menuData = useRestaurantMenu(id);
	console.log({ menuData });
	const onlineStatus = useOnlineStatus();

	if (onlineStatus === false) return <h1>Looks like you are offline!!</h1>;

	if (menuData === null) return <Shimmer />;

	const { name, cuisines, areaName, avgRating } =
		menuData?.cards[0]?.card?.card?.info;
	const { title, itemCards, carousel } =
		menuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
			?.card;

	const handleFirstMenu = () => {
		setShowFirstMenu(!showFirstMenu);
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
			{carousel !== undefined ? (
				<div className="h-80 w-1/2 border-y-2 border-dotted border-gray-300 overflow-hidden relative">
					<p className="font-bold text-2xl text-left my-4">{title}</p>
					<div className="h-full rounded-lg flex justify-between">
						{carousel.map((item) => (
							<CarouselCard
								key={item.dish.info.id}
								imgSrc={CDN_URL + item.dish.info.imageId}
								title={item.dish.info.name}
								description={item.dish.info.description}
								price={item.dish.info.price}
							/>
						))}
					</div>
				</div>
			) : (
				<div className="w-1/2 border-b-2 border-dotted border-gray-300">
					<div
						className="flex justify-between p-4"
						onClick={handleFirstMenu}
					>
						<p className="font-semibold text-lg">{title}</p>
						<button>
							<FontAwesomeIcon
								icon={
									!showFirstMenu ? faAngleRight : faAngleDown
								}
							/>
						</button>
					</div>
					{showFirstMenu && (
						<div>
							{itemCards?.map((item) => (
								<div
									className="p-2 flex justify-evenly border-b-2 border-gray-300"
									key={item.card.id}
								>
									<div className="w-9/12">
										<p className="font-bold text-md">
											{item.card.info.name}
										</p>
										<p>
											₹{" "}
											{" " +
												((item.card.info.price / 100) |
													(item.card.info
														.defaultPrice /
														100))}
										</p>
										<p className="text-xs">
											{item.card.info.description}
										</p>
									</div>
									<div className="ml-4 w-3/12">
										<button className="p-2 w-16 bg-white text-green-400 rounded-lg absolute ml-8 mt-12">
											Add+
										</button>
										<img
											className="h-24 w-32 bg-cover rounded-lg"
											src={
												CDN_URL + item.card.info.imageId
											}
										/>
									</div>
								</div>
							))}
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default RestaurantMenu;
