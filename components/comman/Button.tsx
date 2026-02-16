import { Colors } from "@/constants";
import React from "react";
import {
	ActivityIndicator,
	GestureResponderEvent,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";

type ButtonProps = {
	type?: "center" | "split";
	centerText?: string;
	leftText?: string;
	rightText?: string;
	onPress: (event: GestureResponderEvent) => void;
	isLoading?: boolean;
};

let ButtonComponent: React.FC<ButtonProps> = ({
	type = "center",
	centerText,
	leftText,
	rightText,
	onPress,
	isLoading = false,
}) => {
	return (
		<TouchableOpacity
			style={[styles.button, isLoading && styles.disabled]}
			activeOpacity={0.8}
			onPress={onPress}
			disabled={isLoading}
		>
			{isLoading ? (
				<ActivityIndicator color={Colors.white} />
			) : type === "center" ? (
				<Text style={styles.centerText}>{centerText}</Text>
			) : (
				<View style={styles.row}>
					<Text style={styles.leftText}>{leftText}</Text>
					<Text style={styles.rightText}>{rightText}</Text>
				</View>
			)}
		</TouchableOpacity>
	);
};

export const Button = ButtonComponent;

const styles = StyleSheet.create({
	button: {
		width: "100%",
		height: 52,
		backgroundColor: Colors.primary,
		borderRadius: 50,
		paddingHorizontal: 24,
		justifyContent: "center",
	},
	disabled: {
		opacity: 0.6,
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	centerText: {
		fontSize: 16,
		fontWeight: "400",
		color: Colors.white,
		textAlign: "center",
	},
	leftText: {
		fontSize: 16,
		fontWeight: "bold",
		color: Colors.white,
	},
	rightText: {
		fontSize: 16,
		fontWeight: "400",
		color: Colors.white,
	},
});
