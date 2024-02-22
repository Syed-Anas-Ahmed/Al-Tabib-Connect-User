import React, { useState, useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import LoginScreen from "./LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import RegisterScreen from "./RegisterScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabScreen from "./MenuScreen";
import * as SecureStore from "expo-secure-store";
import { StatusBar } from "expo-status-bar";
import MenuScreen from "./MenuScreen";
import MainNavigator from "./navigator/MainNavigator";
import { Drawer } from "expo-router/drawer";
import { Provider } from "react-redux";

import store from "./context/store";

const Stack = createNativeStackNavigator();

export default function index() {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [loaded] = useFonts({
    Poppins: require("../assets/fonts/Poppins-Black.ttf"),
    PoppinsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
    PoppinsSemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
    //Arial: require("../assets/fonts/Arial.ttf"),
  });

  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await SecureStore.getItemAsync("token");
        setIsLoggedIn(!!token);
      } catch (error) {
        console.error("Error checking token:", error);
      } finally {
        setLoading(false);
      }
    };

    SplashScreen.preventAutoHideAsync();

    checkToken().then(() => {
      SplashScreen.hideAsync();
    });
  }, []);

  if (!loaded || loading) {
    return null;
  } else {
    return (
      <Stack.Navigator>
        {isLoggedIn ? (
          <Stack.Screen
            name="MenuScreen"
            component={MainNavigator}
            options={{
              headerShown: false,
              contentStyle: { backgroundColor: "white" },
            }}
          />
        ) : (
          //  <Stack.Screen
          //    name="LoginScreen"
          //    component={LoginScreen}
          //    options={{ headerShown: false }}
          //  />
          <>
            <Stack.Screen
              name="MainNavigator"
              component={MainNavigator}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    );
  }
}
