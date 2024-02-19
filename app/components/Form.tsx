import { Modal, Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";
import dayjs from 'dayjs';
import React, { useState } from "react";
import {
  FontColors,
  RegLog,
  btns,
  dateModal,
  fonts,
  form,
  inputStyles,
  themeColors,
} from "../constants";
import { ALERT_TYPE, Dialog } from "react-native-alert-notification";
import { useNavigation } from "@react-navigation/native";
import * as SecureStore from "expo-secure-store";
import { Separator, Spinner, XStack } from "tamagui";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import { YStack} from "tamagui";
import { BlurView } from "expo-blur";
import DateTimePicker, { DateType } from "react-native-ui-datepicker";

const genders = [{ name: "Male" }, { name: "Female" }];

const Form = () => {
  const [val, setVal] = useState("Choose Gender");

  const navigation = useNavigation();
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
      <XStack>
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
            style={{ padding: 0, flex: 1, fontFamily: "PoppinsRegular" }}
            placeholder="Enter Your Phone"
            keyboardType="numeric"
            maxLength={11}
            onChangeText={handleNumChange}
            placeholderTextColor="#808080a4"
          />
        </XStack>
      </XStack>
      <XStack>
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
            style={{ padding: 0, flex: 1, fontFamily: "PoppinsRegular" }}
            placeholder="Enter Your Name"
            onChangeText={handlePassChange}
            placeholderTextColor="#808080a4"
            autoCapitalize="none"
            secureTextEntry={true}
          />
        </XStack>
      </XStack>
      <XStack>
        <XStack
          gap={10}
          backgroundColor={"white"}
          flex={1}
          borderRadius={5}
          padding={10}
        >
          <AntDesign name="calendar" size={24} color="#0ab99c" />
          <Separator vertical borderColor={"lightgray"} />
          <TouchableOpacity
            style={{
              padding: 10,
              alignItems: "center",
              flex: 1,
              backgroundColor: "#0ab99c",
              borderRadius: 7,
            }}
          >
            <Text style={[fonts.normalBold, FontColors.whiteFont]}>
              Choose date of Birth
            </Text>
          </TouchableOpacity>
        </XStack>
      </XStack>
      <XStack>
        <XStack
          gap={10}
          backgroundColor={"white"}
          flex={1}
          borderRadius={5}
          padding={10}
        >
          <Ionicons name="male-female" size={24} color="#0ab99c" />
          <Separator vertical borderColor={"lightgray"} />
          <YStack gap="$4">
            <XStack ai="center" gap="$4">
            <DatePicker onDateChange={()=>handleDateChange} />
            </XStack>
          </YStack>
        </XStack>
      </XStack>
      <XStack>
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
        {loading ? (
          <Spinner
            position="absolute"
            left={"35%"}
            size="small"
            color="#FFFFFF"
          />
        ) : null}
        <Text style={[fonts.subBold, FontColors.whiteFont]}>Login</Text>
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
    </View>
  );
};
export default Form;


interface DatePickerProps {
  onDateChange: (date: DateType) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ onDateChange }) => {
    const [datevalue, setdateValue] = useState<DateType>(dayjs());
    const [showModal, setShowModal] = useState(false);
    const [DateVisible, setDateVisible] = useState(false)

    const currDate = datevalue ? dayjs(datevalue).format("MMMM DD, YYYY") : "Choose your Date of Birth";

    const OpenModal = () => {
        setShowModal(!showModal);
        setDateVisible(true)
    }

    const handleDateChange = (date: DateType) => {
      setdateValue(date);
      onDateChange(date);
    };
        

  return (
    <View style={inputStyles.userField}>
      <TouchableOpacity
        style={dateModal.button}
        onPress={() => OpenModal()}
      >
        <Text style={[fonts.normal,FontColors.whiteFont]}>{DateVisible ? currDate:"Choose Date of Birth"}</Text>
      </TouchableOpacity>
      <Modal
        transparent={true}
        visible={showModal}
        animationType="fade"
        onRequestClose={() => setShowModal(false)}
      >
        <BlurView
          style={dateModal.modalBlurContainer}
          experimentalBlurMethod="dimezisBlurView"
        >
          <View style={dateModal.modalContainer}>
            <DateTimePicker
              selectedItemColor="#0ab99c"
              value={datevalue}
              locale={"en"}
              onValueChange={(date) => handleDateChange(date)}
              mode="date"
            />
            <View style={dateModal.footerContainer}>
              {/* Button to close modal */}
              <Pressable
                onPress={() => setShowModal(false)}
                style={dateModal.closeButton}
              >
                <Text style={dateModal.closeButtonText}>Close</Text>
              </Pressable>
            </View>
          </View>
        </BlurView>
      </Modal>
    </View>
  )
}

const handleDateChange = (date: DateType) => {
  setSelectedDate(date);
};

const [selectedDate, setSelectedDate] = useState<DateType>(dayjs());