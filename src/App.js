import "./App.scss";
//pages
import Home from "./pages/Home/Home";
//components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

//dep
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
	return (
		<div className="App">
			<BrowserRouter>
			<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
