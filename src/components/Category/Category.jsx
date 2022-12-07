import "./Category.scss";

//images
import kidModel from "../../assets/images/kid-model.jpeg";
import womanModel from "../../assets/images/woman-model.jpeg";
import manModel from "../../assets/images/man-model.jpeg";

import { Link } from "react-router-dom";

const Category = () => {
	return (
		<div class=" category xl:container flex justify-center items-center w-full 2xl:mx-auto lg:px-20 md:py-12 md:px-6 py-9 px-4">
			<div class=" category__container w-auto md:w-auto grid md:grid-cols-3 lg:w-auto lg:grid-cols-3 grid-cols-1 lg:gap-8 gap-6 max-w-3xl">
				<div class=" category__image-group relative group ">
					<Link to="/shop/women">
						<img
							className="lg:block  w-full category__image"
							src={womanModel}
							alt="Woman"
						/>

						<div class="opacity-0 bg-gradient-to-t from-red-400 via-red-400 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
						<div class="absolute top-0 left-0 w-full h-full flex justify-start items-end opacity-0 hover:opacity-100 p-8">
							<p class="font-semibold text-2xl leading-6 text-white">Women</p>
						</div>
					</Link>
				</div>

				<div class="relative group">
					<Link to="/shop/kids">
						<img
							class="lg:block  w-full category__image"
							src={kidModel}
							alt="Man"
						/>

						<div class="opacity-0 bg-gradient-to-t from-red-400 via-red-400 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
						<div class="absolute top-0 left-0 w-full h-full flex justify-start items-end opacity-0 hover:opacity-100 p-8">
							<p class="font-semibold text-2xl leading-6 text-white">Kids</p>
						</div>
					</Link>
				</div>

				<div class="relative group">
					<Link to="/shop/men">
						<img
							class="lg:block  w-full category__image"
							src={manModel}
							alt="Man"
						/>

						<div class="opacity-0 bg-gradient-to-t from-red-400 via-red-400 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
						<div class="absolute top-0 left-0 w-full h-full flex justify-start items-end opacity-0 hover:opacity-100 p-8">
							<p class="font-semibold text-2xl leading-6 text-white">Men</p>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Category;
