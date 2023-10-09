import React from "react";
//@ts-ignore
import Header from "./containers/Header";
import "./App.css";
import Main from "./containers/Main";

const App: React.FC = () => {
    return (
        <div>
            <Header />
            <Main />
        </div>
    )
}

export default App;