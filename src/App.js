import "./App.scss";
//pages
import Home from "./pages/Home/Home";
//components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AboutUs from "./pages/AboutUs/AboutUs";
import Contact from "./pages/Contact/Contact";
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
					<Route path="/product/:id" />
					<Route path="/about" element={<AboutUs />} />
					<Route path="/contact" element={<Contact />} />
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
