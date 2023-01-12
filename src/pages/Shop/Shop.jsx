import "./Shop.scss";
import { useParams, Link } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import axios from "axios";
import shoppingCartContext from "../../context/shoppingCartContext";
// import Rating from "@mui/material";
// framer motion
import { motion } from "framer-motion";
import avatar from '../../assets/images/avatar.png'
//

//mui
import { Rating, Slider } from "@mui/material";
//
//icons
import cartIcon from "../../assets/icons/cart-white.svg";
import wishlistIcon from "../../assets/icons/wishlist-white.svg";
import addIcon from "../../assets/icons/add.svg";
import minusIcon from "../../assets/icons/minus.svg";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
//util
import currencyFormatter from "../../utilities/currencyFormatter/currencyFormatter";

//
const Shop = ({ products, setProducts }) => {
	const myContext = useContext(shoppingCartContext);
	const params = useParams();
	const [qty, setQty] = useState(1);
	const [val, setVal] = useState("");
	const [sliderVal, setSliderVal] = useState([0, 500]);
	//filters
	const [filtered, setFiltered] = useState([]);
	const [ratings, setRatings] = useState([]);
	const [category, setCategory] = useState([]);
	const qtyAdd = () => {
		// console.log(products[0].product_qty);
		if (qty < products[0].product_qty) {
			setQty(qty + 1);
			// console.log("ok")
		} else {
			setQty(products[0].product_qty);
		}
	};
	const qtySub = () => {
		if (qty > 0) {
			setQty(qty - 1);
		} else {
			setQty(0);
		}
	};

	const URL = `http://localhost:8080/shop`;

	//get product by category
	const getProductByCategory = (category) => {
		axios
			.get(`${URL}/category/${category}`)
			.then((res) => {
				setFiltered(res.data);
			})
			.catch((e) => console.log(`Error fetching category ${e}`));
	};
	//
	//get all products
	const getAllProducts = (single) => {
		axios
			.get(`${URL}`)
			.then((res) => {
				if (!single) {
					setProducts(res.data);
					setFiltered(res.data);
				} else {
					const foundProduct = res.data.find(
						(product) => product.product_id === params.id
					);
					console.log(typeof foundProduct);
					setProducts([foundProduct]);
				}
			})
			.catch((e) => console.log(`Error fetching data ${e}`));
	};

	// filter tags
	const [filterTags, setFilterTags] = useState([]);
	// FILTER HANDLERS
	//check handler
	const checkHandler = (e) => {
		if (e.target.checked) {
			setFilterTags([...filterTags, e.target.value]);
		} else {
			setFilterTags(
				filterTags.filter((filterTag) => filterTag !== e.target.value)
			);
		}
	};

	const ratingHandler = () => {};
	const categoryHandler = () => {};

	const mySetProd = (e) => {
		let remainingProducts = products.filter((product) => {
			if (filterTags.length > 0) {
				// console.log(`TAGS`, filterTags);
				filterTags.forEach((filterTag) => {
					const valArr = Object.values(product);
					const tArr = valArr.toString();
					const filterArr = tArr.split(",");
					// console.log(`valArr`, filterArr);
					// console.log(`filterArr`, filterTag);

					if (filterArr.includes(filterTag)) {
						// console.log(`if running`);

						abc = [...abc, product];

						setFiltered(abc);
					} else {
						// console.log(`else running`);
					}
				});
			} else {
				setFiltered(products);
			}
		});
	};
	// for filtering product by brand
	useEffect(() => {
		if (products) {
			mySetProd();
		}
	}, [filterTags]);

	let abc = [];

	//

	useEffect(() => {
		if (params.category) {
			getProductByCategory(params.category);
		} else if (params.id) {
			getAllProducts(params.id);
		} else {
			getAllProducts();
		}
	}, [params.category]);
	useEffect(() => {
		if (params.id) {
			getAllProducts(params.id);
		} else if (params.category) {
			getProductByCategory(params.category);
		} else {
			getAllProducts();
		}
	}, [params.id]);

	if (params.id) {
		// getAllProducts(params.id);

		return (
			// return single product
			<div className="shop-page">
				<div className="shop-page__container-prod">
					<div className="flex ">
						<div className="single-product__image-container w-1/3 p-8 object-cover">
							{products[0] && (
								<img
									className="h-96 object-cover"
									src={products[0].product_image}
									alt=""
								/>
							)}
						</div>
						<div className="single-product__desc-container flex flex-col justify-top items-start p-8">
							{products[0] && (
								<h4 className="single-product__desc-container--heading">
									{products[0].product_name}
								</h4>
							)}
							{products[0] && (
								<h6>{currencyFormatter(products[0].product_price)}</h6>
							)}
							{products[0] && (
								<Rating value={products[0].product_stars} readOnly />
							)}
							{products[0] && (
								<p className="py-4">{products[0].product_description}</p>
							)}
							<div className="single-product__qty-container ">
								<div className="single-product__qty-container--top">
									<h6>Quantity</h6>
								</div>
								<div className="single-product__qty-container--bottom flex flex-column items-center justify-center">
									<span
										className="qty-minus"
										onClick={() => {
											qtySub();
										}}
									>
										<img src={minusIcon} alt="" />
									</span>
									<p>{qty}</p>
									<span
										className="qty-plus"
										onClick={() => {
											qtyAdd();
										}}
									>
										<img src={addIcon} alt="" />
									</span>

									<div
										onClick={() =>
											myContext.singleIncreaseCartQuantity(
												products[0].product_id,
												qty
											)
										}
										className="single-product__qty-container--bottom--addCart"
									>
										<span>Add to Cart</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="p-8 mt-6 shop-page__container-prod__comments">
						<div className=" shop-page__container-prod__comments--post">
							<h4 className="single-product__desc-container--heading">
								Write a Review
							</h4>
							<form action="">
								<div className="w-full flex flex-col mt-1">
									{/* <label className="text-base font-semibold leading-none text-gray-800">
									Review
								</label> */}
									<textarea
										tabIndex={0}
										aria-label="leave a message"
										type="name"
										className="contact-form__textarea h-28 text-base leading-none text-gray-900 p-3 focus:oultine-none  mt-4 bg-gray-100 border  border-gray-200 placeholder-black-500 resize-none"
										// defaultValue={address}
										placeholder="Please input your review"
										// onChange={(e) => setAddress(e.target.value)}
									/>
								</div>

								<div className="text-center flex  justify-end mt-4 lg:text-left">
									<button
										type="button"
										className="w-24 comment_button signup-page__button--google mr-4 inline-block w-full px-7 py-3 text-white font-medium text-sm leading-snug uppercase  shadow-md  hover: focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
										// onClick={closeModalHandler}
									>
										Cancel
									</button>
									<button
										type="submit"
										className="w-24 comment_button signup-page__button--login inline-block w-full px-7 py-3 text-white font-medium text-sm leading-snug uppercase  shadow-md  hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
										// onClick={loginHandler}
									>
										Post
									</button>
								</div>
							</form>
						</div>
						<div className=" mt-8 shop-page__container-prod__comments--view">
							<h4 className="single-product__desc-container--heading">
								Reviews
							</h4>

							<div className="flex flex-col w-full mb-4">
								{products[0] &&
									JSON.parse(products[0].product_reviews).map((comment) => {
										return (
											<div className="flex w-full border-2 border-solid border-grey flex-col md:flex-row bg-white mt-4">
												<div className="flex items-center justify-center w-20">
													<img
														className="  rounded-full  w-14 h-14"
														src={avatar}
														alt=""
													/>
												</div>
												<div className="p-6 flex flex-col justify-start">
													<h5 className="text-gray-900 text-xl font-medium mb-2">
														Anonymous
													</h5>
													<p className="text-gray-700 text-base mb-4">
														{comment.comment}
													</p>
												</div>
											</div>
										);
									})}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		//return all the products
		return (
			<div layout className="shop-page">
				<div className="shop-page__container">
					<div className="shop-page__filters">
						<div className="shop-page__filters-search">
							<input
								tabIndex={0}
								arial-label="Please input name"
								type="text"
								className=" text-base leading-none text-gray-900 p-3 focus:oultine-none    mt-4 bg-gray-100 border  border-gray-200 placeholder-gray-100"
								placeholder="Search items"
								// required
								value={val}
								onChange={(e) => setVal(e.target.value)}
							/>
							<SearchOutlinedIcon
								sx={{
									display: "flex",
									justifyContent: "center",
									backgroundColor: "#F3F4F6",
									height: "3rem",
									width: "2rem",
									border: "none",
								}}
							/>
						</div>
						<hr className="h-px my-4 bg-gray-200 border-0" />
						{/* BY BRAND */}
						<div className="shop-page__filters-brand">
							<h6 className="shop-page__filters-brand--title mb-2">By Brand</h6>

							<div className="flex items-center mb-1">
								<input
									id="zara"
									type="checkbox"
									value="Zara"
									className="shop-page__filters-brand--checkbox  w-4 h-4 text-red-600 bg-gray-100 border-gray-300"
									onChange={(e) => {
										checkHandler(e);
									}}
								/>
								<label
									htmlFor="zara"
									className="ml-2 text-sm font-medium text-black-100"
								>
									Zara
								</label>
							</div>

							<div className="flex items-center mb-1">
								<input
									id="Puma"
									type="checkbox"
									value="Puma"
									onChange={(e) => {
										checkHandler(e);
									}}
									className="shop-page__filters-brand--checkbox  w-4 h-4 text-red-600 bg-gray-100 border-gray-300"
								/>
								<label
									htmlFor="puma"
									className="ml-2 text-sm font-medium text-black-100"
								>
									Puma
								</label>
							</div>
							<div className="flex items-center mb-4">
								<input
									id="aritzia"
									type="checkbox"
									value="Aritzia"
									onChange={(e) => {
										checkHandler(e);
										// mySetProd();
									}}
									className="shop-page__filters-brand--checkbox  w-4 h-4 text-red-600 bg-gray-100 border-gray-300"
								/>
								<label
									htmlFor="aritzia"
									className="ml-2 text-sm font-medium text-black-100"
								>
									Aritzia
								</label>
							</div>
						</div>

						{/* BY CATEGORY  */}
						<hr className="h-px my-4 bg-gray-200 border-0" />
						<div className="shop-page__filters-category">
							<h6 className="shop-page__filters-category--title mb-2">
								By Category
							</h6>
							<div className="flex items-center mb-1">
								<input
									id="men"
									type="checkbox"
									value="Mens"
									className="shop-page__filters-brand--checkbox  w-4 h-4 text-red-600 bg-gray-100 border-gray-300"
									onChange={(e) => {
										checkHandler(e);
									}}
								/>
								<label
									htmlFor="men"
									className="ml-2 text-sm font-medium text-black-100"
								>
									Men
								</label>
							</div>
							<div className="flex items-center mb-1">
								<input
									id="women"
									type="checkbox"
									value="Women"
									className="shop-page__filters-brand--checkbox  w-4 h-4 text-red-600 bg-gray-100 border-gray-300"
									onChange={(e) => {
										checkHandler(e);
									}}
								/>
								<label
									htmlFor="women"
									className="ml-2 text-sm font-medium text-black-100"
								>
									Women
								</label>
							</div>
							<div className="flex items-center mb-1">
								<input
									id="kids"
									type="checkbox"
									value="Kids"
									className="shop-page__filters-brand--checkbox  w-4 h-4 text-red-600 bg-gray-100 border-gray-300"
									onChange={(e) => {
										checkHandler(e);
									}}
								/>
								<label
									htmlFor="kids"
									className="ml-2 text-sm font-medium text-black-100"
								>
									Kids
								</label>
							</div>
						</div>
						{/* ratings */}
						<hr className="h-px my-4 bg-gray-200 border-0" />

						<div className="shop-page__filters-ratings">
							<h6 className="shop-page__filters-category--title mb-2">
								By Ratings
							</h6>
							<div className="flex items-center mb-1">
								<input
									id="5-star"
									type="checkbox"
									value="5"
									onChange={(e) => {
										checkHandler(e);
									}}
									className="shop-page__filters-brand--checkbox  w-4 h-4 text-red-600 bg-gray-100 border-gray-300"
								/>
								<label
									htmlFor="5-star"
									className="ml-2 text-sm font-medium text-black-100"
								>
									<Rating name="read-only" value={5} readOnly />
								</label>
							</div>
							<div className="flex items-center mb-1">
								<input
									id="4-star"
									type="checkbox"
									value={4}
									onChange={(e) => {
										checkHandler(e);
									}}
									className="shop-page__filters-brand--checkbox  w-4 h-4 text-red-600 bg-gray-100 border-gray-300"
								/>
								<label
									htmlFor="4-star"
									className="ml-2 text-sm font-medium text-black-100"
								>
									<Rating name="read-only" value={4} readOnly />
								</label>
							</div>
							<div className="flex items-center mb-1">
								<input
									id="3-star"
									type="checkbox"
									value={3}
									onChange={(e) => {
										checkHandler(e);
									}}
									className="shop-page__filters-brand--checkbox  w-4 h-4 text-red-600 bg-gray-100 border-gray-300"
								/>
								<label
									htmlFor="3-star"
									className="ml-2 text-sm font-medium text-black-100"
								>
									<Rating name="read-only" value={3} readOnly />
								</label>
							</div>
							<div className="flex items-center mb-1">
								<input
									id="2-star"
									type="checkbox"
									value={2}
									onChange={(e) => {
										checkHandler(e);
									}}
									className="shop-page__filters-brand--checkbox  w-4 h-4 text-red-600 bg-gray-100 border-gray-300"
								/>
								<label
									htmlFor="2-star"
									className="ml-2 text-sm font-medium text-black-100"
								>
									<Rating name="read-only" value={2} readOnly />
								</label>
							</div>
							<div className="flex items-center mb-1">
								<input
									id="1-star"
									type="checkbox"
									value={1}
									onChange={(e) => {
										checkHandler(e);
									}}
									className="shop-page__filters-brand--checkbox  w-4 h-4 text-red-600 bg-gray-100 border-gray-300"
								/>
								<label
									htmlFor="1-star"
									className="ml-2 text-sm font-medium text-black-100"
								>
									<Rating name="read-only" value={1} readOnly />
								</label>
							</div>
						</div>
					</div>
					<motion.div
						layout="true"
						className=" grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-8  md:gap-6 gap-4 "
					>
						{products &&
							filtered

								.filter((prod) => {
									if (val === "") {
										return prod;
									} else if (
										prod.product_name
											.toLowerCase()
											.includes(val.toLocaleLowerCase())
									) {
										return prod;
									}
								})
								.map((product) => {
									return (
										<motion.div
											layout="true"
											className="shop-page__card relative group mb-12 h-80 "
											key={product.product_id}
										>
											<Link to={`/shop/${product.product_id}`}>
												{" "}
												<img
													src={product.product_image}
													alt="cloth"
													className=" sm:block sm:h-full   object-cover h-64"
												/>
												<div className="shop-page__card__desc relative">
													<div>
														<p className="shop-page__card__desc-name">
															{product.product_name}
														</p>
														<p className="shop-page__card__desc-price">
															{currencyFormatter(product.product_price)}
														</p>
													</div>

													<div>
														<Rating
															name="read-only"
															value={product.product_stars}
															readOnly
															size="small"
														/>
													</div>
													<div className=" mynewclass absolute top-0 right-0 left-0 bottom-0 w-full opacity-0 hover:opacity-100 h-full">
														Click here to view product
													</div>
												</div>
											</Link>
											<div className="opacity-0 bg-gradient-to-t from-black via-black to-opacity-30 group-hover:opacity-50 absolute top-0 right-0 h-full w-full" />

											<div className=" absolute top-1 right-2 w-full h-full flex justify-end items-top opacity-0 hover:opacity-100">
												<div className="shop-page__card--hover z-5">
													<span
														className="shop-page__card--hover--back"
														onClick={() => {
															myContext.increaseCartQuantity(
																product.product_id
															);
														}}
													>
														<img src={cartIcon} alt="" />
													</span>
													<span className="shop-page__card--hover--back">
														<img src={wishlistIcon} alt="" />
													</span>
												</div>
											</div>
										</motion.div>
									);
								})}
					</motion.div>
				</div>
			</div>
		);
	}
};

export default Shop;
