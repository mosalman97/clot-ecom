//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Redirect, router } from "expo-router";

// create a component
const Main = () => {
	return <Redirect href={"/(auth)/sign-in"} />;
};

export default Main;
