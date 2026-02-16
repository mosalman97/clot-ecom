export const formatCurrency = (price: number, currency: string) => {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency,
	}).format(price);
};
