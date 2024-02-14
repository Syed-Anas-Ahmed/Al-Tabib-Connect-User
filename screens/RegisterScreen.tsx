import { SafeAreaView, Text } from "react-native";
import Form from "../components/Form";
import { LinearGradient } from "expo-linear-gradient";
import { fonts,FontColors,paddings,gradient,containers } from "../constants";
import { AlertNotificationRoot } from "react-native-alert-notification";

const myCustomColors = {
  label: '#ff0000', // Example color values
  card: '#ffffff',
  overlay: 'rgba(0, 0, 0, 0.5)',
  success: '#00ff00',
  danger: '#ff0000',
  warning: '#ffff00',
  info: '#0000ff',
};


const RegisterScreen = () => {
  return (
    <SafeAreaView style={containers.fullScreen}>
      <AlertNotificationRoot>
      <LinearGradient
        colors={["#0ab99c", "#238f57", "#51bcc4"]}
        style={[paddings.primaryPad,gradient.linear]}
      >
        <Text
          style={[fonts.heading,FontColors.whiteFont]}
        >
          Register
        </Text>
        <Form />
      </LinearGradient>
      </AlertNotificationRoot>
    </SafeAreaView>
  );
};

export default RegisterScreen;
