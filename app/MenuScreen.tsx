import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MenuComponents from "./components/home/MenuComponents";
import { LinearGradient } from "expo-linear-gradient";
import { gradient, paddings } from "./constants";


const MenuScreen = () => {
  return (
    <LinearGradient
      colors={["#0ab99c", "#238f57", "#51bcc4"]}
      style={[paddings.primaryPad, gradient.linear]}
    >
      <SafeAreaView style={{ flex: 1, padding: 15 }}>
        <MenuComponents />
      </SafeAreaView>
    </LinearGradient>
  );
};

export default MenuScreen;
