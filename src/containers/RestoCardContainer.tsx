import React from "react";
import RestoCard, { withOpenLabel } from "../components/RestoCard";
import { CDN_URL } from "../assets/data/data";
import { Link } from "react-router-dom";

interface RestoCardProps {
	data: {
		info: any;
		id: string;
		name: string;
		imageSrc: string;
		avgRating: string;
		location: string;
		costForTwo: string;
		cuisines: string;
	}[];
}
const OpenRestaurant = withOpenLabel(RestoCard);

const RestoCardContainer: React.FC<RestoCardProps> = ({ data }) => {
	return (
		<div className="flex justify-evenly flex-wrap">
			{data.map((item) =>
				item.info.isOpen ? (
					<OpenRestaurant
						imgSrc={CDN_URL + item.info.cloudinaryImageId}
						restoName={item.info.name}
						cuisine={item.info.cuisines[0]}
						ratings={item.info.avgRatingString}
						location={item.info.locality}
					/>
				) : (
					<Link
						to={"/restaurants/" + item.info.id}
						key={item.info.id}
					>
						<RestoCard
							imgSrc={CDN_URL + item.info.cloudinaryImageId}
							restoName={item.info.name}
							cuisine={item.info.cuisines[0]}
							ratings={item.info.avgRatingString}
							location={item.info.locality}
						/>
					</Link>
				)
			)}
		</div>
	);
};

export default RestoCardContainer;
