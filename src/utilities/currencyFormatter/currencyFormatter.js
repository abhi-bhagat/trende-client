const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
	currency: "CAD",
	style: "currency",
});

const currencyFormatter = (number) => {

    return CURRENCY_FORMATTER.format(number)
};


export default currencyFormatter;