import "./Category.scss";

//images
import kidModel from "../../assets/images/kid-model.jpeg";
import womanModel from "../../assets/images/woman-model.jpeg";
import manModel from "../../assets/images/man-model.jpeg";

import { Link } from "react-router-dom";

const Category = () => {
	return (
		<>
			<h4 className="category-header">Shop by Category</h4>
			<div className=" category xl:container flex justify-center items-center w-full 2xl:mx-auto lg:px-20 md:py-12 md:px-6 py-9 px-4">
				<div className=" category__container w-auto md:w-auto grid md:grid-cols-3 lg:w-auto lg:grid-cols-3 grid-cols-1 lg:gap-8 gap-6 max-w-3xl">
					<div className=" category__image-group relative group ">
						<Link to="/shop/category/women">
							<img
								className="lg:block  w-full category__image"
								src={womanModel}
								alt="Woman"
							/>

							<div className="opacity-0 bg-gradient-to-t from-red-400 via-red-400 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
							<div className="absolute top-0 left-0 w-full h-full flex justify-start items-end opacity-0 hover:opacity-100 p-8">
								<p className="font-semibold text-2xl leading-6 text-white">Women</p>
							</div>
						</Link>
					</div>

					<div className="relative group">
						<Link to="/shop/category/kids">
							<img
								className="lg:block  w-full category__image"
								src={kidModel}
								alt="Man"
							/>

							<div className="opacity-0 bg-gradient-to-t from-red-400 via-red-400 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
							<div className="absolute top-0 left-0 w-full h-full flex justify-start items-end opacity-0 hover:opacity-100 p-8">
								<p className="font-semibold text-2xl leading-6 text-white">Kids</p>
							</div>
						</Link>
					</div>

					<div className="relative group">
						<Link to="/shop/category/mens">
							<img
								className="lg:block  w-full category__image"
								src={manModel}
								alt="Man"
							/>

							<div className="opacity-0 bg-gradient-to-t from-red-400 via-red-400 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
							<div className="absolute top-0 left-0 w-full h-full flex justify-start items-end opacity-0 hover:opacity-100 p-8">
								<p className="font-semibold text-2xl leading-6 text-white">Men</p>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Category;
