import "./Cart.scss";
import { useContext, useEffect, useState } from "react";
import shoppingCartContext from "../../context/shoppingCartContext";
import { useNavigate } from "react-router-dom";
//icon
import addIcon from "../../assets/icons/add.svg";
import minusIcon from "../../assets/icons/minus.svg";
import currencyFormatter from "../../utilities/currencyFormatter/currencyFormatter";
import emptyCart from "../../assets/images/empty-cart.svg";
//
const Cart = () => {
	const myContext = useContext(shoppingCartContext);
	const [flag, setFlag] = useState(true);
	const allItems = myContext.cartItems;
	const myProducts = myContext.products;
	const navigate = useNavigate();
	const clickHandler = (e) => {
		e.preventDefault();
		setFlag(false);
		navigate(`/checkout`);
	};

	let total = 0;

	return (
		<div className="cart-page">
			<div className="cart-page__container">
				<div className="cart-page__cart-table">
					<div className="cart-page__cart-table--heading ">
						<div className="cart-page__cart-table--heading-item">
							<h5>Image</h5>
						</div>
						<div className="cart-page__cart-table--heading-item">
							<h5>Product Name</h5>
						</div>
						<div className="cart-page__cart-table--heading-item">
							<h5>Price</h5>
						</div>
						<div className="cart-page__cart-table--heading-item">
							<h5>Qty</h5>
						</div>
						<div className="cart-page__cart-table--heading-item">
							<h5>Total</h5>
						</div>
					</div>

					{allItems &&
						myProducts &&
						allItems.map((item) => {
							const pro = myProducts.find(
								(product) => product.product_id === item.id
							);
							return (
								<div className="cart-page__cart-table--content" key={item.id}>
									<div className="cart-page__cart-table--content-item item-image">
										<img src={pro.product_image} alt="" />
									</div>
									<div className="cart-page__cart-table--content-item">
										<h6>{pro.product_name}</h6>
									</div>
									<div className="cart-page__cart-table--content-item">
										<h6>{currencyFormatter(pro.product_price)}</h6>
									</div>

									<div className="cart-page__cart-table--content-item item-qty">
										<p>
											{/* {plusIcon && item.quantity >= pro.product_qty
												? plusIcon.classList.add("clicks-disabled")
												: console.log("no")} */}
											{flag && (
												<span
													className="arith-back arith-minus"
													onClick={() => {
														// if (plusIcon.classList.contains("clicks-disabled")) {
														// 	plusIcon.classList.remove("clicks-disabled");
														// }
														myContext.decreaseCartQuantity(item.id);
													}}
												>
													<img src={minusIcon} alt="" />
												</span>
											)}

											{item.quantity > pro.product_qty
												? pro.product_qty
												: item.quantity}

											{item.quantity < pro.product_qty && (
												<span
													className="arith-back arith-add"
													onClick={() => {
														if (item.quantity > pro.product_qty) {
															alert("out of stock");
														} else {
															myContext.increaseCartQuantity(item.id);
														}
													}}
												>
													<img src={addIcon} alt="" />
												</span>
											)}
										</p>
									</div>
									<div className="cart-page__cart-table--content-item">
										<h6>
											{item.quantity > pro.product_qty
												? currencyFormatter(pro.product_price * pro.product_qty)
												: currencyFormatter(pro.product_price * item.quantity)}
										</h6>
									</div>
									<div className="hidden">{total=total+(pro.product_price * item.quantity)}</div>
								</div>
							);
						})}

					{allItems.length > 0 && (
						<div className="cart-page__cart--subtotal">
							<div className="cart-page__cart--subtotal--top">
								<div className="cart-page__cart--subtotal--top-left">
									<h4 className="cart-page__cart--subtotal-heading">
										Cart Total:
									</h4>
								</div>
								<div className="cart-page__cart--subtotal--top-right">
									<h6>{currencyFormatter(total)}</h6>
								</div>
							</div>
							<div className="cart-page__cart--subtotal--bottom">
								<button onClick={(e) => clickHandler(e)}>
									Proceed To Checkout
								</button>
							</div>
						</div>
					)}

					{allItems.length <= 0 && (
						<div className="cart-page__cart-nothing">
							<h5>Cart is Empty</h5>
							<img src={emptyCart} alt="" />
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Cart;
