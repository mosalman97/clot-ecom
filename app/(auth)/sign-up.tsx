import { Colors, defaultStyles } from "@/constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SignUp = () => {
	const insets = useSafeAreaInsets();
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	return (
		<KeyboardAvoidingView
			style={{ flex: 1, backgroundColor: Colors.white }}
			behavior={Platform.OS === "ios" ? "padding" : undefined}
		>
			<ScrollView
				keyboardShouldPersistTaps="handled"
				contentContainerStyle={{ flexGrow: 1 }}
				showsVerticalScrollIndicator={false}
			>
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
							<Ionicons
								name="chevron-back"
								size={16}
								color={"black"}
							/>
						</TouchableOpacity>
						<Text
							style={[defaultStyles.header, { marginBottom: 32 }]}
						>
							Create Account
						</Text>
						<TextInput
							style={defaultStyles.input}
							placeholder="Firstname"
							placeholderTextColor={Colors.black}
							value={firstName}
							autoCapitalize="none"
							onChangeText={setFirstName}
						/>
						<TextInput
							style={defaultStyles.input}
							placeholder="Lastname"
							placeholderTextColor={Colors.black}
							value={lastName}
							autoCapitalize="none"
							onChangeText={setLastName}
						/>
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
							style={[defaultStyles.button, { marginBottom: 30 }]}
						>
							<Text style={defaultStyles.buttonText}>
								continue
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
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

export default SignUp;
