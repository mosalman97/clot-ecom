import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";

import { Colors, defaultStyles } from "@/constants";
import { Link } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SignIn = () => {
	const insets = useSafeAreaInsets();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	return (
		<View
			style={[
				defaultStyles.container,
				{
					paddingTop: insets.top + 45,
				},
			]}
		>
			<View style={{ paddingHorizontal: 27 }}>
				<Text style={[defaultStyles.header, { marginBottom: 32 }]}>
					Sign in
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
				<TextInput
					style={defaultStyles.input}
					placeholder="Password"
					placeholderTextColor={Colors.black}
					secureTextEntry
					value={password}
					onChangeText={setPassword}
				/>
				<TouchableOpacity
					style={[defaultStyles.button, { marginBottom: 22 }]}
				>
					<Text style={defaultStyles.buttonText}>continue</Text>
				</TouchableOpacity>
				<Link href={"/(auth)/sign-up"} style={{ marginBottom: 12 }}>
					<Text style={styles.accountText}>
						Dont't have an Account?{" "}
						<Text style={styles.createText}>Create Account</Text>
					</Text>
				</Link>
				<Link href={"/(auth)/reset-password"}>
					<Text style={styles.accountText}>
						Forgot Password?{" "}
						<Text style={styles.createText}>Reset</Text>
					</Text>
				</Link>
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
});

export default SignIn;
