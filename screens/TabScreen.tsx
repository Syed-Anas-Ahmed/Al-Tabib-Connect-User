import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import doctor from "../svgs/SvgComponent";
import MenuCard from "../components/home/MenuCard";
import DetailCard from "../components/home/DetailCard";
import { LinearGradient } from "expo-linear-gradient";
import {
  FontColors,
  containers,
  fonts,
  gradient,
  paddings,
} from "../constants";

const TabScreen = () => {
  return (
    <SafeAreaView style={containers.fullScreen}>
      <LinearGradient
        colors={["#0ab99c", "#238f57", "#51bcc4"]}
        style={[paddings.primaryPad, gradient.linear]}
      >
        <View style={{alignItems:"center",gap:10}}>
        <Text style={[fonts.heading, FontColors.whiteFont]}>Welcome</Text>
        <View style={{flexDirection:"row",gap:10}}>
          <MenuCard text="Find a doctor" icon={require("../assets/doctor.png")} />
          <MenuCard text="Laboratory" icon={require("../assets/lab.png")} />
        </View>
        <DetailCard />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default TabScreen;