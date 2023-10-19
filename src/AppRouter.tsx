import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./containers/About";
import Contact from "./containers/Contact";
import Error from "./containers/Error";
import React from "react";

const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />
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
        path: "*",
        element: <Error />
    }
]);

export default AppRouter;