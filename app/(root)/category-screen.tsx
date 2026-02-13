import { Colors, defaultStyles } from "@/constants";
import { shopCategories } from "@/dummy.local";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image } from "expo-image";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const categoryScreen = () => {
	const insets = useSafeAreaInsets();
	return (
		<View
			style={[
				defaultStyles.container,
				{
					paddingTop: insets.top + 30,
				},
			]}
		>
			<View style={{ paddingHorizontal: 27 }}>
				<TouchableOpacity
					style={styles.backContainer}
					onPress={() => {
						router.back();
					}}
				>
					<Ionicons name="chevron-back" size={16} color={"black"} />
				</TouchableOpacity>
				<Text
					style={[
						defaultStyles.header,
						{ marginBottom: 32, fontSize: 18 },
					]}
				>
					Shop by Categories
				</Text>
				<View style={styles.listContainer}>
					{shopCategories.map((item, index) => (
						<TouchableOpacity style={styles.listItem} key={item.id}>
							<View style={styles.imageContainer}>
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
							<Text style={styles.itemName}>{item.name}</Text>
						</TouchableOpacity>
					))}
				</View>
			</View>
		</View>
	);
};

// define your styles
const styles = StyleSheet.create({
	backContainer: {
		width: 40,
		height: 40,
		backgroundColor: Colors.lowGrey,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 50,
		marginBottom: 20,
	},
	listContainer: {},
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
		borderRadius: 50,
		marginBottom: 5,
		overflow: "hidden",
		justifyContent: "center",
		alignItems: "center",
		marginRight: 16,
	},
	itemName: {
		fontSize: 16,
		color: Colors.black,
	},
});

export default categoryScreen;
