import React, { useState, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SecureStore from "expo-secure-store";
import MainNavigator from "./navigator/MainNavigator";
import LoginScreen from "./LoginScreen";
import { useFonts } from "expo-font";
import { Link, useRouter } from "expo-router";
import { NavigationContainer } from "@react-navigation/native";
import { Button, ButtonText, View } from "tamagui";
import { SafeAreaView } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

export default function index() {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("");

  const router = useRouter();

  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),

    Poppins: require("../assets/fonts/Poppins-Black.ttf"),
    PoppinsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
    PoppinsSemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),

    Arial: require("../assets/fonts/Arial-Regular.ttf"),
    ArialL: require("../assets/fonts/Arial-Light.ttf"),
    ArialB: require("../assets/fonts/Arial-Bold.ttf"),
    ArialXB: require("../assets/fonts/Arial-XBold.ttf"),

    Merri: require("../assets/fonts/Merriweather-Regular.ttf"),
    MerriL: require("../assets/fonts/Merriweather-Light.ttf"),
    MerriB: require("../assets/fonts/Merriweather-Bold.ttf"),

    Domine: require("../assets/fonts/Domine.ttf"),
  });

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

  if (loading || !loaded) {
    return null;
  } else {
    return (
      //   <Stack.Navigator>
      //     <Stack.Screen
      //       name="MenuScreen"
      //       component={isLoggedIn ? MainNavigator : LoginScreen}
      //       options={{
      //         headerShown: false,
      //         contentStyle: { backgroundColor: "white" },
      //       }}
      //     />
      // </Stack.Navigator>
       <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
         <Link href={"/(tabs)/(home)/Home"} asChild>
           <Button>
             <ButtonText>Go to Tabs</ButtonText>
           </Button>
         </Link>
         {/* <Stack.Screen name="/(tabs)"/> */}
       </SafeAreaView>
    );
  }
}
