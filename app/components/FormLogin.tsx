import { Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import {
  FontColors,
  RegLog,
  btns,
  fonts,
  form,
  themeColors,
} from "../constants";
import { ALERT_TYPE, Dialog } from "react-native-alert-notification";
import * as SecureStore from "expo-secure-store";
import { Separator, Spinner, XStack } from "tamagui";
import { AntDesign } from "@expo/vector-icons";
import { Link, router } from "expo-router";


const FormLogin = () => {
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    if (!validateNum(num) || !emptyFields(num, pass)) {
      {
        Dialog.show({
          type: ALERT_TYPE.DANGER,
          title: "Error",
          textBody: "please fill all details correctly",
          button: "close",
        });
      }
      setLoading(false);
    } else {
      console.log("Form submitted successfully");
      console.log(`Phone: ${num}, Password:${pass}`);
      SecureStore.setItemAsync("token", "12345")
        .then(() => {
          console.log("Token stored successfully");
          setTimeout(() => {
            setLoading(false);
            router.replace("./navigator/MainNavigator");
          }, 2000);
        })
        .catch((error) => {
          console.error("Error storing token:", error);
          // Handle error
        });
    }
  };

  return (
    <View style={form.layout}>
      <XStack alignItems="center" gap={5}>
        <XStack
          gap={10}
          backgroundColor={"white"}
          flex={1}
          borderRadius={5}
          padding={10}
        >
          <AntDesign name="phone" size={24} color="#0ab99c" />
          <Separator vertical borderColor={"lightgray"} />
          <TextInput
            style={{ padding: 0, flex: 1, fontFamily:"PoppinsRegular" }}
            placeholder="Enter Your Phone"
            keyboardType="numeric"
            maxLength={11}
            onChangeText={handleNumChange}
            placeholderTextColor="#808080a4"
          />
        </XStack>
      </XStack>
      <XStack alignItems="center" gap={5}>
        <XStack
          gap={10}
          backgroundColor={"white"}
          flex={1}
          borderRadius={5}
          padding={10}
        >
          <AntDesign name="lock" size={24} color="#0ab99c" />
          <Separator vertical borderColor={"lightgray"} />
          <TextInput
            style={{ padding: 0, flex: 1 , fontFamily:"PoppinsRegular"}}
            placeholder="Enter Your Password"
            onChangeText={handlePassChange}
            placeholderTextColor="#808080a4"
            autoCapitalize="none"
            secureTextEntry={true}
          />
        </XStack>
      </XStack>
      <TouchableOpacity
        onPress={handleSubmit}
        style={[themeColors.primary, btns.btnPrimary,{flexDirection:"row", justifyContent:"center", alignItems:"center",gap:10}]}
      >
         {loading?<Spinner position="absolute" left={"35%"} size="small" color="#FFFFFF" />:null}
        <Text style={[fonts.subBold,FontColors.whiteFont]}>
          Login
        </Text>
      </TouchableOpacity>

      <View style={RegLog.onPressStyle}>
        <Text style={[fonts.normalBold, FontColors.primaryFont]}>
          Don't have an account?
        </Text>
        <Link href="/RegisterScreen" asChild>
          <TouchableOpacity>
            <Text style={[fonts.normalBold, FontColors.blue]}>Register</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};
export default FormLogin;
