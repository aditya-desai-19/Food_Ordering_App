import React, { useState } from "react";
//@ts-ignore
import styles from "./styles/Header.module.css";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    const [login, setLogin] = useState<string>('Login');

    const handleLogin = () => {
        login === "Login" ?
            setLogin("Logout") :
            setLogin("Login");
    }

    return (
        <div className={styles.header}>
            <img className={styles.logo} src={require("../assets/images/app-logo.png")} />
            <div className={styles.navItems}>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/about"}>About</Link></li>
                    <li><Link to={"/contact"}>Contact</Link></li>
                    <li>Cart</li>
                    <button onClick={handleLogin}>{login}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;