import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { TamaguiProvider } from "tamagui";
import config from "../tamagui.config";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import store from "./context/store";


export default function Layout() {
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

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <Provider store={store}>
      <TamaguiProvider config={config}>
        {/* <Drawer>
          <Drawer.Screen name="MenuScreen" options={{ title: "Home" }} />
          <Drawer.Screen name="FollowUp" options={{ title: "Find Doctors" }} />
          <Drawer.Screen name="LoginScreen" options={{ title: "Laboratory" }} />
          <Drawer.Screen name="History" options={{ title: "Profile" }} />
          <Drawer.Screen name="Family" options={{ title: "Settings" }} />
        </Drawer> */}
        <Stack screenOptions={{ headerShown: false }} />
      </TamaguiProvider>
      <StatusBar style="auto" translucent />
    </Provider>
  );
}
