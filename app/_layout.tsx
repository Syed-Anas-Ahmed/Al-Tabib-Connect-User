import { useFonts } from "expo-font";
import { SplashScreen, Stack, Tabs } from "expo-router";
import { useEffect } from "react";
import { TamaguiProvider } from "tamagui";

import config from "../tamagui.config";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import store from "./context/store";
import { rgbaColor } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

export default function Layout() {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
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
        <Stack screenOptions={{ headerShown: false }} />
        <StatusBar style="inverted" />
      </TamaguiProvider>
      <StatusBar style="auto" translucent />
    </Provider>
  );
}
