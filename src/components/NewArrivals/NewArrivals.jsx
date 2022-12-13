import "./NewArrivals.scss";
import Card from "../Card/Card";
import { Link } from "react-router-dom";

//import images
import kidClothing from "../../assets/clothes/kids-shirt.png";
import womenClothing from "../../assets/clothes/women-dress.png";
import menClothing from '../../assets/clothes/mens-shirt.png'
//
const NewArrivals = () => {
	const descNew = (
		<Link to="/shop">
			<div className="newArrival__container-card__description">
				See All Products
			</div>
		</Link>
	);
	const descNew1 = (
		<div className="newArrival__container-heading">
			<h6 className="newArrival__container-card__description--heading">
				Cotton Kid's shirt
			</h6>
			<p>$ 49.99</p>
		</div>
	);
	const descNew2 = (
		<div className="newArrival__container-heading">
			<h6 className="newArrival__container-card__description--heading">
				Crew Neck Cotton
			</h6>
			<p>$ 49.99</p>
		</div>
	);
	const descNew3 = (
		<div className="newArrival__container-heading">
			<h6 className="newArrival__container-card__description--heading">
				Men's cotton T-Shirt
			</h6>
			<p>$ 49.99</p>
		</div>
	);
	return (
		<div className="newArrival">
			<div className="newArrival__container">
				<div className="newArrival__container--left">
				<Card
					className="newArrival__container-card"
					img=""
					title="Top New Arrival Products"
					description={descNew}
				/>
				<Card
					className="newArrival__container-card"
					img={kidClothing}
					title=""
					description={descNew1}
				/>
				</div>
				<div className="newArrival__container--right">
				<Card
					className="newArrival__container-card"
					img={womenClothing}
					title=""
					description={descNew2}
				/>
				<Card
					className="newArrival__container-card"
					img={menClothing}
					title=""
					description={descNew3}
				/>
				</div>


				
				
				
			</div>
		</div>
	);
};

export default NewArrivals;
