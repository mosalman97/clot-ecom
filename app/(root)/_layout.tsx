import { Stack } from "expo-router";
import React from "react";

export default function RootLayout() {
	return (
		<Stack>
			<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
			<Stack.Screen
				name="categoryList"
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="productsByCategory"
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="productDetail"
				options={{ headerShown: false }}
			/>
		</Stack>
	);
}
