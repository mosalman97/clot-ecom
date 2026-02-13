import { Colors, defaultStyles, Images } from "@/constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image } from "expo-image";
import { Link } from "expo-router";
import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { products, shopCategories } from "@/dummy.local";

const sections = [
	{
		title: "Categories",
		data: shopCategories.slice(0, 5),
		type: "categories",
	},
	{
		title: "Top Selling",
		data: products,
		type: "products",
	},
	{
		title: "New Arrivals",
		data: products,
		type: "products",
	},
];

interface categoryItem {
	id: number;
	name: string;
	image: string;
}

const Home = () => {
	const [categories, setCategories] = useState<categoryItem[]>([]);

	const insets = useSafeAreaInsets();
	return (
		<View
			style={[
				defaultStyles.container,
				{
					paddingTop: insets.top + 6,
				},
			]}
		>
			<View style={styles.header}>
				<View style={styles.mainHeader}>
					<View style={styles.image}>
						<Image
							source={Images.icon_logo}
							style={defaultStyles.imageStyle}
							tintColor={Colors.primary}
						/>
					</View>
					<TouchableOpacity style={styles.wish}>
						<Image
							source={Images.icon_wish}
							style={styles.wishIcon}
							contentFit="contain"
						/>
					</TouchableOpacity>
				</View>
				<View style={styles.searchContainer}>
					<Ionicons name="search" size={16} />
					<TextInput
						placeholder="Search"
						style={styles.searchInput}
						placeholderTextColor={Colors.black}
					/>
				</View>
			</View>
			<View style={styles.categoryContainer}>
				<View style={styles.categoryHeader}>
					<Text style={styles.categoriesText}>Categories</Text>
					<Link href={"/(root)/category-screen"}>
						<Text style={styles.allText}>See All</Text>
					</Link>
				</View>
				<View style={styles.categoryItems}>
					{shopCategories.slice(0, 5).map((item, index) => (
						<TouchableOpacity
							style={styles.categoryItemContainer}
							key={item.id}
						>
							<View style={styles.categoryItem}>
								<Image
									style={[
										defaultStyles.imageStyle,
										{
											resizeMode: "cover",
										},
									]}
									source={{ uri: item.image }}
								/>
							</View>
							<Text style={styles.categoryItemText}>
								{item.name}
							</Text>
						</TouchableOpacity>
					))}
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		paddingHorizontal: 24,
		marginBottom: 24,
	},
	mainHeader: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginBottom: 14,
	},
	searchContainer: {
		width: "100%",
		height: 40,
		backgroundColor: Colors.lowGrey,
		borderRadius: 16,
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 16,
	},
	searchInput: {
		marginLeft: 12,
		width: "80%",
	},
	image: {
		width: 60,
		height: 60,
	},
	wish: {
		width: 40,
		height: 40,
		borderRadius: 50,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: Colors.primary,
	},
	wishIcon: {
		width: 16,
		height: 16,
	},
	categoryContainer: {
		paddingHorizontal: 24,
	},
	categoryHeader: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginBottom: 16,
	},
	categoriesText: {
		color: Colors.black,
		fontSize: 16,
		fontWeight: "bold",
	},
	allText: {
		fontSize: 14,
		color: Colors.black,
	},
	categoryItems: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	categoryItemContainer: {
		alignItems: "center",
	},
	categoryItem: {
		width: 56,
		height: 56,
		backgroundColor: Colors.lowGrey,
		borderRadius: 50,
		marginBottom: 5,
		overflow: "hidden",
		justifyContent: "center",
		alignItems: "center",
	},
	categoryItemText: {
		fontSize: 12,
		fontWeight: "400",
		color: Colors.black,
	},
});
export default Home;
