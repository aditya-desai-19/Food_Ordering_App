import React from "react";

interface RestoCardProps {
	imgSrc: string;
	restoName: string;
	cuisine: string;
	ratings: string;
	location: string;
}

const RestoCard: React.FC<RestoCardProps> = ({
	imgSrc,
	restoName,
	cuisine,
	ratings,
	location,
}) => {
	return (
		<div className="h-[350px] w-48 p-2 m-2 border-2 border-gray-300 bg-gray-50 hover:bg-gray-200 rounded-lg">
			<img
				className="h-48 w-full rounded-lg"
				src={imgSrc}
				alt="Restaurant logo"
			/>
			<p className="font-bold py-1">{restoName}</p>
			<p>{cuisine}</p>
			<p>{ratings}/5</p>
			<p>{location}</p>
		</div>
	);
};

export const withOpenLabel = (RestoCard) => {
	return (props) => {
		return (
			<div>
				<label className="absolute bg-gray-700 text-white m-2 p-2 rounded-lg">
					Open
				</label>
				<RestoCard {...props} />
			</div>
		);
	};
};

export default RestoCard;
