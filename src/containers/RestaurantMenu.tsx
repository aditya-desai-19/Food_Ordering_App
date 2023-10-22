import React, { useState, useEffect } from "react";
import { MENU_URL } from "../assets/data/data";
import Shimmer from "./Shimmer";
//@ts-ignore
import styles from "./styles/RestaurantMenu.module.css"

const id = 42307;

const RestaurantMenu: React.FC = () => {
    const [menuData, setMenuData] = useState<any>();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(MENU_URL + id);
        const json = await data.json();
        setMenuData(json);
    }

    if (menuData === null) return <Shimmer />;

    console.log(menuData?.data?.cards[0]?.card?.card?.info)

    const { name, cuisines, areaName, avgRating } = menuData?.data?.cards[0]?.card?.card?.info;

    console.log(name)

    return (
        <div className="menu">
            <div className={styles.resHeading}>
                <div>
                    <h1>{name}</h1>
                    <p>{cuisines.join(', ')}</p>
                    <p>{areaName}</p>
                </div>
                <div>
                    <h2>{avgRating}⭐</h2>
                </div>
            </div>
            <ul>
                <li>Biryani</li>
                <li>Chats</li>
            </ul>
        </div>
    )
}

export default RestaurantMenu;