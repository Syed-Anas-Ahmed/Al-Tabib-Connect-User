import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  paddings,
  gradient,
  fonts,
  FontColors,
  themeColors,
} from "./constants";
import { Text } from "react-native";
import GetAppComponent from "./components/GetAppComponent";
import { colors } from "./styles";

const BookAppointment = () => {
  return (
    <SafeAreaView style={{ flex: 1, padding: 15, alignItems: "center" }}>
      <Text style={[fonts.heading, FontColors.blackFont]}>Confirm Appointment</Text>
      <GetAppComponent />
    </SafeAreaView>
  );
};

export default BookAppointment;
