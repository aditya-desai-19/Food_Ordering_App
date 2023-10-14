import React from 'react';
import RestoCard from '../components/RestoCard';

interface RestoCardProps {
    data: any[]
};

const RestoCardContainer: React.FC<RestoCardProps> = ({ data }) => {
    return (
        <div className="restoContainer" style={{display: 'flex'}}>
            {data.map((item) =>
                <RestoCard
                    imgSrc={item.img}
                    restoName={item.name}
                    cuisine={item.cuisines}
                    ratings={item.ratings}
                />
            )}
        </div>
    )
}

export default RestoCardContainer;