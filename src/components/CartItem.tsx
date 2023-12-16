import React from "react";

const CartItem = ({imgSrc, dishName, basePrice, quantity}) => {
    return (
		<div className="h-32 p-4 flex justify-between">
			<div className="flex">
				<img className="h-24 w-32 bg-cover rounded-lg" src={imgSrc} />
				<p className="m-4">{dishName}</p>
			</div>
            <div className="flex">
                <div className="h-12 w-20 border-2 border-gray-200 m-4 flex justify-between rounded-md">
                    <button className="text-red-500 text-lg p-2 border-r-2 border-gray-200 bg-gray-100">-</button>
                    <span className="p-2">{quantity}</span>
                    <button className="text-green-500 text-lg p-2 border-l-2 border-gray-200 bg-gray-100">+</button>
                </div>
                <p className="m-4">₹ {basePrice}</p>
            </div>
		</div>
	);
}

export default CartItem;