import { Colors, defaultStyles } from "@/constants";
import { formatCurrency } from "@/utils";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ProductCardProps {
	imageUrl: string;
	productName: string;
	discountPrice: number;
	originalPrice: number;
	onPress?: () => void;
	onHeartPress?: () => void;
}

const ProductCard = ({
	imageUrl,
	productName,
	discountPrice,
	originalPrice,
	onPress,
	onHeartPress,
}: ProductCardProps) => {
	return (
		<TouchableOpacity style={styles.container} onPress={onPress}>
			<TouchableOpacity
				style={styles.heartContainer}
				onPress={onHeartPress}
			>
				<Ionicons name="heart-outline" size={16} color={"black"} />
			</TouchableOpacity>
			<View style={styles.innerContainer}>
				<Image
					source={{
						uri: imageUrl,
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
				<Text style={styles.productName}>{productName}</Text>
				<View style={styles.priceView}>
					<Text style={styles.discountPrice}>
						{formatCurrency(discountPrice, "USD")}
					</Text>
					<Text style={styles.originalPrice}>
						{formatCurrency(originalPrice, "USD")}
					</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		width: 159,
		height: 281,
		backgroundColor: Colors.lowGrey,
		borderRadius: 12,
		marginTop: 20,
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
