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
					<Route path="/shop" element={<Home />} />
					<Route path="/shop/:category" element={<Home />} />

					<Route path="/about" element={<Home />} />
					<Route path="/contact" element={<Home />} />
					<Route path="/search" element={<Home />} />
					<Route path="/wishlist" element={<Home />} />
					<Route path="/cart" element={<Home />} />
					<Route path="/profile" element={<Home />} />
					
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
