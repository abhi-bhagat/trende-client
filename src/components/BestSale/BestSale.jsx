import "./BestSale.scss";
import { useEffect, useState } from "react";
import widthHandler from "../../utilities/WidthHandler/WidthHandler";
const BestSale = () => {
	const [currentWidth, setCurrentWidth] = useState(window.width);
	useEffect(() => {
		window.addEventListener("resize", () => widthHandler(setCurrentWidth));
	}, []);
	return <div>{currentWidth > 1000 && console.log("great")}</div>;
};

export default BestSale;
