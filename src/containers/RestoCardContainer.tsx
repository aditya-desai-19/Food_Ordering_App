import React from 'react';
import RestoCard from '../components/RestoCard';
import { CDN_URL } from '../assets/data/data';
//@ts-ignore
import styles from './styles/RestoCardContainer.module.css';

interface RestoCardProps {
    data: {
        info: any;
        id: string,
        name: string,
        imageSrc: string,
        avgRating: string,
        location: string,
        costForTwo: string,
        cuisines: string
    }[]
};

const RestoCardContainer: React.FC<RestoCardProps> = ({ data }) => {
    return (
        <div className={styles.restoContainer}>
            {data.map((item) =>
                <RestoCard
                    key = {item.info.id}
                    imgSrc={CDN_URL + item.info.cloudinaryImageId}
                    restoName={item.info.name}
                    cuisine={item.info.cuisines[0]}
                    ratings={item.info.avgRatingString}
                    location={item.info.locality}
                />
            )}
        </div>
    )
}

export default RestoCardContainer;