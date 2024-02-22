import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MenuComponents from "./components/home/MenuComponents";
import { LinearGradient } from "expo-linear-gradient";
import { gradient, paddings } from "./constants";
import { Spinner } from "tamagui";
import { colors } from "./styles";

const MenuScreen = () => {
  return (
    <LinearGradient
      locations={[0.3, 0.6, 0.8]}
      colors={[colors.gradPrim, "white", colors.gradSec]}
      style={[paddings.primaryPad, gradient.linear, { gap: 10 }]}
    >
      <SafeAreaView style={{ flex: 1, padding: 15 }}>
        <MenuComponents />
      </SafeAreaView>
    </LinearGradient>
  );
};

export default MenuScreen;
