import "./Contact.scss";
import Card from "../../components/Card/Card";
//

import mailIcon from "../../assets/icons/email.svg";
import phoneIcon from "../../assets/icons/phone.svg";
import locationIcon from "../../assets/icons/location.svg";
const Contact = () => {
	return (
		<div className="contact-page">
			<div className="contact-page__hero">
				<h3>Contact Us</h3>
			</div>
			<div className="contact-page__container">
				<div className="contact-page__cards-section">
					<div className="contact-page__card">
						<div className="contact-page__card-image">
							<img src={mailIcon} alt="" />
						</div>
						<div className="contact-page__card-body">
							<h3>Email Us</h3>
							<p>Fill out the form and we will contact you within 24 hours</p>
							<h5>Customer Support</h5>
							<p>abhishekbht88@gmail</p>
							<h5>Head Office Support</h5>
							<p>abhishekbht88@gmail</p>
						</div>
					</div>
					<div className="contact-page__card">
						<div className="contact-page__card-image">
							<img src={phoneIcon} alt="" />
						</div>
						<div className="contact-page__card-body">
							<h3>Call Us</h3>
							<p>Please note we are available from 8:00-4:00</p>
							<h5>Customer Support</h5>
							<p>+16044468820</p>
							<h5>Head Office Support</h5>
							<p>+16044468820</p>
						</div>
					</div>
					<div className="contact-page__card">
						<div className="contact-page__card-image">
							<img src={locationIcon} alt="" />
						</div>
						<div className="contact-page__card-body">
							<h3>Our Location</h3>
							<p>Drop in anytime during working hours</p>
							<h5>Timings</h5>
							<p>
								Mon-Fri : 7:00AM - 11:00PM
								<br />
								Sat-Sun : 8:00AM - 9:00PM
							</p>
						</div>
					</div>
				</div>
				<div className="contact-page__contact-section">
					<div className="w-full flex items-center justify-center  my-12">
						<form className=" contact-form bg-white shadow rounded py-12 border border-red-400 lg:px-28 px-8">
							<p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">
								Let’s connect!
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
									/>
								</div>
								<div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
									<label className="text-base font-semibold leading-none text-gray-800">
										Email Address
									</label>
									<input
										tabIndex={0}
										arial-label="Please input email address"
										type="name"
										className="contact-form__input text-base leading-none text-gray-900 p-3 focus:oultine-none  mt-4 bg-gray-100 border  border-gray-200 placeholder-gray-100"
										placeholder="Please input email address"
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
										type="name"
										className="contact-form__input text-base leading-none text-gray-900 p-3 focus:oultine-none  mt-4 bg-gray-100 border  border-gray-200 placeholder-gray-100 "
										placeholder="Please input phone number"
									/>
								</div>
								<div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
									<label className="text-base font-semibold leading-none text-gray-800">
										Country
									</label>
									<input
										tabIndex={0}
										arial-label="Please input country name"
										type="name"
										className="contact-form__input text-base leading-none text-gray-900 p-3 focus:oultine-none  mt-4 bg-gray-100 border  border-gray-200 placeholder-gray-100"
										placeholder="Please input country name"
									/>
								</div>
							</div>
							<div>
								<div className="w-full flex flex-col mt-8">
									<label className="text-base font-semibold leading-none text-gray-800">
										Message
									</label>
									<textarea
										tabIndex={0}
										aria-label="leave a message"
										type="name"
										className="contact-form__textarea h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none  mt-4 bg-gray-100 border  border-gray-200 placeholder-gray-100 resize-none"
										defaultValue={""}
										placeholder="Please input your message"
									/>
								</div>
							</div>
							<p className="text-xs leading-3 text-gray-600 mt-4">
								By clicking submit you agree to our terms of service, privacy
								policy and how we use data as stated
							</p>
							<div className="flex items-center justify-center w-full">
								<button className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-red-400  hover:bg-red-500 focus:ring-2 focus:ring-offset-2 focus:ring-red-400 focus:outline-none">
									SUBMIT
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
