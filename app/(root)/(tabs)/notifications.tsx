import { defaultStyles } from "@/constants";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Notifications = () => {
	const insets = useSafeAreaInsets();
	return (
		<View
			style={[defaultStyles.container, { paddingTop: insets.top + 20 }]}
		>
			<Text style={[defaultStyles.header, styles.header]}>
				Notifications
			</Text>
			<FlatList data={[1,2,3,4]} renderItem={({ item }) => (
				<View>
					<Text>{item}</Text>
				</View>
			)} />
		</View>
	);
};

export default Notifications;

const styles = StyleSheet.create({
	header: {
		fontSize: 16,
		textAlign: "center",
	},
});
