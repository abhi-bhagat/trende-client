import "./Hero.scss";

import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";


import kidModel from "../../assets/images/kid-model.jpeg";
import womanModel from "../../assets/images/woman-model.jpeg";
import manModel from "../../assets/images/man-model.jpeg";
// import sliderBackground from "../../assets/images/slider-background.svg"
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
					<img className="hero-section-image" src={kidModel} alt="" />
				</SwiperSlide>
				<SwiperSlide className="hero-section__slider-background">
					<img className="hero-section-image" src={womanModel} alt="" />
				</SwiperSlide>
				<SwiperSlide className="hero-section__slider-background">
					<img className="hero-section-image" src={manModel} alt="" />
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Hero;
