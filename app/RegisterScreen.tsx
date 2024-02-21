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
            contentContainerStyle={{flex:1, flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
          >
            <LinearGradient
              colors={["#08B89D", "#D2F9F1"]}
              style={[paddings.primaryPad, gradient.linear, { gap: 10 }]}
            >
              <Text style={[fonts.heading, FontColors.whiteFont]}>
                Register
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
