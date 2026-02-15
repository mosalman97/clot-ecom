import { Button, ProductVariant } from "@/components";
import { Colors, defaultStyles } from "@/constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import React from "react";
import {
	Image,
	ScrollView,
	StyleSheet,
	TouchableOpacity,
	View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ProductDetail = () => {
	const insets = useSafeAreaInsets();

	return (
		<View style={[defaultStyles.container, { paddingTop: insets.top }]}>
			<View style={[styles.header, { paddingTop: insets.top + 10 }]}>
				<TouchableOpacity
					style={styles.backContainer}
					onPress={() => router.back()}
				>
					<Ionicons name="chevron-back" size={16} color={"black"} />
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.backContainer}
					onPress={() => console.log("Favorite")}
				>
					<Ionicons name="heart-outline" size={16} color={"black"} />
				</TouchableOpacity>
			</View>
			<ScrollView
				contentContainerStyle={styles.scrollContent}
				showsVerticalScrollIndicator={false}
			>
				<ScrollView
					horizontal
					showsHorizontalScrollIndicator={false}
					contentContainerStyle={styles.scrollContainer}
				>
					{[1, 2, 3, 4].map((item, index) => (
						<View style={styles.productImage} key={index}>
							<Image
								source={{
									uri: "https://cdn.shopify.com/s/files/1/0293/9277/files/10-20-23Studio7_KF_DJ_11-58-14_37_GFN185AJ_VintageWash_20358_SG.jpg?v=1698684154&width=1000&height=1500&crop=center",
								}}
								style={defaultStyles.imageStyle}
							/>
						</View>
					))}
				</ScrollView>
				<View style={{ paddingHorizontal: 24 }}>
					<ProductVariant type="size" value="M" />
					<ProductVariant type="color" colorValue="red" />
					<ProductVariant type="quantity" value={1} />
				</View>
			</ScrollView>
			<View
				style={[
					styles.bottomButton,
					{ paddingBottom: insets.bottom + 10 },
				]}
			>
				<Button
					type="split"
					leftText="$148"
					rightText="Add to Bag"
					onPress={() => console.log("Add to bag")}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	backContainer: {
		width: 40,
		height: 40,
		backgroundColor: Colors.lowGrey,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 50,
		marginBottom: 24,
	},
	header: {
		paddingHorizontal: 24,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		zIndex: 10,
	},
	scrollContent: {
		paddingTop: 90,
		paddingBottom: 100, // make space for fixed bottom button
	},
	scrollContainer: {
		flexDirection: "row",
		paddingBottom: 24,
		paddingLeft: 24,
	},
	productImage: {
		width: 161,
		height: 248,
		backgroundColor: Colors.lowGrey,
		marginRight: 10,
		borderRadius: 6,
		overflow: "hidden",
	},
	bottomButton: {
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
		paddingHorizontal: 24,
	},
});

export default ProductDetail;
