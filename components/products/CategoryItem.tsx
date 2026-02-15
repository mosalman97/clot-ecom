import { Colors, defaultStyles } from "@/constants";
import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export interface ShopCategory {
	id: number;
	name: string;
	image: string;
}

interface CategoryItemProps {
	item: ShopCategory;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ item }) => {
	const router = useRouter();

	const handlePress = () => {
		router.push({
			pathname: "/(root)/productsByCategory",
			params: { categoryId: item.id },
		});
	};

	return (
		<TouchableOpacity style={styles.listItem} onPress={handlePress}>
			<View style={styles.imageContainer}>
				<Image
					style={[defaultStyles.imageStyle, { resizeMode: "cover" }]}
					source={{ uri: item.image }}
				/>
			</View>
			<Text style={styles.itemName}>{item.name}</Text>
		</TouchableOpacity>
	);
};

export default CategoryItem;

const styles = StyleSheet.create({
	listItem: {
		width: "100%",
		height: 64,
		backgroundColor: Colors.lowGrey,
		borderRadius: 12,
		flexDirection: "row",
		alignItems: "center",
		paddingLeft: 12,
		marginBottom: 8,
	},
	imageContainer: {
		width: 40,
		height: 40,
		borderRadius: 35,
		overflow: "hidden",
		marginRight: 16,
	},
	itemName: {
		marginTop: 6,
		fontSize: 14,
		fontWeight: "500",
	},
});
