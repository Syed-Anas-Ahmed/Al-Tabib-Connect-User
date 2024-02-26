import {
  Dimensions,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import {
  FontColors,
  RegLog,
  fonts,
  form,
} from "../constants";
import { ALERT_TYPE, Dialog } from "react-native-alert-notification";
import * as SecureStore from "expo-secure-store";
import { Separator, XStack } from "tamagui";
import { AntDesign } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import axios from "axios";
import * as Progress from "react-native-progress";
import { buttons, colors, fontSizes, fontsFams } from "../styles";
import { url } from "~/env";
import { useDispatch } from "react-redux";
import { addToken } from "../context/actions/tokenActions";
import { addUser } from "../context/actions/userActions";

const screenwidth = Dimensions.get("screen").width;

const FormLogin = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [num, setNum] = useState("");
  const [pass, setPass] = useState("");

  const validateNum = (num: string) => num.length >= 11;
  const isEmptyString = (str: string) => str.trim() === "";

  const emptyFields = (num: string, password: string) =>
    ![num, password].some(isEmptyString);

  const validateSubmit = (num: string, password: string) =>
    validateNum(num) && emptyFields(num, password);

  const handleNumChange = (text: string) => {
    setNum(text);
  };

  const handlePassChange = (text: string) => {
    setPass(text);
  };

  const handleSubmit = () => {
    if (!validateSubmit(num, pass)) {
      Dialog.show({
        type: ALERT_TYPE.DANGER,
        title: "Error",
        textBody: "Please fill all details correctly",
        button: "Close",
      });
    } else {
      setLoading(true);
      fetchLoginData();
    }
  };

  const getCurrentTimestamp = () => {
    const now = new Date();
    const date = now.getDate().toString().padStart(2, "0");
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const year = now.getFullYear().toString();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");

    return `${date}-${month}-${year}-${hours}-${minutes}-${seconds}`;
  };

  const currentTimeStamp = getCurrentTimestamp();

  //USE YOUR OWN URL!!

  const uri = url;

  const loginUrl = `${uri}login?username=${num}&password=${pass}&UUID=${currentTimeStamp}&type=2`;

  const fetchLoginData = () => {
    axios
      .get(loginUrl)
      .then((response) => {
        if (response.status === 200) {

          const USER = {
            name: num,
            pass: pass,
            token: response.data.data.token,
          }
          
          dispatch(addToken(response.data.data.token));
          dispatch(addUser(USER));

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
                router.replace("./navigator/MainNavigator");
                setLoading(false);
              }, 3000);
            })
            .catch((error) => {
              console.error("Error storing token: ", error);
              setLoading(false);
            });
        } else {
          console.log("Error, Status code: ", response.status);
          setLoading(false);
        }
      })
      .catch((error) => {
        if (error.response) {
          console.error("Server Error:", error.response.data);
          console.error("Status Code:", error.response.status);
          console.error("Headers:", error.response.headers);
          setLoading(false);
        } else if (error.request) {
          console.error("No response received:", error.request);
          setLoading(false);
        } else {
          console.error("Request Error:", error.message);
          setLoading(false);
        }
      });
  };

  return (
    <View style={form.layout}>
      {loading ? (
        Keyboard.dismiss(),
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
          borderColor={"#ebebeb"}
          borderWidth={1}
          borderRadius={5}
          padding={10}
        >
          <AntDesign name="user" size={24} color={colors.primary} />
          <Separator vertical borderColor={"lightgray"} />
          <TextInput
            keyboardType="numeric"
            maxLength={11}
            style={{ padding: 0, flex: 1, fontFamily: "PoppinsRegular" }}
            placeholder="Enter Your Username"
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
          borderColor={"#ebebeb"}
          borderWidth={1}
          borderRadius={5}
          padding={10}
        >
          <AntDesign name="lock" size={24} color={colors.primary} />
          <Separator vertical borderColor={"lightgray"} />
          <TextInput
            style={{ padding: 0, flex: 1, fontFamily: "PoppinsRegular" }}
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
        style={[
          buttons.primaryBtn,
        ]}
      >
        <Text style={[fonts.subBold, FontColors.whiteFont]}>Login</Text>
      </TouchableOpacity>

      <View style={[RegLog.onPressStyle, { zIndex: -1000 }]}>
        <Text style={[{fontSize:fontSizes.SM, fontFamily:fontsFams.poppinsMedium ,color:colors.primary}]}>
          Don't have an account?
        </Text>
        <Link href="/RegisterScreen" asChild>
          <TouchableOpacity>
            <Text style={[{fontSize:fontSizes.SM, fontFamily:fontsFams.poppinsMedium ,color:colors.linkBlue}]}>Register</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};
export default FormLogin;
