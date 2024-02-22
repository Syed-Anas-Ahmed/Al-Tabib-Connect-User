import {
  Dimensions,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import dayjs from "dayjs";
import React, { useState } from "react";
import { FontColors, RegLog, btns, fonts, themeColors } from "../constants";
import { ALERT_TYPE, Dialog } from "react-native-alert-notification";
import * as SecureStore from "expo-secure-store";
import { Separator, XStack } from "tamagui";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import { YStack } from "tamagui";
import { DateType } from "react-native-ui-datepicker";
import DatePicker from "./DatePicker";
import GenderPick from "./GenderPick";
import axios from "axios";
import * as Progress from "react-native-progress";
import { buttons, colors } from "../styles";

const screenwidth = Dimensions.get("screen").width;

const Form = () => {
  const [loading, setLoading] = useState(false);
  const [num, setNum] = useState("03");
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [gender, setGender] = useState("");
  const [verifyPass, setverifyPass] = useState("");
  const [selectedDate, setSelectedDate] = useState<DateType>(dayjs());

  const isEmptyString = (str: string) => str.trim() === "";
  const validateNum = (num: string) => num.length >= 11;

  //Validation Metdods
  const emptyFields = (
    num: string,
    name: string,
    password: string,
    verifyPass: string,
    gender: string,
  ) => ![num, name, password, verifyPass, gender].some(isEmptyString);

  const validateSubmit = (
    num: string,
    name: string,
    password: string,
    verifyPass: string,
    gender: string,
  ) =>
    validateNum(num) &&
    emptyFields(num, name, password, verifyPass, gender) &&
    password === verifyPass;

  //Input Changing
  const handleNumChange = (text: string) => setNum(text);
  const handlePassChange = (text: string) => setPass(text);
  const handleVerifyPassChange = (text: string) => setverifyPass(text);
  const handleGenderChange = (selectedGender: string) =>
    setGender(selectedGender);
  const handleNameChange = (name: string) => setName(name);
  const handleDateChange = (date: DateType) => setSelectedDate(date);

  const handleSubmit = () => {
    if (!validateSubmit(num, name, pass, verifyPass, gender)) {
      Dialog.show({
        type: ALERT_TYPE.DANGER,
        title: "Error",
        textBody: "Please fill all details correctly",
        button: "Close",
      });
    } else {
      setLoading(true);
      fetchRegisterData();
    }
  };

  //Putting inputs in JSON format then encoding it and passing it to the axios
  const patient = {
    name: `${name}`,
    gender: `${gender}`,
    password: `${pass}`,
    cellNumber: `${num}`,
    dob: "1998-08-16",
  };

  const encodedPatient = encodeURIComponent(JSON.stringify(patient));

  //USE YOUR OWN URL!!
  const url = `http://192.168.100.48:8085`;
  const loginUrl = `${url}/registerPatient?patient=${encodedPatient}&uuid=123&type=2`;

  const fetchRegisterData = () => {
    axios
      .get(loginUrl)
      .then((response) => {
        if (response.status === 200) {
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
              }),
                2000;
            })
            .catch((error) => {
              console.error("Error storing token: ", error);
            });
          setLoading(false);
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
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <YStack
      justifyContent="center"
      borderRadius={10}
      padding={15}
      backgroundColor={"#f0f0f0"}
      gap={15}
      width={"100%"}
    >
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
      <XStack gap={10} backgroundColor={"white"} borderRadius={5} padding={10}>
        <AntDesign name="phone" size={24} color={colors.primary} />
        <Separator vertical borderColor={"lightgray"} />
        <TextInput
          style={{ padding: 0, flex: 1, fontFamily: "PoppinsRegular" }}
          placeholder="Enter Your Phone"
          keyboardType="phone-pad"
          maxLength={11}
          value={num}
          onChangeText={handleNumChange}
          placeholderTextColor="#808080a4"
          textContentType="telephoneNumber"
        />
      </XStack>
      <XStack gap={10} backgroundColor={"white"} borderRadius={5} padding={10}>
        <AntDesign name="user" size={24} color={colors.primary} />
        <Separator vertical borderColor={"lightgray"} />
        <TextInput
          style={{ padding: 0, flex: 1, fontFamily: "PoppinsRegular" }}
          placeholder="Enter Your Name"
          onChangeText={handleNameChange}
          placeholderTextColor="#808080a4"
          textContentType="name"
        />
      </XStack>
      <XStack
        zIndex={100}
        gap={10}
        backgroundColor={"white"}
        borderRadius={5}
        padding={10}
        alignItems="center"
      >
        <AntDesign name="calendar" size={24} color={colors.primary} />
        <Separator alignSelf="stretch" vertical borderColor={"lightgray"} />
        <DatePicker onDateChange={handleDateChange} />
      </XStack>
      <XStack
        zIndex={100}
        gap={10}
        backgroundColor={"white"}
        ai="center"
        borderRadius={5}
        padding={10}
      >
        <Ionicons name="male-female" size={24} color={colors.primary} />
        <Separator als={"stretch"} vertical borderColor={"lightgray"} />
        <GenderPick genvalue={gender} onGenderChange={handleGenderChange} />
      </XStack>
      <XStack gap={10} backgroundColor={"white"} borderRadius={5} padding={10}>
        <AntDesign name="lock" size={24} color={colors.primary} />
        <Separator vertical borderColor={"lightgray"} />
        <TextInput
          style={{
            padding: 0,
            flex: 1,
            fontFamily: "PoppinsRegular",
          }}
          placeholder="Choose Password"
          onChangeText={handlePassChange}
          placeholderTextColor="#808080a4"
          autoCapitalize="none"
          textContentType="password"
        />
      </XStack>
      <XStack gap={10} backgroundColor={"white"} borderRadius={5} padding={10}>
        <AntDesign name="lock" size={24} color={colors.primary} />
        <Separator vertical borderColor={"lightgray"} />
        <TextInput
          style={{
            padding: 0,
            flex: 1,
            fontFamily: "PoppinsRegular",
          }}
          onChangeText={handleVerifyPassChange}
          placeholder="Re-Enter Password"
          placeholderTextColor="#808080a4"
          autoCapitalize="none"
          textContentType="password"
        />
      </XStack>
      <TouchableOpacity onPress={handleSubmit} style={[buttons.primaryBtn]}>
        <Text style={[fonts.sub, FontColors.whiteFont]}>Register</Text>
      </TouchableOpacity>

      <View style={RegLog.onPressStyle}>
        <Text style={[fonts.normalBold, FontColors.primaryFont]}>
          Already have an account?
        </Text>
        <Link href="/LoginScreen" asChild>
          <TouchableOpacity>
            <Text style={[fonts.normalBold, FontColors.blue]}>Register</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </YStack>
  );
};
export default Form;
