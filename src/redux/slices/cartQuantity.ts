import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
	[id: string]: number;
}

const initialState: CartState = {};

const cartSlice = createSlice({
	name: "cartQuantity",
	initialState,
	reducers: {
		add: (
			state,
			action: PayloadAction<{ id: string; quantity: number }>
		) => {
			const { id, quantity } = action.payload;
			state[id] = (state[id] || 0) + quantity;
		},
		delete: (state, action: PayloadAction<string>) => {
			const id = action.payload;
			delete state[id];
		},
	},
});

export const { add, delete: deleteItem } = cartSlice.actions;
export default cartSlice.reducer;