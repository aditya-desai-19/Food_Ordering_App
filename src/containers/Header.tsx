import React from "react";
//@ts-ignore
import styles from "./styles/Header.module.css";

const Header: React.FC = () => {
    return (
        <div className={styles.header}>
                <img className={styles.logo} src={require("../assets/images/app-logo.png")} />
            <div className={styles.navItems}>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;