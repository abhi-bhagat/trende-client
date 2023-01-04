import "./App.scss";
//pages
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Contact from "./pages/Contact/Contact";
import Shop from "./pages/Shop/Shop";
import Checkout from "./pages/Checkout/Checkout";
import Error from "./pages/Error/Error";
import Signup from "./pages/Signup/Signup";
import Dashboard from "./pages/Dashboard/dashboard";
import Admin from "./pages/Admin/Admin";
import Cart from "./pages/Cart/Cart";
import Sales from "./pages/Dashboard/Sales/Sales";
import AddProducts from "./pages/Dashboard/AddProducts/AddProducts";
import DeleteProducts from "./pages/Dashboard/DeleteProducts/DeleteProducts";
import UpdateProducts from "./pages/Dashboard/UpdateProducts/UpdateProducts";
import FAQ from "./pages/Dashboard/FAQ/faq";
import Invoices from "./pages/Dashboard/Invoices/Invoices";
import Calendar from "./pages/Dashboard/Calendar/Calendar";
import Stock from "./pages/Dashboard/Stock/Stock";
import Products from "./pages/Dashboard/Products/products";
import Alert from "./pages/Dashboard/Alert/alert";
//components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
//useContext
import ShoppingCartState from "./context/ShoppingCartState";
//dep
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
//

function App() {
	const [products, setProducts] = useState("");

	return (
		<ShoppingCartState>
			<div className="App">
				<BrowserRouter>
					{!window.location.href.includes("/dashboard") && <Navbar />}
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
						<Route
							path="/shop/:id"
							element={<Shop products={products} setProducts={setProducts} />}
						/>
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
						<Route path="/signup" element={<Signup />} />

						{/* {dashboard} */}

						<Route path="/admin" element={<Signup />} />
						<Route path="/dashboard" element={<Dashboard />} />
						<Route path="/dashboard/sales" element={<Sales sales={"abc"} />} />
						<Route path="/dashboard/addProduct" element={<AddProducts />} />
						<Route
							path="/dashboard/deleteProduct"
							element={<DeleteProducts />}
						/>
						<Route
							path="/dashboard/updateProduct"
							element={<UpdateProducts />}
						/>
						<Route path="/dashboard/faq" element={<FAQ />} />
						<Route path="/dashboard/invoices" element={<Invoices />} />
						<Route path="/dashboard/calendar" element={<Calendar />} />
						<Route path="/dashboard/stock" element={<Stock />} />
						<Route path="/dashboard/products" element={<Products />} />
						<Route path="/dashboard/lowProducts" element={<Alert />} />

						<Route path="*" element={<Error />} />
					</Routes>
					{!window.location.href.includes("/dashboard") && <Footer />}
				</BrowserRouter>
			</div>
		</ShoppingCartState>
	);
}

export default App;
