import "./Home.scss";
import Hero from "../../components/Hero/Hero";
import Category from "../../components/Category/Category";
// import BestSale from "../../components/BestSale/BestSale";
import DailyDeals from "../../components/DailyDeals/DailyDeals";
import NewArrivals from "../../components/NewArrivals/NewArrivals";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
	return (
		<div>
			<Hero />
			<Category />
			<NewArrivals />
			<DailyDeals />
			<Testimonials />
			{/* <BestSale /> */}
		</div>
	);
};

export default Home;
