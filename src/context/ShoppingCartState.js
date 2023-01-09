import { useState, useEffect } from "react";
import ShoppingCartContext from "./shoppingCartContext";
import axios from "axios";

const ShoppingCartState = (props) => {
	const [cartItems, setCartItems] = useState([]);
	const [products, setProducts] = useState("");

	useEffect(() => {
		axios
			.get(`http://localhost:8080/shop`)
			.then((res) => {
				setProducts(res.data);
			})
			.catch((e) => console.log(`Error fetching data ${e}`));
	}, []);
	const getItemQuantity = (product) => {
		return cartItems.find((item) => item.id === product)?.product_qty || 0;
	};

	const increaseCartQuantity = (id, qty) => {
		const exist = cartItems.find((item) => item.id === id);
		console.log(`I am qty`, qty);

		if (!exist) {
			// console.log(`I am qty`, qty);

			let newCartItems;

			if (qty) {
				newCartItems = [...cartItems, { id: id, quantity: qty }];
				setCartItems(newCartItems);
			} else {
				newCartItems = [...cartItems, { id: id, quantity: 1 }];
				setCartItems(newCartItems);
			}

			localStorage.setItem("cartItems", JSON.stringify(newCartItems));
		} else {
			if (qty) {
				// console.log(`I am qty`, qty);
				const newCartItems = cartItems.map((item) =>
					item.id === id ? { ...exist, quantity: exist.quantity + 1 } : item
				);
				setCartItems(newCartItems);
				localStorage.setItem("cartItems", JSON.stringify(newCartItems));
			} else {
				const newCartItems = cartItems.map((item) =>
					item.id === id ? { ...exist, quantity: exist.quantity + 1 } : item
				);
				setCartItems(newCartItems);
				localStorage.setItem("cartItems", JSON.stringify(newCartItems));
			}
		}
	};

	const singleIncreaseCartQuantity = (id, qty) => {
		const exist = cartItems.find((item) => item.id === id);
		console.log(`I am qty`, qty);

		if (!exist) {
			// console.log(`I am qty`, qty);

			let newCartItems;

			if (qty) {
				newCartItems = [...cartItems, { id: id, quantity: qty }];
				setCartItems(newCartItems);
			} else {
				newCartItems = [...cartItems, { id: id, quantity: 1 }];
				setCartItems(newCartItems);
			}

			localStorage.setItem("cartItems", JSON.stringify(newCartItems));
		} else {
			if (qty) {
				// console.log(`I am qty`, qty);
				const newCartItems = cartItems.map((item) =>
					item.id === id ? { ...exist, quantity: exist.quantity + qty } : item
				);
				setCartItems(newCartItems);
				localStorage.setItem("cartItems", JSON.stringify(newCartItems));
			} else {
				const newCartItems = cartItems.map((item) =>
					item.id === id ? { ...exist, quantity: exist.quantity + qty } : item
				);
				setCartItems(newCartItems);
				localStorage.setItem("cartItems", JSON.stringify(newCartItems));
			}
		}
	};

	const decreaseCartQuantity = (id) => {
		const exist = cartItems.find((item) => item.id === id);
		if (exist.quantity === 1) {
			const newCartItems = cartItems.filter((item) => item.id !== id);
			setCartItems(newCartItems);
			localStorage.setItem("cartItems", JSON.stringify(newCartItems));
		} else {
			const newCartItems = cartItems.map((item) =>
				item.id === id ? { ...exist, quantity: exist.quantity - 1 } : item
			);
			setCartItems(newCartItems);
			localStorage.setItem("cartItems", JSON.stringify(newCartItems));
		}
	};

	useEffect(() => {
		setCartItems(
			localStorage.getItem("cartItems")
				? JSON.parse(localStorage.getItem(`cartItems`))
				: []
		);
	}, []);
	return (
		<ShoppingCartContext.Provider
			value={{
				getItemQuantity,
				increaseCartQuantity,
				decreaseCartQuantity,
				singleIncreaseCartQuantity,
				cartItems,
				products,
			}}
		>
			{props.children}
		</ShoppingCartContext.Provider>
	);
};

export default ShoppingCartState;
