import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MenuComponents from "./components/home/MenuComponents";
import { LinearGradient } from "expo-linear-gradient";
import { gradient, paddings } from "./constants";


const MenuScreen = () => {
  return (
    <LinearGradient
    colors={["#08B89D", "#D2F9F1"]}
      style={[paddings.primaryPad, gradient.linear]}
    >
      <SafeAreaView style={{ flex: 1, padding: 15 }}>
        <MenuComponents />
      </SafeAreaView>
    </LinearGradient>
  );
};

export default MenuScreen;
