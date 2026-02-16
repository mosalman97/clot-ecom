export type VariantType = "size" | "color" | "quantity" | "";

export type SizeVariant = {
	type: "size";
	name: string;
	value: string;
	stock: number;
};

export type ColorVariant = {
	type: "color";
	name: string;
	value: string;
};

export type SelectedVariant = SizeVariant | ColorVariant;

export interface ProductCardProps {
	id: string;
	name: string;
	image: string;
	discountedPrice?: number;
	originalPrice?: number;
	currancy?: string;
	onPress?: () => void;
	onHeartPress?: () => void;
	containerStyle?: {};
}
