import "./App.scss";
//pages
import Home from "./pages/Home/Home";
//components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AboutUs from "./pages/AboutUs/AboutUs";
import Contact from "./pages/Contact/Contact";
import Shop from "./pages/Shop/Shop";
import Checkout from "./pages/Checkout/Checkout";
import Error from "./pages/Error/Error";
// import axios from "axios";
import ShoppingCartState from "./context/ShoppingCartState";
import Cart from "./pages/Cart/Cart";
//dep
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
function App() {
	// const URL = `http://localhost:8080/shop`;
	// let products = "";
	const [products, setProducts] = useState("");
	// const params = useParams();

	// const getAllProducts = (single) => {
	// 	axios
	// 		.get(`${URL}${single}`)
	// 		.then((res) => {
	// 			console.log(`url {${URL}${single}}`);
	// 			setProducts(res.data);
	// 		})
	// 		.catch((e) => console.log(`Error fetching data ${e}`));
	// };

	// useEffect(() => {
	// 	if (params.category) {
	// 		console.log(`my params= ${params.category}`);
	// 		const myParam = `/category/men`;
	// 		getAllProducts(myParam);
	// 	} else {
	// 		const myParam = "";
	// 		getAllProducts(myParam);
	// 	}
	// }, []);

	return (
		<ShoppingCartState>
			<div className="App">
				<BrowserRouter>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route
							path="/shop"
							element={<Shop products={products} setProducts={setProducts} />}
						/>
						<Route
							path="/shop/category/:category"
							element={<Shop products={products} setProducts={setProducts} />}
						/>
						<Route path="/product/:id" element={<Shop />} />
						<Route path="/about" element={<AboutUs />} />
						<Route path="/contact" element={<Contact />} />
						<Route
							path="/search"
							element={<Shop products={products} setProducts={setProducts} />}
						/>
						<Route path="/wishlist" element={<Home />} />
						<Route path="/cart" element={<Cart />} />
						<Route path="/profile" element={<Home />} />
						<Route path="/checkout" element={<Checkout />} />
						<Route path="*" element={<Error />} />
					</Routes>
					<Footer />
				</BrowserRouter>
			</div>
		</ShoppingCartState>
	);
}

export default App;
