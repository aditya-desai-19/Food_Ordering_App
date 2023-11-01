import React from "react";
//@ts-ignore
import Header from "./containers/Header";
import { Outlet } from "react-router-dom";

const App: React.FC = () => {
	return (
		<div>
			<Header />
			<Outlet />
		</div>
	);
};

export default App;
