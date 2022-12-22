import Cart from "../Cart/Cart";
import { useState, useContext } from "react";
import shoppingCartContext from "../../context/shoppingCartContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StripeCheckout from "react-stripe-checkout";

//
//
//toast
const showToastMessage = () => {
	toast.success("Order Placed!", {
		position: toast.POSITION.TOP_CENTER,
		autoClose: 1500,
		hideProgressBar: false,
		closeOnClick: false,
		pauseOnHover: false,
		draggable: false,
		progress: undefined,
		theme: "colored",
	});
};
const errorToastMessage = () => {
	toast.error("Order Failed!", {
		position: toast.POSITION.TOP_CENTER,
		autoClose: 1500,
		hideProgressBar: false,
		closeOnClick: false,
		pauseOnHover: false,
		draggable: false,
		progress: undefined,
		theme: "colored",
	});
};
//
const Checkout = () => {
	const navigate = useNavigate();
	//context Values
	const myContext = useContext(shoppingCartContext);
	const cartData = myContext.cartItems;
	if (cartData.length <= 0) {
		navigate("/shop");
	}

	//use state for each input field
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [postalCode, setPostalCode] = useState("");
	const [address, setAddress] = useState("");
	const amount = JSON.parse(localStorage.getItem("amount"));

	//data to be passed
	const billingData = [
		{
			customer_name: name,
			customer_email: email,
			customer_phone: phone,
			customer_postal: postalCode,
			customer_address: address,
			customer_total: amount,
		},
	];

	const passData = [...billingData, cartData];
	// console.log(`pass data->`, passData);

	const paymentHandler = (e, passData) => {
		e.preventDefault();
		//make axios post request to /order

		axios
			.post(`http://localhost:8080/order`, passData)
			.then((data) => {
				showToastMessage();
				setTimeout(() => {
					localStorage.clear();
					window.location.reload(true);
					navigate("/shop");
				}, 2500);
			})
			.catch((e) => {
				console.log(`Order Failed`);
				errorToastMessage();
			});
	};

	return (
		<div className="checkout-page">
			<ToastContainer
				position="top-center"
				autoClose={1500}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick={false}
				rtl={false}
				pauseOnFocusLoss={false}
				draggable={false}
				pauseOnHover={false}
				theme="colored"
			/>
			<div className="w-full flex items-center justify-center  my-12">
				<form
					className=" contact-form bg-white shadow rounded py-12 border border-red-400 lg:px-28 px-8"
					onSubmit={(e) => {
						paymentHandler(e, passData);
					}}
				>
					<p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">
						Billing Information
					</p>
					<div className="md:flex items-center mt-12">
						<div className="md:w-72 flex flex-col">
							<label className="text-base font-semibold leading-none text-gray-800">
								Name
							</label>
							<input
								tabIndex={0}
								arial-label="Please input name"
								type="text"
								className="contact-form__input text-base leading-none text-gray-900 p-3 focus:oultine-none    mt-4 bg-gray-100 border  border-gray-200 placeholder-gray-100"
								placeholder="Please input  name"
								required
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						<div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
							<label className="text-base font-semibold leading-none text-gray-800">
								Email Address
							</label>
							<input
								tabIndex={0}
								arial-label="Please input email address"
								type="email"
								className="contact-form__input text-base leading-none text-gray-900 p-3 focus:oultine-none  mt-4 bg-gray-100 border  border-gray-200 placeholder-gray-100"
								placeholder="Please input email address"
								required
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
					</div>
					<div className="md:flex items-center mt-8">
						<div className="md:w-72 flex flex-col">
							<label className="text-base font-semibold leading-none text-gray-800">
								Phone Number
							</label>
							<input
								tabIndex={0}
								role="input"
								arial-label="Please input company name"
								type="tel"
								className="contact-form__input text-base leading-none text-gray-900 p-3 focus:oultine-none  mt-4 bg-gray-100 border  border-gray-200 placeholder-gray-100 "
								placeholder="Please input phone number"
								required
								value={phone}
								maxLength={12}
								onChange={(e) => setPhone(e.target.value)}
							/>
						</div>
						<div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
							<label className="text-base font-semibold leading-none text-gray-800">
								Postal Code
							</label>
							<input
								tabIndex={0}
								arial-label="Please input postal code"
								type="name"
								className="contact-form__input text-base leading-none text-gray-900 p-3 focus:oultine-none  mt-4 bg-gray-100 border  border-gray-200 placeholder-gray-100"
								placeholder="Please input postal code"
								maxLength={7}
								required
								value={postalCode}
								onChange={(e) => setPostalCode(e.target.value)}
							/>
						</div>
					</div>
					<div>
						<div>
							<div className="w-full flex flex-col mt-8">
								<label className="text-base font-semibold leading-none text-gray-800">
									Full Address
								</label>
								<textarea
									tabIndex={0}
									aria-label="leave a message"
									type="name"
									className="contact-form__textarea h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none  mt-4 bg-gray-100 border  border-gray-200 placeholder-gray-100 resize-none"
									defaultValue={address}
									placeholder="Please input your message"
									onChange={(e) => setAddress(e.target.value)}
								/>
							</div>
						</div>
					</div>
					<p className="text-xs leading-3 text-gray-600 mt-4">
						By clicking submit you agree to our terms of service, privacy policy
						and how we use data as stated
					</p>
					<div className="flex items-center justify-center w-full">
						<button className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-red-400  hover:bg-red-500 focus:ring-2 focus:ring-offset-2 focus:ring-red-400 focus:outline-none">
							Place Order
						</button>
					</div>
				</form>
			</div>
			{/* <Cart  /> */}
		</div>
	);
};

export default Checkout;
