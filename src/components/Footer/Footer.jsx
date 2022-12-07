import "./Footer.scss";

//dependencies
import { Link } from "react-router-dom";

//icons
import cardsIcons from "../../assets/icons/cards.svg";
import locationIcon from "../../assets/icons/location.svg";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import twitter from "../../assets/icons/twitter.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import phone from "../../assets/icons/phone.svg";
import email from "../../assets/icons/email.svg";

const Footer = () => {
	return (
		<div className="site-footer ">
			<div className="site-footer__container">
				<div className="site-footer__white">
					<div className="site-footer__main p-3">
						<div className="site-footer__main-top">
							<div className="site-footer__main-top-logo">
								<Link to="/">
									<h3>Site</h3>
								</Link>
							</div>

							<div className="site-footer__main-top-social">
								<ul className="site-footer__main-top-list">
									<li className="site-footer__main-top-list-item">
										<span className="social_icon-container">
											<img src={facebook} alt="" />
										</span>
									</li>
									<li className="site-footer__main-top-list-item">
										<span className="social_icon-container">
											<img src={instagram} alt="" />
										</span>
									</li>
									<li className="site-footer__main-top-list-item">
										<span className="social_icon-container">
											<img src={twitter} alt="" />
										</span>
									</li>
									<li className="site-footer__main-top-list-item">
										<span className="social_icon-container">
											<img src={linkedin} alt="" />
										</span>
									</li>
								</ul>
							</div>
						</div>
						<div className="site-footer__main-bottom">
							<div className="site-footer__main-bottom--left">
								<div className="site-footer__main-bottom-contact">
									<h3>Contact Us</h3>
									<p>
										<img src={locationIcon} alt="" /> 5653 Vancouver, BC Canada
									</p>
									<p>
										<img src={phone} alt="" /> +1 604-446-8820
									</p>
									<p>
										<img
											className="site-footer__main-bottom-contact--img"
											src={email}
											alt=""
										/>{" "}
										abhishekbht88@gmail.com
									</p>
								</div>
								<div className="site-footer__main-bottom-timings">
									<h3>Timings</h3>
									<p>Mon-Fri : 7:00AM - 11:00PM</p>
									<p>Sat-Sun : 8:00AM - 9:00PM</p>
								</div>
							</div>
							<div className="site-footer__main-bottom--right">
								<div className="site-footer__main-bottom-subscribe">
									<h3>Newsletter</h3>
									<p>
										Authoritatively morph 24/7 potentialities with error-free
										partnerships.
									</p>
									<form action="">
										<input
											type="text"
											name="sub-email"
											id="sub-email"
											placeholder="Enter your email...."
											className="sub-email"
										/>
										<button className="sub-button">Subscribe</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>

				
			</div>
            <div className="site-footer__sec">
					<div className="site-footer__sec-copyright">
						© 2022 All rights reserved by Abhi
					</div>
					<div className="site-footer__sec-payment">
						<img src={cardsIcons} alt="" />
					</div>
				</div>
		</div>
	);
};

export default Footer;
