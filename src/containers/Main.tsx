import React from "react";
import Search from "./Search";
import RestoCardContainer from "./RestoCardContainer";
//@ts-ignore
import styles from "./styles/Main.module.css";

const Main: React.FC = () => {
    return (
        <div className={styles.main}>
            <Search />
            <RestoCardContainer />
        </div>
    )
}

export default Main