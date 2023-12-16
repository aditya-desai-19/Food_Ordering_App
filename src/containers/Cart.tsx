import React, {useState, useEffect} from "react";
import { useAppSelector } from "../redux/hooks";
import CartItem from "../components/CartItem";
import { CDN_URL } from "../assets/data/data";

const Cart = () => {
    const cartItems = useAppSelector(state => state.cart.items);
	const cartItemsQuantity = useAppSelector((state) => state.cartQuantity.quantity);

    return (
		<div className="w-2/3 border-2 border-gray-300 m-4 text-center mx-auto">
			<h2 className="text-2xl">Cart</h2>
			{cartItems.length === 0 ? (
				<p className="font-bold">Your cart is empty</p>
			) : (
				cartItems.map((cartItem) => (
					<CartItem
						key={cartItem.card.info.id}
						imgSrc={CDN_URL + cartItem?.card.info.imageId}
						dishName={cartItem.card.info.name}
						basePrice={
							(cartItem.card.info.price / 100) |
							(cartItem.card.info.defaultPrice / 100)
						}
						quantity={cartItemsQuantity[cartItem.card.info.id]}
					/>
				))
			)}
		</div>
	);
}

export default Cart