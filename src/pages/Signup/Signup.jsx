import "./Signup.scss";
import loginImg from "../../assets/images/login.svg";
import google from '../../assets/icons/googleLogin.svg'
const Signup = () => {
	const loginHandler = () => {};
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
							<p className="text-xs leading-4 text-gray-600 mt-4">
								Please sign in using Google for now. We will have other options
								available pretty soon!
							</p>

							<div className="flex items-center justify-center w-full">
								<button className=" w-full signup-page__button--google mt-9 text-base font-semibold leading-none text-white py-4 px-10  hover:bg-red-500 focus:ring-2 focus:ring-offset-2 focus:ring-red-400 focus:outline-none">
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
