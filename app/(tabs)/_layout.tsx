import { Tabs } from "expo-router";
import React from "react";
import { Image, ImageSourcePropType, View } from "react-native";

import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors, Images } from "@/constants";

const TabIcon = ({
	source,
	focused,
}: {
	source: ImageSourcePropType;
	focused: boolean;
}) => (
	<View>
		<Image source={source} tintColor={focused && Colors.primary} />
	</View>
);

export default function TabLayout() {
	return (
		<Tabs
			initialRouteName="home"
			screenOptions={{
				tabBarShowLabel: false,
				tabBarStyle: {
					backgroundColor: Colors.white,
				},
			}}
		>
			<Tabs.Screen
				name="home"
				options={{
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<TabIcon source={Images.icon_home} focused={focused} />
					),
				}}
			/>
			<Tabs.Screen
				name="notifications"
				options={{
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<TabIcon
							source={Images.icon_notifications}
							focused={focused}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="orders"
				options={{
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<TabIcon
							source={Images.icon_orders}
							focused={focused}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<TabIcon
							source={Images.icon_profile}
							focused={focused}
						/>
					),
				}}
			/>
		</Tabs>
	);
}
