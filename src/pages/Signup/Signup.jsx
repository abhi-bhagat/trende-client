import "./Signup.scss";
import loginImg from "../../assets/images/login.svg";
import google from "../../assets/icons/googleLogin.svg";
import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useAuth0 } from "@auth0/auth0-react";
const Signup = () => {
	//for signup
	const [isOpen, setIsOpen] = useState(false);
	const [fname, setFName] = useState("");
	const [lname, setLName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");

	//for sign in
	const [loginEmail, setLoginEmail] = useState("");
	const [loginPass, setLoginPass] = useState("");

	//
	// const { loginWithRedirect } = useAuth0();
	const navigate = useNavigate();

	// modal open/close handler
	const closeModalHandler = () => {
		setFName("");
		setLName("");
		setAddress("");
		setPhone("");
		setEmail("");
		setPassword("");

		setIsOpen(false);
	};
	const openModalHandler = () => {
		setIsOpen(true);
	};

	//DATA
	const signupInfo = {
		fname: fname,
		lname: lname,
		phone: phone,
		email: email,
		password: password,
		address: address,
	};

	//login DATA
	const loginInfo = {
		email: loginEmail,
		pass: loginPass,
	};

	const showToastMessage = () => {
		toast.success("Signed Up!", {
			position: toast.POSITION.TOP_CENTER,
			autoClose: 500,
			hideProgressBar: false,
			closeOnClick: false,
			pauseOnHover: false,
			draggable: false,
			progress: undefined,
			theme: "colored",
		});
	};
	const errorToastMessage = () => {
		toast.error("Error signing up", {
			position: toast.POSITION.TOP_CENTER,
			autoClose: 1000,
			hideProgressBar: false,
			closeOnClick: false,
			pauseOnHover: false,
			draggable: false,
			progress: undefined,
			theme: "colored",
		});
	};
	const loginErrorToastMessage = () => {
		toast.error("Unable to login", {
			position: toast.POSITION.TOP_CENTER,
			autoClose: 1000,
			hideProgressBar: false,
			closeOnClick: false,
			pauseOnHover: false,
			draggable: false,
			progress: undefined,
			theme: "colored",
		});
	};
	const emptyValToastMessage = () => {
		toast.error("Please fill login info", {
			position: toast.POSITION.TOP_CENTER,
			autoClose: 1000,
			hideProgressBar: false,
			closeOnClick: false,
			pauseOnHover: false,
			draggable: false,
			progress: undefined,
			theme: "colored",
		});
	};

	//validation
	const loginValidator = () => {
		if (!loginEmail && !loginPass) {
			return false;
		} else {
			return true;
		}
	};
	//LOGIN HANDLER
	const loginHandler = (e) => {
		e.preventDefault();

		if (loginValidator()) {
		} else {
			emptyValToastMessage();
			document.getElementById("loginEmail").focus();
		}
		axios
			.post(`http://localhost:8080/login`, loginInfo)
			.then((data) => {
				console.log(data.data);
				const fullName = `${data.data[0].customer_fname} ${data.data[0].customer_lname}`;
				localStorage.setItem("name", fullName);
				console.log(fullName);
				window.location.href = `http://localhost:3000/dashboard`;
			})
			.catch((e) => loginErrorToastMessage());
	};

	//SIGNUP HANDLER

	const signupHandler = (e) => {
		e.preventDefault();
		axios
			.post(`http://localhost:8080/login/newuser`, signupInfo)
			.then((data) => {
				showToastMessage();
				setIsOpen(false);
			})
			.catch((e) => {
				console.log(`Error creating profile`);
				errorToastMessage();
			});
	};

	if (localStorage.getItem("name")) {
		// navigate("/admin");
		window.location.href = `http://localhost:3000/dashboard`;
	}
	return (
		<div className="signup-page">
			<div className="signup-page__container">
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
				<div className="signup-page__content">
					{/* image  */}
					<div className="signup-page__image">
						<img src={loginImg} alt="login" />
					</div>

					{/* login form  */}

					<div className="signup-page__form w-full flex items-center justify-center  my-12">
						<form
							className=" bg-white shadow rounded py-12 border border-red-400 lg:px-20 px-8"
							onSubmit={(e) => {
								loginHandler(e);
							}}
						>
							<p className="md:text-3xl text-xl font-bold leading-7 text-left text-gray-700">
								Hi there! Let's have you signed in
							</p>
							<div className="mb-6 mt-6">
								<input
									type="text"
									className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-200 focus:outline-none"
									id="loginEmail"
									placeholder="Email address"
									required
									value={loginEmail}
									onChange={(e) => setLoginEmail(e.target.value)}
								/>
							</div>

							<div className="mb-6">
								<input
									type="password"
									className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-200 focus:outline-none"
									id="loginPass"
									placeholder="Password"
									required
									value={loginPass}
									onChange={(e) => setLoginPass(e.target.value)}
								/>
							</div>

							<div className="flex justify-between items-center mb-6">
								<div className="form-group form-check">
									<input
										type="checkbox"
										className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
										id="exampleCheck2"
									/>
									<label
										className="form-check-label inline-block text-gray-800"
										htmlFor="exampleCheck2"
									>
										{" "}
										Remember me{" "}
									</label>
								</div>
								<a href="#!" className="text-gray-800">
									Forgot password?
								</a>
							</div>

							<div className="text-center lg:text-left">
								<button
									type="button"
									className="signup-page__button--login inline-block w-full px-7 py-3 text-white font-medium text-sm leading-snug uppercase  shadow-md  hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
									onClick={loginHandler}
								>
									Login
								</button>
								<p className="text-sm font-semibold mt-2 pt-1 mb-0">
									Don't have an account?
									<span
										onClick={openModalHandler}
										className="text-red-600 ml-2 cursor-pointer hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
									>
										Register
									</span>
								</p>
							</div>
							<div className="flex items-center my-4 mt-6 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
								<p className="text-center font-semibold mx-4 mb-0">Or</p>
							</div>

							<div className="flex items-center justify-center w-full">
								<button
									// onClick={}
									className=" w-full signup-page__button--google mt-4 text-base font-semibold leading-none text-white py-4 px-10  hover:bg-red-500 focus:ring-2 focus:ring-offset-2 focus:ring-red-400 focus:outline-none"
								>
									Sign in with Google
									<img src={google} alt="" />
								</button>
							</div>
						</form>
					</div>

					{/* signup modal  */}
					<Transition appear show={isOpen} as={Fragment}>
						<Dialog
							as="div"
							className="relative z-10"
							onClose={closeModalHandler}
						>
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0"
								enterTo="opacity-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100"
								leaveTo="opacity-0"
							>
								<div className="fixed inset-0 bg-black bg-opacity-60" />
							</Transition.Child>

							<div className="fixed inset-0 overflow-y-auto">
								<div className="flex min-h-full items-center justify-center p-4 text-center">
									<Transition.Child
										as={Fragment}
										enter="ease-out duration-300"
										enterFrom="opacity-0 scale-95"
										enterTo="opacity-100 scale-100"
										leave="ease-in duration-200"
										leaveFrom="opacity-100 scale-100"
										leaveTo="opacity-0 scale-95"
									>
										<Dialog.Panel className="w-3/4  transform overflow-scroll  bg-white p-6 text-left align-middle shadow-xl transition-all">
											<div className="mt-2">
												<form
													className=" bg-white shadow rounded py-12 border border-red-400 lg:px-20 px-8"
													onSubmit={(e) => {
														signupHandler(e);
													}}
												>
													<p className="md:text-3xl text-xl font-bold leading-7 text-left text-gray-700">
														Sign Up with us
													</p>

													<div className="md:flex items-center mt-8">
														<div className="md:w-72 flex flex-col">
															<label className="text-base font-semibold leading-none text-gray-800">
																First Name
															</label>
															<input
																tabIndex={0}
																arial-label="Please input name"
																type="text"
																className="contact-form__input text-base leading-none text-gray-900 p-3 focus:oultine-none mt-4 bg-gray-100 border  border-gray-200 placeholder-gray-100"
																placeholder="Please input First name"
																value={fname}
																onChange={(e) => setFName(e.target.value)}
																required
															/>
														</div>
														<div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
															<label className="text-base font-semibold leading-none text-gray-800">
																Last Name
															</label>
															<input
																tabIndex={0}
																arial-label="Please input email address"
																type="name"
																className="contact-form__input text-base leading-none text-gray-900 p-3 focus:oultine-none  mt-4 bg-gray-100 border  border-gray-200 placeholder-gray-100"
																placeholder="Please input Last Name"
																value={lname}
																onChange={(e) => setLName(e.target.value)}
																required
															/>
														</div>

														<div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
															<label className="text-base font-semibold leading-none text-gray-800">
																Phone number
															</label>
															<input
																tabIndex={0}
																arial-label="Please input phone"
																type="number"
																className="contact-form__input text-base leading-none text-gray-900 p-3 focus:oultine-none    mt-4 bg-gray-100 border  border-gray-200 placeholder-gray-100"
																placeholder="Please input Phone"
																value={phone}
																onChange={(e) => setPhone(e.target.value)}
																required
															/>
														</div>
													</div>

													<div className="md:flex items-start w-auto mt-8">
														<div className="md:flex items-start w-72 flex-col">
															<div className="md:w-72 flex flex-col">
																<label className="text-base font-semibold leading-none text-gray-800">
																	Email
																</label>
																<input
																	tabIndex={0}
																	arial-label="Please input name"
																	type="email"
																	className="contact-form__input text-base leading-none text-gray-900 p-3 focus:oultine-none    mt-4 bg-gray-100 border  border-gray-200 placeholder-gray-100"
																	placeholder="Please input Email"
																	value={email}
																	onChange={(e) => setEmail(e.target.value)}
																	required
																/>
															</div>
															<div className="md:w-72 flex flex-col  mt-4">
																<label className="text-base font-semibold leading-none text-gray-800">
																	Password
																</label>
																<input
																	tabIndex={0}
																	arial-label="Please input email address"
																	type="password"
																	className="contact-form__input text-base leading-none text-gray-900 p-3 focus:oultine-none  mt-4 bg-gray-100 border  border-gray-200 placeholder-gray-100"
																	placeholder="Please input your password"
																	value={password}
																	onChange={(e) => setPassword(e.target.value)}
																	required
																/>
															</div>
														</div>
														<div className="md:w-full flex flex-col md:ml-6 md:mt-0 mt-2">
															<label className="text-base font-semibold leading-none text-gray-800">
																Address
															</label>

															<textarea
																tabIndex={0}
																aria-label="leave a message"
																type="name"
																className="contact-form__textarea h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none  mt-4 bg-gray-100 border  border-gray-200 placeholder-gray-100 resize-none"
																placeholder="Please input your message"
																value={address}
																onChange={(e) => setAddress(e.target.value)}
																required
															/>
														</div>
													</div>

													<div className="text-center flex mt-4 lg:text-left">
														<button
															type="button"
															className="signup-page__button--google mr-4 inline-block w-full px-7 py-3 text-white font-medium text-sm leading-snug uppercase  shadow-md  hover: focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
															onClick={closeModalHandler}
														>
															Cancel
														</button>
														<button
															type="submit"
															className="signup-page__button--login inline-block w-full px-7 py-3 text-white font-medium text-sm leading-snug uppercase  shadow-md  hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
															// onClick={loginHandler}
														>
															Signup
														</button>
													</div>
												</form>
											</div>
										</Dialog.Panel>
									</Transition.Child>
								</div>
							</div>
						</Dialog>
					</Transition>
				</div>
			</div>
		</div>
	);
};

export default Signup;
