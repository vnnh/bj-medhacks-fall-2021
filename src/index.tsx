import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Index from "./components/pages";
import About from "./components/pages/about";
import { CurrentProvider } from "./context/current";

const Root = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path={`/about`}>
					<About />
				</Route>
				<Route path={`/`}>
					<Index />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

ReactDOM.render(
	<CurrentProvider>
		<Root />
	</CurrentProvider>,
	document.getElementById("root"),
);

if (import.meta.hot) {
	import.meta.hot.accept();
}
