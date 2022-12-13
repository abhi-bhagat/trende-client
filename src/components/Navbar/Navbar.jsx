import "./Navbar.scss";
import Hamburger from "hamburger-react";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import shoppingCartContext from "../../context/shoppingCartContext";


// assets
import searchIcon from "../../assets/icons/search.svg";
import wishList from "../../assets/icons/heart.svg";
import cartIcon from "../../assets/icons/cart.svg";
import profileIcon from "../../assets/icons/profile.svg";
//
const Navbar = () => {
	// const [isOpen, setOpen] = useState(false);
	// console.log(profileIcon);
	const myContext = useContext(shoppingCartContext);


	return (
		<div className="sticky top-0 z-50 bg-white">
			<div className="container-navbar ">
				<div className="site-navbar flex justify-between p-2 ">
					<div className="site-navbar__logo">
						<h3 className="site-navbar__heading">
							<Link to="/">trendE</Link>
						</h3>
					</div>
					<div className="site-navbar__contents">
						<div className="site-navbar__list--left">
							<ul className="site-navbar__list-pages">
								<li className="site-navbar__list-pages-item">
									<Link to="/shop">Shop</Link>
								</li>
								<li className="site-navbar__list-pages-item">
									<Link to="/about">About Us</Link>
								</li>
								<li className="site-navbar__list-pages-item">
									<Link to="/contact">Contact Us</Link>
								</li>
							</ul>
						</div>
						<div className="site-navbar__list--right">
							<ul className="site-navbar__list-actions">
								<li className="site-navbar__list-actions-item">
									<Link to="/search">
										<img src={searchIcon} alt="search icon" />
									</Link>
								</li>
								<li className="site-navbar__list-actions-item">
									<Link to="/wishlist">
										<img src={wishList} alt="search icon" />
									</Link>
								</li>
								<li className="site-navbar__list-actions-item cart">
									<Link to="/cart">
										<img src={cartIcon} alt="search icon" />
									<div className="cart__count absolute  top-0 -right-1 rounded-full flex align-center justify-center h-4 w-4">{myContext.cartItems.length}</div>
									</Link>
								</li>
								<li className="site-navbar__list-actions-item">
									<Link to="/profile">
										<img src={profileIcon} alt="search icon" />
									</Link>
								</li>
							</ul>
						</div>
						<div className="site-navbar__hamburger">
							<Hamburger
								direction="left"
								color="#FF6F61"
								size="28"
								label="show menu"
								onToggle={(toggled) => {
									const myMenu = document.querySelector(
										".site-navbar__list--mobile"
									);

									if (toggled) {
										myMenu && myMenu.classList.add("show");
									} else {
										myMenu.classList.remove("show");
									}
								}}
							/>
						</div>
					</div>
				</div>
			</div>
			{/* mobile navbar */}
			<div className="site-navbar__list--mobile transition-all ">
				<ul className="site-navbar__list--mobile-list">
					<div className="site-navbar__list--mobile-list--top">
						<li className="site-navbar__list--mobile-list--item">
							<Link to="/shop">
								<h3>Shop</h3>
							</Link>
						</li>

						<li className="site-navbar__list--mobile-list--item">
							<Link to="/search">
								<h3>Search</h3>
							</Link>
						</li>
						<li className="site-navbar__list--mobile-list--item">
							<Link to="/wishlist">
								{" "}
								<h3>Wishlist</h3>{" "}
							</Link>{" "}
						</li>
						<li className="site-navbar__list--mobile-list--item ">
							<Link to="/cart">
								<h3>Cart</h3>{" "}
							</Link>
						</li>
					</div>
					<div className="site-navbar__list--mobile-list--bottom">
						<li className="site-navbar__list--mobile-list--item">
							<Link to="/profile">
								{" "}
								<h3>Profile</h3>{" "}
							</Link>{" "}
						</li>
						<li className="site-navbar__list--mobile-list--item">
							<Link to="/contact">
								{" "}
								<h3>Contact Us</h3>{" "}
							</Link>{" "}
						</li>
					</div>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
