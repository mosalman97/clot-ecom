import { CategoryItem } from "@/components";
import { Colors, defaultStyles } from "@/constants";
import { shopCategories } from "@/dummy.local";
import Ionicons from "@expo/vector-icons/Ionicons";
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
						<CategoryItem key={index} item={item} />
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
});

export default categoryScreen;
