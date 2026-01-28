import React from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	TextInput,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image } from "expo-image";
import { Colors, defaultStyles, Images } from "@/constants";

const Home = () => {
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
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		paddingHorizontal: 24,
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
});
export default Home;
