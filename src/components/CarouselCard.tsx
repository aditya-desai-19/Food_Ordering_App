import React from 'react';

interface CarouselCardProps {
    imgSrc: string;
    title: string;
    description: string;
    price: number;
}

const CarouselCard: React.FC<CarouselCardProps> = ({
    imgSrc,
    title,
    description,
    price
}) => {
    return (
		<div className="grow-0 shrink-0 basis-full h-full">
			<img src={imgSrc} alt="Offer banner" className="h-full w-full" />
			<p className="absolute font-bold text-white text-left text-lg inline-block my-2">
				{title}
			</p>
			<p className="absolute font-bold text-white text-left text-md inline-block my-2">
				{description}
			</p>
			<p className="absolute font-bold text-white text-left text-sm inline-block my-2">
				{price / 100}
			</p>
		</div>
	);
}

export default CarouselCard;