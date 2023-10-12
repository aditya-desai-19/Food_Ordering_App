import React, { useState } from "react";
import Search from "./Search";
import RestoCardContainer from "./RestoCardContainer";
//@ts-ignore
import styles from "./styles/Main.module.css";

const Main: React.FC = () => {
    const [data, setData] = useState<any[]>([
        { id: 1, img: '../assets/images/resto-img.jpeg', name: 'Hotel Nisarg', cuisines: 'North Indian', ratings: 3.8 },
        { id: 2, img: '../assets/images/resto-img.jpeg', name: 'Aarogya Aahar', cuisines: 'North Indian, South Indian', ratings: 4.5 },
        { id: 3, img: '../assets/images/resto-img.jpeg', name: 'Hotel Surya', cuisines: 'North Indian, South Indian', ratings: 4.2 }
    ]);

    const filterRestaurants = () => {
        const filteredData = data.filter(item => item.ratings > 4);
        setData(filteredData);
    }

    return (
        <div className={styles.main}>
            <Search />
            <button onClick={filterRestaurants}>Top rated restaurants</button>
            <RestoCardContainer data={data} />
        </div>
    )
}

export default Main