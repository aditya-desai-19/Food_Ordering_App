import React, { useEffect, useState } from "react";
import Search from "./Search";
import RestoCardContainer from "./RestoCardContainer";
//@ts-ignore
import styles from "./styles/Main.module.css";
import { SWIGGY_API } from "../assets/data/data";

const Main: React.FC = () => {
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async() => {
        try {
            const response = await fetch(SWIGGY_API);
            const fetchData = await response.json();
            setData(fetchData);
        } catch (error) {
            console.log(error);
        }
        
    }

    return (
        <div className={styles.main}>
            <Search />
            <button>Top rated restaurants</button>
            {/* <RestoCardContainer data={data} /> */}
        </div>
    )
}

export default Main