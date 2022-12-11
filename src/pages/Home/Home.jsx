import "./Home.scss";
import Hero from "../../components/Hero/Hero";
import Category from "../../components/Category/Category";
import BestSale from "../../components/BestSale/BestSale";
import DailyDeals from "../../components/DailyDeals/DailyDeals";
import NewArrivals from "../../components/NewArrivals/NewArrivals";

const Home = () => {
	return (
		<div>
			<Hero />
			<Category />
			<NewArrivals />
			<DailyDeals />
			<BestSale />
		</div>
	);
};

export default Home;
