import "./DailyDeals.scss";

// icons
import shippingIcon from "../../assets/icons/shipping.svg";
import paymentIcon from "../../assets/icons/payment.svg";
import returnIcon from "../../assets/icons/returns.svg";
import contactIcon from "../../assets/icons/support.svg";
//images
import dealImg from "../../assets/images/combine_images.png";
const DailyDeals = () => {
	return (
		<div className="dailyDeals">
			<div className="dailyDeals__container">
				<div className="dailyDeals__container--top">
					<h3 className="dailyDeals__container--top-title">Deals of the day</h3>
					<div className="dailyDeals__container--top-contents">
						<div className="dailyDeals__container--top-contents-info">
							<p className="dailyDeals__container--top-contents-info-subtitle">
								<span className="standout">Get -50%</span> From 2022 Winter
								collection
							</p>
							<h3 className="dailyDeals__container--top-contents-info-title">
								Weid Dressings
							</h3>
							<p className="dailyDeals__container--top-contents-info-text">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
								quasi veritatis aut laboriosam itaque sit quidem sunt! Aliquid
								
							</p>
							<p className="dailyDeals__container--top-contents-info-price">
								<span className="standout">$259.99</span>{" "}
								<span className="strikeout">$599.99</span>
							</p>
							<div className="dailyDeals__container--top-contents-info-cta">
								Shop Now
							</div>
						</div>
						<div className="dailyDeals__container--top-contents-img">
							<img className="dailyDeals__container--top-contents-image" src={dealImg} alt="" />
						</div>
						<div className="dailyDeals__container--top-contents-counter">
							<div className="dailyDeals__container--top-contents-counter--days">
								27 <br />Days
							</div>
							<div className="dailyDeals__container--top-contents-counter--hour">
								16 <br />Hours
							</div>
							<div className="dailyDeals__container--top-contents-counter--minutes">
								27<br /> Mins
							</div>
						</div>
					</div>
				</div>

				<div className="dailyDeals__container--bottom">
					<div className="dailyDeals__container__services">
						<div className="dailyDeals__container__services--left">
							<div className="dailyDeals__container__services--shipping">
								<span className="iconHolder">
									<img src={shippingIcon} alt="" />
								</span>
								<div className="dailyDeals__container__services--shipping-content">
									<h5>FREE SHIPPING</h5>
									<p>
										All orders above <span className="standout">$150</span>
									</p>
								</div>
							</div>
							<div className="dailyDeals__container__services--payment">
								<span className="iconHolder">
									<img src={paymentIcon} alt="" />
								</span>
								<div className="dailyDeals__container__services--payment-content">
									<h5>FAST PAYMENT</h5>
									<p>100% Secure Payment</p>
								</div>
							</div>
						</div>
						<div className="dailyDeals__container__services--right">
							<div className="dailyDeals__container__services--returns">
								<span className="iconHolder">
									<img src={returnIcon} alt="" />
								</span>
								<div className="dailyDeals__container__services--returns-content">
									<h5>FREE RETURNS</h5>
									<p>30 days Return</p>
								</div>
							</div>
							<div className="dailyDeals__container__services--contact">
								<span className="iconHolder">
									<img src={contactIcon} alt="" />
								</span>
								<div className="dailyDeals__container__services--contact-content">
									<h5>24/7 SUPPORT</h5>
									<p>Quick Support</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DailyDeals;
