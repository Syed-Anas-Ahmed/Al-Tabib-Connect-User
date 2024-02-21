import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { fonts, FontColors, paddings, gradient, containers } from "./constants";
import { AlertNotificationRoot } from "react-native-alert-notification";
import FormLogin from "./components/FormLogin";
import { colors, textStyles } from "./styles";
import React from "react";

const myCustomColors = {
  label: "#ff0000", // Example color values
  card: "#ffffff",
  overlay: "rgba(0, 0, 0, 0.5)",
  success: "#00ff00",
  danger: "#ff0000",
  warning: "#ffff00",
  info: "#0000ff",
};

const LoginScreen = () => {
  return (
    <AlertNotificationRoot>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={[containers.fullScreen]}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
          >
            <LinearGradient
            locations={[0.3,0.5,0.8]}
              colors={[colors.gradPrim,"white", colors.gradSec]}
              style={[paddings.primaryPad, gradient.linear, { gap: 10 }]}
            >
              <Text style={[textStyles.heading]}>Login</Text>
              <Text style={[textStyles.normal, { textAlign: "center" }]}>You can search Doctors, Book Appointments & check Medical History</Text>
              <FormLogin />
            </LinearGradient>
          </ScrollView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </AlertNotificationRoot>
  );
};

export default LoginScreen;
