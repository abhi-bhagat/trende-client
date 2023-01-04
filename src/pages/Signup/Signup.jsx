import "./Signup.scss";
import loginImg from "../../assets/images/login.svg";
import google from "../../assets/icons/googleLogin.svg";
// import axios from "axios";
import { useNavigate } from "react-router-dom";

import { useAuth0 } from "@auth0/auth0-react";
const Signup = () => {
	const { loginWithRedirect } = useAuth0();
	const navigate = useNavigate();
	const loginHandler = (e) => {
		e.preventDefault();
		console.log("clicked");
		navigate("/dashboard");
	};
	return (
		<div className="signup-page">
			<div className="signup-page__container">
				<div className="signup-page__content">
					<div className="signup-page__image">
						<img src={loginImg} alt="login" />
					</div>
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
									id="exampleFormControlInput2"
									placeholder="Email address"
								/>
							</div>

							<div className="mb-6">
								<input
									type="password"
									className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-200 focus:outline-none"
									id="exampleFormControlInput2"
									placeholder="Password"
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
										for="exampleCheck2"
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
									<a
										href="#!"
										className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
									>
										Register
									</a>
								</p>
							</div>
							<div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
								<p className="text-center font-semibold mx-4 mb-0">Or</p>
							</div>

							<div className="flex items-center justify-center w-full">
								<button
									onClick={() => loginWithRedirect()}
									className=" w-full signup-page__button--google mt-9 text-base font-semibold leading-none text-white py-4 px-10  hover:bg-red-500 focus:ring-2 focus:ring-offset-2 focus:ring-red-400 focus:outline-none"
								>
									Sign in with Google
									<img src={google} alt="" />
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signup;
