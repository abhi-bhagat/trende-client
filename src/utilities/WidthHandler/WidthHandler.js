const widthHandler = (setCurrentWidth) => {
	const width = window.innerWidth;

	// console.log(width);
	return setCurrentWidth(width);
};

export default widthHandler;
