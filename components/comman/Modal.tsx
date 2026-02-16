import { Colors } from "@/constants";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { VariantType } from "../../types/product";

interface ModalAlertProps {
	visible: boolean;
	title?: string;
	onClose: () => void;
	type?: VariantType;
	items: any[];
	onselectItem?: (item: any) => void;
	selectedSize?: string;
	selectedColor?: string;
}

let ModalAlertComponent: React.FC<ModalAlertProps> = ({
	visible,
	title,
	onClose,
	type,
	items,
	onselectItem,
	selectedColor,
	selectedSize,
}) => {
	return (
		<Modal
			visible={visible}
			transparent
			animationType="fade"
			onRequestClose={onClose}
		>
			{visible && (
				<View style={styles.overlay}>
					<View style={styles.modalContainer}>
						<View style={styles.header}>
							{title && <Text style={styles.title}>{title}</Text>}
							<TouchableOpacity onPress={onClose}>
								<Ionicons
									name="close-outline"
									size={24}
									color="#000"
								/>
							</TouchableOpacity>
						</View>
						{items?.map((item, index) => {
							return (
								<TouchableOpacity
									key={index}
									style={styles.button}
									onPress={() => onselectItem?.(item)}
								>
									<Text style={styles.buttonLeftText}>
										{item.name}
									</Text>
									<View
										style={{
											flexDirection: "row",
											alignItems: "center",
										}}
									>
										{type === "color" && (
											<View
												style={[
													styles.round,
													{
														backgroundColor:
															selectedColor ===
															item.value
																? Colors.white
																: "transparent",
													},
												]}
											>
												<View
													style={[
														styles.innerRound,
														{
															backgroundColor:
																item.value,
														},
													]}
												></View>
											</View>
										)}
										{type === "size"
											? selectedSize === item.value && (
													<Ionicons
														name="checkmark"
														size={16}
														color={Colors.black}
													/>
												)
											: type === "color"
												? selectedColor ===
														item.value && (
														<Ionicons
															name="checkmark"
															size={16}
															color={Colors.black}
														/>
													)
												: null}
									</View>
								</TouchableOpacity>
							);
						})}
					</View>
				</View>
			)}
		</Modal>
	);
};

export const ModalAlert = React.memo(ModalAlertComponent);

const styles = StyleSheet.create({
	overlay: {
		flex: 1,
		backgroundColor: "rgba(0,0,0,0.5)",
		justifyContent: "flex-end",
	},
	modalContainer: {
		width: "100%",
		backgroundColor: Colors.white,
		borderRadius: 12,
		padding: 20,
		alignItems: "center",
	},
	header: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		position: "relative",
		paddingBottom: 24,
	},
	title: {
		fontSize: 18,
		fontWeight: "bold",
		textAlign: "center",
		flex: 1,
		textTransform: "capitalize",
	},
	button: {
		width: "100%",
		height: 56,
		backgroundColor: Colors.lowGrey,
		borderRadius: 50,
		alignItems: "center",
		paddingHorizontal: 22,
		flexDirection: "row",
		marginBottom: 16,
		justifyContent: "space-between",
	},
	buttonLeftText: {
		color: Colors.black,
		fontWeight: "bold",
		textTransform: "capitalize",
	},
	round: {
		marginRight: 24,
		padding: 4,
		overflow: "hidden",
		borderRadius: 50,
	},
	innerRound: {
		width: 16,
		height: 16,
		backgroundColor: Colors.black,
		borderRadius: 50,
	},
});
