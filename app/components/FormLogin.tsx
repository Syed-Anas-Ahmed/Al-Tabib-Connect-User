import {
  Dimensions,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
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
import axios from "axios";
import * as Progress from "react-native-progress";

const screenwidth = Dimensions.get("screen").width;

const FormLogin = () => {
  const [loading, setLoading] = useState(false);

  const [num, setNum] = useState("");
  const [userName, setuserName] = useState("03323403109");
  const [pass, setPass] = useState("password123");

  const validateNum = (num: string) => {
    if (num.length < 5) {
      console.log("Phone number is too short");
      return false;
    } else {
      return true;
    }
  };

  const emptyFields = (num: string, userName: string) => {
    if (!num || !userName) {
      console.log("Please fill all fields");
      return false;
    } else {
      return true;
    }
  };

  const handleUserNameChange = (text: string) => {
    setuserName(text);
  };

  const handleNumChange = (text: string) => {
    setNum(text);
  };

  const handlePassChange = (text: string) => {
    setPass(text);
  };

  const handleSubmit = () => {
    setLoading(true);
    if (!emptyFields(userName, pass)) {
      {
        Dialog.show({
          type: ALERT_TYPE.DANGER,
          title: "Error",
          textBody: "please fill all details correctly",
          button: "close",
        });
      }
    } else {
      fetchLoginData();
    }
  };

  const getCurrentTimestamp = () => {
    const now = new Date();
    const date = now.getDate().toString().padStart(2, "0");
    const month = (now.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-indexed, so add 1
    const year = now.getFullYear().toString();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");

    return `${date}-${month}-${year}-${hours}-${minutes}-${seconds}`;
  };

  const currentTimeStamp = getCurrentTimestamp();

  const url = `http://192.168.100.48:8085`

  const loginUrl = `${url}/login?username=${userName}&password=${pass}&UUID=${currentTimeStamp}&type=2`;
 
  // const loginUrl = `http://192.168.100.48:8085/login?username=${userName}&password=${pass}&UUID=${currentTimeStamp}&type=2`;
 
  const fetchLoginData = () => {
    axios
      .get(loginUrl)
      .then((response) => {
        if (response.status === 200) {
          console.log("Current TimeStamp: ", currentTimeStamp);
          console.log(
            "RESPONSE STATUS: ",
            JSON.stringify(response.status, null, 2),
          );
          console.log(
            "TOKEN: ",
            JSON.stringify(response.data.data.token, null, 2),
          );
          SecureStore.setItemAsync("token", response.data.data.token)
            .then(() => {
              setTimeout(() => {
                console.log("Token stored successfully");
                router.navigate("./navigator/MainNavigator");
                setLoading(false);
              }, 3000);
            })
            .catch((error) => {
              console.error("Error storing token: ", error);
              //setLoading(false);
            });
        } else {
          console.log("Error, Status code: ", response.status);
          //setLoading(false);
        }
      })
      .catch((error) => {
        if (error.response) {
          console.error("Server Error:", error.response.data);
          console.error("Status Code:", error.response.status);
          console.error("Headers:", error.response.headers);
          //setLoading(false);
        } else if (error.request) {
          console.error("No response received:", error.request);
          //setLoading(false);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error("Request Error:", error.message);
          //setLoading(false);
        }
      });
  };

  return (
    <View style={form.layout}>
      {loading ? (
        <View
          style={{
            borderColor: "lightgray",
            borderRadius: 10,
            borderWidth: 2,
            alignSelf: "center",
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            zIndex: 1000,
            gap: 20,
            height: screenwidth * 0.75,
            width: screenwidth * 0.75,
          }}
        >
          <Text style={[fonts.headingSmall, FontColors.primaryFont]}>
            Logging In
          </Text>
          <Progress.CircleSnail
            thickness={7}
            size={100}
            color={["#0ab99c", "#0044ff", "#ffa600"]}
          />
        </View>
      ) : null}
      <XStack alignItems="center" gap={5}>
        <XStack
          gap={10}
          backgroundColor={"white"}
          flex={1}
          borderRadius={5}
          padding={10}
        >
          <AntDesign name="user" size={24} color="#0ab99c" />
          <Separator vertical borderColor={"lightgray"} />
          <TextInput
            keyboardType="numeric"
            value="03323403109"
            maxLength={11}
            style={{ padding: 0, flex: 1, fontFamily: "PoppinsRegular" }}
            placeholder="Enter Your Username"
            onChangeText={handleUserNameChange}
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
            value="password123"
            style={{ padding: 0, flex: 1, fontFamily: "PoppinsRegular" }}
            placeholder="Enter Your Password"
            onChangeText={handlePassChange}
            placeholderTextColor="#808080a4"
            autoCapitalize="none"
            //secureTextEntry={true}
          />
        </XStack>
      </XStack>
      <TouchableOpacity
        onPress={handleSubmit}
        style={[
          themeColors.primary,
          btns.btnPrimary,
          {
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
          },
        ]}
      >
        <Text style={[fonts.subBold, FontColors.whiteFont]}>Login</Text>
      </TouchableOpacity>

      <View style={[RegLog.onPressStyle, { zIndex: -1000 }]}>
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
