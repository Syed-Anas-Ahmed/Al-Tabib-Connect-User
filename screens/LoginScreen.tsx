import { SafeAreaView, Text } from "react-native";
import Form from "../components/Form";
import { LinearGradient } from "expo-linear-gradient";
import { fonts,FontColors,paddings,gradient,containers } from "../constants";

const image = require("../assets/background/zig-zag.png");

const LoginScreen = () => {
  return (
    <SafeAreaView style={containers.fullScreen}>
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
    </SafeAreaView>
  );
};

export default LoginScreen;
