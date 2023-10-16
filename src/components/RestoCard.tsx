import React from 'react';
//@ts-ignore
import styles from './styles/RestoCard.module.css'

interface RestoCardProps {
    imgSrc: string;
    restoName: string;
    cuisine: string;
    ratings: string;
    location: string;
}

const RestoCard: React.FC<RestoCardProps> = ({
    imgSrc,
    restoName,
    cuisine,
    ratings,
    location
}) => {
    return (
        <div className={styles.card}>
            <img className={styles.restoImg} src={imgSrc} alt="Restaurant logo" />
            <h3>{restoName}</h3>
            <h4>{cuisine}</h4>
            <p>{ratings}/5</p>
            <p>{location}</p>
        </div>
    )
}

export default RestoCard;