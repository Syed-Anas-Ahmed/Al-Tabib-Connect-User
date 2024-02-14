import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import LoginScreen from "./screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import RegisterScreen from "./screens/RegisterScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabScreen from "./screens/TabScreen";

const Stack = createNativeStackNavigator();


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
    }, 1000);
  }

  if (!loaded || loading) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Tabs" component={TabScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
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
