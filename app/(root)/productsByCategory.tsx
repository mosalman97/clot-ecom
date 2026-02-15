import { ProductCard } from "@/components";
import { Colors, defaultStyles } from "@/constants";
import { products } from "@/dummy.local";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import React from "react";
import {
	FlatList,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const categoryProducts = () => {
	const insets = useSafeAreaInsets();
	return (
		<View
			style={[
				defaultStyles.container,
				{
					paddingTop: insets.top + 30,
					paddingBottom: insets.bottom + 45,
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
				<View>
					<FlatList
						data={products}
						numColumns={2}
						keyExtractor={(item) => item.id}
						showsVerticalScrollIndicator={false}
						ListHeaderComponent={() => {
							return (
								<Text
									style={[
										defaultStyles.header,
										{
											marginBottom: 23,
											fontSize: 18,
											marginTop: 16,
										},
									]}
								>
									Hoddies
								</Text>
							);
						}}
						renderItem={({ item }) => (
							<ProductCard
								productName={item.name}
								imageUrl={item.images[0]}
								discountPrice={item.discountPrice}
								originalPrice={item.price}
								currancy={item.currency}
								containerStyle={{
									marginRight: 20,
									marginBottom: 20,
								}}
							/>
						)}
					/>
				</View>
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
	},
});

export default categoryProducts;
