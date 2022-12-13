import "./Shop.scss";
import { useParams, Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import axios from "axios";
import shoppingCartContext from "../../context/shoppingCartContext";

//icons
import cartIcon from "../../assets/icons/cart-white.svg";
import wishlistIcon from "../../assets/icons/wishlist-white.svg";

//util
import currencyFormatter from "../../utilities/currencyFormatter/currencyFormatter";
//
const Shop = ({ products, setProducts }) => {
	const myContext = useContext(shoppingCartContext);
	const params = useParams();

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
				setProducts(res.data);
			})
			.catch((e) => console.log(`Error fetching data ${e}`));
	};

	//
	useEffect(() => {
		if (params.category) {
			getProductByCategory(params.category);
		} else {
			getAllProducts();
		}
	}, [params.category]);

	return (
		<div className="shop-page">
			<div className="shop-page__container">
				<div className="shop-page__filters"></div>
				<div className=" grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-8  md:gap-6 gap-4 mt-10">
					{products &&
						products.map((product) => {
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
													onClick={()=>{myContext.increaseCartQuantity(
														product.product_id
													)}}
												>
													<img src={cartIcon} alt="" />
												</span>
												<span className="shop-page__card--hover--back"
												>
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
};

export default Shop;
