import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import Form from "./components/Form";
import { LinearGradient } from "expo-linear-gradient";
import { fonts, FontColors, paddings, gradient, containers } from "./constants";
import { AlertNotificationRoot } from "react-native-alert-notification";
import { StatusBar } from "expo-status-bar";
import { colors, textStyles } from "./styles";

const myCustomColors = {
  label: "#ff0000", // Example color values
  card: "#ffffff",
  overlay: "rgba(0, 0, 0, 0.5)",
  success: "#00ff00",
  danger: "#ff0000",
  warning: "#ffff00",
  info: "#0000ff",
};

const RegisterScreen = () => {
  return (
    <AlertNotificationRoot>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={[containers.fullScreen]}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ScrollView
            contentContainerStyle={{ flex: 1, flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
          >
            <LinearGradient
              locations={[0.3, 0.5, 0.8]}
              colors={[colors.gradPrim, "white", colors.gradSec]}
              style={[paddings.primaryPad, gradient.linear, { gap: 5 }]}
            >
              <Text style={[textStyles.heading]}>Register</Text>
              <Text style={[textStyles.normal, { textAlign: "center" }]}>
                You can search Doctors, Book Appointments & check Medical
                History
              </Text>
              <Form />
            </LinearGradient>
          </ScrollView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </AlertNotificationRoot>
  );
};

export default RegisterScreen;
