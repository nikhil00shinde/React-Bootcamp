import "./App.css";
import { NavBar, Banner, Movies, Favourites } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Banner />
							<Movies />
						</>
					}
				></Route>
				<Route path="/favourites" element={<Favourites />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
