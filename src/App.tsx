import React from "react";
//@ts-ignore
import Header from "./containers/Header";
import { Outlet } from "react-router-dom";
import UserContext from "./utils/userContext";
import { Provider } from "react-redux";
import {store} from "./redux/store";

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<UserContext.Provider value={{ userName: "Kaushik" }}>
				<div>
					<Header />
					<Outlet />
				</div>
			</UserContext.Provider>
		</Provider>
	);
};

export default App;
