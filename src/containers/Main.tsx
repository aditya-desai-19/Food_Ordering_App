import React, { useEffect, useState } from "react";
import Search from "./Search";
import RestoCardContainer from "./RestoCardContainer";
import { SWIGGY_API } from "../assets/data/data";
import Shimmer from "./Shimmer";

const Main: React.FC = () => {
	const [data, setData] = useState<
		{
			info: any;
			id: string;
			name: string;
			imageSrc: string;
			avgRating: string;
			location: string;
			costForTwo: string;
			cuisines: string;
		}[]
	>([]);
	const [filterData, setFilterData] = useState<
		{
			info: any;
			id: string;
			name: string;
			imageSrc: string;
			avgRating: string;
			location: string;
			costForTwo: string;
			cuisines: string;
		}[]
	>([]);
	const [searchText, setSearchText] = useState<string>("");

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		try {
			const response = await fetch(SWIGGY_API);
			const fetchData = await response.json();
			const fetchedRestaurants =
				fetchData.data.cards[2].card.card.gridElements.infoWithStyle
					.restaurants;
			console.log(fetchedRestaurants);
			setData(fetchedRestaurants);
			setFilterData(fetchedRestaurants);
		} catch (error) {
			console.log(error);
		}
	};

	const handleChange = (e: any) => {
		setSearchText(e.target.value);
	};

	const filterBySearch = () => {
		const filteredRestaurants = data.filter((restaurant) =>
			restaurant.info.name
				.toLowerCase()
				.includes(searchText.toLowerCase())
		);
		setFilterData(filteredRestaurants);
	};

	const filterRestaurants = () => {
		const filteredRestaurants = data.filter(
			(item) => item.info.avgRating > 4.3
		);
		setFilterData(filteredRestaurants);
	};

	return data.length === 0 ? (
		<Shimmer />
	) : (
		<div className="p-4">
			<Search
				onChange={handleChange}
				value={searchText}
				onClick={filterBySearch}
			/>
			<button
				onClick={filterRestaurants}
				className="mx-4 px-4 py-2 rounded-lg border-2 bg-gray-300 text-black hover:bg-gray-200"
			>
				Top rated restaurants
			</button>
			<RestoCardContainer data={filterData} />
		</div>
	);
};

export default Main;
