import { TouchableOpacity, Text, View } from "react-native";
import React from "react";
import { themeColors, btns } from "../constants";
import { AlertNotificationRoot } from "react-native-alert-notification";

interface CusButtonProps {
  btnText: string;
  onPress: () => void;
}

const CusButton: React.FC<CusButtonProps> = ({ btnText, onPress }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={[themeColors.primary, btns.btnPrimary]}
      >
        <Text style={{ textAlign: "center", fontSize: 20, color: "#FFFFFF" }}>
          {btnText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CusButton;
