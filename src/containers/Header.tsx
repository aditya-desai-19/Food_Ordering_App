import React, {useState} from "react";
//@ts-ignore
import styles from "./styles/Header.module.css";

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
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <button onClick={handleLogin}>{login}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;