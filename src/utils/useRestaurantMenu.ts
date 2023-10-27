import { useEffect, useState } from "react";
import { MENU_URL } from "../assets/data/data";

const useRestaurantMenu = (id) => {
    const [menuData, setMenuData] = useState<any>(null);

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
		const data = await fetch(MENU_URL + id);
		const json = await data.json();
		setMenuData(json.data);
	};


    return menuData;
}

export default useRestaurantMenu;