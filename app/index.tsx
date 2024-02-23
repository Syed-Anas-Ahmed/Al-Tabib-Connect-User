import React, { useState, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SecureStore from "expo-secure-store";
import MainNavigator from "./navigator/MainNavigator";
import LoginScreen from "./LoginScreen";

const Stack = createNativeStackNavigator();

export default function index() {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
    checkToken().then(() => {
      SplashScreen.hideAsync();
    });
  }, []);

  if (loading) {
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
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    );
  }
}
