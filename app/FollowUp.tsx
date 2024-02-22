import { StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "./styles";
import { Text } from "tamagui";

const FollowUp = () => {
  return (
    <LinearGradient
      locations={[0.3, 0.5, 0.8]}
      colors={[colors.gradPrim, "white", colors.gradSec]}
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Text fontSize={32} fontFamily={"PoppinsSemiBold"} color={"red"}>Follow-Up</Text>
    </LinearGradient>
  );
};

export default FollowUp;

const styles = StyleSheet.create({});
