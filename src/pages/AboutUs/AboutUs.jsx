import "./AboutUs.scss";

import heroImage from "../../assets/images/about-us.jpeg";
import shippingIcon from "../../assets/icons/shipping.svg";
import paymentIcon from "../../assets/icons/payment.svg";
import returnIcon from "../../assets/icons/returns.svg";
import contactIcon from "../../assets/icons/support.svg";
import githubIcon from "../../assets/icons/github.svg";
import aboutHeader from '../../assets/images/about-header.jpeg'
const AboutUs = () => {
	return (
		<div className="about-page">
            {/* <div className="about-page__header">
            <h2>About Page</h2>
            </div> */}
			<div className="about-page__container">
				<div className="about-page__hero">
					<div className="about-page__hero--left">
						<h3 className="about-page__hero-title">Our Story</h3>
						<p className="about-page__hero-subtitle">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							Laboriosam pariatur quis sapiente alias illum, sed provident,
							aliquid ex magnam, voluptates distinctio qui nisi dicta
							reprehenderit magni ea odio impedit eligendi. Nemo provident
							sapiente aperiam magnam aut error, doloremque voluptates
							molestiae? Eum voluptatum similique natus laborum magnam
							consectetur odit saepe pariatur voluptate, porro reiciendis,
							itaque sint molestiae ab, totam corporis
						</p>
					</div>
					<div className="about-page__hero--right">
						<img src={heroImage} alt="" />
					</div>
				</div>
				<div className="about-page__services">
					<div className="about-page__services--left">
						<div className="about-page__services--shipping">
							<span className="iconHolder">
								<img src={shippingIcon} alt="" />
							</span>
							<div className="about-page__services--shipping-content">
								<h5>FREE SHIPPING</h5>
								<p>
									All orders above <span className="standout">$150</span>
								</p>
							</div>
						</div>
						<div className="about-page__services--payment">
							<span className="iconHolder">
								<img src={paymentIcon} alt="" />
							</span>
							<div className="about-page__services--payment-content">
								<h5>FAST PAYMENT</h5>
								<p>100% Secure Payment</p>
							</div>
						</div>
					</div>
					<div className="about-page__services--right">
						<div className="about-page__services--returns">
							<span className="iconHolder">
								<img src={returnIcon} alt="" />
							</span>
							<div className="about-page__services--returns-content">
								<h5>FREE RETURNS</h5>
								<p>30 days Return</p>
							</div>
						</div>
						<div className="about-page__services--contact">
							<span className="iconHolder">
								<img src={contactIcon} alt="" />
							</span>
							<div className="about-page__services--contact-content">
								<h5>24/7 SUPPORT</h5>
								<p>Quick Support</p>
							</div>
						</div>
					</div>
				</div>

				<div className="about-page__team">
					<div>
						<div className="container flex justify-center mx-auto pt-16">
							<div>
								<h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-10  mx-auto">
									Our team
								</h1>
							</div>
						</div>
						<div className="w-full bg-gray-100 px-10 pt-10">
							<div className="container mx-auto">
								<div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
									<div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
										<div className="rounded overflow-hidden shadow-md bg-white">
											<div className="absolute -mt-20 w-full flex justify-center">
												<div className="h-32 w-32">
													<img
														src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
														alt="profile-pic"
														className="rounded-full object-cover h-full w-full shadow-md"
													/>
												</div>
											</div>
											<div className="px-6 mt-16">
												<div className="font-bold text-3xl text-center pb-1">
													Andres Berlin
												</div>
												<p className="text-gray-800 text-sm text-center">
													Chief Executive Officer
												</p>
												<p className="text-center text-gray-600 text-base pt-3 font-normal">
													The CEO's role in raising a company's corporate IQ is
													to establish an atmosphere that promotes knowledge
													sharing and collaboration.
												</p>
												<div className="w-full flex justify-center pt-5 pb-5">
													<a
														href="https://www.github.com/abhi-bhagat"
														className="mx-5"
													>
														<div>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width={24}
																height={24}
																viewBox="0 0 24 24"
																fill="none"
																stroke="#718096"
																strokeWidth="1.5"
																strokeLinecap="round"
																strokeLinejoin="round"
																className="feather feather-github"
															>
																<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
															</svg>
														</div>
													</a>
													<a href="https://www.github.com/abhi-bhagat" className="mx-5">
														<div>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width={24}
																height={24}
																viewBox="0 0 24 24"
																fill="none"
																stroke="#718096"
																strokeWidth="1.5"
																strokeLinecap="round"
																strokeLinejoin="round"
																className="feather feather-twitter"
															>
																<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
															</svg>
														</div>
													</a>
													<a href="https://www.github.com/abhi-bhagat" className="mx-5">
														<div>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width={24}
																height={24}
																viewBox="0 0 24 24"
																fill="none"
																stroke="#718096"
																strokeWidth="1.5"
																strokeLinecap="round"
																strokeLinejoin="round"
																className="feather feather-instagram"
															>
																<rect
																	x={2}
																	y={2}
																	width={20}
																	height={20}
																	rx={5}
																	ry={5}
																/>
																<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
																<line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
															</svg>
														</div>
													</a>
												</div>
											</div>
										</div>
									</div>
									<div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
										<div className="rounded overflow-hidden shadow-md bg-white">
											<div className="absolute -mt-20 w-full flex justify-center">
												<div className="h-32 w-32">
													<img
														src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
														alt="profile-pic"
														className="rounded-full object-cover h-full w-full shadow-md"
													/>
												</div>
											</div>
											<div className="px-6 mt-16">
												<div className="font-bold text-3xl text-center pb-1">
													Silene Tokyo
												</div>
												<p className="text-gray-800 text-sm text-center">
													Product Design Head
												</p>
												<p className="text-center text-gray-600 text-base pt-3 font-normal">
													The emphasis on innovation and technology in our
													companies has resulted in a few of them establishing
													global benchmarks in product design and development.
												</p>
												<div className="w-full flex justify-center pt-5 pb-5">
													<a href="https://www.github.com/abhi-bhagat" className="mx-5">
														<div>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width={24}
																height={24}
																viewBox="0 0 24 24"
																fill="none"
																stroke="#718096"
																strokeWidth="1.5"
																strokeLinecap="round"
																strokeLinejoin="round"
																className="feather feather-github"
															>
																<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
															</svg>
														</div>
													</a>
													<a href="https://www.github.com/abhi-bhagat" className="mx-5">
														<div>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width={24}
																height={24}
																viewBox="0 0 24 24"
																fill="none"
																stroke="#718096"
																strokeWidth="1.5"
																strokeLinecap="round"
																strokeLinejoin="round"
																className="feather feather-twitter"
															>
																<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
															</svg>
														</div>
													</a>
													<a href="https://www.github.com/abhi-bhagat" className="mx-5">
														<div>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width={24}
																height={24}
																viewBox="0 0 24 24"
																fill="none"
																stroke="#718096"
																strokeWidth="1.5"
																strokeLinecap="round"
																strokeLinejoin="round"
																className="feather feather-instagram"
															>
																<rect
																	x={2}
																	y={2}
																	width={20}
																	height={20}
																	rx={5}
																	ry={5}
																/>
																<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
																<line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
															</svg>
														</div>
													</a>
												</div>
											</div>
										</div>
									</div>
									<div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
										<div className="rounded overflow-hidden shadow-md bg-white">
											<div className="absolute -mt-20 w-full flex justify-center">
												<div className="h-32 w-32">
													<img
														src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
														alt="profile-pic"
														className="rounded-full object-cover h-full w-full shadow-md"
													/>
												</div>
											</div>
											<div className="px-6 mt-16">
												<div className="font-bold text-3xl text-center pb-1">
													Rachel Stone
												</div>
												<p className="text-gray-800 text-sm text-center">
													Manager Development
												</p>
												<p className="text-center text-gray-600 text-base pt-3 font-normal">
													Our services encompass the assessment and repair of
													property damage caused by water, fire, smoke, or mold.
													We can also be a part of the restoration.
												</p>
												<div className="w-full flex justify-center pt-5 pb-5">
													<a href="https://www.github.com/abhi-bhagat" className="mx-5">
														<div>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width={24}
																height={24}
																viewBox="0 0 24 24"
																fill="none"
																stroke="#718096"
																strokeWidth="1.5"
																strokeLinecap="round"
																strokeLinejoin="round"
																className="feather feather-github"
															>
																<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
															</svg>
														</div>
													</a>
													<a href="https://www.github.com/abhi-bhagat" className="mx-5">
														<div>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width={24}
																height={24}
																viewBox="0 0 24 24"
																fill="none"
																stroke="#718096"
																strokeWidth="1.5"
																strokeLinecap="round"
																strokeLinejoin="round"
																className="feather feather-twitter"
															>
																<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
															</svg>
														</div>
													</a>
													<a href="https://www.github.com/abhi-bhagat" className="mx-5">
														<div>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width={24}
																height={24}
																viewBox="0 0 24 24"
																fill="none"
																stroke="#718096"
																strokeWidth="1.5"
																strokeLinecap="round"
																strokeLinejoin="round"
																className="feather feather-instagram"
															>
																<rect
																	x={2}
																	y={2}
																	width={20}
																	height={20}
																	rx={5}
																	ry={5}
																/>
																<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
																<line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
															</svg>
														</div>
													</a>
												</div>
											</div>
										</div>
									</div>
									<div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
										<div className="rounded overflow-hidden shadow-md bg-white">
											<div className="absolute -mt-20 w-full flex justify-center">
												<div className="h-32 w-32">
													<img
														src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
														alt="profile-pic"
														className="rounded-full object-cover h-full w-full shadow-md"
													/>
												</div>
											</div>
											<div className="px-6 mt-16">
												<div className="font-bold text-3xl text-center pb-1">
													Dean Jones
												</div>
												<p className="text-gray-800 text-sm text-center">
													Principal Software Engineer
												</p>
												<p className="text-center text-gray-600 text-base pt-3 font-normal">
													An avid open-source developer who loves to be creative
													and inventive. I have 20 years of experience in the
													field.
												</p>
												<div className="w-full flex justify-center pt-5 pb-5">
													<a href="https://www.github.com/abhi-bhagat" className="mx-5">
														<div>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width={24}
																height={24}
																viewBox="0 0 24 24"
																fill="none"
																stroke="#718096"
																strokeWidth="1.5"
																strokeLinecap="round"
																strokeLinejoin="round"
																className="feather feather-github"
															>
																<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
															</svg>
														</div>
													</a>
													<a href="https://www.github.com/abhi-bhagat" className="mx-5">
														<div>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width={24}
																height={24}
																viewBox="0 0 24 24"
																fill="none"
																stroke="#718096"
																strokeWidth="1.5"
																strokeLinecap="round"
																strokeLinejoin="round"
																className="feather feather-twitter"
															>
																<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
															</svg>
														</div>
													</a>
													<a href="https://www.github.com/abhi-bhagat" className="mx-5">
														<div>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width={24}
																height={24}
																viewBox="0 0 24 24"
																fill="none"
																stroke="#718096"
																strokeWidth="1.5"
																strokeLinecap="round"
																strokeLinejoin="round"
																className="feather feather-instagram"
															>
																<rect
																	x={2}
																	y={2}
																	width={20}
																	height={20}
																	rx={5}
																	ry={5}
																/>
																<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
																<line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
															</svg>
														</div>
													</a>
												</div>
											</div>
										</div>
									</div>
									<div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
										<div className="rounded overflow-hidden shadow-md bg-white">
											<div className="absolute -mt-20 w-full flex justify-center">
												<div className="h-32 w-32">
													<img
														src="https://images.unsplash.com/photo-1628890920690-9e29d0019b9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
														alt="profile-pic"
														className="rounded-full object-cover h-full w-full shadow-md"
													/>
												</div>
											</div>
											<div className="px-6 mt-16">
												<div className="font-bold text-3xl text-center pb-1">
													Johnson Adams
												</div>
												<p className="text-gray-800 text-sm text-center">
													Product Design Head
												</p>
												<p className="text-center text-gray-600 text-base pt-3 font-normal">
													Product designer with interests in immersive computing
													and XR, political ventures, and emerging technologies.
													Able to take ideas and give them a life.
												</p>
												<div className="w-full flex justify-center pt-5 pb-5">
													<a href="https://www.github.com/abhi-bhagat" className="mx-5">
														<div>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width={24}
																height={24}
																viewBox="0 0 24 24"
																fill="none"
																stroke="#718096"
																strokeWidth="1.5"
																strokeLinecap="round"
																strokeLinejoin="round"
																className="feather feather-github"
															>
																<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
															</svg>
														</div>
													</a>
													<a href="https://www.github.com/abhi-bhagat" className="mx-5">
														<div>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width={24}
																height={24}
																viewBox="0 0 24 24"
																fill="none"
																stroke="#718096"
																strokeWidth="1.5"
																strokeLinecap="round"
																strokeLinejoin="round"
																className="feather feather-twitter"
															>
																<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
															</svg>
														</div>
													</a>
													<a href="https://www.github.com/abhi-bhagat" className="mx-5">
														<div>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width={24}
																height={24}
																viewBox="0 0 24 24"
																fill="none"
																stroke="#718096"
																strokeWidth="1.5"
																strokeLinecap="round"
																strokeLinejoin="round"
																className="feather feather-instagram"
															>
																<rect
																	x={2}
																	y={2}
																	width={20}
																	height={20}
																	rx={5}
																	ry={5}
																/>
																<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
																<line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
															</svg>
														</div>
													</a>
												</div>
											</div>
										</div>
									</div>
									<div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
										<div className="rounded overflow-hidden shadow-md bg-white">
											<div className="absolute -mt-20 w-full flex justify-center">
												<div className="h-32 w-32">
													<img
														src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
														alt="profile-pic"
														className="rounded-full object-cover h-full w-full shadow-md"
													/>
												</div>
											</div>
											<div className="px-6 mt-16">
												<div className="font-bold text-3xl text-center pb-1">
													Charles Keith
												</div>
												<p className="text-gray-800 text-sm text-center">
													UX Designer
												</p>
												<p className="text-center text-gray-600 text-base pt-3 font-normal">
													A UX designer is the voice of the customer. Our job is
													to look beyond the business goals. We don't just
													experience user interface but also questions it.
												</p>
												<div className="w-full flex justify-center pt-5 pb-5">
													<a href="https://www.github.com/abhi-bhagat" className="mx-5">
														<div>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width={24}
																height={24}
																viewBox="0 0 24 24"
																fill="none"
																stroke="#718096"
																strokeWidth="1.5"
																strokeLinecap="round"
																strokeLinejoin="round"
																className="feather feather-github"
															>
																<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
															</svg>
														</div>
													</a>
													<a href="https://www.github.com/abhi-bhagat" className="mx-5">
														<div>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width={24}
																height={24}
																viewBox="0 0 24 24"
																fill="none"
																stroke="#718096"
																strokeWidth="1.5"
																strokeLinecap="round"
																strokeLinejoin="round"
																className="feather feather-twitter"
															>
																<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
															</svg>
														</div>
													</a>
													<a href="https://www.github.com/abhi-bhagat" className="mx-5">
														<div>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width={24}
																height={24}
																viewBox="0 0 24 24"
																fill="none"
																stroke="#718096"
																strokeWidth="1.5"
																strokeLinecap="round"
																strokeLinejoin="round"
																className="feather feather-instagram"
															>
																<rect
																	x={2}
																	y={2}
																	width={20}
																	height={20}
																	rx={5}
																	ry={5}
																/>
																<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
																<line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
															</svg>
														</div>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

                <div className="about-page__social">
                <div className=" 2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4">
            <div className=" text-center">
                <h2 className=" font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-gray-800 md:w-full w-9/12 mx-auto">Follow Us on Instagram</h2>
                <p className=" font-normal text-base leading-6 text-gray-600 mt-4 lg:w-5/12 md:w-9/12 mx-auto">
                    Follow us on instagram @<span className="underline cursor-pointer">abhishek.bhagat_</span> 
                </p>
            </div>
            <div className=" grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:grap-8 md:gap-6 gap-4 mt-10">
                <div className="relative group">
                    <img src="https://i.ibb.co/QHS8Ngp/pexels-alana-sousa-3294250-1.png" alt="A picture of a sitting dog" className=" lg:block hidden w-full " />
                    <img src="https://i.ibb.co/mNPBgQN/pexels-alana-sousa-3294250-1-1.png" alt="A picture of a sitting dog" className="lg:hidden block w-full " />
                    <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-red-400 via-red-400 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full" />
                    <div className=" absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
                        <svg width={64} height={64} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M42.6665 10.6665H21.3332C15.4421 10.6665 10.6665 15.4421 10.6665 21.3332V42.6665C10.6665 48.5575 15.4421 53.3332 21.3332 53.3332H42.6665C48.5575 53.3332 53.3332 48.5575 53.3332 42.6665V21.3332C53.3332 15.4421 48.5575 10.6665 42.6665 10.6665Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M32 40C36.4183 40 40 36.4183 40 32C40 27.5817 36.4183 24 32 24C27.5817 24 24 27.5817 24 32C24 36.4183 27.5817 40 32 40Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M44 20V20.001" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
                <div className="relative group">
                    <img src="https://i.ibb.co/T8jgRy3/pexels-leah-kelley-1449667-1.png" alt="Smiling Girl" className=" lg:block hidden w-full " />
                    <img src="https://i.ibb.co/YD8nNMR/pexels-leah-kelley-1449667-1-1.png" alt="Smiling Girl" className="lg:hidden block w-full " />
                    <div className="opacity-0 bg-gradient-to-t from-red-400 via-red-400 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full" />
                    <div className=" absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
                        <svg width={64} height={64} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M42.6665 10.6665H21.3332C15.4421 10.6665 10.6665 15.4421 10.6665 21.3332V42.6665C10.6665 48.5575 15.4421 53.3332 21.3332 53.3332H42.6665C48.5575 53.3332 53.3332 48.5575 53.3332 42.6665V21.3332C53.3332 15.4421 48.5575 10.6665 42.6665 10.6665Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M32 40C36.4183 40 40 36.4183 40 32C40 27.5817 36.4183 24 32 24C27.5817 24 24 27.5817 24 32C24 36.4183 27.5817 40 32 40Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M44 20V20.001" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
                <div className="relative group">
                    <img src="https://i.ibb.co/F3dzNWD/pexels-spencer-selover-775358-1.png" alt="Men Posing" className=" lg:block hidden w-full " />
                    <img src="https://i.ibb.co/myWxfSm/pexels-spencer-selover-775358-1-1.png" alt="Men Posing" className="lg:hidden block w-full " />
                    <div className="opacity-0 bg-gradient-to-t from-red-400 via-red-400 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full" />
                    <div className=" absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
                        <svg width={64} height={64} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M42.6665 10.6665H21.3332C15.4421 10.6665 10.6665 15.4421 10.6665 21.3332V42.6665C10.6665 48.5575 15.4421 53.3332 21.3332 53.3332H42.6665C48.5575 53.3332 53.3332 48.5575 53.3332 42.6665V21.3332C53.3332 15.4421 48.5575 10.6665 42.6665 10.6665Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M32 40C36.4183 40 40 36.4183 40 32C40 27.5817 36.4183 24 32 24C27.5817 24 24 27.5817 24 32C24 36.4183 27.5817 40 32 40Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M44 20V20.001" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
                <div className="relative group">
                    <img src="https://i.ibb.co/DwcwgDP/pexels-chevanon-photography-1108099-1.png" alt="2 puppies" className=" lg:block hidden w-full " />
                    <img src="https://i.ibb.co/5cDQZ2r/pexels-chevanon-photography-1108099-1-1.png" alt="2 puppies" className="lg:hidden block w-full " />
                    <div className="opacity-0 bg-gradient-to-t from-red-400 via-red-400 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full" />
                    <div className=" absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
                        <svg width={64} height={64} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M42.6665 10.6665H21.3332C15.4421 10.6665 10.6665 15.4421 10.6665 21.3332V42.6665C10.6665 48.5575 15.4421 53.3332 21.3332 53.3332H42.6665C48.5575 53.3332 53.3332 48.5575 53.3332 42.6665V21.3332C53.3332 15.4421 48.5575 10.6665 42.6665 10.6665Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M32 40C36.4183 40 40 36.4183 40 32C40 27.5817 36.4183 24 32 24C27.5817 24 24 27.5817 24 32C24 36.4183 27.5817 40 32 40Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M44 20V20.001" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
                </div>
			</div>
		</div>
	);
};

export default AboutUs;
