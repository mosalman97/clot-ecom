import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { defaultStyles, Colors } from "@/constants";
import { Image } from "expo-image";
import { router } from "expo-router";

const resetScreen = () => {
	return (
		<View style={[defaultStyles.container, styles.container]}>
			<Image
				source={require("../../assets/icons/icon-email.png")}
				style={styles.imageStyle}
			/>
			<Text
				style={[
					defaultStyles.header,
					{ fontSize: 24, textAlign: "center", marginBottom: 24 },
				]}
			>
				We Sent you an Email to reset you password.
			</Text>
			<TouchableOpacity
				style={[defaultStyles.button, { width: "50%" }]}
				onPress={() => {
					router.replace("/(auth)/sign-in");
				}}
			>
				<Text style={defaultStyles.buttonText}>Return to Login</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
	},
	imageStyle: {
		width: 100,
		height: 100,
		marginBottom: 24,
	},
});

export default resetScreen;
