import "./Home.scss";
import Hero from "../../components/Hero/Hero";
import Category from "../../components/Category/Category";
import BestSale from "../../components/BestSale/BestSale";
import DailyDeals from "../../components/DailyDeals/DailyDeals";
const Home = () => {
	return (
		<div>
			<Hero />
			<Category />
			<DailyDeals />
			<BestSale />
		</div>
	);
};

export default Home;
