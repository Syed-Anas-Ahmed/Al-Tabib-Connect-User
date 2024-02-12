import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading"; 
import LoginScreen from "./screens/LoginScreen";

export default function App() {
  const [loading, setLoading] = useState(true);

  const [loaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins-BoldItalic.ttf"),
    PoppinsRegular: require("./assets/fonts/Poppins-Regular.ttf"),
    PoppinsSemiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsMedium: require("./assets/fonts/Poppins-Medium.ttf"),
  });

  if (loading) {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  if (!loaded || loading) {
    return <AppLoading />;
  } else {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <LoginScreen />
        <StatusBar style="auto" />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
