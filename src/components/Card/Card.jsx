import "./Card.scss";

const Card = ({ className = "card", img = "#", title, description }) => {
	return (
		<div className={`cardComponent ${className}` }>
			<div className="cardComponent-header"><h2>{title}</h2></div>
			<div className="cardComponent-body">
				<img src={img} alt="" />
			</div>
			<div className="cardComponent-footer">{description}</div>
		</div>
	);
};

export default Card;
