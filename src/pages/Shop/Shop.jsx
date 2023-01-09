import "./Shop.scss";
import { useParams, Link } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import axios from "axios";
import shoppingCartContext from "../../context/shoppingCartContext";

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
				setProducts(res.data);
			})
			.catch((e) => console.log(`Error fetching category ${e}`));
	};

	//get all products
	const getAllProducts = (single) => {
		axios
			.get(`${URL}`)
			.then((res) => {
				if (!single) {
					setProducts(res.data);
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
				</div>
			</div>
		);
	} else {
		//return all the products
		return (
			<div className="shop-page">
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
					</div>
					<div className=" grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-8  md:gap-6 gap-4 ">
						{products &&
							products
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
										<div
											className="relative group mb-12 h-80 "
											key={product.product_id}
										>
											<Link to={`/shop/${product.product_id}`}>
												{" "}
												<img
													src={product.product_image}
													alt="cloth"
													className=" sm:block sm:h-full   object-cover h-64"
												/>
												<div className="shop-page__card__desc">
													<p className="shop-page__card__desc-name">
														{product.product_name}
													</p>
													<p className="shop-page__card__desc-price">
														{currencyFormatter(product.product_price)}
													</p>
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
										</div>
									);
								})}
					</div>
				</div>
			</div>
		);
	}
};

export default Shop;
