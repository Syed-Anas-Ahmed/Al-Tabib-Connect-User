import { Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import InputField from "./InputField";
import CusButton from "./CusButton";
import { FontColors, RegLog, fonts, form } from "../constants";

import { ALERT_TYPE, Dialog } from "react-native-alert-notification";
import { useNavigation } from "@react-navigation/native";



const FormLogin= () => {

  const navigation = useNavigation();

  const [num, setNum] = useState("");
  const [pass, setPass] = useState("");


  const validateNum = (num: string) => {
    if (num.length < 5) {
      console.log("Phone number is too short");
      return false;
    } else {
      return true;
    }
  };

  const emptyFields = (num: string, password: string) => {
    if (!num || !password) {
      console.log("Please fill all fields");
      return false;
    } else {
      return true;
    }
  };

  const handleNumChange = (text: string) => {
    setNum(text);
  };

  const handlePassChange = (text: string) => {
    setPass(text);
  };

  const handleSubmit = () => {
    if (!validateNum(num) || !emptyFields(num, pass)) {
      {
        Dialog.show({
          type: ALERT_TYPE.DANGER,
          title: "Error",
          textBody: "please fill all details correctly",
          button: "close",
        });
      }
    } else {
      console.log("Form submitted successfully");
      console.log(
        `Phone: ${num}, Password:${pass}`
      );
      navigation.navigate("Tabs")
    }
  };

  return (
    <View style={form.layout}>
      <InputField
        onChangeText={handleNumChange}
        icon="phone"
        placeholder="Enter Your Phone"
        keyBrdTyp="numeric"
        secure={false}
        maxLength={11}
      />
      <InputField
        onChangeText={handlePassChange}
        icon="lock"
        placeholder="Enter Your Password"
        keyBrdTyp="default"
        secure={true}
      />
      <CusButton btnText="Login" onPress={handleSubmit}></CusButton>
      <View
        style={RegLog.onPressStyle}
      >
        <Text style={[fonts.normal, FontColors.primaryFont]}>
          Don't have an account?
        </Text>
        <TouchableOpacity onPress={()=>navigation.navigate("Register")}>
          <Text style={[fonts.normal, FontColors.blue]}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default FormLogin;
