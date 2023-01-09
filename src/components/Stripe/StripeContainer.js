import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Checkout from "../../pages/Checkout/Checkout";

const PUBLIC_KEY = process.env.REACT_STRIPE_PUBLIC;

const stripeTestPromise = loadStripe(PUBLIC_KEY);
const StripeContainer = () => {
	<Elements stripe={stripeTestPromise}>
		<Checkout />
	</Elements>;
};

export default StripeContainer;
