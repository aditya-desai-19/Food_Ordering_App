import React, { useState, useEffect } from "react";
import { MENU_URL } from "../assets/data/data";
import Shimmer from "./Shimmer";
//@ts-ignore
import styles from "./styles/RestaurantMenu.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";

const RestaurantMenu: React.FC = () => {
    const [menuData, setMenuData] = useState<any>();
    const [showFirstMenu, setShowFirstMenu] = useState<boolean>(false);
    const [showSecondMenu, setShowSecondMenu] = useState<boolean>(false);

    useEffect(() => {
        fetchData();
    }, []);

    const { id } = useParams();

    const fetchData = async () => {
        const data = await fetch(MENU_URL + id);
        const json = await data.json();
        setMenuData(json);
    }

    if (menuData === undefined) return <Shimmer />;

    const { name, cuisines, areaName, avgRating } = menuData?.data?.cards[0]?.card?.card?.info;
    const { title, itemCards } = menuData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    const starterObj = {
        "title": menuData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.title,
        "itemCards": menuData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards
    }

    const handleFirstMenu = () => {
        setShowFirstMenu(!showFirstMenu);
    }

    const handleSecondMenu = () => {
        setShowSecondMenu(!showSecondMenu);
    }

    return (
        <div className={styles.menu}>
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
            <div className={styles.resMenu}>
                <div className={styles.resMenuTitle} onClick={handleFirstMenu}>
                    <p>{title}</p>
                    <button><FontAwesomeIcon icon={!showFirstMenu ? faAngleRight : faAngleDown} /></button>
                </div>
                {showFirstMenu && <ul>
                    {itemCards?.map(item =>
                        <li key={item.card.info.id}>{item.card.info.name}</li>
                    )}
                </ul>}
            </div>
            <div className={styles.resMenu}>
                <div className={styles.resMenuTitle} onClick={handleSecondMenu}>
                    <p>{starterObj.title}</p>
                    <button><FontAwesomeIcon icon={!showSecondMenu ? faAngleRight : faAngleDown} /></button>
                </div>
                {showSecondMenu && <ul>
                    {starterObj?.itemCards?.map(item =>
                        <li key={item.card.info.id}>{item.card.info.name}</li>
                    )}
                </ul>}
            </div>
        </div>
    )
}

export default RestaurantMenu;