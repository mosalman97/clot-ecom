import { Button, ModalAlert, ProductVariant } from "@/components";
import { Colors, defaultStyles } from "@/constants";
import { formatCurrency } from "@/utils";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router, useLocalSearchParams } from "expo-router";
import React, { useCallback, useState } from "react";
import {
	ActivityIndicator,
	FlatList,
	Image,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SelectedVariant, VariantType } from "../../types/product";

const ProductDetail = () => {
	const insets = useSafeAreaInsets();
	// params
	const { productDetail } = useLocalSearchParams();
	let product: any = null;
	try {
		product = JSON.parse(productDetail as string);
	} catch (error) {
		console.error("Invalid productDetail JSON:", error);
		product = null;
	}
	// states
	const [selectedSize, setSelectedSize] = useState<string>("");
	const [selectedColor, setSelectedColor] = useState<string>("");
	const [selectedVariantType, setSelectedVariantType] =
		useState<VariantType>("");
	const [modalVisible, setModalVisible] = useState<boolean>(false);
	const [selectedQuantity, setSelectedQuantity] = useState<number>(1);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isFavorite, setIsFavorite] = useState<boolean>(false);
	// functions
	const openVariantModal = useCallback((type: VariantType) => {
		setSelectedVariantType(type);
		setModalVisible(true);
	}, []);
	const closeVariantModal = useCallback(() => {
		setModalVisible(false);
		setSelectedVariantType("");
	}, []);
	const increaseQuantity = useCallback(() => {
		setSelectedQuantity((prev) => Math.min(prev + 1, 20));
	}, []);
	const decreaseQuantity = useCallback(() => {
		setSelectedQuantity((prev) => Math.max(prev - 1, 1));
	}, []);

	const handleSelectItem = useCallback(
		(item: SelectedVariant) => {
			console.log("Selected item:", item);
			if (selectedVariantType === "size") {
				setSelectedSize(item.value);
			} else {
				setSelectedColor(item.value);
			}
			return false;
		},
		[selectedVariantType],
	);

	if (!product) {
		return (
			<View
				style={{
					flex: 1,
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: Colors.primary,
				}}
			>
				<Text style={defaultStyles.header}>Invalid product data</Text>
			</View>
		);
	}

	if (isLoading) {
		return (
			<View
				style={[
					defaultStyles.container,
					{ justifyContent: "center", alignItems: "center" },
				]}
			>
				<ActivityIndicator size="large" color={Colors.primary} />
			</View>
		);
	}

	return (
		<View style={[defaultStyles.container, { paddingTop: insets.top }]}>
			<View style={[styles.header, { paddingTop: insets.top + 10 }]}>
				<TouchableOpacity
					style={styles.backContainer}
					onPress={() => router.back()}
				>
					<Ionicons
						name="chevron-back"
						size={16}
						color={Colors.black}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.backContainer}
					onPress={() => setIsFavorite((prev) => !prev)}
				>
					<Ionicons
						name={isFavorite ? "heart" : "heart-outline"}
						size={16}
						color={isFavorite ? Colors.red : Colors.black}
					/>
				</TouchableOpacity>
			</View>
			<FlatList
				data={[null]}
				keyExtractor={(_, index) => index.toString()}
				contentContainerStyle={styles.scrollContent}
				showsVerticalScrollIndicator={false}
				renderItem={() => (
					<>
						<ScrollView
							horizontal
							showsHorizontalScrollIndicator={false}
							contentContainerStyle={styles.scrollContainer}
						>
							{product?.images?.map((item: any, index: any) => (
								<View style={styles.productImage} key={index}>
									<Image
										source={{
											uri: item,
										}}
										style={defaultStyles.imageStyle}
									/>
								</View>
							))}
						</ScrollView>
						<View
							style={{
								paddingHorizontal: 24,
								paddingBottom: insets.bottom + 80,
							}}
						>
							<View style={styles.productNameContainer}>
								<Text
									style={[
										defaultStyles.header,
										{ fontSize: 14, marginBottom: 15 },
									]}
								>
									{product.name}
								</Text>
								<Text style={styles.productPrice}>
									{formatCurrency(
										product.discountPrice,
										"USD",
									)}
								</Text>
							</View>
							<ProductVariant
								type="size"
								value={selectedSize}
								onPressSelect={() => openVariantModal("size")}
							/>
							<ProductVariant
								type="color"
								colorValue={selectedColor}
								onPressSelect={() => openVariantModal("color")}
							/>
							<ProductVariant
								type="quantity"
								value={selectedQuantity}
								onIncrease={increaseQuantity}
								onDecrease={decreaseQuantity}
							/>
							<Text style={styles.productDescription}>
								{product.fullDescription}
							</Text>
							<View style={styles.shippingDetail}>
								<Text
									style={[
										defaultStyles.header,
										{ fontSize: 14, marginBottom: 12 },
									]}
								>
									Shipping & Returns
								</Text>
								<Text style={styles.shipping}>
									{product.shippingInfo}
								</Text>
							</View>
						</View>
					</>
				)}
			/>
			<View
				style={[
					styles.bottomButton,
					{ paddingBottom: insets.bottom + 10 },
				]}
			>
				<Button
					type="split"
					leftText="$148"
					rightText="Add to Bag"
					onPress={() => setSelectedColor("red")}
				/>
			</View>
			<ModalAlert
				visible={modalVisible}
				title={selectedVariantType}
				onClose={closeVariantModal}
				items={
					selectedVariantType === "size"
						? product.variants?.sizes
						: product.variants?.colors
				}
				type={selectedVariantType === "size" ? "size" : "color"}
				onselectItem={handleSelectItem}
				selectedColor={selectedColor}
				selectedSize={selectedSize}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	backContainer: {
		width: 40,
		height: 40,
		backgroundColor: Colors.lowGrey,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 50,
		marginBottom: 24,
	},
	header: {
		paddingHorizontal: 24,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		zIndex: 10,
		backgroundColor: Colors.white,
	},
	scrollContent: {
		paddingTop: "17%",
	},
	scrollContainer: {
		flexDirection: "row",
		paddingBottom: 24,
		paddingLeft: 24,
	},
	productImage: {
		width: 161,
		height: 248,
		backgroundColor: Colors.lowGrey,
		marginRight: 10,
		borderRadius: 6,
		overflow: "hidden",
	},
	bottomButton: {
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
		paddingHorizontal: 24,
		backgroundColor: Colors.white,
	},
	productNameContainer: {
		marginBottom: 33,
	},
	productPrice: {
		fontSize: 14,
		color: Colors.primary,
		fontWeight: "bold",
	},
	productDescription: {
		fontSize: 12,
		color: Colors.black,
		lineHeight: 18,
		marginBottom: 24,
		textAlign: "left",
	},
	shippingDetail: {
		borderTopWidth: 1,
		borderTopColor: Colors.lowGrey,
	},
	shipping: {
		fontSize: 12,
		color: Colors.black,
		lineHeight: 18,
	},
});

export default ProductDetail;
