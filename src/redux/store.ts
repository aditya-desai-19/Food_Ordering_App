import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import cartQuantity from "./slices/cartQuantity";

export const store = configureStore({
    reducer : {
        cart: cartSlice,
        cartQuantity: cartQuantity
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;