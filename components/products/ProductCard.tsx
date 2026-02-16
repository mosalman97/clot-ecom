import { Colors, defaultStyles } from "@/constants";
import { ProductCardProps } from "@/types/product";
import { formatCurrency } from "@/utils";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

let ProductCardComponent = ({
	id,
	name,
	image,
	discountedPrice,
	originalPrice,
	currancy,
	onPress,
	onHeartPress,
	containerStyle,
}: ProductCardProps) => {
	return (
		<TouchableOpacity
			key={id}
			style={[styles.container, containerStyle]}
			onPress={onPress}
		>
			<TouchableOpacity
				style={styles.heartContainer}
				onPress={onHeartPress}
			>
				<Ionicons name="heart-outline" size={16} color={"black"} />
			</TouchableOpacity>
			<View style={styles.innerContainer}>
				<Image
					source={{
						uri: image,
					}}
					style={[
						defaultStyles.imageStyle,
						{
							resizeMode: "cover",
						},
					]}
				/>
			</View>
			<View style={styles.textContainer}>
				<Text style={styles.productName}>{name}</Text>
				<View style={styles.priceView}>
					<Text style={styles.discountPrice}>
						{discountedPrice &&
							formatCurrency(discountedPrice, currancy ?? "USD")}
					</Text>
					<Text style={styles.originalPrice}>
						{originalPrice &&
							formatCurrency(originalPrice, currancy ?? "USD")}
					</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export const ProductCard = React.memo(ProductCardComponent);

const styles = StyleSheet.create({
	container: {
		width: 159,
		height: 281,
		backgroundColor: Colors.lowGrey,
		borderRadius: 12,
		overflow: "hidden",
	},
	innerContainer: {
		width: 159,
		height: 220,
		justifyContent: "center",
		alignItems: "center",
	},
	textContainer: {
		paddingHorizontal: 6,
		paddingTop: 8,
	},
	productName: {
		fontSize: 12,
		color: Colors.black,
		fontWeight: "400",
		marginBottom: 8,
	},
	priceView: {
		flexDirection: "row",
	},
	discountPrice: {
		fontSize: 14,
		color: Colors.black,
		fontWeight: "bold",
	},
	originalPrice: {
		fontSize: 12,
		color: Colors.black,
		textDecorationLine: "line-through",
		marginLeft: 8,
	},
	heartContainer: {
		position: "absolute",
		top: 10,
		right: 10,
		zIndex: 10,
		backgroundColor: "white",
		padding: 6,
		borderRadius: 20,
	},
});

export default ProductCard;
