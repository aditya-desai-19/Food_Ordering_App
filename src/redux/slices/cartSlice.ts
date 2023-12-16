import {createSlice} from '@reduxjs/toolkit';

interface cartObject {
    items: {id: string, imgSrc: string, dishName: string, price: string}[];
}

const initialState: cartObject = {
    items: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem:(state, action) => {
            state.items.push(action.payload);
        },
        removeItem:(state, action) => {
            state.items.splice(action.payload);
        },
        emptyCart: (state) => {
            state.items.length = 0;
        }
    }
});

export const {addItem, removeItem, emptyCart} =  cartSlice.actions;
export default cartSlice.reducer;