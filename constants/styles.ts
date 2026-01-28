import { StyleSheet } from "react-native";
import { Colors } from "./colors";

export const defaultStyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.white,
	},
	header: {
		fontSize: 32,
		fontWeight: "bold",
		color: Colors.black,
	},
	input: {
		backgroundColor: Colors.lowGrey,
		padding: 20,
		borderRadius: 12,
		fontSize: 16,
		marginBottom: 16,
	},
	button: {
		width: "100%",
		height: 49,
		borderRadius: 20,
		backgroundColor: Colors.primary,
		justifyContent: "center",
		alignItems: "center",
	},
	buttonText: {
		fontSize: 16,
		color: Colors.white,
		fontWeight: "500",
	},
	imageStyle: {
		width: "100%",
		height: "100%",
		resizeMode: "contain",
	},
});
