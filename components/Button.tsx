import { Colors } from "@/constants";
import React from "react";
import {
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
};

export const Button: React.FC<ButtonProps> = ({
	type = "center",
	centerText,
	leftText,
	rightText,
	onPress,
}) => {
	return (
		<TouchableOpacity
			style={styles.button}
			activeOpacity={0.8}
			onPress={onPress}
		>
			{type === "center" ? (
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

const styles = StyleSheet.create({
	button: {
		width: "100%",
		height: 52,
		backgroundColor: Colors.primary,
		borderRadius: 50,
		paddingHorizontal: 24,
		justifyContent: "center",
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	centerText: {
		fontSize: 16,
		fontWeight: "400",
		color: "#FFFFFF",
		textAlign: "center",
	},
	leftText: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#FFFFFF",
	},
	rightText: {
		fontSize: 16,
		fontWeight: "400",
		color: "#FFFFFF",
	},
});
