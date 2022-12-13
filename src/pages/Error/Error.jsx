import "./Error.scss";
import error from "../../assets/images/404.svg";
const Error = () => {
	return (
		<div className="error-page">
			<div className="error-page__container">
				<img src={error} alt="" />
			</div>
		</div>
	);
};

export default Error;
