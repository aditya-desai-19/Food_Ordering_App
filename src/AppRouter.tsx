import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./containers/About";
import Contact from "./containers/Contact";
import Error from "./containers/Error";
import React from "react";
import Main from "./containers/Main";
import RestaurantMenu from "./containers/RestaurantMenu";
import Cart from "./containers/Cart";

const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Main />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurants/:id",
                element: <RestaurantMenu />
            },
            {
                path: "/cart",
                element: <Cart />
            },
        ]
    },
    {
        path: "*",
        element: <Error />
    }
]);

export default AppRouter;