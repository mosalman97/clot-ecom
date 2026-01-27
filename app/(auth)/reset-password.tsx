import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	ScrollView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors, defaultStyles } from "@/constants";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Link, router } from "expo-router";

const resetPassword = () => {
	const insets = useSafeAreaInsets();
	const [email, setEmail] = useState("");
	return (
		<View
			style={[
				defaultStyles.container,
				{
					paddingTop: insets.top + 30,
				},
			]}
		>
			<View>
				<TouchableOpacity
					style={styles.backContainer}
					onPress={() => {
						router.back();
					}}
				>
					<Ionicons name="chevron-back" size={16} color={"black"} />
				</TouchableOpacity>
				<Text style={[defaultStyles.header, { marginBottom: 32 }]}>
					Forgot Password
				</Text>
				<TextInput
					style={defaultStyles.input}
					placeholder="Email Address"
					placeholderTextColor={Colors.black}
					keyboardType="email-address"
					value={email}
					autoCapitalize="none"
					onChangeText={setEmail}
				/>

				<TouchableOpacity
					onPress={() => {
						router.push("/(auth)/reset-screen");
					}}
					style={[defaultStyles.button, { marginBottom: 30 }]}
				>
					<Text style={defaultStyles.buttonText}>continue</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

// define your styles
const styles = StyleSheet.create({
	accountText: {
		fontSize: 14,
		color: Colors.black,
		fontWeight: "400",
	},
	createText: {
		fontSize: 14,
		color: Colors.black,
		fontWeight: "bold",
	},
	backContainer: {
		width: 40,
		height: 40,
		backgroundColor: Colors.lowGrey,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 50,
		marginBottom: 20,
	},
});

export default resetPassword;
