import React, { useEffect, useState } from "react";
import Search from "./Search";
import RestoCardContainer from "./RestoCardContainer";
//@ts-ignore
import styles from "./styles/Main.module.css";
import { SWIGGY_API } from "../assets/data/data";
import Shimmer from "./Shimmer";

const Main: React.FC = () => {
    const [data, setData] = useState<{
        info: any,
        id: string,
        name: string,
        imageSrc: string,
        avgRating: string,
        location: string,
        costForTwo: string,
        cuisines: string
    }[]>([]);

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async() => {
        try {
            const response = await fetch(SWIGGY_API);
            const fetchData = await response.json();
            const fetchedRestaurants = fetchData.data.cards[2].card.card.gridElements.infoWithStyle.restaurants;
            console.log(fetchedRestaurants)
            setData(fetchedRestaurants);
        } catch (error) {
            console.log(error);
        }
        
    }

    const filterRestaurants = () => {
        const filteredRestaurants = data.filter((item) => item.info.avgRating > 4.4);
        setData(filteredRestaurants);
    }

    return data.length === 0 ? <Shimmer /> :(
        <div className={styles.main}>
            <Search />
            <button onClick={filterRestaurants}>Top rated restaurants</button>
            <RestoCardContainer data={data} />
        </div>
    )
}

export default Main