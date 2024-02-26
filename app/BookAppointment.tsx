import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { paddings, gradient, fonts, FontColors } from "./constants";
import BookingComponents from "./components/BookingComponents";
import { Text } from "react-native";
import { colors } from "./styles";

const BookAppointment = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <BookingComponents />
    </SafeAreaView>
  );
};

export default BookAppointment;
