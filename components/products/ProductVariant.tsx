import { Colors } from "@/constants";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { VariantType } from "../../types/product";

interface ProductVariantProps {
	type: VariantType;
	value?: string | number;
	colorValue?: string;
	onIncrease?: () => void;
	onDecrease?: () => void;
	onPressSelect?: () => void;
}

let ProductVariantComponent: React.FC<ProductVariantProps> = ({
	type,
	value,
	colorValue,
	onIncrease,
	onDecrease,
	onPressSelect,
}) => {
	const renderRightContent = () => {
		if (type === "quantity") {
			return (
				<View style={styles.row}>
					<TouchableOpacity
						style={styles.roundButton}
						onPress={onIncrease}
					>
						<Ionicons name="add" size={18} color="#fff" />
					</TouchableOpacity>

					<Text style={styles.quantityText}>{value}</Text>

					<TouchableOpacity
						style={styles.roundButton}
						onPress={onDecrease}
					>
						<Ionicons name="remove" size={18} color="#fff" />
					</TouchableOpacity>
				</View>
			);
		}

		if (type === "size") {
			return (
				<View style={styles.row}>
					<Text style={styles.valueText}>{value}</Text>

					<View>
						<Ionicons name="chevron-down" size={20} color="#000" />
					</View>
				</View>
			);
		}

		if (type === "color") {
			return (
				<View style={styles.row}>
					<View
						style={[
							styles.colorBox,
							{ backgroundColor: colorValue },
						]}
					/>

					<View>
						<Ionicons name="chevron-down" size={20} color="#000" />
					</View>
				</View>
			);
		}

		return null;
	};

	return (
		<TouchableOpacity
			style={styles.container}
			onPress={onPressSelect}
			disabled={type === "quantity"}
		>
			<Text style={styles.label}>
				{type.charAt(0).toUpperCase() + type.slice(1)}
			</Text>
			{renderRightContent()}
		</TouchableOpacity>
	);
};

export const ProductVariant = React.memo(ProductVariantComponent);

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: 56,
		backgroundColor: Colors.lowGrey,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingHorizontal: 16,
		borderRadius: 50,
		marginBottom: 12,
	},
	label: {
		fontSize: 16,
		fontWeight: "500",
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
		gap: 12,
	},
	roundButton: {
		width: 40,
		height: 40,
		borderRadius: 50,
		backgroundColor: Colors.primary,
		alignItems: "center",
		justifyContent: "center",
	},
	quantityText: {
		fontSize: 16,
		fontWeight: "600",
	},
	valueText: {
		fontSize: 16,
		fontWeight: "bold",
		marginRight: 16,
		textTransform: "capitalize",
	},
	colorBox: {
		width: 16,
		height: 16,
		borderRadius: 50,
		marginRight: 16,
	},
});
