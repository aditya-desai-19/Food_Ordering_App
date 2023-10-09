import React from 'react';
//@ts-ignore
import styles from './styles/RestoCard.module.css'

const RestoCard: React.FC = () => {
    return (
        <div className={styles.card}>
            <img className={styles.restoImg} src={require("../assets/resto-img.jpeg")} alt="Restaurant logo" />
            <h3>Name</h3>
            <h4>Cuisine</h4>
            <p>Ratings</p>
        </div>
    )
}

export default RestoCard;