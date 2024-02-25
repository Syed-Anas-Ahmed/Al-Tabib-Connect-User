import { Stack } from "expo-router";
import { TamaguiProvider } from "tamagui";
import config from "../tamagui.config";
import { Provider } from "react-redux";
import store from "./context/store";

export default function Layout() {
  return (
    <Provider store={store}>
      <TamaguiProvider config={config}>
        <Stack screenOptions={{ headerShown: false }} />
      </TamaguiProvider>
    </Provider>
  );
}
