import "./Hero.scss";

// import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

import model1 from "../../assets/images/model-noback.png";
import model2 from "../../assets/images/model2-noback.png";
import model3 from "../../assets/images/model3-noback.png";


const Hero = () => {
	return (
		<div className="hero-section">
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				effect="fade"
				loop={true}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Autoplay, Navigation]}
				className="mySwiper"
			>
				<SwiperSlide className="hero-section__slider-background">
					{/* <img className="hero-section-image" src={kidModel} alt="" /> */}
					<div className="hero-section__slider-content">
						<div className="hero-section__slider-content--left">
							<h4 className="hero-section__slider-hero-sale">Get 50% Flate</h4>
							<h2 className="hero-section__slider-hero-title">
								New Summer Collection
							</h2>
							<p className="hero-section__slider-hero-subtitle">
								World class designers clothes available at a discounted rate!
							</p>
							<button className="hero-section__slider-hero-cta button-text">
								Shop Now
							</button>
						</div>
						<div className="hero-section__slider-content--right">
							<img className="hero-section-image" src={model1} alt="" />
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="hero-section__slider-background">
					<div className="hero-section__slider-content">
						<div className="hero-section__slider-content--left">
							<h4 className="hero-section__slider-hero-sale">Get 50% Flate</h4>
							<h2 className="hero-section__slider-hero-title">
								New Summer Collection
							</h2>
							<p className="hero-section__slider-hero-subtitle">
								World class designers clothes available at a discounted rate!
							</p>
							<button className="hero-section__slider-hero-cta button-text">
								Shop Now
							</button>
						</div>
						<div className="hero-section__slider-content--right">
							<img className="hero-section-image" src={model2} alt="" />
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="hero-section__slider-background">
					<div className="hero-section__slider-content">
						<div className="hero-section__slider-content--left">
							<h4 className="hero-section__slider-hero-sale">Get 50% Flate</h4>
							<h2 className="hero-section__slider-hero-title">
								New Summer Collection
							</h2>
							<p className="hero-section__slider-hero-subtitle">
								World class designers clothes available at a discounted rate!
							</p>
							<button className="hero-section__slider-hero-cta button-text">
								Shop Now
							</button>
						</div>
						<div className="hero-section__slider-content--right">
							<img className="hero-section-image" src={model3} alt="" />
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Hero;
